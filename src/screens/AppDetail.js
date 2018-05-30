import React, { Component } from 'react';
import { 
    View, 
    Image, 
    TouchableOpacity, 
    Linking
} from 'react-native';
import Video from 'react-native-video';
import { connect } from 'react-redux';

import CardSection from './../components/CardSection';
import Button from './../components/Button';


class AppDetail extends Component { 

    // static navigationOptions = ({ navigation }) => ({
    //     title: `${navigation.state.params.title}`
    // });

    render() {  
        const { libraries, selectedId } = this.props;
        const { 
            thumbnailVideoStyle, 
            bodyContentStyle,
            cardStyle,
            backgroundImageStyle        
        } = styles;

        const album = libraries.filter(item => item.id === selectedId)[0];

        return (         
            <View style={bodyContentStyle}>
                <Image 
                    style={backgroundImageStyle}
                    blurRadius={5}
                    source={{ uri: album.iphone.background_portrait }}
                />
                <View style={cardStyle}>
                    <CardSection>
                        <TouchableOpacity style={thumbnailVideoStyle} >
                            <Video 
                                style={thumbnailVideoStyle}
                                poster={album.iphone.video_thumb}
                                source={{ uri: album.iphone.video_url }} 
                            />
                        </TouchableOpacity>
                    </CardSection>                    
                    <CardSection>
                        <Button 
                            onPress={() => Linking.openURL(album.link_app)}
                            buttonText={'Open'} 
                        /> */}
                        <Button 
                            onPress={() => Linking.openURL(album.link_web)}
                            buttonText={'App Store'} 
                        />                
                    </CardSection>  
                </View>   
            </View>      
        );
    }
}

function mapStateToProps(state) {
    return { 
        libraries: state.libraries,
        selectedId: state.selectedId
    };
}

const styles = {
    backgroundImageStyle: {    
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    bodyContentStyle: {    
        backgroundColor: '#c43616',
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8
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
    cardStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    } 
};

export default connect(mapStateToProps)(AppDetail);
