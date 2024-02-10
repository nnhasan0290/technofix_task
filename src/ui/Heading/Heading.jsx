import { ConsumeContext } from "../../utils/Context";
import "./Heading.css";

const Heading = () => {
  const {dispatch, state} = ConsumeContext();
  console.log(state);

  return (
    <div className="heading">
      <div className="heading__sort">
        <h4>SORT:</h4>
        <select onChange={(event) => {
          dispatch({type: "SORT", payload: event.target.value})
        }} name="" id="">
          <option>-----</option>
          <option value="firstName">Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <form className="heading_form">
        <input  onChange={(event) => dispatch({type: "SEARCH", payload: event.target.value})} placeholder="SEARCH" className="text" type="search" />
        <button className="search__btn">SEARCH</button>
      </form>
    </div>
  );
};

export default Heading;
