/**
 * Created by zhaorc on 2017/6/20.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    Alert,
} from 'react-native';
import styles from '../Styles/main';
import MovieDetail from './MovieDetail';
import {StackNavigator} from 'react-navigation';


const REQUEST_URL = "https://api.douban.com/v2/movie/top250";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(request => request.json())
            .then(requestData => {
                this.setState({
                    movies: this.state.movies.cloneWithRows(requestData.subjects),
                    loaded: true
                });
            })
    }

    showMovieDetail(movie) {
        this.props.navigation.navigate('Detail',{title:movie.title,
        id:movie.id});
        //Alert.alert('list='+movie.title);
    };

    renderMovieList(movie) {
        return (
            <TouchableHighlight underlayColor="rgba(36,24,38,0.1)"
                                onPress={() => this.showMovieDetail(movie)}
            >
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image source={{uri: movie.images.large}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>
                            {movie.title}
                        </Text>
                        <Text style={styles.itemMeta}>
                            {movie.original_title} ({movie.year})
                        </Text>
                        <Text style={styles.redText}>
                            {movie.rating.average}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    static navigationOptions = {
        headerTitle: '推荐电影',
        headerStyle:{
            backgroundColor:'darkslateblue'
        },
        headerTitleStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
            alignSelf:'center',
        }
    };
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
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={this.renderMovieList.bind(this)}
                />
            </View>
        );
    }
}
const MovieList = StackNavigator({
    Home: {screen: HomeScreen},
    Detail: {screen: MovieDetail},
});
export {MovieList as default};
