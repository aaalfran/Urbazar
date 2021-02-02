import React, {Component} from 'react';
import LoginPV from "./LoginPV";
import {connect} from 'react-redux';
import AuthA from '../../../store/actions/AuthA';

class LoginPC extends Component{

    login = () =>{
        let data = {
            'user': document.getElementById('user').value,
            'password': document.getElementById('password').value,
        }

        this.props.authFn.login(data);
    }

    
    render(){
        return( <LoginPV 
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