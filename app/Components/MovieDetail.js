/**
 * Created by zhaorc on 2017/6/21.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Alert,
    ActivityIndicator,
} from 'react-native';
import styles from '../Styles/main';
import {StackNavigator} from 'react-navigation';

const REQUEST_URL = "https://api.douban.com/v2/movie/subject/";
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            movieDetail:'',
            loaded:false
        }
        const { params } = this.props.navigation.state;
        this.fetchData('https://api.douban.com/v2/movie/subject/'+params.id);
    };
    fetchData(url) {
        fetch(url)
            .then(request => request.json())
            .then(requestData => {
                this.setState({
                    movieDetail: requestData,
                    loaded:true
                });
            })
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: `${navigation.state.params.title}`,
        headerStyle:{
            backgroundColor:'darkslateblue'
        },
        headerTitleStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
            alignSelf:'center',
        }
    });
    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator/>
                    </View>
                </View>
            );
        }
        return (
            <View style={[styles.container,{paddingTop:70}]}>
                <View style={[styles.item,{flexDirection:'column'}]}>
                    <Text>{this.state.movieDetail.summary}</Text>
                </View>
            </View>
        );
    }
}
const MovieDetail = StackNavigator({
    Detail: {screen: Detail},
});
export {MovieDetail as default};