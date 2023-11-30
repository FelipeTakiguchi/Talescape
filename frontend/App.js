import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/LoginPage';
import Cadastro from './src/screens/RegisterPage';
import { UsersProvider } from './context/UserContext.js';
import HomePage from './src/screens/HomePage';
import Menu from './src/screens/MenuPage';
import ExplorePage from './src/screens/ExplorePage';
import EditProfilePage from './src/screens/EditProfilePage';
import SearchPage from './src/screens/SearchPage';
import LovedPage from './src/screens/LovedPage';
import CreatePoemPage from './src/screens/CreatePoemPage';
import HeaderComponent from './src/components/HeaderComponent';
import EditPoemsListPage from './src/screens/EditPoemsListPage';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <UsersProvider>
        <Stack.Navigator screenOptions={{
          header: () => <HeaderComponent></HeaderComponent>,
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#2A0C5F' }
        }}>
          <Stack.Screen name="menu" options={{ headerShown: false }} component={Menu} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="myPoems" component={EditPoemsListPage} />
          <Stack.Screen name="editProfile" options={{ headerShown: false }} component={EditProfilePage} />
          <Stack.Screen name="explore" component={ExplorePage} />
          <Stack.Screen name="loved" component={LovedPage} />
          <Stack.Screen name="createPoem" options={{ headerShown: false }} component={CreatePoemPage} />
          <Stack.Screen name="search" component={SearchPage} />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
} 