import axios from 'axios';
import bcrypt from "bcryptjs";

const AuthA = (dispatch) => {
    return {

        login: (data) => {
            let feed = document.getElementById("FeedbackLogin");

            console.log(data)
            axios.post(`http://localhost:3000/login`, data)
                .then(response => {
                    if (response.status == 200) {
                        return response.data
                    }
                })
                .then(res => {
                    console.log(res)
                    localStorage.setItem('user', res.data.username);
                    localStorage.setItem('nombre_usuario', res.data.nombre);
                    localStorage.setItem('userId', res.data.id);
                    localStorage.setItem('auth', 1);
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('role', res.data.role);
                    
                    dispatch({ type: 'LOGIN' });
                
                })

                //.then( (res) => {
                //  console.log(res)
                //})
                .catch ( (err) => {
                    feed.innerHTML = "Usuario o clave incorrectas";
                    feed.style.backgroundColor="#FFC4CC";
                    feed.style.color="white";
                    console.log(err);
                    dispatch({ type: 'LOGIN_ERR' });
                } )
                {/*.then( (res)=> {
                let flag = false;
                let nombre ="";
                let userid = "";
                console.log(res.username);
                if(res.username===data.user && bcrypt.compare(data.password, res.contrasena)){
                    flag=true;
                    nombre = res.nombre;
                    userid = res.id;

                }
            console.log(nombre);
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
                }*/}
            

            
            
        },
        logout: () => {
            localStorage.setItem("auth", 0);
            localStorage.setItem('nombre_usuario', "");
            localStorage.setItem('userId', "");
            localStorage.setItem('role', "");
            localStorage.setItem('token', "");
            dispatch({ type: 'LOGOUT' })
        }
            }
        }

export default AuthA;