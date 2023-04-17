import React from 'react';
import { StyleSheet, View, Animated, Image } from 'react-native';

const SplashScreen = () => {
    const opacity = new Animated.Value(0);
  
    React.useEffect(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, []);
  
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.logo, { opacity: opacity }]}
          source={require('../assets/deco-window.png')}
        />
      </View>
    );
  };
  
  export default SplashScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    logo: {
      width: 200,
      height: 200,
    },
  });
  
    