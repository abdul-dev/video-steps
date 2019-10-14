/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Carousel from 'react-native-anchor-carousel';
import Video from 'react-native-video';

const data = [
  {backgroundColor: 'red'},
  {backgroundColor: 'green'},
  {backgroundColor: 'blue'},
  {backgroundColor: 'yellow'}
];

const {width} = Dimensions.get('window');

export default class App extends Component {
  renderItem = ({item, index}) => {
      const {backgroundColor} = item;
      return (
          <TouchableOpacity
              style={[styles.item, {backgroundColor}]}
              onPress={() => {
                  this._carousel.scrollToIndex(index);
              }}
          >
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
          
       style={{width: 200, height: 200}} />

       <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}   // Can be a URL or a localfile.
       ref={(ref) => {
         {/* this.player = ref */}
       }}                                     
                     
       style={styles.backgroundVideo} />
              {/* <Text style={styles.text}>{index.toString()}</Text> */}
              <Text style={{fontWeight: 'bold'}}>  I am bold</Text>
          </TouchableOpacity>
      );
  };

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.carouselContainer}>
                  <Carousel
                      style={styles.carousel}
                      data={data}
                      renderItem={this.renderItem}
                      itemWidth={250}
                      
                      containerWidth={width}
                      //pagingEnable={false}
                      separatorWidth={20}
                      ref={(c) => {
                          this._carousel = c;
                      }}
                  />
              </View>
          </View>
      );
  }
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white'
},
backgroundVideo: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},
carouselContainer: {
    height: 300,
    width: width,
    borderWidth: 5,
    borderColor: 'white',
},
carousel: {
    flex: 1,
    backgroundColor: 'orange'
},
item: {
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
},
text: {
    fontSize: 100,
    fontWeight: 'bold'},



  scrollView: {
    backgroundColor: Colors.lighter,
  },
  carousel: {
    height: 200, 
} ,
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


