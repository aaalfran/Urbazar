import { fontSize } from "styled-system";

export default {

    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    bgContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#A0A0A0'
    },

    userContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        
    },

    userImagen: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    userNombre: {
        marginVertical:5,
    },

    userTitulo: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 25
    },

    userSubTitulo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ed4258',
        paddingVertical: 5,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
       marginVertical: 15,
    },

    iconoContainer: {
        flex: 1.5,
        justifyContent: 'center'
    },

    tituloContainer: {
        flex: 8.5,
        justifyContent: 'center',
        paddingLeft: 9
    },

    tituloTxt: {
        fontSize: 16,
        color: "#506048"
    },
    difuminado:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    fondoImagen:{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    btnSignOut:{
        flex: 8.5,
        flexDirection:'row',
        justifyContent: 'center',
        paddingLeft: 9,
        backgroundColor: "#02023d",
        paddingTop: 8,
        paddingBottom: 8,
    },
    tituloOut: {
        fontSize: 14,
        color: "white",
        paddingLeft: 5,
    },
    sepCategorias: {
        flex: 8.5,
        flexDirection:'row',
        paddingLeft: 9,
        paddingTop: 12,
        paddingBottom: 15,
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "#e6e6e6",
    },
    Textsep:{
        color: "#6e6e6e",
        fontSize: 16,
    }
}