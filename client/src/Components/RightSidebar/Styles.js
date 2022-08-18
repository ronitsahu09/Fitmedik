export const rightSidebar = {
  minHeight: "100%",
  boxSizing: "border-box",
  minWidth: { md: "3in", lg: "3.3in" },
  width: { md: "3in", lg: "3.3in" },
  display: { xs: "none", w950: "flex" },
  p: "1.5rem",
  gap: "1.5rem",
};

export const logo = {
  width: "70%",
  alignSelf: "center",
};

export const monitoring = {
  flex: 1,
  bgcolor: "#ffffff",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  "& p": {
    textAlign: "center",
  },
};

export const monitorLogoWrapper = {
  mt: 3,
  position: "relative",
  width: "100%",
};

export const bottomBlur = {
  width: "100%",
  height: "20%",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.85) 42.71%, #FFFFFF 68.75%, #FFFFFF 100%);",
  position: "absolute",
  bottom: "0",
};

export const colorDot = {
  width: "0.6cm",
  height: "0.6cm",
  borderRadius: "50%",
};
