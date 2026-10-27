// Número 1
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
// function TelaInicial({ navigation }) {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Tela Inicial</Text>
// <TouchableOpacity style={estilos.botao}
// onPress={() => navigation.navigate('Detalhes')}>
// <Text style={estilos.textoBotao}>Ir para Detalhes</Text>
// </TouchableOpacity>
// </View>
// );
// }
// function TelaDetalhes({ navigation }) {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Tela de Detalhes</Text>
// <TouchableOpacity style={estilos.botao}
// onPress={() => navigation.goBack()}>
// <Text style={estilos.textoBotao}>Voltar</Text>
// </TouchableOpacity>
// </View>

// );
// }
// export default function App() {
// return (
// <NavigationContainer>
// <Stack.Navigator initialRouteName="Inicio">
// <Stack.Screen name="Inicio" component={TelaInicial}
// options={{ title: 'Home' }} />
// <Stack.Screen name="Detalhes" component={TelaDetalhes} />
// </Stack.Navigator>
// </NavigationContainer>
// );
// }
// const estilos = StyleSheet.create({
// tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
// botao: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8 },
// textoBotao: { color: '#fff', fontSize: 16 },
// });

//Número 2

// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
//   const Stack = createNativeStackNavigator();
//   const produtos = [
//     { id: '1', nome: 'Notebook', preco: 3500, descricao: 'Notebook 16GB RAM' },
//     { id: '2', nome: 'Smartphone', preco: 2200, descricao: 'Tela 6.5", 128GB' },
//     { id: '3', nome: 'Fone Bluetooth', preco: 350, descricao: 'Cancelamento de ruído' },
//   ];
//   function TelaLista({ navigation }) {
//     return (
//       <View style={estilos.container}>
//         <FlatList data={produtos} keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//         <TouchableOpacity style={estilos.item}
//           onPress={() => navigation.navigate('Produto', {
//           nome: item.nome, preco: item.preco, descricao: item.descricao,
//         })}>
//           <Text style={estilos.nomeItem}>{item.nome}</Text>
//           <Text>R$ {item.preco.toFixed(2)}</Text>
//         </TouchableOpacity>
//           )} />
//       </View>
//     );
//   }


// function TelaProduto({ route, navigation }) {
// const { nome, preco, descricao } = route.params;
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>{nome}</Text>
// <Text style={estilos.preco}>R$ {preco.toFixed(2)}</Text>
// <Text style={estilos.descricao}>{descricao}</Text>
// <TouchableOpacity style={estilos.botao}
// onPress={() => navigation.goBack()}>
// <Text style={estilos.textoBotao}>Voltar à lista</Text>
// </TouchableOpacity>
// </View>
// );
// }

// export default function App() {
// return (
// <NavigationContainer>
// <Stack.Navigator>
// <Stack.Screen name="Lista" component={TelaLista}
// options={{ title: 'Produtos' }} />
// <Stack.Screen name="Produto" component={TelaProduto} />
// </Stack.Navigator>
// </NavigationContainer>
// );
// }

// const estilos = StyleSheet.create({
// container: { flex: 1, paddingTop: 10 },
// item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
// nomeItem: { fontSize: 16, fontWeight: 'bold' },
// tela: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
// titulo: { fontSize: 26, fontWeight: 'bold' },
// preco: { fontSize: 22, color: '#28a745', marginVertical: 10 },
// descricao: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
// botao: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8 },
// textoBotao: { color: '#fff', fontSize: 16 },
// });

// Número 3

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

// function TelaHome() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.icone}> </Text>
// <Text style={estilos.titulo}>Home</Text>
// </View>
// );
// }

// function TelaBusca() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.icone}> </Text>
// <Text style={estilos.titulo}>Busca</Text>
// </View>
// );
// }

// function TelaPerfil() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.icone}> </Text>
// <Text style={estilos.titulo}>Perfil</Text>
// </View>
// );
// }
// export default function App() {
// return (
// <NavigationContainer>
// <Tab.Navigator screenOptions={{
// tabBarActiveTintColor: '#007AFF',
// tabBarInactiveTintColor: '#999' }}>
// <Tab.Screen name="Home" component={TelaHome}
// options={{ tabBarLabel: 'Início',
// tabBarIcon: () => <Text> </Text> }} />
// <Tab.Screen name="Busca" component={TelaBusca}
// options={{ tabBarIcon: () => <Text> </Text> }} />
// <Tab.Screen name="Perfil" component={TelaPerfil}
// options={{ tabBarIcon: () => <Text> </Text> }} />
// </Tab.Navigator>
// </NavigationContainer>
// );
// }
// const estilos = StyleSheet.create({
// tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// icone: { fontSize: 48, marginBottom: 8 },
// titulo: { fontSize: 22, fontWeight: 'bold' },
// });

//Número 4

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
// function TelaHome() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Página Inicial</Text>
// <Text>Deslize da esquerda para abrir o menu</Text>
// </View>
// );
// }
// function TelaConfiguracoes() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Configurações</Text>
// </View>
// );
// }
// function TelaSobre() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Sobre o App</Text>
// <Text>Versão 1.0.0</Text>
// </View>
// );
// }
// export default function App() {
// return (
// <NavigationContainer>
// <Drawer.Navigator initialRouteName="Home">
// <Drawer.Screen name="Home" component={TelaHome}
// options={{ title: 'Início' }} />
// <Drawer.Screen name="Config" component={TelaConfiguracoes}
// options={{ title: 'Configurações' }} />
// <Drawer.Screen name="Sobre" component={TelaSobre} />
// </Drawer.Navigator>
// </NavigationContainer>
// );
// }
// const estilos = StyleSheet.create({
// tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
// });

// // Número 5
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// function TelaHome({ navigation }) {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Home</Text>
// <TouchableOpacity style={estilos.botao}
// onPress={() => navigation.navigate('Notificacoes')}>
// <Text style={estilos.textoBotao}>Ver Notificações</Text>
// </TouchableOpacity>
// </View>
// );
// }
// function TelaNotificacoes() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Notificações</Text>
// <Text>Você tem 3 novas mensagens</Text>
// </View>
// );
// }
// function TelaPerfil() {
// return (
// <View style={estilos.tela}>
// <Text style={estilos.titulo}>Perfil</Text>
// </View>
// );
// }
// function HomeStack() {
// return (
// <Stack.Navigator>
// <Stack.Screen name="HomeScreen" component={TelaHome}
// options={{ title: 'Início' }} />
// <Stack.Screen name="Notificacoes" component={TelaNotificacoes} />
// </Stack.Navigator>
// );
// }
// export default function App() {
// return (
// <NavigationContainer>
// <Tab.Navigator screenOptions={{ headerShown: false }}>
// <Tab.Screen name="HomeTab" component={HomeStack}
// options={{ tabBarLabel: 'Home', tabBarIcon: () => <Text> </Text> }} />
// <Tab.Screen name="PerfilTab" component={TelaPerfil}
// options={{ tabBarLabel: 'Perfil', tabBarIcon: () => <Text> </Text> />
// </Tab.Navigator>
// </NavigationContainer>
// );
// }
// const estilos = StyleSheet.create({
// tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
// botao: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, marginTop: 10 },
// textoBotao: { color: '#fff', fontSize: 16 },
// });