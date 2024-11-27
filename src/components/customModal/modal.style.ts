import ColorsHelper from "../../helpers/colorHelper";

const buttonBaseStyles = {
  textTransform: "capitalize",
  px: 5,
  borderRadius: 2,
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: 500,
};

const modalStyle = {
  timerIcon: {
    fontSize: "5rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    color: "orange",
    mt: 5,
  },
  btnBx: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
    my: 3,
  },
  cancelBtn: {
    ...buttonBaseStyles,
  },
  submitBtn: {
    ...buttonBaseStyles,
    bgcolor: ColorsHelper.primary,
    color: ColorsHelper.white,
  },
};

export default modalStyle;
