import ReCAPTCHA from "react-google-recaptcha";

function Action() {
  // Hàm xử lý khi CAPTCHA được xác thực
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }
  return (
    <>
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
      <div className="captcha" style={{ marginTop: "20px" }}>
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
