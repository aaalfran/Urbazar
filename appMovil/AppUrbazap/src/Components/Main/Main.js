import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBarComponent from "../navBar/navbarComponent";
import banner1 from '../../images/ban1.png';
import banner7 from '../../images/ban7.png';
import banner9 from '../../images/ban9.png';
import CategoriaComponent from '../navBar/CategoriaComponent';
import {UncontrolledCarousel, Col} from 'reactstrap';
import LoadProducts from "./LoadProducts";


const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})



const Main = () => {

    const items = [
        {
          src: banner1,
          caption: '',
          altText: 'Slide 1',
          key: '1'
        },    
        {
          src: banner9,
          caption: '',
          altText: 'Slide 3',
          key: '2'
        },
        {
          src: banner7,
          caption: '',
          altText: 'Slide 3',
          key: '3'
        }
      ];

      
  return (
    <View>
        
      <NavBarComponent/>
      <CategoriaComponent/>
      {/* banner */}
      <section className='banner_container'>
          <Col xs='12' md='12' lg='12'>
            <UncontrolledCarousel items={items} className='banner'/>
          </Col>
          
        </section>

        <section className='productos_container'>
          <div className='list_productos' >
            <h6 data-intro='En esta sección puedes encontrar
                prodcutos recientes en el catálogo' >Recientes</h6>
            <hr className="my-2" />
            
            <div className='productos mt-5 carousel'>
              {LoadProducts("http://192.168.100.4:3000/productos")}
            </div>
          </div>
          <div className='list_productos' >
            <h6 data-intro='Elige entre los productos más destacados de la Urbanización.'>Lo más destacado</h6>
            <hr className="my-2" />
            <div className='productos'>
            {LoadProducts("http://192.168.100.4:3000/productos")}
            </div>
          </div>
          <div className='list_productos' >
            <h6 data-intro='¿Por qué ir tan lejos? Encuentra productos cerca de tu ubicación.'>Cerca de ti</h6>
            <hr className="my-2" />
            <div className='productos'>
            {LoadProducts("http://192.168.100.4:3000/productos")}
            </div>
          </div>
          <div className='list_productos'>
            <h6  data-intro='No te pierdas las promociones que UrbazApp tiene para ti.'>Promociones</h6>
            <hr className="my-2" />
            <div className='productos'>
            {LoadProducts("http://192.168.100.4:3000/productos")}
            </div>
          </div>
        </section>


    </View>
  );
}

export default Main;