import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTitleAnimation } from "../hooks/useCommonAnimation";
import styles from "../styles/Modal.module.css";
import Modal from "react-modal";
import ContactForms from "./ContactForms";
import ContactConfirm from "./ContactConfirm";
import { Errors, Values } from "../types/ContactFormsProps";

Modal.setAppElement("#container");

const Contact = () => {
  // タイトルのアニメーションを設定
  useTitleAnimation("#content_contact", "#content_contact_title", "#content_contact_subtitle");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#content_contact_form", {
      opacity: 0,
      y: 28,
    });
    gsap.to("#content_contact_form", {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#content_contact_form",
        start: "top 90%",
      },
    });
  }, []);

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: [],
    email: [],
    message: [],
  });
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // フォームのクリアを行います。
  const clearVForm = () => {
    const _values = Object.assign({}, values);
    _values.name = "";
    _values.email = "";
    _values.message = "";
    setValues(_values);
  };

  // 入力値の変更時、値の設定と検証を行います。
  const onChangeValue = (key: keyof Values, value: string) => {
    // 入力値の設定
    const _values = Object.assign({}, values, { [key]: value });
    setValues(_values);

    // 検証
    const error = [];
    const is_not_empty = validationRequire(value);
    if (!is_not_empty) {
      error.push("入力されていません。");
    }
    if ("email" === key && is_not_empty && !validationEmail(value)) {
      error.push("不正なメールアドレスです。");
    }

    // エラーの設定
    const _errors = JSON.parse(JSON.stringify(errors));
    _errors[key] = error;
    setErrors(_errors);
  };

  // 値の検証（必須）を行います。
  const validationRequire = (value: string) => {
    if ("" == value.replace("　", "").trim()) {
      return false;
    }
    return true;
  };
  // 値の検証（メールアドレス形式）を行います。
  const validationEmail = (value: string) => {
    return /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/.test(value);
  };

  // フォームの確認ボタンの有効無効を判断します。
  useEffect(() => {
    // 全て入力されている必要がある
    const trim_name = values.name.replace("　", "").trim();
    const trim_email = values.email.replace("　", "").trim();
    const trim_message = values.message.replace("　", "").trim();
    if ("" == trim_name || "" == trim_email || "" == trim_message) {
      setDisabled(true);
      return;
    }

    // 全てのエラーがない
    if (errors.name.length || errors.email.length || errors.message.length) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [values, errors]);

  return (
    <article id="content_contact">
      <div className="flex flex-col justify-center items-center w-full bg-neutral-900 text-white overflow-y-hidden">
        <div className="flex pt-3 md:pt-6">
          <h1 id="content_contact_title" className="font-jura text-3xl md:text-5xl font-bold">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </h1>
          <p id="content_contact_subtitle" className="font-sansjp my-auto text-xs md:text-sm">
            <span>―&nbsp;</span>
            <span>お</span>
            <span>問</span>
            <span>い</span>
            <span>合</span>
            <span>わ</span>
            <span>せ</span>
            <span>&nbsp;―</span>
          </p>
        </div>
        <div
          id="content_contact_form"
          className="flex flex-col items-center mt-2 md:mt-3 w-11/12 md:w-172 font-sansjp text-xs md:text-sm"
        >
          <p>
            ご質問、お見積もり、ご相談、ご要望がございましたらフォームよりお気軽にご連絡ください。
            <br />
            お問合わせいただきました内容を確認後、改めて担当者からご返事させていただきます。
          </p>
          <ContactForms
            values={values}
            errors={errors}
            disabled={disabled}
            onChangeValue={onChangeValue}
            onClickConfirm={() => setModalOpen(true)}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          overlayClassName={{
            base: styles["overlay-base"],
            afterOpen: styles["overlay-after"],
            beforeClose: styles["overlay-before"],
          }}
          className={{
            base: styles["content-base"],
            afterOpen: styles["content-after"],
            beforeClose: styles["content-before"],
          }}
          closeTimeoutMS={200}
        >
          <ContactConfirm
            name={values.name}
            email={values.email}
            message={values.message}
            clearForm={clearVForm}
            onClickClose={() => setModalOpen(false)}
          />
        </Modal>
      </div>
    </article>
  );
};

export default Contact;
