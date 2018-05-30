import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    Image, 
    Text, 
    TouchableWithoutFeedback
} from 'react-native';
import CardSection from './CardSection';

class ListItem extends Component {    

    render() {     
        const { album, onPress } = this.props;
        const { 
            headerContentStyle, 
            thumbnailStyle, 
            textStyle, 
            titleStyle, 
            thumbnailContainerStyle,
            cardSectionStyle
        } = styles;

        return (    
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={cardSectionStyle}>
                    <CardSection >
                        <View style={thumbnailContainerStyle}>                    
                            <Image 
                                style={thumbnailStyle} 
                                source={{ uri: album.iphone.preview_icon }} 
                            />                    
                        </View>
                        <View style={headerContentStyle}>
                            <Text style={titleStyle}>{album.name}</Text>
                            <Text style={textStyle}>by Wee Taps</Text>
                        </View>                
                    </CardSection>                     
                </View>                                   
            </TouchableWithoutFeedback>            
        );
    }    
}

const styles = {
    cardSectionStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#c43616'
    },
    headerContentStyle: {    
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 8
    },
    thumbnailStyle: {    
        width: 60,
        height: 60
    },
    thumbnailContainerStyle: {    
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    titleStyle: {    
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18        
    }, 
    textStyle: {    
        color: 'white'      
    }
};

export default connect()(ListItem);
