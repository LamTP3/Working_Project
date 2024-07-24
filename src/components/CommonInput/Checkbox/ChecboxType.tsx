export interface CheckBoxProps {
  optionsData: { label: string; value: string }[];
  useCricle: boolean;
  height?: boolean;
  onChange?: (...args: any) => void;
}
