/**
 * Created by zhaorc on 2017/6/21.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import MovieList from './MovieList';

class Featured extends React.Component {

    render() {
        return <MovieList/>
    }
}

export {Featured as default};