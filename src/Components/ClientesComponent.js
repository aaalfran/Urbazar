import React from 'react';
import NavbarAdmins from "./navbarAdmins";
import ToggleMenuAdmins from './TogglemenuAdmins';
import LoadCustomers from './LoadCustomers';

function PanelProducts(){
    return(
        <>
        <NavbarAdmins />
        <ToggleMenuAdmins/>
        <LoadCustomers/>
        </>
    );
}

export default PanelProducts;