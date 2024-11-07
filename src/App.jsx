import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard/SingleCard";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://seo-page-1-server-h6ol.onrender.com/all-data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const incomplete = [];
  const completed = [];
  const underReview = [];
  const overLoad = [];
  const todo = [];
  const doing = [];
  const categorizeData = async (data) => {
    await data.map((item) => {
      // console.log(item)
      if (item.category === "Incomplete") {
        incomplete.push(item);
      } else if (item.category === "Completed") {
        completed.push(item);
      } else if (item.category === "Under Review") {
        underReview.push(item);
      } else if (item.category === "Overload") {
        overLoad.push(item);
      } else if (item.category === "Todo") {
        todo.push(item);
      } else {
        doing.push(item);
      }
    });
  };
  categorizeData(data);
  return (
    <div className="scrollable-div w-full h-screen overflow-x-auto overflow-y-hidden border border-gray-300 p-5">
      <div className="whitespace-nowrap">
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={incomplete} heading={"Incomplete"} fetchData={fetchData} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={todo} heading={"Todo"} fetchData={fetchData} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={doing} heading={"Doing"} fetchData={fetchData} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={underReview} heading={"Under Review"} fetchData={fetchData} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={completed} heading={"Completed"} fetchData={fetchData} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={overLoad} heading={"Over Load"} fetchData={fetchData} />
        </div>
      </div>
    </div>
  );
}

export default App;
