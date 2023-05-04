import { useState } from "react";
import { Link } from "react-router-dom";


const OTPVerification = () => {
    
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
              
                    <h4>OTP Verification</h4>
                    <h6 className="font-weight-light">Enter the code</h6>
                    <form onSubmit={handleSubmit} className="pt-3">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          name="otp"
                          placeholder="Enter OTP"
                          value={inputs.otp || ""} 
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="mt-3">
                        <Link to="/"
                          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                          SUBMIT
                        </Link>
                      </div>
                      
                      <div className="text-center mt-4 font-weight-light">
                        Don't receive the code?{" "}
                        <Link to="/" className="text-primary">
                          Resend Code
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

export default OTPVerification;