import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("This Field is required!!"),
  text: Yup.string().required("This Field is required!!"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "password must be 6 characters")
    .max(12, "password must be 12 characters"),
});
