import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard/SingleCard";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../public/fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const incomplete = [];
  const completed = [];
  const underReview = [];
  const overLoad = [];
  const todo = [];
  const doing = [];
  const makeIncompleteData = async (data) => {
    await data.map((item) => {
      // console.log(item)
      if (item.category === "Incomplete") {
        incomplete.push(item);
      }
      else if(item.category === "Completed"){
        completed.push(item);
      }
      else if(item.category === "Under Review"){
        underReview.push(item);
      }
      else if(item.category === "Overload"){
        overLoad.push(item);
      }
      else if(item.category === "Todo"){
        todo.push(item);
      }
      else{
        doing.push(item);
      }
    });
  };
  makeIncompleteData(data);
  return (
    <div className="scrollable-div w-full h-screen overflow-x-auto overflow-y-hidden border border-gray-300 p-5">
      {/* Inner content will now force horizontal scrolling */}
      {/* <div className="whitespace-nowrap">
        <div className="inline-block w-[400px] mx-3">
          <SingleView data={incomplete} headerText={'Incomplete'} count={0} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleView headerText={'To Do'} count={0} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleView headerText={'Doing'} count={0} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleView headerText={'Under Review'} count={0} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleView headerText={'Completed'} count={0} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleView headerText={'Overload'} count={0} />
        </div>
      </div> */}
      <div className="whitespace-nowrap">
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={incomplete} heading={"Incomplete"} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={todo} heading={"Todo"} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={doing} heading={"Doing"} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={underReview} heading={"Under Review"} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={completed} heading={"Completed"} />
        </div>
        <div className="inline-block w-[400px] mx-3">
          <SingleCard data={overLoad} heading={"Over Load"} />
        </div>
      </div>
    </div>
  );
}

export default App;
