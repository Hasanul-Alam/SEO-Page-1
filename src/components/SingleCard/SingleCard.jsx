import { FaLayerGroup } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./SingleCard.css";
import axios from "axios";

export default function SingleCard({ data, heading, fetchData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [formData, setFormData] = useState({
    file: null,
  });
  // Reference for file input to clear it
  const fileInputRef = useRef(null);

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, files } = e.target;
    if (name === "file") {
      setFormData((prevData) => ({
        ...prevData,
        file: files[0],
      }));
    }
  };

  // Function to handle post data
  const postData = (item, newData) => {
    console.log(item);
    console.log(newData);
    const { _id, ...newItem } = item;
    console.log(_id)
    const updatedData = {
      ...newItem,
      attachments: [...item.attachments, { name: newData }],
    };
    console.log(updatedData)
    if (updatedData) {
      axios
        .patch(`https://seo-page-1-server-h6ol.onrender.com/all-data/${item._id}`, updatedData)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            alert("Attachment Uploaded Successfully");
            fetchData();
          }
        });
    }
  };

  // Function to open/close modal
  const toggleModal = (item = []) => {
    setIsOpen(!isOpen);
    setSelectedItem(item);
  };

  // Function to handle form submission
  const handleSubmit = (item) => {
    // console.log(formData.file.name);
    postData(item, formData.file.name);

    // Reset form data and clear file input
    setFormData({
      file: null,
    });

    // Clear file input manually
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }

    toggleModal(); // Close the modal after submission
  };
  return (
    <div className="">
      <div className="scrollbar bg-slate-100 w-[400px] h-screen overflow-y-auto overflow-x-hidden">
        <div className="flex justify-between w-[350px] mx-auto mt-5">
          <h2 className="text-lg font-semibold">{heading}</h2>
          <p className="font-semibold">{data.length}</p>
        </div>

        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-lg w-[385px] mx-auto mt-5 py-8"
          >
            {/* Client & Collaborator Name & Details */}
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/7kVs2rF/DALL-E-2024-11-06-19-59-40-A-portrait-of-a-person-with-equal-height-and-width-centered-in-a-vibrant.webp"
                  alt="Client Image"
                />
                <p className="text-sm">Client Name</p>
              </div>
              <div className="flex gap-1 items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/3fK9vhj/DALL-E-2024-11-06-22-02-58-A-portrait-of-a-person-with-a-simple-neutral-expression-The-person-s-face.webp"
                  alt="Client Image"
                />
                <p className="text-sm">Sadik Istiak</p>
              </div>
            </div>
            {/* Middle Section */}
            <div className="flex justify-between items-center my-3">
              <div className="flex items-center gap-1">
                <FaLayerGroup />
                <p className="text-sm">Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="flex items-center gap-1 bg-slate-300 p-1 rounded">
                <FaClipboardList />
                <p className="text-sm">1/2</p>
              </div>
            </div>
            {/* Bottom Section */}
            <div className="flex justify-between items-center">
              <div>
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/nb49ZB1/DALL-E-2024-11-06-22-28-35-A-person-with-a-friendly-expression-and-a-neutral-pose-featuring-a-visibl.webp"
                  alt="Client Image"
                />
              </div>
              <div>
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src="https://i.ibb.co/3fK9vhj/DALL-E-2024-11-06-22-02-58-A-portrait-of-a-person-with-a-simple-neutral-expression-The-person-s-face.webp"
                  alt="Client Image"
                />
              </div>
              <div>
                <p className="bg-slate-300 p-1 rounded-full">12+</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegComments />
                <p className="text-sm">15</p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => toggleModal(item)}>
                  <FaPaperclip />
                </button>
                <p className="text-sm">{item.attachments.length}</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <p className="text-sm">25-02-2024</p>
              </div>
            </div>
          </div>
        ))}

        {/* Card */}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[800px]">
            <h2 className="text-lg font-bold mb-4">Attach File</h2>

            <div className="flex">
              {/* Form Section */}
              <form
                onSubmit={() => handleSubmit(selectedItem)}
                className="w-1/2 pr-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700">Upload File:</label>
                  <input
                    type="file"
                    name="file"
                    ref={fileInputRef}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* List Section */}
              <div className="w-[700px] overflow-auto pl-4 border-l border-gray-300">
                <h3 className="text-md font-semibold mb-2">List of Attachments</h3>
                <ul className="list-disc pl-5">
                  {selectedItem.attachments.map((item, index) => (
                    <li key={index} className="mb-2">
                      <p>
                      {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// Define prop types
SingleCard.propTypes = {
  data: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired
};
