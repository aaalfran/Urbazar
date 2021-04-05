import React from 'react';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
const Formulario = ({user}) => {
    return (
        <Form>
        <FormGroup>
        <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Correo..." 
            value={user.correo}/>
        </FormGroup>
        <FormGroup>
        <Label for="username">Usuario</Label>
            <Input type="text" name="username" id="user" placeholder="Usuario..." 
            value={user.username}/>
        </FormGroup>
        <FormGroup>
        <Label for="nombre">Nombre</Label>
            <Input type="text" name="nombre" id="nombre" placeholder="Nombre..." 
            value={user.nombre}/>
        </FormGroup>
        <FormGroup>
        <Label for="telefono">Teléfono</Label>
            <Input type="text" name="telefono" id="telefono" placeholder="+593 99 999 9999"
            value={user.telefono} />
        </FormGroup>
        <FormGroup>
        <Label for="edad">Edad</Label>
            <Input type="text" name="edad" id="edad" placeholder="Edad..." 
            value={user.edad}/>
        </FormGroup>
        <div className="d-flex justify-content-center">
        <button className="btnUapp" type="submit">Actualizar Datos</button>
        </div>
    </Form>
    );
}

export default Formulario;
