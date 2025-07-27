import React from "react";

import {
  View,  // view is a container that can hold other components
  Text,  // text is a component that displays text
  SafeAreaView  // safearea view is a component that ensures the content is visible on the screen
} from "react-native";

function App() {
  return ( // return is a keyword that returns the JSX element
    <SafeAreaView>  // safearea view is a component that ensures the content is visible on the screen
      <View>
        <Text>Hello World !</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;