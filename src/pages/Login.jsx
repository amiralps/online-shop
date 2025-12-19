import {useEffect, useState} from "react";
import styles from "../styles/Login.module.css";
import styles2 from "../styles/LoginMobile.module.css";
function Login() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [loginMethod, setLoginMethod] = useState("signIn");
  const [loginInput, setLoginInput] = useState({name: "", password: ""});
  function loginHandler(e) {
    e.preventDefault();
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 900);
    });
    return window.removeEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 900);
    });
  }, []);
  return (
    <main className={!isMobile ? styles.main : styles2.main}>
      {!isMobile ? (
        <div className={styles.myForm}>
          <div
            className={`${styles.orgForm} ${
              loginMethod == "signIn" ? styles.signIn : styles.signUp
            }`}>
            <form className={styles.signUpForm}>
              {/* <h1>فرم ثبت نام</h1> */}

              <h1>این بخش فعال نیست</h1>
              {/* <div>
              <input type="text" id="name" />
              <label htmlFor="name">نام کاربری یا ایمیل</label>
            </div> */}
            </form>
            <form className={styles.signInForm}>
              <h1>فرم ورود</h1>
              <div>
                <input
                  className={loginInput.name ? styles.fill : null}
                  value={loginInput.name}
                  type="text"
                  id="loginName"
                  onChange={(e) => {
                    setLoginInput({...loginInput, name: e.target.value});
                  }}
                />
                <label htmlFor="loginName">نام کاربری یا ایمیل</label>
              </div>
              <div>
                <input
                  className={loginInput.password ? styles.fill : null}
                  value={loginInput.password}
                  type="password"
                  id="loginPassword"
                  onChange={(e) => {
                    setLoginInput({...loginInput, password: e.target.value});
                  }}
                />
                <label htmlFor="loginPassword">رمز عبور</label>
              </div>
              <button
                onClick={(e) => {
                  loginHandler(e);
                }}>
                ورود
              </button>
            </form>
            <div className={styles.switcher}>
              <div>
                <div className="signUp">
                  <h2>حساب کاربری ندارم</h2>
                  <button
                    onClick={() => {
                      setLoginMethod("signUp");
                      setLoginInput({password: "", name: ""});
                    }}>
                    ثبت نام
                  </button>
                </div>
                <div className="signIn">
                  <h2>حساب کاربری دارم</h2>
                  <button
                    onClick={() => {
                      setLoginMethod("signIn");
                    }}>
                    ورود
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>
      ) : (
        <div
          className={`${styles2.orgForm} ${
            loginMethod == "signIn" ? styles2.signIn : styles2.signUp
          }`}>
          <form className={styles2.signUpForm}>
            {/* <h1>فرم ثبت نام</h1> */}

            <h1>این بخش فعال نیست</h1>
            {/* <div>
              <input type="text" id="name" />
              <label htmlFor="name">نام کاربری یا ایمیل</label>
            </div> */}
          </form>
          <form className={styles2.signInForm}>
            <h1>فرم ورود</h1>
            <div>
              <input
                className={loginInput.name ? styles2.fill : null}
                value={loginInput.name}
                type="text"
                id="loginName"
                onChange={(e) => {
                  setLoginInput({...loginInput, name: e.target.value});
                }}
              />
              <label htmlFor="loginName">نام کاربری یا ایمیل</label>
            </div>
            <div>
              <input
                className={loginInput.password ? styles2.fill : null}
                value={loginInput.password}
                type="password"
                id="loginPassword"
                onChange={(e) => {
                  setLoginInput({...loginInput, password: e.target.value});
                }}
              />
              <label htmlFor="loginPassword">رمز عبور</label>
            </div>
            <button
              onClick={(e) => {
                loginHandler(e);
              }}>
              ورود
            </button>
          </form>
          <div className={styles2.switcher}>
            <div>
              <div className="signIn">
                <h3>حساب کاربری دارم</h3>
                <button
                  onClick={() => {
                    setLoginMethod("signIn");
                  }}>
                  ورود
                </button>
              </div>
              <div className="signUp">
                <h3>حساب کاربری ندارم</h3>
                <button
                  onClick={() => {
                    setLoginMethod("signUp");
                    setLoginInput({password: "", name: ""});
                  }}>
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default Login;
