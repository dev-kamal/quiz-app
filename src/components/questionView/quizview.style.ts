import ColorsHelper from "../../helpers/colorHelper";

const buttonStyle = {
  textTransform: "capitalize",
  px: 5,
  borderRadius: 2,
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: 500,
};

const quizviewStyle = {
  mainBox: { flexGrow: 1, overflowY: "auto" },
  subBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subLeftBx: { display: "flex", alignItems: "center", gap: 1 },
  submitBtn: {
    ...buttonStyle,
    bgcolor: ColorsHelper.primary,
    color: ColorsHelper.white,
  },
  numBtn: {
    ...buttonStyle,
    display: { xs: "none", md: "block" },
    borderColor: ColorsHelper.primary,
    color: ColorsHelper.primary,
    px: 2,
  },
  prevBtn: {
    ...buttonStyle,
    borderColor: ColorsHelper.primary,
    color: ColorsHelper.primary,
    px: 5,
  },
  nextBtn: {
    ...buttonStyle,
    bgcolor: ColorsHelper.primary,
    color: ColorsHelper.white,
  },
  cardAct: {
    borderTop: `1px solid ${ColorsHelper.secondary}`,
    position: "sticky",
    bottom: 0,
    bgcolor: "white",
    display: "flex",
    justifyContent: "space-between",
    px: 2,
    zIndex: 1000,
  },
  guageBx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  guageGrid: { order: { xs: 1, md: 2 } },
  timeSpentTxt: { color: ColorsHelper.gray, lineHeight: "1.1" },
};

export default quizviewStyle;
