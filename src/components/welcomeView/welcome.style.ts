import ColorsHelper from "../../helpers/colorHelper";

const welcomeStyle = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  wlcSubTxt: { fontWeight: 500, my: 2, px: { xs: 3, md: 10 } },
  wlcBtnBx: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    gap: 2,
  },
  wlcBtn: {
    borderColor: ColorsHelper.primary,
    color: ColorsHelper.primary,
    textTransform: "capitalize",
    px: 5,
    borderRadius: 2,
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
};

export default welcomeStyle;
