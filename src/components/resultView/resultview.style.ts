import ColorsHelper from "../../helpers/colorHelper";

const buttonBaseStyles = {
  textTransform: "capitalize",
  px: 5,
  borderRadius: 2,
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: 500,
};

const resultviewStyle = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  txtStylOne: {
    fontWeight: 600,
    mb: 2,
  },
  txtStylTwo: {
    fontWeight: 500,
    mb: 2,
  },
  btnBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    gap: 2,
  },
  reviewBtn: {
    ...buttonBaseStyles,
    borderColor: ColorsHelper.primary,
    color: ColorsHelper.primary,
  },
  tryBtn: {
    ...buttonBaseStyles,
    bgcolor: ColorsHelper.primary,
    color: ColorsHelper.white,
  },
};

export default resultviewStyle;
