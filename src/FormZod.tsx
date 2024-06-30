import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const FormZod = () => {
  const schema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Must be 3 len" }),
    age: z
      .number({ invalid_type_error: "Age must be a number" })
      .min(18, { message: "Age should be greater 18" }),
  });

  type Person = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<Person>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log("submit: ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
          onBlur={() => trigger("name")}
        />
        {errors?.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors?.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submint
      </button>
    </form>
  );
};

export default FormZod;
