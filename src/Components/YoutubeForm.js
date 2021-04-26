import React, { useState, useEffect } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
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
  phNumbers: [""],
};
const savedValues = {
  name: "Nihal shan",
  email: "n@gmail.com",
  channel: "nihal",
  comments: "hello",
  address: "pattathil, nadapuram, kerala",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: [],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProp) => {
  console.log("form data", values);
  console.log("on submitt prop", onSubmitProp);
  onSubmitProp.setSubmitting(false);
  onSubmitProp.resetForm()
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invaid email format").required("Required"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  // comments: Yup.string().required("Required")
});

const validateComments = (value) => {
  const error = !value ? "Required" : null;
  return error;
};

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  // useEffect(() => {
  //   setFormValues(savedValues)
  // }, [])
  return (
    <div>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnMount
        enableReinitialize
      >
        {(formik) => {
          console.log("Formik prop", formik);
          return (
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
                <Field
                  id="comments"
                  name="comments"
                  as="textarea"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="address">
                  Address <span className="star">*</span>
                </label>
                <FastField name="address">
                  {(props) => {
                    console.log("field render");
                    const {
                      field,
                      // form,
                      meta,
                    } = props;
                    return (
                      <div>
                        <input id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div className="error">{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
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
              <div className="form-control">
                <label htmlFor="">List of phone Numbers</label>
                <FieldArray name="phNumbers">
                  {({ push, remove, form }) => {
                    // console.log("field array prop", fieldArrayProp)
                    console.log("Form errors", form.errors);
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phnumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              {/* <div>
                <button
                  type="button"
                  onClick={() => formik.validateField("comments")}
                >
                  Validate comments
                </button>
              </div>
              <div>
                <button type="button" onClick={() => formik.validateForm()}>
                  Validate all
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => formik.setFieldTouched("comments")}
                >
                  Visit comments
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    formik.setTouched({
                      name: true,
                      email: true,
                      channel: true,
                      comments: true,
                    })
                  }
                >
                  Visit all
                </button>
              </div> */}
              <div>
                <button type="button" onClick={() => setFormValues(savedValues)} >Load data</button>
              </div>
              <div>
                <button type="reset">Reset</button>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={
                    !formik.dirty && !formik.isValid || formik.isSubmitting
                  }
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default YoutubeForm;
