/** @format */

import React, { useState } from "react";
import { withAlert } from "react-alert";
import { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import "../../assets/styles/components/auth.scss";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  return (
    <main className="container position-relative overflow-scroll d-md-center">
      <div className="row no-gutters vh-md-max">
        <div className="col-12 col-md-6 col-xl-7 vh-md-max px-4 px-sm-5 pr-lg-0 pr-xl-5 mt-5 mt-md-0 pt-5 pt-md-0 d-center">
          <div className="position-absolute containerless app-logo d-flex w-100">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610278781/cbtor/Logo.svg"
              alt="logo"
              className="app-logo__img"
            />
          </div>
          <div className="col-9 col-md-8 col-xl-6 mt-3 mt-md-0">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610284000/cbtor/mail.svg"
              alt="student"
              className="img-fluid"
            />
          </div>
        </div>
        <section className="col-12 col-md-6 col-xl-5 pl-md-0 vh-md-max overflow-scroll">
          <div className="w-100 pr-xl-5 d-flex flex-column d-center py-5">
            <h4 className="font-weight-bolder mb-1 mb-md-2 w-auth text-center text-md-left">
              Reset your password
            </h4>
            <h6 className="text-dark-50 font-weight-regular border-bottom-success mb-2 pb-2 pb-xl-3 w-auth text-center text-md-left">
              Enter new preferred password in the field below. Please confirm
              your new password before you continue.
            </h6>
            <div>
              <label htmlFor="email" className="p text-dark-50 d-block">
                New password*
              </label>
              <InputPassword
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="btn-primary btn-submit mt-4" type="submit">
              Reset Password
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default withAlert()(ResetPassword);
