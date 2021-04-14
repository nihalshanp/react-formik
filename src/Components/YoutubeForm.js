import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "Nihal shan",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: [],
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
            <ErrorMessage name="email">
              {(errorMsg) => {
                return <div className="error"> {errorMsg} </div>;
              }}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="channel">
              Channel <span className="star">*</span>
            </label>
            <Field type="text" name="channel" id="channel" />
            <ErrorMessage name="channel" component={TextError} />
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
          <div className="form-control">
            <label htmlFor="facebook">Facebook</label>
            <Field type="text" id="facebook" name="social.facebook" />
          </div>
          <div className="form-control">
            <label htmlFor="twitter">Twitter</label>
            <Field type="text" id="twitter" name="social.twitter" />
          </div>

          <div className="form-control">
            <label htmlFor="primaryPh">Primary Phone Number</label>
            <Field type="number" id="primaryPh" name="phoneNumber[0]" />
          </div>
          <div className="form-control">
            <label htmlFor="secondaryPh">Secondary Phone Number</label>
            <Field type="number" id="secondaryPh" name="phoneNumber[1]" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default YoutubeForm;
