// Import Libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make components
const CardSection = (props) => {
    const { containterStyle } = styles;
    
    return (
        <View style={containterStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containterStyle: {    
        padding: 5,
        flexDirection: 'row',        
        justifyContent: 'flex-start',      
        position: 'relative'
    }
};


// Make the component available for the app
export default CardSection;
