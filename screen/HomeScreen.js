import React from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import HomeDetail from "./HomeDetail";
import postData from "../json/post.json";
import headerData from "../json/header.json";


const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <Image source={{uri: headerData.HMPage.HeaderLeftUrl}} style={styles.headerLeft}/>
                <TouchableOpacity
                    onPress={() => navigation.push('MessageScreen')}>
                    <Image source={{uri: headerData.HMPage.HeaderRightUrl}}
                            style={styles.headerRight}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={postData.postList}
            renderItem={({item}) => 
            <HomeDetail
                post={item}
                navigation={navigation}
                />}
            />
            <View>
                <Image  source={{uri: headerData.HMPage.bottomImage}} style={styles.bottom}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerLeft:{
        marginTop:20,
        marginLeft: 8,
        width: 360,
        height: 35
      },
      headerRight:{
        marginTop:20,
        marginRight: 8,
        marginLeft:5,
        width: 30,
        height: 35
      },
      headerContentStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:420,
        height:60,
        backgroundColor:'#fafafa',
        marginTop:10,
        elevation:4
    },
    bottom:{
        width: 420,
        height: 45,
      }
});
export default HomeScreen;