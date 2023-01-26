import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import TreatmentPartnerCard from "./TreatmentPartnerCard";
import {
  AppWrapper,
  fixedWindow,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const TreatmentPartnersPage = () => {
  const [data, setData] = React.useState([
    {
      heading: "",
      provider: "",
      about: "",
      value: "",
      duration: "",
      thesis: "",
      expected_impact: "",
      link: "",
      onDashboard: false,
    },
  ]);

  const GetTreatmentPartners = async () => {
    setData([
      {
        heading: "",
        provider: "",
        about: "",
        value: "",
        duration: "",
        thesis: "",
        expected_impact: "",
        link: "",
        onDashboard: false,
      },
      {
        heading: "",
        provider: "",
        about: "",
        value: "",
        duration: "",
        thesis: "",
        expected_impact: "",
        link: "",
        onDashboard: false,
      },
      {
        heading: "",
        provider: "",
        about: "",
        value: "",
        duration: "",
        thesis: "",
        expected_impact: "",
        link: "",
        onDashboard: false,
      },
    ]);
  };

  React.useEffect(() => {
    GetTreatmentPartners();
  }, []);

  return (
    <Stack sx={{ ...AppWrapper, height: "100vh" }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Treatment Partners
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack gap={3} mt={3}>
              <Stack direction="column" alignItems="center" gap="0.5rem">
                {data.map((val, index) => (
                  <Grid container item xs={12}>
                    <TreatmentPartnerCard data={val} key={index} />
                  </Grid>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TreatmentPartnersPage;
