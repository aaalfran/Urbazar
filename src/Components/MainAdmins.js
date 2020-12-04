import '../css/MainAdmins.css';
import NavbarAdmins from './navbarAdmins';
import ToggleMenuAdmins from './TogglemenuAdmins';
import React, {useEffect, useState} from 'react';

function MainAdmin(){
    //const [pestania, setPestania]=useState([]);
    //setPestania(0)
    return(
        <>
        <NavbarAdmins />
        <ToggleMenuAdmins/>
        </>
    );
}

export default MainAdmin