import { useState } from "react";
import { ContactConfirmProps } from "../types/ContactConfirmProps";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactConfirm = (props: ContactConfirmProps) => {
  const { name, email, message, clearForm, onClickClose } = props;

  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [captcha_value, setCaptchaValue] = useState("");

  const onChageReCaptcha = (value: string | null) => {
    if (value) {
      setCaptchaValue(value);
      setDisabled(false);
    }
  };

  const handleClick = () => {
    setError("");

    const service_id = process.env.EMAILJS_SERVICE_ID;
    const template_id = process.env.EMAILJS_TEMPLATE_ID;
    const user_id = process.env.EMAILJS_USER_ID;
    const params = {
      name: name,
      email: email,
      message: message,
      "g-recaptcha-response": captcha_value,
    };

    // 送信ボタンが無効または必要な設定がない場合は何もせず終了
    if (disabled || !service_id || !template_id || !user_id) {
      onClickClose();
      return;
    }

    // メール送信
    setDisabled(true);
    setIsSending(true);
    emailjs
      .send(service_id, template_id, params, user_id)
      .then(() => {
        clearForm();
        onClickClose();
      })
      .catch(({ err }) => {
        setDisabled(false);
        setError(`メールの送信に失敗しました。[ ${err} ]`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="w-80 md:w-148 rounded-lg shadow-xl bg-white">
      <div className="absolute right-2 top-0">
        <button onClick={onClickClose}>×</button>
      </div>
      <div className="flex flex-col justify-center items-center w-full text-neutral-800">
        <div className="flex pt-3 md:pt-6">
          <span className="font-jura text-3xl md:text-5xl font-bold">CONFIRM</span>
          <span className="font-sansjp my-auto text-xs md:text-sm">―&nbsp;確認&nbsp;―</span>
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-3 w-full font-sansjp text-xs md:text-sm">
          <p>内容を確認後、「送信」をクリックして完了です。</p>
          <div className="mt-3 grid grid-cols-9 gap-2 items-center w-full">
            <div className="col-span-2 text-right">お名前</div>
            <div className="col-span-6">
              <input
                type="text"
                value={name}
                readOnly={true}
                className="block px-2 w-full h-7 md:h-10 shadow-md rounded md:rounded-lg bg-neutral-200 border-2 border-neutral-400 outline-none"
              />
            </div>
            <div className="">様</div>
            <div className="col-span-2 text-right">メールアドレス</div>
            <div className="col-span-6">
              <input
                type="text"
                value={email}
                readOnly={true}
                className="block px-2 w-full h-7 md:h-10 shadow-md rounded md:rounded-lg bg-neutral-200 border-2 border-neutral-400 outline-none"
              />
            </div>
            <div></div>
            <div className="col-span-2 text-right">お問い合わせ内容</div>
            <div className="col-span-6">
              <textarea
                value={message}
                readOnly={true}
                className="block p-2 w-full h-20 md:h-32 shadow-md rounded md:rounded-lg bg-neutral-200 border-2 border-neutral-400 outline-none"
              ></textarea>
            </div>
            <div></div>
          </div>
          <ReCAPTCHA
            className="mt-3"
            sitekey={!process.env.RECAPTCHA_KEY ? "" : process.env.RECAPTCHA_KEY}
            onChange={onChageReCaptcha}
            onExpired={() => setDisabled(true)}
          />
          <button
            className={`mt-2 w-48 md:w-60 h-7 md:h-10 rounded md:rounded-lg bg-transparent tracking-widest indent-5 transition ease-in-out bg-teal-700 text-neutral-100 ${
              disabled && !isSending ? "opacity-20" : "hover:opacity-80"
            }`}
            onClick={handleClick}
            disabled={disabled}
          >
            <span className={`${isSending && "hidden"}`}>送信</span>
            <svg
              role="status"
              className={`mx-auto w-4 md:w-5 h-4 md:h-5 animate-spin text-teal-500 fill-white ${
                !isSending && "hidden"
              }`}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </button>
        </div>
        <div className="h-8">
          <p className={`mt-1 font-sansjp text-xs text-red-500 ${!error && "hidden"}`}>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactConfirm;
