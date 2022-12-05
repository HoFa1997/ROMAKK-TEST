import { FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField, Button, CircularProgress } from "@mui/material";
import { loginApi } from "../api/api";
import { LoginData, StatusType, MessageType } from "../../interface/loginData";
import { setAccessToken } from "../../hook/storage";
import { useNavigate } from "react-router-dom";
interface LoginFormProps {
  setStatusType: (statusType: StatusType) => void;
  setMessageType: (messageType: MessageType) => void;
  setOpenAlertDialog: (status: boolean) => void;
}

export const LoginForm: FC<LoginFormProps> = ({
  setStatusType,
  setMessageType,
  setOpenAlertDialog,
}) => {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    //can use regex for validation some role
    userName: Yup.string().required("لطفا این قسمت را خالی نگذارید"),
    password: Yup.string().required("لطفا این قسمت را خالی نگذارید"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const loginData: LoginData = {
        username: values.userName,
        password: values.password,
      };
      const data = await loginApi(loginData);
      if (data.status === 200) {
        setStatusType(StatusType.SUCCESS);
        setMessageType(MessageType.SUCCESS);
        setOpenAlertDialog(true);
        setAccessToken(data.data.token);
        console.log(data.data.token);
        navigate("/products");
      } else {
        setStatusType(StatusType.ERROR);
        setMessageType(MessageType.ERROR);
        setOpenAlertDialog(true);
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ minHeight: 100 }}
          {...getFieldProps("userName")}
          error={Boolean(touched.userName && errors.userName)}
          helperText={errors.userName && touched.userName && errors.userName}
          type="text"
          fullWidth
          label="نام کاربری"
        />
        <TextField
          sx={{ minHeight: 100 }}
          {...getFieldProps("password")}
          error={Boolean(touched.password && errors.password)}
          helperText={errors.password && touched.password && errors.password}
          type="password"
          fullWidth
          label="کلمه عبور"
        />
        <Button sx={{ mt: 5 }} type="submit" variant="contained">
          {isSubmitting ? (
            <CircularProgress sx={{ color: "red" }} />
          ) : (
            "ورود به حساب کاربری"
          )}
        </Button>
      </form>
    </>
  );
};
