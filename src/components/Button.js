// Import Libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make components
const Button = (props) => {    
    const { buttonText, onPress } = props; 
    const { buttonStyle, textStyle } = styles; 

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>        
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        backgroundColor: '#a350d0',
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
};

// Make the component available for the app
export default Button;
