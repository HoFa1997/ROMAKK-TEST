import { Card, Container, Grid } from "@mui/material";
import { FC } from "react";

export const App: FC = () => {
  return (
    <>
      <Container>
        <Card sx={{ marginY: 50, background: "grey" }}>
          <Grid container columns={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};
