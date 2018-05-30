import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class AlbumDetail extends Component { 

    static navigationOptions = {
        title: 'Detail'
    };

    render() {       
        return (         
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
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

export default connect(mapStateToProps)(AlbumDetail);
