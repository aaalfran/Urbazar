import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import NavbarAdmins from "../navBar/navbarAdmins";
import ToggleMenuAdmins from "../navBar/TogglemenuAdmins";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  useStyles();

  return (
    <>
        <NavbarAdmins />
        <ToggleMenuAdmins/>
     
      <br></br><br></br>
      <Container maxWidth="lg">

        <Grid
          container
          spacing={5}
          direction="row"
          justify="flex-end"
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            direction="row"
            justify="flex-end"
          >
            <Profile />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
          >
            <ProfileDetails />
          </Grid>
        </Grid>
        
      </Container>
      
      </>
  );
};

export default Account;
