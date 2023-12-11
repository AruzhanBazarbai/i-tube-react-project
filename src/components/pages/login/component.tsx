import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button, H1, Input, NavLink, P } from "../../atoms";
import { UserProps } from "../../../common";

type InputFields = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserProps[]>([]);

  const schema = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputFields>({ resolver: yupResolver(schema) });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (dataForm: InputFields) => {
    setIsLoading(true);
    console.log("Submitting");
    if (users.length > 0) {
      const isFindData = users.find(
        (el) => el.email === dataForm.email && el.password === dataForm.password,
      );
      if (isFindData) {
        toast.success("You have successfully logged in!")
        localStorage.setItem("currentUser", JSON.stringify(isFindData));
        navigate("/");
      } else {
        toast.error("An unsuccessful authorization attempt. Please try again or sign up!");
        // navigate("/sign-up");
      }
      reset();
    }
    setIsLoading(false);
  };
  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/users")
        .then((r) => r.json())
        .then((res) => setUsers(res));
    })();
  }, []);

  return (
    <section className="container login-page">
      <form onSubmit={handleSubmit(onSubmit)} className="col-3 mx-auto" autoComplete="off">
        <H1 fontSize="30px" lineHeight="36px" fontWeight={700} className="mb-5 text-center">
          Log in
        </H1>
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
            Password
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
        <Button type="submit" borderRadius="10px" disabled={isLoading} className="mt-4 mb-5 w-100">
          Log in
        </Button>
        <P fontSize="14px" lineHeight="17px" className="text-center mt-n3">
          Don&apos;t have an account yet?{" "}
          <NavLink
            fontSize="14px"
            lineHeight="17px"
            fontWeight={600}
            href="/sign-up"
            className="link"
          >
            Sign Up
          </NavLink>
        </P>
      </form>
    </section>
  );
};
