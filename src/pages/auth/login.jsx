import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }



  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    {/* <img src="../../images/logo.svg" alt="logo" /> */}
                  </div>
                  <h4>Hello! </h4>
                  <h4>Welcome back to Shri Ram Selection</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form onSubmit={handleSubmit} className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="customer_email"
                        placeholder="Email"
                        value={inputs.customer_email || ""} 
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="customer_password"
                        value={inputs.customer_password || ""} 
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-3">
                      <Link
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        to="/"
                      >
                        SIGN IN
                      </Link>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <Link to="/" className="auth-link text-black">
                        Forgot password?
                      </Link>
                    </div>
                    {/* <div className="mb-2">
                      <button
                        type="button"
                        className="btn btn-block btn-google auth-form-btn"
                      >
                        <i className="mdi mdi-google me-2"></i>Connect using
                        Google
                      </button>
                    </div> */}
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-primary">
                        Create
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
