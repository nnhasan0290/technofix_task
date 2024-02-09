import "./Heading.css";

const Heading = () => {
  return (
    <div className="heading">
      <div className="heading__sort">
        <h4>SORT:</h4>
        <select name="" id="">
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
        </select>
      </div>
      <form className="heading_form">
        <input placeholder="SEARCH" className="text" type="text" />
        <input className="submit" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Heading;
