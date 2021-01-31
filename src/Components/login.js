

function verificar(username, password) {
        fetch("http://localhost:3000/personas")
        .then(response => response.json())
        .then(personas=>{
            personas.map(persona=>{
            if(persona.username===username && persona.contrasena===password){
                console.log("Autorizado");
            }
            })
            console.log("Acceso denegado");
        })
    
}