import ReCAPTCHA from "react-google-recaptcha";
// import "./Action.scss";
import { Warraper } from "./styled";
function Action() {
  // Hàm xử lý khi CAPTCHA được xác thực
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <Warraper>
        <div
          style={{
            color: "white",
            padding: "12px 16px",
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "Inter",
          }}
        >
          Action
        </div>
        <div style={{ marginTop: "20px" }}>
          <ReCAPTCHA
            sitekey="6LfOmBUqAAAAAEfFypMWDPKZTNbdt-q2ymV1K-hV"
            onChange={onChange}
          />
          ,
        </div>
      </Warraper>
    </>
  );
}

export default Action;
