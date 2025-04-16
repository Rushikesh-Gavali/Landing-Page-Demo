import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully");
    console.log(data);
    reset();
  };

  return (
    <>
      <h1 className="demo-heading">
        Book Your Demo with Our Experts Now (limited free slots per day)
      </h1>
      <form className="demo-form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Full Name"
              className="form-input"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Full name must be at most 50 characters",
                },
              })}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>

          <div className="input-wrapper">
            <div className="phone-input">
              <span className="country-code">+91</span>
              <input
                type="tel"
                placeholder="Contact Number"
                className="form-input phone-field"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number must be exactly 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number must be exactly 10 digits",
                  },
                })}
              />
            </div>
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="input-wrapper">
            <select
              className="form-input select-field"
              defaultValue=""
              {...register("category", {
                required: "Please select a category",
              })}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="one-to-one">One to One Session</option>
            </select>
            {errors.category && (
              <p className="error">{errors.category.message}</p>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              value="One to One Session"
              className="form-input"
              disabled
            />
          </div>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must agree to the terms",
              })}
            />
            <span>
              I have read and agree to FlexifyMe's Terms of Use and Privacy
              Policy
            </span>
          </label>
          {errors.terms && (
            <p className="error alert">{errors.terms.message}</p>
          )}

          <label className="checkbox-label">
            <input
              type="checkbox"
              {...register("authorization", {
                required: "Authorization is required",
              })}
            />
            <span>
              I authorize FlexifyMe to contact me. It will override my registry
              on the NCPR.
            </span>
          </label>
          {errors.authorization && (
            <p className="error alert">{errors.authorization.message}</p>
          )}
        </div>

        <div className="button-wrapper">
          <button type="submit" className="info-button">
            Book Your Demo for <span className="strikethrough">₹299</span> Free
            Now
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
