import ReCAPTCHA from "react-google-recaptcha";
import "./Action.scss";
import ButtonComponent from "../../../../components/CommonInput/Button/ButtonComponent";

// interface ActionProps {
//   onCaptchaChange: (value: boolean) => void;
//   isCaptchaVerified: boolean;
// }



function Action() {
  // function handleCaptchaChange(value: any) {
  //   onCaptchaChange(!!value);
  // }

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
        <div className="mt-5">
          <ButtonComponent
            button_content="Submit Information"
            arrow_icon={true}
            background_color="Gradient"
            // disabled={!isCaptchaVerified}
            // type="submit"
          />
        </div>
      </div>
    </>
  );
}

export default Action;
