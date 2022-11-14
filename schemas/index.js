import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Please provide a name"),
  email: yup
    .string()
    .required("Please provide an email")
    .email("Invalid email format"),
  password: yup.string().required("Please provide a password"),
  confirmPassword: yup
    .string()
    .required("Confirm the password")
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
  contact: yup.string().required("Please provide a contact"),
  isAdm: yup.bool(),
});

export const updateUserSchema = yup.object().shape({
  name: yup.string(),
  contact: yup.string(),
});
