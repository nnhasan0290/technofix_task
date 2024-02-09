import "./Form.css";

const Form = () => {
  return (
    <div className="usrForm">
      <button className="add__user"> + ADD USER</button>
      <form action="">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <div className="avatar__area">
          <label htmlFor="">Avatar</label>
          <input type="file" name="" id="" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
