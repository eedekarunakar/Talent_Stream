import React from 'react'

function LoginBody() {
  return (
    <div>

<div>
      <section className="bg-f5">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <div className="widget-menu-link">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
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
            <div className="wd-form-login">
              <h4>Log In</h4>
              <form action="">
                <div className="ip">
                  <label>
                    Username or email address<span>*</span>
                  </label>
                  <input type="text" value="" placeholder="Name" />
                </div>
                <div className="ip">
                  <label>
                    Password<span>*</span>
                  </label>
                  <div className="inputs-group auth-pass-inputgroup">
                    <input
                      type="password"
                      className="input-form password-input"
                      placeholder="Password"
                      id="password-input"
                      required=""
                    />
                    <a className="icon-eye-off password-addon" id="password-addon"></a>
                  </div>
                </div>
                <div className="group-ant-choice">
                  <div className="sub-ip">
                    <input type="checkbox" />
                    Remember me
                  </div>
                  <a href="#" className="forgot">
                    Fogot password?
                  </a>
                </div>
                {/* <p className="line-ip">
                  <span>or sign up with</span>
                </p>
                <a href="#" className="btn-social">
                  Continue with Facebook
                </a>
                <a href="#" className="btn-social">
                  {' '}
                  <img src="images/review/google.png" alt="images" /> Continue with Google
                </a>
                <a href="#" className="btn-social">
                  {' '}
                  <img src="images/review/tweet.png" alt="images" /> Continue with Twitter
                </a> */}
                <button type="submit">Login</button>
                <div className="sign-up">
                  Not registered yet? <a href="/register" >Sign Up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>




    </div>
  )
}

export default LoginBody