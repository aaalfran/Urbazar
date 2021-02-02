import React, {Component} from 'react';
import MainComponent from "./MainComponent";
import {connect} from 'react-redux';
import AuthA from '../../../store/actions/AuthA';

class MainPC extends Component{

    logout = () =>{
        this.props.authFn.logout();
    }

    
    render(){
        return( <MainComponent 
            logout = {this.props.logout}
            auth= {this.props.auth} /> );
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
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPC);