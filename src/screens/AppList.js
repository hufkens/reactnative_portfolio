import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './../components/ListItem';
import * as actions from './../actions';

class AppList extends Component { 

    static navigationOptions = {
        title: 'Wee Taps',
        headerStyle: {
            backgroundColor: '#eb5330',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };

    render() {       
        const { libraries } = this.props;
        const { appStyle } = styles;

        console.log(this.props);

        return (         
            <View style={appStyle}>   
                <FlatList 
                    data={libraries} 
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ListItem 
                            album={item} 
                            onPress={() => {
                                this.props.selectLibrary(item.id);
                                this.props.navigation.navigate('Details', { title: item.name });
                            }} 
                        />                    
                    )}
                />      
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
    appStyle: {  
        backgroundColor: '#eb5330',
        flex: 1
    }
  };  

export default connect(mapStateToProps, actions)(AppList);
