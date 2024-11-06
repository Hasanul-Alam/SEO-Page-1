import { FaLayerGroup } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function SingleCard() {
  return (
    <>
      {/* Card */}
      <div className="bg-white p-6 rounded-lg w-[385px] mx-auto mt-5 py-8">
        {/* Client & Collaborator Name & Details */}
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://i.ibb.co.com/7kVs2rF/DALL-E-2024-11-06-19-59-40-A-portrait-of-a-person-with-equal-height-and-width-centered-in-a-vibrant.webp"
              alt="Client Image"
            />
            <p className="text-sm">Client Name</p>
          </div>
          <div className="flex gap-1 items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://i.ibb.co.com/3fK9vhj/DALL-E-2024-11-06-22-02-58-A-portrait-of-a-person-with-a-simple-neutral-expression-The-person-s-face.webp"
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
              src="https://i.ibb.co.com/7kVs2rF/DALL-E-2024-11-06-19-59-40-A-portrait-of-a-person-with-equal-height-and-width-centered-in-a-vibrant.webp"
              alt="Client Image"
            />
          </div>
          <div>
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://i.ibb.co.com/3fK9vhj/DALL-E-2024-11-06-22-02-58-A-portrait-of-a-person-with-a-simple-neutral-expression-The-person-s-face.webp"
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
            <FaPaperclip />
            <p className="text-sm">25</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt />
            <p className="text-sm">30-12-2022</p>
          </div>
        </div>
      </div>
    </>
  );
}
