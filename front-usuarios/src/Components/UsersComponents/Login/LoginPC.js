import React, {Component} from 'react';
import LoginPV from "./LoginPV";
import {connect} from 'react-redux';
import AuthA from '../../../store/actions/AuthA';
import Register from "./Register";

class LoginPC extends Component{




    login = async() =>{
               
        
        let data = {
            'username': document.getElementById('username').value,
            'password': document.getElementById('password').value,
        }

        this.props.authFn.login(data);
    }

    
    render(){
        return( <Register 
            login={this.login}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginPC);