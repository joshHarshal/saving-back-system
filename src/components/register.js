import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Creating schema

// axios.create({
//   baseURL: "http://localhost:3000",
// });

const LOGIN_URL = "http://localhost:3000/login";

const onsubmit = async (values) => {
  // Alert the input values of the form that we filled
  console.log(values);

  try {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({
        user: { email: values.email, password: values.password },
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response?.data);
  } catch (error) {
    if (!error?.response) {
      console.log("no server response");
    } else if (error.response?.status === 400) {
      console.log("missing username and password 400 error");
    } else if (error.response?.status === 401) {
      console.log("unauthorized 401 error");
    } else {
      console.log("login failed");
    }
  }
};
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onsubmit}
      >
        {({ values, errors, touched }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <Form>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </Form>
              {/* <p>Need an Account?</p>
              put router link here
              <a href="#">Sign Up</a> */}
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Register;
