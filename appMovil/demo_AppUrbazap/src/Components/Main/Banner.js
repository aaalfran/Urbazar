import React from "react"
import { View, ScrollView, Dimensions, Image } from "react-native"
import Carousel from 'react-native-snap-carousel';
import Banner1 from '../../images/ban1.png';
import Banner2 from '../../images/ban7.png';
import Banner3 from '../../images/ban9.png';
import CardsProducts from './CardsProducts';

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
        const widthh= Dimensions.get('window').width - 20;
        return (
            <Image source= {item.image} style={{
              width: widthh,
              height: 200,
              borderRadius: 10,}}
            />

        )
    }

    listaCarrito = []

    render(){
        return(
            <View style={{flex:20.5, padding: 10, backgroundColor: '#ffffff'}}>
                <ScrollView>
                    {/*Banner principal */}
                    <View style={{flexDirection:'row', justifyContent: 'center', borderRadius: 10 }}>
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
                    <CardsProducts nameSection="Reciente" navigation={this.props}/>
                    <CardsProducts nameSection="Promociones" navigation={this.props}/>
                    <CardsProducts nameSection="Cerca de ti" navigation={this.props}/>

                </ScrollView>


            </View>
        )
    }
}

export default Banner;