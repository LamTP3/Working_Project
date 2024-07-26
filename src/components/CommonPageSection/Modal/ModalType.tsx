import { Project } from "../../../type/type";

export type ModalName = "Confirm" | "Reject" | "Delete";
export type ModalProps = {
  modal_name: ModalName;
  open: boolean;
  // handleOk: (rejectReason?: string) => void;
  handleOk: (...args: any) => void;
  handleCancel: () => void;
  data?: Project;
};
