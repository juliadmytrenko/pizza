import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface IAlertDialogSlide {
  children: React.ReactNode;
  title: string;
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
  closeButtonText: string;
  submitButtonText: string;
  className?: string;
}

const AlertDialogSlide = ({
  children,
  title,
  show,
  onClose,
  onSubmit,
  closeButtonText,
  submitButtonText,
}: IAlertDialogSlide) => {
  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "50vw",
          minHeight: 300,
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          {closeButtonText}
        </Button>
        <Button variant="contained" color="secondary" onClick={onSubmit}>
          {submitButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AlertDialogSlide;
