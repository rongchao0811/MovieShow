/**
 * Created by zhaorc on 2017/6/20.
 */
import React from 'react';
import {
    StyleSheet
} from 'react-native';

let styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        flex:1,
        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.1)',
        paddingTop:6,
        paddingBottom:6,
    },
    itemContent:{
        flex:1,
        marginLeft:13,
        marginTop:6,
    },
    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
    },
    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6
    },
    redText:{
        fontSize:15,
        color:"#db2828"
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        width: 20,
        height: 20,
        tintColor:'white',
    },
    tabContainer:{
        backgroundColor:'darkslateblue',
    },
    tabText: {
        color: "white",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    overLay: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
    },
    overLayHeader: {
        fontSize: 33,
        fontWeight: '200',
        fontFamily: 'Helvetica Neve',
        color: '#eae7ff',
        padding: 10
    },
    overLaySubHeader: {
        fontSize: 20,
        fontWeight: '200',
        fontFamily: 'Helvetica Neve',
        color: '#eae7ff',
        padding: 10
    },
    backgrondImage: {
        flex: 1
    },
    container: {
        flexDirection:'row',
        backgroundColor: '#eae7ff',
        flex: 1
    },
    itemText: {
        fontSize: 26,
        fontWeight: '700',
        color: '#332817'
    },
    image: {
        width: 99,
        height: 138,
        margin: 6
    },
    titleContainer:{
        flex:1,
        flexDirection:'column',
    },
    title:{
        height:50,
        backgroundColor:"darkslateblue",
    },
    titleText:{
        textAlign:'center',
        marginTop:10,
        fontSize:18,
        fontWeight:'300',
        color: 'rgba(255,255,255,0.8)',
    }
});

module.exports = styles;