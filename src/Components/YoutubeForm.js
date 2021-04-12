import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {

    const formik = useFormik({})

  return (
    <div>
      <form>
        <label htmlFor="name"> Name </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">E-Mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" id="channel" />

        <button
        // type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
