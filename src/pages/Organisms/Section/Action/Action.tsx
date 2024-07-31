import ReCAPTCHA from "react-google-recaptcha";
import "./Action.scss";

function Action() {
  // Hàm xử lý khi CAPTCHA được xác thực
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="captcha">
        <ReCAPTCHA
          sitekey="6LfOmBUqAAAAAEfFypMWDPKZTNbdt-q2ymV1K-hV"
          onChange={onChange}
          theme="dark"
        />
      </div>
    </>
  );
}

export default Action;
