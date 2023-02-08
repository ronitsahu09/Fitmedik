import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ManagerDetailCard from "./ManagerDetailCard";
import { Add } from "@mui/icons-material";
import "./styles.css";
import Header from "../Header";
import AddManagerDialog from "./AddManagerDialog";

const ManagerSection = ({
  managerDetails = [
    {
      name: "",
      title: "",
      email: "",
    },
  ],
  setManagerDetails,
}) => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);

  const selectedIndex = React.useRef(-1);

  const onConfirm = (options = { isEdit: false, index: 0 }, data) => {
    if (options.isEdit) {
      const temp = managerDetails;
      managerDetails[options.index] = data;
      setManagerDetails(temp);
      setEditOpen(false);
    } else {
      const temp = managerDetails;
      temp.push(data);
      setManagerDetails(temp);
      setAddOpen(false);
    }
  };

  const edit = (index) => {
    selectedIndex.current = index;
    setEditOpen(true);
  };

  const remove = (index) => {
    setManagerDetails(managerDetails.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header
            navigate={null}
            title="Manager Details"
            showBackButton={false}
          />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the details of the all the Managers
            </Typography>
          </Grid>
          {managerDetails.map((val, index) => {
            return (
              <ManagerDetailCard
                key={index}
                isFirst={index === 0}
                managerDetail={val}
                edit={() => edit(index)}
                remove={() => remove(index)}
              />
            );
          })}
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="text"
              startIcon={<Add />}
              onClick={() => setAddOpen(true)}
            >
              Add manager
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      {addOpen && (
        <AddManagerDialog
          onCancel={() => setAddOpen(false)}
          onConfirm={onConfirm}
          index={selectedIndex.current}
          isEdit={false}
          addedData={{ name: "", email: "", title: "" }}
          open={addOpen}
        />
      )}

      {editOpen && (
        <AddManagerDialog
          onCancel={() => setEditOpen(false)}
          onConfirm={onConfirm}
          index={selectedIndex.current}
          isEdit={true}
          addedData={managerDetails[selectedIndex.current]}
          open={editOpen}
        />
      )}
    </div>
  );
};

export default ManagerSection;
