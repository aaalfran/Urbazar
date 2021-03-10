import React, { Component } from 'react';
import PanelEtapasV from "./PanelEtapasV";
import ModalAdd from "./ModalEtapa";

class Admin_EtapasPC extends Component{
    constructor(props){
        super(props);
        this.state = {
            liveDemo: false
        }
        this.handleModal = this.handleModal.bind(this)
    }

    addEtapa(){
        return 
    }
    handleModal(){
        this.setState({liveDemo:!this.state.liveDemo});
    }



    render(){
        return( 
        <>
        <PanelEtapasV 
            handleModal={this.handleModal}
            estado={this.state.liveDemo} />
            
        <ModalAdd 
            handleModal={this.handleModal}
            estado={this.state.liveDemo}/>
        </>
                );
    }
}

export default Admin_EtapasPC;