// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import các file màn hình
import MainTab from './screens/MainTab'; 
import ProductListScreen from './screens/ExploreScreen'; 
import BeveragesScreen from './screens/Beverages'; 
import ProductDetail from './screens/ProductDetail'; 
// --- 1. IMPORT THÊM MÀN HÌNH ORDER ACCEPTED ---
import OrderAcceptedScreen from './screens/OrderAcceptedScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          {/* Màn hình chính chứa thanh Bottom Tab */}
          <Stack.Screen name="Main" component={MainTab} />
          
          {/* Màn hình danh sách Trứng/Mì (Màn hình Explore cũ) */}
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          
          {/* Màn hình danh sách đồ uống Beverages */}
          <Stack.Screen name="Beverages" component={BeveragesScreen} />
          
          {/* Màn hình chi tiết sản phẩm */}
          <Stack.Screen name="ProductDetail" component={ProductDetail} />

          {/* --- 2. ĐĂNG KÝ MÀN HÌNH ORDER ACCEPTED --- */}
          <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}