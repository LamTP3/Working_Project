export interface Props {
  disabled?: boolean;
  width?: string;
  placeholder?: string;
  value?: string;
  minDate?: boolean;
  onChange?: (...args: any) => void;
}
