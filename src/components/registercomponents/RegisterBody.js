import React, { useState } from 'react';

function RegisterBody() {
  const [activeTab, setActiveTab] = useState('Candidate');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (tab) => {
   
  };

  return (
    <div>
      <section className="bg-f5">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <div className="widget-menu-link">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/register">Create Account</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="account-section">
        <div className="tf-container">
          <div className="row">
            <div className="wd-form-login tf-tab">
              <h4>Create a free account</h4>
              <ul className="menu-tab">
                <li className={`ct-tab ${activeTab === 'Candidate' ? 'active' : ''}`} onClick={() => handleTabClick('Candidate')}>
                  Candidate
                </li>
                <li className={`ct-tab ${activeTab === 'Employer' ? 'active' : ''}`} onClick={() => handleTabClick('Employer')}>
                Recruiter
                </li>
              </ul>
              <div className="content-tab">
                <div className="inner" style={{ display: activeTab === 'Candidate' ? 'block' : 'none' }}>
                  <form action="" onSubmit={handleSubmit}>
                    <div className="ip">
                      <label>Full Name<span>*</span></label>
                      <input type="text" placeholder="Name" required />
                    </div>
                    <div className="ip">
                      <label>Email address<span>*</span></label>
                      <input type="email"  placeholder="Email" required />
                    </div>
                    <div className="ip">
                      <label>Mobile Number<span>*</span></label>
                      <input type="text"  placeholder="Mobile" required />
                    </div>
                    <div className="ip">
                      <label>Password<span>*</span></label>
                      <div className="inputs-group auth-pass-inputgroup">
                        <input
                          type="password"
                          className="input-form password-input"
                          placeholder="Password"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="group-ant-choice st">
                      {/* <div className="sub-ip"><input type="checkbox" />I agree to the <a href="#">Terms of User</a></div> */}
                    </div>
                    <button type="submit">Register</button>
                    <div className="sign-up">Already have an account?<a href="/login">Login Here</a></div>
                  </form>
                </div>
                <div className="inner" style={{ display: activeTab === 'Employer' ? 'block' : 'none' }}>
                  <form action="">
                  <div className="ip">
                      <label>Company Name<span>*</span></label>
                      <input type="text" placeholder="Company Name" required/>
                    </div>
                    <div className="ip">
                      <label>Email address<span>*</span></label>
                      <input type="email" placeholder="Email" required />
                    </div>
                    <div className="ip">
                      <label>Mobile Number<span>*</span></label>
                      <input type="text" placeholder="Mobile Number" required/>
                    </div>
                    <div className="ip">
                      <label>Password<span>*</span></label>
                      <div className="inputs-group auth-pass-inputgroup">
                        <input
                          type="password"
                          className="input-form password-input"
                          placeholder="Password"
                          required=""
                        />
                        {/* <a className="icon-eye-off password-addon"></a> */}
                      </div>
                    </div>
                    <div className="group-ant-choice st">
                      {/* <div className="sub-ip"><input type="checkbox" />I agree to the <a href="#">Terms of User</a></div> */}
                    </div>
                    <button>Register</button>
                    <div className="sign-up">Already have an account?<a href="/login">Login Here</a></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterBody;
