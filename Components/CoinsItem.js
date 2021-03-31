import React from 'react'
import { View, Text,StyleSheet} from 'react-native' 

const CoinsItem = (item) =>{
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:16
    },

    row:{
        flexDirection:'row'
    },

    symbolText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        marginRight:16
    },
    nameText:{
        color:'white',
        fontSize:16,
        //marginRight:16
    },
    percentText:{
        color:'white',
        fontSize:16
    }

}
)

export default CoinsItem;