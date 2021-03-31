import React from 'react';
import { Component } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList , ActivityIndicator} from 'react-native' 
import Http from '../libs/http'
import CoinsItem from '../Components/CoinsItem'
import Colors from '../res/colors'

class CoinsScreen extends Component{

    state ={
        coins: [],
        loading: false
    }

    componentDidMount = async() => {
        this.setState({loading: true })
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");

        this.setState({coins: res.data, loading:false});
    }


    handlePress =() => {
        this.props.navigation.navigate('CoinDetail');

    }
    render(){

        const { coins, loading } = this.state;

        return(
            <View style={style.container}>
                { loading ? 
                    <ActivityIndicator
                    style={{marginTop:60}}
                    color="white" 
                    size="large" 
                    />

                    : null}
                <FlatList
                data= {coins}
                renderItem={({ item }) => CoinsItem(item)
                }
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.charade
    },
    titleText:{
        color:"white",
        textAlign:"center"
    },
    btn:{
        padding:8,
        backgroundColor:"blue",
        borderRadius: 8,
        margin: 16
    },
    btnText:{
        color:'white',
        textAlign:'center'
    }

});

export default CoinsScreen;