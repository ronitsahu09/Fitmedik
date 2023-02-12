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
import { GetTPEventsApi } from "../../Apis/Hospital/Events";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const TreatmentPartnersPage = ({ props }) => {
  const [data, setData] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const { userToken } = props;

  const GetTreatmentPartners = async () => {
    GetTPEventsApi(userToken, { setLoading, setError, setErrorText, setData });
  };

  React.useEffect(() => {
    GetTreatmentPartners();
  }, []);

  return (
    <Stack sx={{ ...AppWrapper, height: "100vh" }} direction="row">
      <LeftSidebar />

      {loading ? (
        <LoadingPage loadingText={"Gathering information..."} />
      ) : error ? (
        <ErrorPage errorText={errorText} onRetry={GetTreatmentPartners} />
      ) : (
        <Stack sx={{ ...middle }}>
          <Stack sx={{ ...middleWindow }}>
            <Typography variant="h3" component="div" fontWeight="700">
              Events from your Treatment Partners
            </Typography>

            <Stack sx={{ ...fixedWindow }}>
              <Stack gap={3} mt={3}>
                <Stack direction="column" alignItems="center" gap="0.5rem">
                  {data.map((val, index) => (
                    <Grid container item xs={12} key={index}>
                      <TreatmentPartnerCard data={val} />
                    </Grid>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default TreatmentPartnersPage;
