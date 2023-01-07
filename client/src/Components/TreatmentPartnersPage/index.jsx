import React from "react";
import { Grid, Stack } from "@mui/material";
import Header from "../Header";
import TreatmentPartnerCard from "./TreatmentPartnerCard";
import { AppWrapper } from "../Styles_&_Components/Styles";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const TreatmentPartnersPage = ({ props }) => {
  const { appHeight } = props;

  const [data, setData] = React.useState([
    {
      sectionHeading: "",
      providerName: "",
      providerAbout: "",
      valueAdded: "",
      duration: "",
      thesis: "",
      expectedImpact: "",
      link: "",
      dashboardDisplay: false,
    },
  ]);

  const GetTreatmentPartners = async () => {
    setData([
      {
        sectionHeading: "",
        providerName: "",
        providerAbout: "",
        valueAdded: "",
        duration: "",
        thesis: "",
        expectedImpact: "",
        link: "",
        dashboardDisplay: false,
      },
    ]);
  };

  React.useEffect(() => {
    GetTreatmentPartners();
  }, []);

  return (
    <Stack sx={{ ...AppWrapper, height: "100vh" }} direction="row">
      <LeftSidebar />
      <Grid container sx={{ overflow: "scroll", minHeight: "100vh" }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header
            showBackButton={false}
            navigate={null}
            title={"Treatment Partners"}
          />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10}>
          {data.map((val, index) => (
            <TreatmentPartnerCard data={val} key={index} />
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Stack>
  );
};

export default TreatmentPartnersPage;
