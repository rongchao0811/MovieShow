/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    Text,
} from 'react-native';

//import TabNavigator from 'react-native-tab-navigator';
import { TabNavigator } from "react-navigation";

import styles from './app/Styles/main';
import USBox from './app/Components/USBox';
import Featured from  './app/Components/Featured';

/*class MovieTalk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '推荐'
        };
    }
    render() {
        return (
           /<TabNavigator tabBarStyle={styles.tabContainer}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '推荐电影'}
                    title="推荐电影"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require('./app/Assets/img/star.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('./app/Assets/img/starActive.png')}/>}
                    onPress={() => this.setState({selectedTab: '推荐'})}>
                    <Featured/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '北美票房'}
                    title="北美票房"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require('./app/Assets/img/earth.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('./app/Assets/img/earthActive.png')}/>}
                    onPress={() => this.setState({selectedTab: '北美票房'})}>
                    <USBox/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}*/
class AdviceMovie extends React.Component {
    render() {
        return <Featured/>
    }
}

class InternalMovie extends React.Component {
    render() {
        return <USBox/>
    }
}
class TabBarItem extends Component {
    render() {
        return(
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                   style={ { tintColor:this.props.tintColor,width:25,height:25 } }
            />
        )
    }

}
const MovieTalk = TabNavigator({
    AdviceMovie: {
        screen: AdviceMovie,
        navigationOptions:{
            title:'推荐电影',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./app/Assets/img/star.png')}
                    selectedImage={require('./app/Assets/img/starActive.png')}
                />
            )
        }
    },
    InternalMovie: {
        screen: InternalMovie,
        navigationOptions:{
            title:'北美票房',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./app/Assets/img/earth.png')}
                    selectedImage={require('./app/Assets/img/earthActive.png')}
                />
            )
        }
    },
},{
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    tabBarOptions:{
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: 'darkslateblue', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    }
});

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
