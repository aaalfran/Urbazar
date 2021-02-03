import axios from 'axios';

const AuthA = (dispatch) =>{
    return {
       
        login: (data) =>{
            axios.get("http://localhost:3000/personas", data)
            .then(response => response.data)
            .then( (res)=> {
                let flag = false;
                let nombre ="";
                let userid = "";
                for(let i=0; i<res.length; i++){
                    if(res[i].username===data.user && res[i].contrasena===data.password){
                        flag=true;
                        nombre = res[i].nombre;
                        userid = res[i].id;
                    }
                }
                if(flag){                    
                    localStorage.setItem('user', data.user);
                    localStorage.setItem('nombre_usuario', nombre);
                    localStorage.setItem('userId', userid);
                    localStorage.setItem('auth', true);
                    if (data.user=="daro"){
                        localStorage.setItem('isAdmin', 1);
                    }else{
                        localStorage.setItem('isAdmin', 0);
                    }
                    dispatch({type: 'LOGIN'});
                }else{
                    dispatch({type: 'LOGIN_ERR'});
                }
            })

            
            .catch( (err) =>{
                console.log(err);
                dispatch({type: 'LOGIN_ERR'});
            } )
        },
       logout: () =>{
            localStorage.setItem("auth",false);
            localStorage.setItem('nombre_usuario', "");
            localStorage.setItem('userId', "");
            dispatch({type: 'LOGOUT'})
        }
    }
}

export default AuthA;