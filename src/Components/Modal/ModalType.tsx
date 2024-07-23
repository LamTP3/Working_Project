export type ModalName = "Confirm" | "Reject";
export type ModalProps = {
  modal_name: ModalName;
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};
