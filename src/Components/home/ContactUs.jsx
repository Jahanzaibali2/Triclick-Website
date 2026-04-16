import React, { memo, useState } from "react";
import "../../Styles/Home.css";

const INITIAL_VALUES = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const ContactUs = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please tell us about your project.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setValues(INITIAL_VALUES);
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <h2 className="contact-title" id="contact-title">
        Let&apos;s Build Something That Clicks
      </h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">
          Your Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
            autoComplete="name"
          />
          {errors.name ? <span className="error-msg">{errors.name}</span> : null}
        </label>

        <label htmlFor="email">
          Email Address
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
            autoComplete="email"
          />
          {errors.email ? <span className="error-msg">{errors.email}</span> : null}
        </label>

        <label htmlFor="company">
          Company Name
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your brand or company"
            value={values.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </label>

        <label htmlFor="message">
          Project Brief
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what you want to create"
            value={values.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          />
          {errors.message ? <span className="error-msg">{errors.message}</span> : null}
        </label>

        <button className="contact-btn" type="submit">
          Send Inquiry
        </button>

        {submitted ? (
          <p className="contact-status" role="status">
            Thanks. Your message is ready and the form validation is working.
          </p>
        ) : null}
      </form>
    </section>
  );
};

export default memo(ContactUs);
