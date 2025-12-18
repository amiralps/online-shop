import {useState} from "react";
import styles from "../styles/Login.module.css";
function Login() {
  const [loginMethod, setLoginMethod] = useState("signIn");
  return (
    <main className={styles.main}>
      <div className={styles.myForm}>
        <div className={styles.orgForm}>
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
              <input type="text" id="loginName" />
              <label htmlFor="loginName">نام کاربری یا ایمیل</label>
            </div>
            <div>
              <input type="password" id="loginPassword" />
              <label htmlFor="loginPassword">رمز عبور</label>
            </div>
            <button onClick={(e) => {
              e.preventDefault()
            }}>ورود</button>
          </form>
          <div
            className={`${styles.switcher} ${
              loginMethod == "signIn" ? styles.signIn : styles.signUp
            }`}>
            <div>
              <div className="signUp">
                <h2>اگر قبلا ثبت نام نکردید روی دکمه زیر کلیک کنید</h2>
                <button
                  onClick={() => {
                    setLoginMethod("signUp");
                  }}>
                  حساب کاربری ندارم
                </button>
              </div>
              <div className="signIn">
                <h2>اگر قبلا ثبت نام کردید روی دکمه زیر کلیک کنید</h2>
                <button
                  onClick={() => {
                    setLoginMethod("signIn");
                  }}>
                  حساب کاربری دارم
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
    </main>
  );
}
export default Login;
