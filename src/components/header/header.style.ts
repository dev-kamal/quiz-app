import ColorsHelper from "../../helpers/colorHelper";

const headerStyle = {
  mainHeaderBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    py: 2,
  },
  headerTxt: {
    color: ColorsHelper.primary,
    fontFamily: "Roboto !imporatant",
    fontWeight: 700,
  },
  headerRight: { display: "flex", alignItems: "center", gap: 1 },
  headerBx: { display: { xs: "none", md: "block" } },
  headerHeadTxt: {
    color: ColorsHelper.primary,
    lineHeight: "1.1",
    fontWeight: 600,
  },
  headerSubTxt: { color: ColorsHelper.gray, lineHeight: "1.1" },
};

export default headerStyle;
