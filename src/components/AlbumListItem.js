import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    Image, 
    Text, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    Linking,
    LayoutAnimation
} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

class AlbumListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }    

    renderDescription() {
        const { album, expanded } = this.props;
        const { thumbnailVideoStyle, bodyContentStyle } = styles;

        if (expanded) {
            return (
                <View style={bodyContentStyle}>
                    <CardSection>
                        <TouchableOpacity style={thumbnailVideoStyle} >
                            <Image 
                                style={thumbnailVideoStyle} 
                                source={{ uri: album.iphone.video_thumb }} 
                            />
                        </TouchableOpacity>
                    </CardSection>                    
                    <CardSection>
                        <Button 
                            onPress={() => Linking.openURL(album.link_app)}
                            buttonText={'Open'} 
                        />
                        <Button 
                            onPress={() => Linking.openURL(album.link_web)}
                            buttonText={'App Store'} 
                        />                
                    </CardSection>     
                </View>      
            );
        }
    }

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

function mapStateToProps(state, ownProps) {
    const expanded = state.selectedId === ownProps.album.id;
    return {         
        expanded
    };
}

const styles = {
    cardSectionStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#c43616'
    },
    bodyContentStyle: {    
        backgroundColor: '#c43616',
        paddingTop: 8,
        paddingBottom: 8
    },
    headerContentStyle: {    
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 8
    },
    thumbnailVideoStyle: {    
        flex: 1,
        height: 204, 
        marginRight: 2,
        marginLeft: 2, 
        borderRadius: 5
    },
    thumbnailVideoContainerStyle: {    
        justifyContent: 'center',
        alignItems: 'center'
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

export default connect(mapStateToProps)(AlbumListItem);
