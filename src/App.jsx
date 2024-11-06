import "./App.css";
import SingleView from "./components/SingleView/SingleView";

function App() {
  return (
    <div className="scrollable-div w-full h-screen overflow-x-auto overflow-y-hidden border border-gray-300 p-5">
      {/* Inner content will now force horizontal scrolling */}
      <div className="whitespace-nowrap">
        <div className="inline-block w-[400px] mx-3">
          <SingleView headerText={'Incomplete'} count={0} />
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
      </div>
    </div>
  );
}

export default App;
