import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Checkbox,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { Add, RestartAlt } from "@mui/icons-material";
import { validateUrl } from "../../Utils/HelperFunctions";
import { AddTreatmentPartnetApi } from "../../Apis/Admin/TreatmentPartners";
import { GetAdminToken } from "../../Cookies/admin";
import { useSnackbar } from "notistack";

const AddTreatmentPartner = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    heading: "",
    provider: "",
    about: "",
    value: "",
    duration: "",
    thesis: "",
    expected_impact: "",
    link: "",
    onDashboard: false,
  });

  const [sectionHeadingError, setSectionHeadingError] = React.useState("");
  const [providerNameError, setProviderNameError] = React.useState("");
  const [providerAboutError, setProviderAboutError] = React.useState("");
  const [linkError, setLinkError] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
  }, []);

  const AddTreatmentPartner = async () => {
    if (validate()) {
      const res = await AddTreatmentPartnetApi(GetAdminToken(), data, {
        setLoading,
        setError,
        setErrorText,
      });

      if (res) navigate("/admin/dashboard");
    }
  };

  const reset = () => {
    setData({
      heading: "",
      provider: "",
      about: "",
      value: "",
      duration: "",
      thesis: "",
      expected_impact: "",
      link: "",
      onDashboard: true,
    });

    setSectionHeadingError("");
    setProviderNameError("");
    setProviderAboutError("");
    setLinkError("");

    setLoading(false);
    setError(false);
    setErrorText("");
  };

  const validate = () => {
    let isValid = true;

    if (data.heading.length === 0) {
      isValid = false;
      setSectionHeadingError("Field is empty");
    } else {
      setSectionHeadingError("");
    }

    if (data.provider.length === 0) {
      isValid = false;
      setProviderNameError("Field is empty");
    } else {
      setProviderNameError("");
    }

    if (data.about.length === 0) {
      isValid = false;
      setProviderAboutError("Field is empty");
    } else {
      setProviderAboutError("");
    }

    if (data.link.length !== 0 && !validateUrl(data.link)) {
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
              value={data.heading}
              type="text"
              onChange={(e) => setData({ ...data, heading: e.target.value })}
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
              value={data.provider}
              type="text"
              onChange={(e) => setData({ ...data, provider: e.target.value })}
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
              value={data.about}
              type="text"
              onChange={(e) => setData({ ...data, about: e.target.value })}
              error={providerAboutError.length !== 0}
              helperText={providerAboutError}
              multiline={true}
              rows={3}
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
                    onClick={() =>
                      setData({
                        ...data,
                        onDashboard: !data.onDashboard,
                      })
                    }
                    sx={{ mr: 1 }}
                    fontWeight="100"
                  >
                    Show in dashboard?{" "}
                  </Typography>
                  <Checkbox
                    checked={data.onDashboard}
                    onClick={() =>
                      setData({
                        ...data,
                        onDashboard: !data.onDashboard,
                      })
                    }
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
                value={data.value}
                type="text"
                onChange={(e) => setData({ ...data, value: e.target.value })}
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
                value={data.duration}
                type="text"
                onChange={(e) => setData({ ...data, duration: e.target.value })}
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
                value={data.thesis}
                type="text"
                onChange={(e) => setData({ ...data, thesis: e.target.value })}
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
                value={data.expected_impact}
                type="text"
                onChange={(e) =>
                  setData({ ...data, expected_impact: e.target.value })
                }
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
                placeholder="Link (eg. 'https://yourlink.com')"
                value={data.link}
                type="text"
                onChange={(e) => setData({ ...data, link: e.target.value })}
                error={linkError.length !== 0}
                helperText={linkError}
              />
            </Grid>

            {/* Documents link */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Upload image
              </Typography>

              <input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files);
                }}
                accept="image/*"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="800" color="red">
              * Events for this treatment partner are to be added under the see
              all partners page
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <div
        style={{
          position: "fixed",
          bottom: 50,
          right: 50,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          sx={{ borderRadius: 99, mr: 1 }}
          size="large"
          color="primary"
          startIcon={<RestartAlt />}
          onClick={reset}
          variant="contained"
        >
          Reset
        </Button>
        <Button
          sx={{ borderRadius: 99, ml: 1 }}
          size="large"
          color="error"
          startIcon={<Add />}
          onClick={AddTreatmentPartner}
          disabled={loading}
          variant="contained"
        >
          {loading ? "Submitting" : "Add Treatment Partner"}
        </Button>
      </div>

      {error && (
        <Snackbar
          open={error}
          autoHideDuration={5000}
          onClose={() => setError(false)}
        >
          <Alert
            onClose={() => setError(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errorText}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default AddTreatmentPartner;
