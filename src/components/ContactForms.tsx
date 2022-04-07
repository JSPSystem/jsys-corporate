import { ContactFormsProps } from "../types/ContactFormsProps";

const ContactForms = (props: ContactFormsProps) => {
  const { name, email, message } = props.values;
  const { name: e_name, email: e_email, message: e_message } = props.errors;
  const { disabled, onChangeValue, onClickConfirm } = props;

  return (
    <div className="p-3 md:p-5 w-80 md:w-120 text-neutral-900">
      {/* ▼ お名前 ▼ */}
      <input
        type="text"
        placeholder="お名前"
        value={name}
        className={`block px-2 w-full h-7 md:h-10 rounded md:rounded-lg focus:outline-none focus:outline-teal-500 ${
          e_name.length ? "outline-none outline-red-500" : ""
        }`}
        onChange={(e) => onChangeValue("name", e.target.value)}
      />
      <div className="mt-2 font-sansjp text-xs text-red-500">
        {e_name.map((error, index) => {
          return <p key={index}>{error}</p>;
        })}
      </div>
      {/* ▲ お名前 ▲ */}
      {/* ▼ メールアドレス ▼ */}
      <input
        type="text"
        placeholder="メールアドレス"
        value={email}
        className={`block mt-3 px-2 w-full h-7 md:h-10 rounded md:rounded-lg focus:outline-none focus:outline-teal-500 ${
          e_email.length ? "outline-none outline-red-500" : ""
        }`}
        onChange={(e) => onChangeValue("email", e.target.value)}
      />
      <div className="mt-2 font-sansjp text-xs text-red-500">
        {e_email.map((error, index) => {
          return <p key={index}>{error}</p>;
        })}
      </div>
      {/* ▲ メールアドレス ▲ */}
      {/* ▼ お問い合わせ内容 ▼ */}
      <textarea
        placeholder="お問い合わせ内容"
        value={message}
        className={`block mt-3 p-2 w-full h-20 md:h-32 rounded md:rounded-lg focus:outline-none focus:outline-teal-500 ${
          e_message.length ? "outline-none outline-red-500" : ""
        }`}
        onChange={(e) => onChangeValue("message", e.target.value)}
      ></textarea>
      <div className="mt-2 font-sansjp text-xs text-red-500">
        {e_message.map((error, index) => {
          return <p key={index}>{error}</p>;
        })}
      </div>
      {/* ▲ お問い合わせ内容 ▲ */}
      {/* ▼ 確認ボタン ▼ */}
      <button
        className="block mx-auto mt-4 md:mt-5 w-48 md:w-60 h-7 md:h-9 rounded md:rounded-lg bg-transparent outline outline-1 outline-teal-400 text-teal-400 tracking-widest indent-5 transition ease-in-out hover:bg-teal-700 hover:outline-white hover:text-neutral-100 focus:bg-teal-700 focus:outline-white focus:text-neutral-100 disabled:opacity-20"
        onClick={onClickConfirm}
        disabled={disabled}
      >
        確認
      </button>
      {/* ▲ 確認ボタン ▲ */}
    </div>
  );
};

export default ContactForms;
