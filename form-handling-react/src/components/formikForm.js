import React from "react";
import { useFormik, Field, ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be greater than 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password mismatch")
      .required("Confirm Password is required"),
  });

  return React.createElement(
    Formik,
    {
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
        console.log("Form submitted successfully:", values);
      },
    },
    (formikProps) =>
      React.createElement(
        "form",
        {
          onSubmit: formikProps.handleSubmit,
          className:
            "flex flex-col gap-4 p-8 rounded-lg shadow-lg bg-white w-full max-w-md",
        },
        // Username
        React.createElement(
          "div",
          { className: "flex flex-col" },
          React.createElement(
            "label",
            { htmlFor: "username", className: "font-bold" },
            "Name:"
          ),
          React.createElement(Field, {
            type: "text",
            id: "username",
            name: "username",
            className: "border p-2 rounded w-full",
          }),
          React.createElement(ErrorMessage, {
            name: "username",
            component: "span",
            className: "text-red-500 text-sm",
          })
        ),
        // Email
        React.createElement(
          "div",
          { className: "flex flex-col" },
          React.createElement(
            "label",
            { htmlFor: "email", className: "font-bold" },
            "Email:"
          ),
          React.createElement(Field, {
            type: "email",
            id: "email",
            name: "email",
            className: "border p-2 rounded w-full",
          }),
          React.createElement(ErrorMessage, {
            name: "email",
            component: "span",
            className: "text-red-500 text-sm",
          })
        ),
        // Password
        React.createElement(
          "div",
          { className: "flex flex-col" },
          React.createElement(
            "label",
            { htmlFor: "password", className: "font-bold" },
            "Password:"
          ),
          React.createElement(Field, {
            type: "password",
            id: "password",
            name: "password",
            className: "border p-2 rounded w-full",
          }),
          React.createElement(ErrorMessage, {
            name: "password",
            component: "span",
            className: "text-red-500 text-sm",
          })
        ),
        // Confirm Password
        React.createElement(
          "div",
          { className: "flex flex-col" },
          React.createElement(
            "label",
            { htmlFor: "confirmPassword", className: "font-bold" },
            "Confirm Password:"
          ),
          React.createElement(Field, {
            type: "password",
            id: "confirmPassword",
            name: "confirmPassword",
            className: "border p-2 rounded w-full",
          }),
          React.createElement(ErrorMessage, {
            name: "confirmPassword",
            component: "span",
            className: "text-red-500 text-sm",
          })
        ),
        // Submit button
        React.createElement(
          "button",
          {
            type: "submit",
            className: "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold",
          },
          "Register"
        )
      )
  );
}

export default FormikForm;