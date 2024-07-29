export interface Props {
  name?: string;
  disabled?: boolean;
  width?: string;
  placeholder?: string;
  value?: string;
  minDate?: boolean;
  onChange?: (...args: any) => void;
  onBlur?: (...arg: any) => void;
}
