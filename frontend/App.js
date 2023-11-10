import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/LoginPage';
import Cadastro from './src/screens/RegisterPage';
import { UsersProvider } from './context/UserContext.js';
import HomePage from './src/screens/HomePage';
import Menu from './src/screens/MenuPage';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <UsersProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#2A0C5F' }
        }}>
          <Stack.Screen name="menu" options={{ headerShown: false }} component={Menu} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="home" options={{ headerShown: false }} component={HomePage} />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
} 