import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Nihal shan",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invaid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
  console.log("Visited fields", formik.touched);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name">
              Name <span className="star">*</span>{" "}
            </label>
            <Field
              type="text"
              name="name"
              id="name"
            />
            <div className="error">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : null}
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="email">
              E-Mail <span className="star">*</span>
            </label>
            <Field
              type="email"
              name="email"
              id="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="channel">
              Channel <span className="star">*</span>
            </label>
            <Field
              type="text"
              name="channel"
              id="channel"
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default YoutubeForm;
