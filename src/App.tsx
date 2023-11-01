import "./App.css";
import { useFormik } from "formik";
import { validationSchema } from "./utils/validation-schema";
import { Input } from "./components";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      text: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values.email, values.password, values.name);
    },
  });

  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    formik;

  return (
    <div className="App">
      <h1>Formik Validation</h1>
      <form style={form} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={"Enter your email"}
        />
        {errors.email && touched.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
        <Input
          type="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        {errors.password && touched.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
        <Input
          type="name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && touched.name && (
          <p style={{ color: "red" }}>{errors.name}</p>
        )}

        <textarea
          name="text"
          value={values.text}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your text"
        ></textarea>
        {errors.text && touched.text && (
          <p style={{ color: "red" }}>{errors.text}</p>
        )}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;

const form = {
  width: 200,
  height: "auto",
  backgroundColor: "gray",
};
