import React, { useState } from "react";

import { FieldValues, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const FormSelect = () => {
  const VALUES = ["Salmon", "Tuna", "Trout"] as const;

  const schema = z.object({
    description: z
      .string({
        required_error: "Name is required",
      })
      .min(0, { message: "Must be 3 len" }),
    amount: z
      .number({ invalid_type_error: "Age must be a number" })
      .min(0, { message: "Age should be greater 18" }),
    category: z.enum(VALUES, {
      errorMap: () => ({ message: "required" }),
    }),
  });

  type Person = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>({ resolver: zodResolver(schema) });

  const [allData, setAllData] = useState<Person[]>([]);

  const onSubmit = (data: Person) => {
    console.log("submit: ", data);
    setAllData([...allData, data]);
    reset();
  };

  const [selectData, setSelectData] = useState("");

  const listData =
    selectData.length > 0
      ? allData.filter((item) => item.category === selectData)
      : allData;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors?.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors?.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categroy
          </label>
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            {...register("category")}
          >
            <option value=""></option>
            {VALUES.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors?.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Submint
          </button>
        </div>
      </form>

      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Default select example2"
          onChange={(event) => setSelectData(event.target.value)}
        >
          <option key={-1} value={""}>
            All categories
          </option>
          {VALUES.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Desc</th>
            <th>Amout</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>
                    setAllData(
                      allData.filter((_, inindex) => index !== inindex)
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Toatal</td>
            <td>{listData.reduce((acc, item) => item.amount + acc, 0)} </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default FormSelect;
