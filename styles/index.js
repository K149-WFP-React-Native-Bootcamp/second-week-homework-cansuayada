import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#81CACF',
        alignItems: 'center',
        justifyContent:'center',
        fontFamily: 'sans-serif',
        padding: 5
      },
      textArea: {
        flexDirection: 'row',
        padding: 1,
        marginTop: 20,
      },
      baslik: {
        color: 'rgb(53, 87, 100)',
        fontSize: 35,
        marginBottom: 5,
      },
      input: {
        borderColor: '#355764',
        borderTopLeftRadius:7,
        borderBottomLeftRadius:7,
        textAlign: 'left',
        fontSize: 20,
        padding: 7,
        color: '#355764',
        width: 230,
        backgroundColor: '#355764',
        color:'#fff'

     },
     btn: {
      borderWidth:0.7,
      borderColor:'#355764',
      padding: 3,
      width:50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFEA11',
      borderTopRightRadius:7,
      borderBottomRightRadius:7,
    },
     btnText: {
      color: '#355764',
      fontSize:17,
     },
     flatlist: {
      marginTop: 10,
      borderRadius: 7,
      width: 285,
      backgroundColor: '#355764',
      color: '#fff'
     }
    
});