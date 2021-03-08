import React, {Component} from 'react';
import ToggleMenu from "./TogglemenuAdmins";
import {connect} from 'react-redux';
import AuthA from '../../../store/actions/AuthA';
import {Redirect} from 'react-router-dom';
import NavBarAdmins from './navbarAdmins';

class NavBarPC extends Component{

    logout = () =>{
        this.props.authFn.logout();
        document.location.href="/login";
    }


    render(){
        return( <NavBarAdmins 
                logout={this.logout}/> );
    }
}

  
const mapStateToProps = (state) => {
    return{
        auth: state.AuthR.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      authFn: AuthA(dispatch)
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBarPC);