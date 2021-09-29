export default {
    oculto : {
        height: 0,
        width: 0,
    },
    sombra : {
        shadowOpacity : 0.1,
        shadowRadius : 0,
        shadowOffset :{
            width :0,
            height :0,
        }
    },
    carta : {
        marginTop: 10,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        flexDirection:'row',
        backgroundColor: "#FFFFFF",
        paddingTop: 10,
        paddingBottom: 10,
        

    },
    titulo:{
        fontSize: 25,
    },
    texto:{
        fontSize:15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
}