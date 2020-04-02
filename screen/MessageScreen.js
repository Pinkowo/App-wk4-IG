import React from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import headerData from "../json/header.json";


const MessageScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={{uri: headerData.MSPage.HeaderLeftUrl}}
                            style={styles.headerLeft}/>
                </TouchableOpacity>
                <Image source={{uri: headerData.MSPage.HeaderRightUrl}} style={styles.headerRight}/>               
            </View>
            <View>
                <Image
                    source={{uri: "https://github.com/Pinkowo/App-wk4-IG/blob/master/pics/message/mes_list.png?raw=true"}} 
                    style={styles.mesList}
                />
            </View>
            <View style={{marginTop:73}}>
                <Image  source={{uri: headerData.MSPage.bottomImage}} style={styles.bottom}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerRight:{
        marginTop:30,
        width: 360,
        height: 35
      },
      headerLeft:{
        marginTop:30,
        marginRight: 8,
        width: 40,
        height: 35
      },
      headerContentStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:420,
        height:70,
        backgroundColor:'#fafafa',
        elevation:4
    },
    bottom:{
        width: 420,
        height: 45,
      },
    mesList:{
        marginTop:10,
        width:400,
        height:600
    },
});
export default MessageScreen;
