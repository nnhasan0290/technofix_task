import { useEffect, useRef, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import Link from "../Link/Link";
import { ConsumeContext } from "../../utils/Context";
import {v4 as uuidv4} from 'uuid';

const Form = () => {
  const {state, dispatch} = ConsumeContext();

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const fileRef = useRef(null);
  const [fileContent, setFileContent] = useState(
    "https://via.placeholder.com/200"
  );

  const fileUpload = (e) => {
    const file = e.target.files[0];
    setFileContent();

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFileContent(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    formRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [showForm]);

  const onSubmit = (values) => {
    dispatch({type: "ADD_USER", payload: {id: uuidv4(),...values, image: fileContent}})
    reset();
    setFileContent("https://via.placeholder.com/200")
  };

  return (
    <div className="usrForm">
      <Link
        value={"+Add User"}
        onClick={() => {
          setShowForm(!showForm);
        }}
      />
      {showForm && (
        <form action="" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="avatar__area" onClick={() => fileRef.current.click()}>
            <img className="avatar__area__img" src={fileContent} alt="" />

            <input
              onChange={fileUpload}
              ref={fileRef}
              hidden
              type="file"
              name=""
              id=""
            />
          </div>
          <input
            className={`${errors.firstName && "red_border"}`}
            type="text"
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />
          <input
            className={`${errors.lastName && "red_border"}`}
            type="text"
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />
          <input
            className={`${errors.email && "red_border"}`}
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <input
            className={`${errors.address && "red_border"}`}
            type="text"
            {...register("address", { required: true })}
            placeholder="Address"
          />
          <input
            className={`${errors.company && "red_border"}`}
            type="text"
            {...register("company", { required: true })}
            placeholder="Company Name"
          />

          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};

export default Form;
