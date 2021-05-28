import React,{useState} from 'react';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
const Formulario = ({user}) => {
    const [email,setEmail] = useState(user.correo);
    const [usuario,setUser] = useState(user.username);
    const [nombre,setNombre] = useState(user.nombre);
    const [telefono,setTelefono] = useState(user.telefono);
    const [edad,setEdad] = useState(user.edad);
    return ( 
        <Form>
        <FormGroup>
        <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Correo..." 
            value={email} onChange={e =>{setEmail(e.target.value)}}/>
        </FormGroup>
        <FormGroup>
        <Label for="username">Usuario</Label>
            <Input type="text" name="username" id="user" placeholder="Usuario..." 
            value={usuario} onChange={e =>{setUser(e.target.value)}}/>
        </FormGroup>
        <FormGroup>
        <Label for="nombre">Nombre</Label>
            <Input type="text" name="nombre" id="nombre" placeholder="Nombre..." 
            value={nombre}  onChange={e =>{setNombre(e.target.value)}}/>
        </FormGroup>
        <FormGroup>
        <Label for="telefono">Teléfono</Label>
            <Input type="text" name="telefono" id="telefono" placeholder="+593 99 999 9999"
            value={telefono}  onChange={e =>{setTelefono(e.target.value)}} />
        </FormGroup>
        <FormGroup>
        <Label for="edad">Edad</Label>
            <Input type="text" name="edad" id="edad" placeholder="Edad..." 
            value={edad}  onChange={e =>{setEdad(e.target.value)}}/>
        </FormGroup>
        <div className="d-flex justify-content-center">
        <button className="btnUapp" type="submit">Actualizar Datos</button>
        </div>
    </Form>
    );
}

export default Formulario;
