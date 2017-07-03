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
    TouchableHighlight
} from 'react-native';
import styles from '../Styles/main';


const REQUEST_URL = "https://api.douban.com/v2/movie/us_box";

class USBox extends React.Component {
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

    renderMovieList(movie) {
        return (
            <TouchableHighlight underlayColor="rgba(36,24,38,0.1)"
                                onPress={() => {
                                    console.log('《${movie.subject.title}》被点了');
                                }}
            >
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image source={{uri: movie.subject.images.large}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>
                            {movie.subject.title}
                        </Text>
                        <Text style={styles.itemMeta}>
                            {movie.original_title} ({movie.subject.year})
                        </Text>
                        <Text style={styles.redText}>
                            {movie.subject.rating.average}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

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
                    renderRow={this.renderMovieList}
                />
            </View>
        );
    }
}

export {USBox as default};
