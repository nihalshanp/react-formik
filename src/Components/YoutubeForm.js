import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "Nihal shan",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  // values.name values.email values.cahannel
  // errors.name errors.email errors.channel
  // errors.name = "This is required"
  let errors = {};
  errors.name = !values.name ? "Required" : "";
  errors.email = !values.email
    ? "Required"
    : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ? "Invalid email address"
    : "";
  errors.channel = !values.channel ? "Required" : "";

  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Visited fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Name <span className="star">*</span> </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <div className="error">{formik.touched.name && formik.errors.name ? formik.errors.name : null}</div>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-Mail <span className="star">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel <span className="star">*</span></label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
