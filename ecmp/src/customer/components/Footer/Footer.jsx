import { Button, Grid, Grid2, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div className="">
      <Grid2
        className="black text-white text-center mt-10 pl-12"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
        spacing={35}
      >
        <Grid2 item xs={12} sm={6} md={0}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              About Us{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={0}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Insights{" "}
            </Button>
          </div>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={0}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Guidelines{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              APIs{" "}
            </Button>
          </div>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={0}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6" gutterBottom>
              {" "}
              Term & Conditons{" "}
            </Button>
          </div>
        </Grid2>
      </Grid2>
      <Grid2
        item
        xs={12}
        // display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 0, bgcolor: "black", color: "white" }}
      >
        <Typography variant="body2" component="p" align="center">
          &copy; 2025, All rights reserved
        </Typography>
      </Grid2>
    </div>
  );
}
