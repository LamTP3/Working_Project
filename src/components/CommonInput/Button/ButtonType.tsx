type BackgroundColor = "Gradient" | "Gradient_Danger" | "Gradient_Default";
export interface ButtonProps {
  background_color: BackgroundColor;
  button_content: string;
  arrow_icon: boolean;
  width?: string;
  onClick?: () => void;
}
