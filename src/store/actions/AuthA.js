import axios from 'axios';

const AuthA = (dispatch) =>{
    return {
        signup: (data) =>{
            axios.post(process.env.REACT_APP_REG_URL, data)
            .then( (res)=>{
                axios.post(process.env.REACT_APP_LOGIN_URL, data)
                .then( (res)=>{
                    localStorage.setItem('user', data.user)
                    localStorage.setItem('token', res.data.id)
                    localStorage.setItem('userId', res.data.userId)
                    dispatch({type: 'LOGIN'});
                })
                .catch( (err) =>{
                    console.log(err);
                    dispatch({type: 'LOGIN_ERR'});
                } )
            } )
            .catch( (err) =>{
                console.log(err);
                dispatch({type:'SINGUP_ERR'});
            })            
        },
        login: (data) =>{
            axios.get("http://localhost:3000/personas", data)
            .then(response => response.data)
            .then( (res)=> {

                for(let i=0; i<res.length; i++){
                    if(res[i].username===data.user && res[i].contrasena===data.password){
                        localStorage.setItem('user', data.user)
                        localStorage.setItem('nombre_usuario', res[i].nombre)
                        localStorage.setItem('userId', res[i].userId)
                        dispatch({type: 'LOGIN'});
                    }
                }
                
                dispatch({type: 'LOGIN_ERR'});
            })

            
            .catch( (err) =>{
                console.log(err);
                dispatch({type: 'LOGIN_ERR'});
            } )
        },
        logout: () =>{
            localStorage.clear()
            dispatch({type: 'LOGOUT'})
        }
    }
}

export default AuthA;