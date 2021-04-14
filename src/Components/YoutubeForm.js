import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Nihal shan",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invaid email format").required("Required"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const YoutubeForm = () => {
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
            <Field type="text" name="name" id="name" />
            <div className="error">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="email">
              E-Mail <span className="star">*</span>
            </label>
            <Field name="email" id="email" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="channel">
              Channel <span className="star">*</span>
            </label>
            <Field type="text" name="channel" id="channel" />
            <div className="error">
              <ErrorMessage name="channel" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field id="comments" name="comments" as="textarea" />
          </div>
          <div className="form-control">
            <label htmlFor="address">
              Address <span className="star">*</span>
            </label>
            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default YoutubeForm;
