// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make components
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {  
        paddingTop: 15,
        height: 60,
        alignItems: 'center',        
        justifyContent: 'center',        
        backgroundColor: '#eb5330',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
};

// Make the component available for the app
export default Header;
