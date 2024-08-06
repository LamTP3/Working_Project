import type { UploadProps as AntdUploadProps } from "antd";

export interface UploadFileProps extends AntdUploadProps {
  value?: string;
  label: string;
  height?: string;
  width?: string;
}
