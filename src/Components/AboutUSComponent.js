import React, { useState } from 'react';
import housing from '../imagenes/housing.png'
import home from '../imagenes/home.png'
import money from '../imagenes/bolsa-de-dinero.png'
import NavbarComponent from './navbarComponent';
import '../css/aboutusComponent.css'

function AboutUSComponent(){    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <html>
       
        <meta name="author" content="Beescript"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <body>
        <NavbarComponent/>
            <header id="about_title">
                <h1>¿Qué hacemos? </h1>
            </header>
            <div id="contenedor_ideas">
                <div className="ideas odd">
                    <div className="imagen_descp">
                        <img src={housing} alt="house" width="700px" height="300px"/>
                    </div>
                    <div className="content">
                        <p>
                        Con <strong>UrbazApp </strong> ahora es posible el comercio entre urbanizaciones.<br/>
                        Puedes tener la seguridad de contactarte con proveedores honestos y
                        confiables que entregarán tu pedido en las mejores condiciones. ¡Tu comunidad te cuida! <br/>
                        Encuentra todo lo que necesitas, pídelo y espera en casa.
                        
                        </p>
                    </div>
                </div>

                <div className="ideas even">
                    <div className="content">
                        <p>
                        ¿Por qué ir tan lejos? ¡Encuentra productos cerca de ti! <br/>
                        Los residentes pueden comercializar artículos por medio de la plataforma, 
                        el valor de ellos incrementa de acuerdo a la distancia entre los interesados. 
                        Mientras más cercano este tu producto, menor es el importe ;)                         
                        </p>
                    </div>
                    <div className="imagen_descp">
                        <img src={home} alt="house" width="700px" height="200px"/>
                    </div>
                </div>

                <div className="ideas odd">
                    <div className="imagen_descp">
                    <img src={money} alt="house" width="700px" height="200px"/>
                    </div>
                    <div className="content">
                        <p>
                            No pierdas la oportunidad de emprender <br/>
                            ¿Fabricaste un nuevo producto? ¿Hay algo que ya no usas? ¿Tienes artículos importados? 
                            ¡Comercializalos en tu sector! Etiqueta el producto en una categoría, agrega una buena descripción, 
                            adjunta una fotografía y espera a tus clientes. 
                            
                        </p>
                    </div>
                </div>
            </div>
            </body>
        </html>
    );
}

export default AboutUSComponent
