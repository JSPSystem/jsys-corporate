/*
 * 問い合わせ確認画面プロパティ
 */
export type ContactConfirmProps = {
  name: string;
  email: string;
  message: string;
  clearForm: () => void;
  onClickClose: () => void;
};
