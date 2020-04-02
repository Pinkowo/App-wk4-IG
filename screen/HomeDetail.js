import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeDetail =({post,navigation}) => {
    return(
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri:post.profile
                    }}
                />
                <Image 
                    style={styles.hamburgerStyle}
                    source={{
                        uri:"https://github.com/Pinkowo/App-wk4-IG/blob/master/pics/post/icons/hamburger.png?raw=true"
                    }}
                />
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri:post.pic
                    }}
                />
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.postBarStyle}
                    source={{
                        uri:"https://github.com/Pinkowo/App-wk4-IG/blob/master/pics/post/icons/post_bar.png?raw=true"
                    }}
                />
            </View>
            <Text style={styles.postContentStyle}>{post.like}個讚</Text>
            <Text style={{marginLeft:15,marginRight:15}}>
                <Text style={{fontWeight:"bold"}}>{post.id}</Text>
                {post.content}
                <Text style={{color:"#999999"}}>......更多內容</Text>
            </Text>
            <Text style={{color:"#999999",marginLeft:15}}>查看全部{post.comment}則留言</Text>
            <View style={{marginLeft:15,marginTop:5}}>
                <Text style={styles.commentReply}>
                <Image
                    style={styles.commentProfile}
                    source={{
                        uri:"https://github.com/Pinkowo/App-wk4-IG/blob/master/pics/post/pics/myProfile.png?raw=true"
                    }}
                />
                {' '}留言回應......{'                            '}
                <Image
                    style={styles.commentIcon}
                    source={{
                        uri:"https://github.com/Pinkowo/App-wk4-IG/blob/master/pics/post/icons/post_comment.png?raw=true"
                    }}
                />
                </Text>
            </View>
            <Text style={{margin:15,fontSize:10,marginTop:5}}>
                <Text style={{color:"#999999"}}>{post.days}天前 • </Text><Text>翻譯年糕</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
    cardContainerStyle:{
        marginTop:10,
        backgroundColor:"#fff",
    },
    thumbnailContainerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    cardSectionStyle:{
        padding:5,
        backgroundColor:"#fff",
    },
    thumbnailStyle:{
        height:30,
        width:30,
        marginLeft:10,
        //marginTop:5,
        marginRight:330
    },
    imageStyle:{
        height:500,
        width:null,
    },
    hamburgerStyle:{
        height:20,
        width:20,
        //marginTop:2,
    },
    postBarStyle:{
        height:30,
        width:null
    },
    postContentStyle:{
        fontWeight:"bold",
        marginLeft:15,
    },
    commentProfile:{
        height:30,
        width:30,
    },
    commentReply:{
        color:"#999999",
        height:40,
        fontSize:12
    },
    commentIcon:{
        height:30,
        width:100,
    }
});

export default HomeDetail;