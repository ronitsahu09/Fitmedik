import {
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppWrapper,
  fixedWindow,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";

import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { NotificationCard } from "../Styles_&_Components/Components";

export default function Notifications({ props }) {
  const { appHeight } = props;

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Notifications
          </Typography>

          <Stack direction="row" sx={{ ...fixedWindow }}>
            <Stack
              sx={{
                p: 1,
                flex: 1,
                gap: "1.5rem",
                height: "fit-content",
                maxHeight: "100%",
                overflowY: "scroll",
              }}
            >
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
              <NotificationCard
                props={{
                  status: "safe",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went down by 15% from last week !",
                }}
              />
            </Stack>

            <Divider orientation="vertical" />

            <Stack
              sx={{
                p: 1,
                flex: 1,
                gap: "1.5rem",
                height: "fit-content",
                maxHeight: "100%",
                overflowY: "scroll",
              }}
            >
              <NotificationCard
                props={{
                  status: "alert",
                  title: "Average burnout trend",
                  subHeading: "Organization",
                  content: "Average burnout went up by 15% from last week !",
                }}
              />
            </Stack>
            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
