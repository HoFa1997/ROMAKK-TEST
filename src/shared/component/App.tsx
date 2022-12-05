import {
  Card,
  CardProps,
  Container,
  Grid,
  GridProps,
  styled,
} from "@mui/material";

import { FC, useState } from "react";
import { MessageType, StatusType } from "../../interface/loginData";
import { AlertDialog } from "./Alert";
import { LoginForm } from "./LoginFrom";

const ImgDiv = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const CardMain = styled(Card)<CardProps>(({ theme }) => ({
  background: "#d7d7d7",
  marginTop: 100,
}));

export const App: FC = () => {
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [statusType, setStatusType] = useState<StatusType>(StatusType.SUCCESS);
  const [messageType, setMessageType] = useState<MessageType>(
    MessageType.SUCCESS
  );

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  return (
    <>
      <AlertDialog
        openAlertDialog={openAlertDialog}
        handleClose={handleClose}
        statusType={statusType}
        messageType={messageType}
      />
      <Container>
        <CardMain>
          <Grid m={5} container columns={2}>
            <Grid item xs={1}>
              <LoginForm
                setStatusType={setStatusType}
                setMessageType={setMessageType}
                setOpenAlertDialog={setOpenAlertDialog}
              />
            </Grid>
            <ImgDiv item xs={1}>
              <img src="src/assets/react.svg" height={250} width={250} />
            </ImgDiv>
          </Grid>
        </CardMain>
      </Container>
    </>
  );
};
