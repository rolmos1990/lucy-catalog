import React, { useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState(false);
  const passwordHandler = () => setPassword(!password);

  return (
    <form>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input type="email" placeholder="rshdkabir@gmail.com" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={password ? "password text" : "password"}
              placeholder="Enter Password"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon">
              <span
                className={password ? "passVicon eye-slash" : "passVicon"}
                onClick={passwordHandler}
              >
                <img
                  src={
                    require("../../../assets/images/icon/icon_67.svg").default
                  }
                  alt="icon"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="#">Forget Password?</a>
          </div>
          {/* <!-- /.agreement-checkbox --> */}
        </div>

        <div className="col-12">
          <button className="theme-btn-one w-100 mt-50 mb-50">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
