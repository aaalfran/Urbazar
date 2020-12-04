import React from 'react';
import NavbarAdmins from "./navbarAdmins";
import ToggleMenuAdmins from './TogglemenuAdmins';
import LoadResource from './LoadResource';
import {
    Container,
    Grid
  } from '@material-ui/core';

function PanelProducts(){
    return(
        <>
        <NavbarAdmins />
        <Container maxWidth="lg">
            <Grid container direction="row" justify="flex-end" spacing={10}>
                <Grid item lg={2} md={2} xs={0}> 
                    <ToggleMenuAdmins/>
                </Grid>
                <Grid item  lg={10} md={10} xs={12}> 
                    <LoadResource/>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default PanelProducts;