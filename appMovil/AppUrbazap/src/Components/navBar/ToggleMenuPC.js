import React, {Component} from 'react';
import ToggleMenu from "./ToggleMenu";

class ToggleMenuPC extends Component{




    render(){
        return( <ToggleMenu 
                isOpen={this.props.isOpen}
                setIsOpen={this.props.setIsOpen}
                logout={this.logout}/> );
    }
}

  

  
export default ToggleMenuPC;