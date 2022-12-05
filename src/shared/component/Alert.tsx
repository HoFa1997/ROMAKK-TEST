import { Snackbar, Alert } from "@mui/material";
import { FC } from "react";
import { MessageType, StatusType } from "../../interface/loginData";

interface AlertDialogProps {
  openAlertDialog: boolean;
  handleClose: () => void;
  statusType: StatusType;
  messageType: MessageType;
}

export const AlertDialog: FC<AlertDialogProps> = ({
  openAlertDialog,
  handleClose,
  statusType,
  messageType,
}) => {
  return (
    <>
      <Snackbar
        open={openAlertDialog}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={statusType}
          sx={{ width: "100%" }}
        >
          {messageType}
        </Alert>
      </Snackbar>
    </>
  );
};
