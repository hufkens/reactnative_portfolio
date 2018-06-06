// Import Libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make components
const Card = props => {
  const { containterStyle } = styles;

  return <View style={containterStyle}>{props.children}</View>;
};

const styles = {
  containterStyle : {
    alignItems     : 'flex-start',
    justifyContent : 'center',
    elevation      : 1,
    marginLeft     : 5,
    marginRight    : 5,
    marginTop      : 10,
  },
};

// Make the component available for the app
export default Card;
