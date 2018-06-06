import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import Video from 'react-native-video';
import { connect } from 'react-redux';

import CardSection from './../components/CardSection';
import Button from './../components/Button';

class AppDetail extends Component {
  render() {
    const { libraries, selectedId } = this.props;
    const { thumbnailVideoStyle, bodyContentStyle, cardStyle, backgroundImageStyle } = styles;

    const album = libraries.filter(item => item.id === selectedId)[0];

    return (
      <View style={bodyContentStyle}>
        <Image style={backgroundImageStyle} blurRadius={5} source={{ uri: album.iphone.background_portrait }} />
        <View style={cardStyle}>
          <CardSection>
            <TouchableOpacity
              style={thumbnailVideoStyle}
              onPress={() => {
                console.log('pressed');
                this.player.presentFullscreenPlayer(true);
              }}
            >
              <Video
                ref={ref => {
                  this.player = ref;
                }}
                resizeMode="cover"
                style={thumbnailVideoStyle}
                poster={album.iphone.video_thumb}
                source={{ uri: album.iphone.video_url }}
                onBuffer={() => console.log('onBuffer')}
                onLoadStart={() => console.log('onLoadStart')}
                onLoad={() => console.log('onLoad')}
                onError={() => console.log(this.videoError)}
              />
            </TouchableOpacity>
          </CardSection>
          <CardSection>
            <Button onPress={() => Linking.openURL(album.link_app)} buttonText={'Open'} /> */}
            <Button onPress={() => Linking.openURL(album.link_web)} buttonText={'App Store'} />
          </CardSection>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    libraries  : state.libraries,
    selectedId : state.selectedId,
  };
}

const styles = {
  backgroundImageStyle         : {
    flex       : 1,
    position   : 'absolute',
    width      : '100%',
    height     : '100%',
    resizeMode : 'cover',
  },
  bodyContentStyle             : {
    backgroundColor : '#c43616',
    flex            : 1,
  },
  thumbnailVideoStyle          : {
    flex            : 1,
    height          : 204,
    marginRight     : 2,
    marginLeft      : 2,
    borderRadius    : 5,
    backgroundColor : 'white',
  },
  thumbnailVideoContainerStyle : {
    justifyContent : 'center',
    alignItems     : 'center',
  },
  cardStyle                    : {
    flex           : 1,
    width          : '100%',
    height         : '100%',
    justifyContent : 'center',
  },
};

export default connect(mapStateToProps)(AppDetail);
