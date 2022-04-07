export interface Values {
  name: string;
  email: string;
  message: string;
}

export interface Errors {
  name: string[];
  email: string[];
  message: string[];
}

/*
 * 問い合わせフォームプロパティ
 */
export type ContactFormsProps = {
  values: Values;
  errors: Errors;
  disabled: boolean;
  onChangeValue: (key: keyof Values, value: string) => void;
  onClickConfirm: () => void;
};
