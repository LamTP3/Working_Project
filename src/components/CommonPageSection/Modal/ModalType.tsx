export type ModalName = "Confirm" | "Reject" | "Delete";
export type ModalProps = {
  modal_name: ModalName;
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};
