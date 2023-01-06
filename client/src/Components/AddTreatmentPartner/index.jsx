import React from "react";
import {
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Checkbox,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { Add } from "@mui/icons-material";
import { validateUrl } from "../../Utils/HelperFunctions";

const AddTreatmentPartner = () => {
  const navigate = useNavigate();

  const [sectionHeading, setSectionHeading] = React.useState("");
  const [providerName, setProviderName] = React.useState("");
  const [providerAbout, setProviderAbout] = React.useState("");

  const [sectionHeadingError, setSectionHeadingError] = React.useState("");
  const [providerNameError, setProviderNameError] = React.useState("");
  const [providerAboutError, setProviderAboutError] = React.useState("");
  const [linkError, setLinkError] = React.useState("");

  const [valueAdded, setValueAdded] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [thesis, setThesis] = React.useState("");
  const [expectedImpact, setExpectedImpact] = React.useState("");
  const [link, setLink] = React.useState("");
  const [dashboardDisplay, setDashboardDisplay] = React.useState(true);

  const AddTreatmentPartner = () => {
    if (validate()) {
      // Call API
    }
  };

  const validate = () => {
    let isValid = true;

    if (sectionHeading.length === 0) {
      isValid = false;
      setSectionHeadingError("Field is empty");
    } else {
      setSectionHeadingError("");
    }

    if (providerName.length === 0) {
      isValid = false;
      setProviderNameError("Field is empty");
    } else {
      setProviderNameError("");
    }

    if (providerAbout.length === 0) {
      isValid = false;
      setProviderAboutError("Field is empty");
    } else {
      setProviderAboutError("");
    }

    if (link.length !== 0 && !validateUrl(link)) {
      isValid = false;
      setLinkError("Link is invalid");
    } else {
      setLinkError("");
    }

    return isValid;
  };

  return (
    <div style={{ width: "100vw" }}>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header navigate={navigate} title="Add a Treatment Partner" />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the details of the Treatment Partner
            </Typography>
          </Grid>

          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Section Heading
            </Typography>
            <TextField
              required
              fullWidth
              variant={"outlined"}
              placeholder="Section Heading"
              value={sectionHeading}
              type="text"
              onChange={(e) => setSectionHeading(e.target.value)}
              error={sectionHeadingError.length !== 0}
              helperText={sectionHeadingError}
            />
          </Grid>

          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Name of provider
            </Typography>
            <TextField
              required
              fullWidth
              variant={"outlined"}
              placeholder="Name of provider"
              value={providerName}
              type="text"
              onChange={(e) => setProviderName(e.target.value)}
              error={providerNameError.length !== 0}
              helperText={providerNameError}
            />
          </Grid>

          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              About the provider
            </Typography>
            <TextField
              required
              fullWidth
              variant={"outlined"}
              placeholder="About the provider"
              value={providerAbout}
              type="text"
              onChange={(e) => setProviderAbout(e.target.value)}
              error={providerAboutError.length !== 0}
              helperText={providerAboutError}
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{
              backgroundColor: "rgb(240, 240, 240)",
              borderRadius: 10,
              p: 6,
              mt: 4,
              mb: 4,
            }}
            rowSpacing={3}
          >
            <Grid container item xs={12}>
              <Typography variant="h4" fontWeight="800">
                More about the provider (optional)
              </Typography>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    onClick={() => setDashboardDisplay(!dashboardDisplay)}
                    sx={{ mr: 1 }}
                    fontWeight="100"
                  >
                    Show in dashboard?{" "}
                  </Typography>
                  <Checkbox
                    checked={dashboardDisplay}
                    onClick={() => setDashboardDisplay(!dashboardDisplay)}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              <div
                style={{ width: "100%", height: 1, backgroundColor: "black" }}
              />
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Value Added
              </Typography>
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Value Added"
                value={valueAdded}
                type="text"
                onChange={(e) => setValueAdded(e.target.value)}
              />
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Duration
              </Typography>
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Duration"
                value={duration}
                type="text"
                onChange={(e) => setDuration(e.target.value)}
              />
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Thesis
              </Typography>
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Thesis"
                value={thesis}
                type="text"
                onChange={(e) => setThesis(e.target.value)}
              />
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Expected Impact
              </Typography>
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Expected Impact"
                value={expectedImpact}
                type="text"
                onChange={(e) => setExpectedImpact(e.target.value)}
              />
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Link
              </Typography>
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Link"
                value={link}
                type="text"
                onChange={(e) => setLink(e.target.value)}
                error={linkError.length !== 0}
                helperText={linkError}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Button
        sx={{ position: "fixed", bottom: 50, right: 50, borderRadius: 99 }}
        size="large"
        color="error"
        startIcon={<Add />}
        onClick={AddTreatmentPartner}
        variant="contained"
      >
        Add Treatment Partner
      </Button>
    </div>
  );
};

export default AddTreatmentPartner;
