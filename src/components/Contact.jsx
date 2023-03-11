import React from "react";
import { useFormik } from "formik";
import { IMG_CLOUD_URL } from "../Constants";
import ContactImage from "../assets/img/contactus.png";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="contact">
      <img src={ContactImage} />
      <form onSubmit={formik.handleSubmit} className="card contact-form">
        <h2>Contact Us!</h2>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@gmail.com"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <textarea
          id="message"
          name="message"
          type="text"
          rows={3}
          placeholder="Hey! really liked the service..."
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />

        {formik.errors.message ? <div>{formik.errors.message}</div> : null}
        <button type="submit" className="nav-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
