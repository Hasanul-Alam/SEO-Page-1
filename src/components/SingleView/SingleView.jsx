import PropTypes from "prop-types";
import "./SingleView.css";
import SingleCard from "../SingleCard/SingleCard";

export default function SingleView({ headerText, count }) {
  return (
    <div className="scrollbar bg-slate-100 w-[400px] h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex justify-between w-[350px] mx-auto mt-5">
        <h2 className="text-lg font-semibold">{headerText}</h2>
        <p className="font-semibold">{count}</p>
      </div>
      {/* Cards */}
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
}
// Adding prop validation
SingleView.propTypes = {
  headerText: PropTypes.string.isRequired, // headerText is required and should be a string
  count: PropTypes.number.isRequired, // count is required and should be a number
};
