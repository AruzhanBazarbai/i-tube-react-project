import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { Button, H1, Input, NavLink, P } from "../../atoms";
// import { registration } from "../../../api";

type InputFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp: React.FC = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("This field is required")
      .min(1, "At least 1 character")
      .max(30, "No more than 30 characters")
      .matches(/^[a-zA-Zа-яА-ЯёЁ]*$/, "Must not contain spaces, special characters and numbers"),
    email: yup
      .string()
      .email("Incorrect email format")
      .required("This field is required")
      .matches(
        /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z][a-zA-Z]*[a-zA-Z]\.[a-zA-Z]{2,}$/,
        "Invalid email",
      )
      .trim(),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "At least 8 characters")
      .max(30, "No more than 30 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Enter the password again"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputFields>({ resolver: yupResolver(schema) });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (dataForm: InputFields) => {
    console.log("Submitting");
    console.log(dataForm);
    // const { data } = await registration(dataForm.email, dataForm.name);
    // console.log(JSON.parse(data));
    reset();
  };
  useEffect(() => {
    // const f = async () => {
    //   const { data } = await registration("Aruzhan", "123123123");
    //   console.log(data);
    // };
    // f();
    // register({}, { required: true });
  }, []);

  return (
    <section className="container login-page">
      <form onSubmit={handleSubmit(onSubmit)} className="col-3 mx-auto" autoComplete="off">
        <H1 fontSize="30px" lineHeight="36px" fontWeight={700} className="mb-5 text-center">
          Sign up
        </H1>
        <div className="w-100 mb-3">
          <label htmlFor="name" className={classNames(["label d-block mb-2"])}>
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Full name"
            registerTemplate={register("name")}
            className={classNames(["col-12"])}
          />
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="w-100 mb-3">
          <label htmlFor="email" className={classNames(["label d-block mb-2"])}>
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className={classNames(["w-full"])}
            registerTemplate={register("email")}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="password position-relative w-100 mb-3">
          <label htmlFor="password" className={classNames(["label d-block mb-2"])}>
            Create a password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            registerTemplate={register("password")}
          />
          <span />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="password position-relative w-100 mb-3">
          <label htmlFor="confirmPassword" className={classNames(["label d-block mb-2"])}>
            Confirm a password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Password"
            registerTemplate={register("confirmPassword")}
          />
          <span />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>
        <Button type="submit" borderRadius="10px" disabled={isLoading} className="mt-4 mb-5 w-100">
          Sign Up
        </Button>
        <P fontSize="14px" lineHeight="17px" className="text-center mt-n3">
          Already have an account?{" "}
          <NavLink
            fontSize="14px"
            lineHeight="17px"
            fontWeight={600}
            href="/login"
            className="link"
          >
            Log in
          </NavLink>
        </P>
      </form>
    </section>
  );
};
