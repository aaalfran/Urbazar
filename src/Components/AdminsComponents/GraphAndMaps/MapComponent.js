import React from 'react';
import NavbarAdmins from "../navBar/navbarAdmins";
import ToggleMenuAdmins from '../navBar/TogglemenuAdmins';


function PanelProducts(){
    return(
        <>
        <NavbarAdmins />
        <ToggleMenuAdmins/>
        <div className="mapa" id="content">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Fg8Z1eliOlGBHKgnkRBfI-ncddRRzXzL" 
            width="640" height="480"></iframe>
        </div>
        </>
    );
}

export default PanelProducts;
