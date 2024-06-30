import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const preson = { name: "", age: 0 };

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handelSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log("submit");
  //   // if (nameRef.current !== null) {
  //   //   preson.name = nameRef.current.value;
  //   // }
  //   // if (ageRef.current !== null) {
  //   //   preson.age = parseInt(ageRef.current.value);
  //   // }
  //   // console.log(preson);
  //   console.log(person);
  // };

  // const form = useForm();
  // console.log(form);

  interface FormData {
    name: string;
    age: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // console.log(register("name"));
  console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    // <form onSubmit={handelSubmit}>
    //   <div className="mb-3">
    //     <label htmlFor="name" className="form-lable">
    //       Name
    //     </label>
    //     <input ref={nameRef} id="name" type="text" className="form-control" />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="age" className="form-label">
    //       Age
    //     </label>
    //     <input ref={ageRef} id="age" type="number" className="form-control" />
    //   </div>
    //   <button className="btn btn-primary" type="submit">
    //     Submit
    //   </button>
    // </form>
    // <form onSubmit={handelSubmit}>
    //   <div className="mb-3">
    //     <label htmlFor="name" className="form-lable">
    //       Name
    //     </label>
    //     <input
    //       value={person.name}
    //       onChange={(event) =>
    //         setPerson({ ...person, name: event.target.value })
    //       }
    //       id="name"
    //       type="text"
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="age" className="form-label">
    //       Age
    //     </label>
    //     <input
    //       value={person.age}
    //       onChange={(event) =>
    //         setPerson({ ...person, age: event.target.value })
    //       }
    //       id="age"
    //       type="number"
    //       className="form-control"
    //     />
    //   </div>
    //   <button className="btn btn-primary" type="submit">
    //     Submit
    //   </button>
    // </form>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">required value</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">min length of 3</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
