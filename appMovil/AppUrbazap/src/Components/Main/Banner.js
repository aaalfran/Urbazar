import React from "react"
import { View, ScrollView, Dimensions, Image } from "react-native"
import Carousel from 'react-native-snap-carousel';
import Banner1 from '../../images/ban1.png';
import Banner2 from '../../images/ban7.png';
import Banner3 from '../../images/ban9.png';
import CardsProducts from './CardsProducts';
import data from '../../../enviroment';
class Banner extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              image: Banner1,
          },
          {
            image: Banner2,
          },
          {
            image: Banner3,
          },
          
        ]
      }
    }

    _renderItem({item,index}){
        const widthh= Dimensions.get('window').width
        return (
            <Image source= {item.image} style={{
              width: widthh,
              height: 200,}}
            />

        )
    }

    listaCarrito = []

    render(){
        return(
            <View style={{flex:19}}>
                <ScrollView>
                    {/*Banner principal */}
                    <View style={{ marginTop:5, flexDirection:'row', justifyContent: 'center', }}>
                        <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    </View>

                    {/**Secciones */}
<<<<<<< HEAD
                    <CardsProducts nameSection="Reciente" ruta={`http://${data.number}/productos` } navigation={this.props}/>
                    <CardsProducts nameSection="Promociones" ruta={`http://${data.number}/productos`} navigation={this.props}/>
                    <CardsProducts nameSection="Cerca de ti" ruta={`http://${data.number}/productos`} navigation={this.props}/>
=======
                    <CardsProducts nameSection="Reciente" ruta={`${data.url}/productos` } navigation={this.props}/>
                    <CardsProducts nameSection="Promociones" ruta={`${data.url}/productos`} navigation={this.props}/>
                    <CardsProducts nameSection="Cerca de ti" ruta={`${data.url}/productos`} navigation={this.props}/>
>>>>>>> b132d7c8f249a0fb211d3bdf94fab04e87c5e2d1

                </ScrollView>


            </View>
        )
    }
}

export default Banner;