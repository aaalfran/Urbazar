import React from 'react';
import NavbarAdmins from "./navbarAdmins";
import ToggleMenuAdmins from './TogglemenuAdmins';
import LoadResource from './LoadResource';
function PanelProducts(){
    return(
        <>
        <NavbarAdmins />
        <ToggleMenuAdmins/>
        <LoadResource/>
        </>
    );
}

export default PanelProducts;