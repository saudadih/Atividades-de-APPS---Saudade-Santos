// JavaScript source code
// 1. No terminal: npx create-expo-app navegacao-app
// 2. npx expo install @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack

// import React from 'react';
// import { Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial() {
//     return <Text>Olá, navegação!</Text>;
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Inicio" component={TelaInicial} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// at1
// import React from 'react';
// import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text>Olá, navegação!</Text>
//             <TouchableOpacity
//                 style={styles.botao}
//                 onPress={() => navigation.navigate('Detalhes')}
//             >
//                 <Text style={styles.textoBotao}>Ir para Detalhes</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaDetalhes({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text>Estou na tela de detalhes</Text>
//             <TouchableOpacity
//                 style={[styles.botao, { backgroundColor: '#dc3545' }]}
//                 onPress={() => navigation.goBack()}
//             >
//                 <Text style={styles.textoBotao}>Voltar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Inicio" component={TelaInicial} />
//                 <Stack.Screen name="Detalhes" component={TelaDetalhes} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//     botao: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginTop: 10 },
//     textoBotao: { color: '#fff', fontWeight: 'bold' }
// });
// ```[cite: 1, 2]

// ---

// #### 1.c — Customizando o header
// Adicionando a prop `options` para modificar os títulos e definindo a rota inicial[cite: 2]:
// ```javascript
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Inicio">
//                 <Stack.Screen
//                     name="Inicio"
//                     component={TelaInicial}
//                     options={{ title: 'Home' }}
//                 />
//                 <Stack.Screen
//                     name="Detalhes"
//                     component={TelaDetalhes}
//                     options={{ title: 'Detalhes do Item' }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 2]

// ---

// ### Exercício 2

// #### 2.a — Passando um parâmetro simples
// Enviando um dado digitado no `TextInput` para a próxima tela[cite: 2]:
// ```javascript
// import React, { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// function TelaInicial({ navigation }) {
//     const [nomeDigitado, setNomeDigitado] = useState('');

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//             <TextInput
//                 placeholder="Digite seu nome"
//                 value={nomeDigitado}
//                 onChangeText={setNomeDigitado}
//                 style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }}
//             />
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('Detalhes', { nome: nomeDigitado })}
//                 style={{ backgroundColor: '#007AFF', padding: 10, alignItems: 'center', borderRadius: 5 }}
//             >
//                 <Text style={{ color: '#fff' }}>Enviar Nome</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaDetalhes({ route }) {
//     const { nome } = route.params;

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 18 }}>Nome recebido: {nome}</Text>
//         </View>
//     );
// }
// ```[cite: 2]

// ---

// #### 2.b — Passando múltiplos parâmetros com desestruturação
// Trabalhando com múltiplos campos de cadastro[cite: 2, 3]:
// ```javascript
// import React, { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// function TelaInicial({ navigation }) {
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [idade, setIdade] = useState('');

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//             <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
//             <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
//             <TextInput placeholder="Idade" value={idade} onChangeText={setIdade} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('Detalhes', { nome, email, idade })}
//                 style={{ backgroundColor: '#007AFF', padding: 10, alignItems: 'center' }}
//             >
//                 <Text style={{ color: '#fff' }}>Cadastrar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaDetalhes({ route }) {
//     const { nome, email, idade } = route.params; [cite: 3]

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//             <Text>Nome: {nome}</Text>
//             <Text>E-mail: {email}</Text>
//             <Text>Idade: {idade}</Text>
//         </View>
//     );
// }
// ```[cite: 2, 3]

// ---

// #### 2.c — Lista que navega para detalhe
// Renderizando uma lista de produtos usando `FlatList`[cite: 3]:
// ```javascript
// import React from 'react';
// import { Text, TouchableOpacity, View, FlatList } from 'react-native';

// const produtos = [
//     { id: '1', nome: 'Camiseta', preco: 49.90, descricao: 'Camiseta algodão confortável' },
//     { id: '2', nome: 'Calça', preco: 119.90, descricao: 'Calça jeans tradicional' },
//     { id: '3', nome: 'Tênis', preco: 250.00, descricao: 'Tênis esportivo leve' },
//     { id: '4', nome: 'Boné', preco: 29.90, descricao: 'Boné aba curva' },
// ];

// function TelaLista({ navigation }) {
//     return (
//         <View style={{ flex: 1, padding: 20 }}>
//             <FlatList
//                 data={produtos}
//                 keyExtractor={(item) => item.id} Evita avisos no console[cite: 3]
//                 renderItem={({ item }) => (
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('Produto', {
//                             nome: item.nome,
//                             preco: item.preco,
//                             descricao: item.descricao,
//                         })}
//                         style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
//                     >
//                         <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
//                         <Text>R$ {item.preco.toFixed(2)}</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// }

// function TelaProduto({ route, navigation }) {
//     const { nome, preco, descricao } = route.params;

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{nome}</Text>
//             <Text>Preço: R$ {preco.toFixed(2)}</Text>
//             <Text>Descrição: {descricao}</Text>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, backgroundColor: '#6c757d', padding: 10, alignItems: 'center' }}>
//                 <Text style={{ color: '#fff' }}>Voltar à lista</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
// ```[cite: 3]

// ---

// #### 2.d — Parâmetro opcional com encadeamento opcional
// Tratando telas que podem ser abertas sem parâmetros usando `?.`[cite: 4]:
// ```javascript
// function TelaProduto({ route, navigation }) {
//     const pedidoId = route.params?.pedidoId || 'N/A'; [cite: 4]

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Pedido #{pedidoId}</Text>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
//                 <Text style={{ color: '#007AFF' }}>Voltar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaNotificacoes() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Tela de Notificações (Sem parâmetros)</Text>
//         </View>
//     );
// }
// ```[cite: 4]

// ---

// ### Exercício 3

// #### 3.a — Suas primeiras abas
// Implementando navegação por abas inferiores (`Bottom Tabs`)[cite: 4, 5]:
// ```javascript
// Instalação: npx expo install @react-navigation/bottom-tabs
// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function TelaHome() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Home</Text></View>; }
// function TelaBusca() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Busca</Text></View>; }
// function TelaPerfil() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Perfil</Text></View>; }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={TelaHome} />
//                 <Tab.Screen name="Busca" component={TelaBusca} />
//                 <Tab.Screen name="Perfil" component={TelaPerfil} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 4, 5]

// ---

// #### 3.b — Personalizando as abas
// Aplicando cores, rótulos customizados e ícones[cite: 5]:
// ```javascript
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={{
//                     tabBarActiveTintColor: '#28a745', Cor ativa modificada para verde
//                     tabBarInactiveTintColor: '#999',
//                 }}
//             >
//                 <Tab.Screen
//                     name="Home"
//                     component={TelaHome}
//                     options={{ tabBarLabel: 'Início', tabBarIcon: () => <Text>🏠</Text> }}
//                 />
//                 <Tab.Screen
//                     name="Busca"
//                     component={TelaBusca}
//                     options={{ tabBarLabel: 'Busca', tabBarIcon: () => <Text>🔍</Text> }}
//                 />
//                 <Tab.Screen
//                     name="Perfil"
//                     component={TelaPerfil}
//                     options={{ tabBarLabel: 'Perfil', tabBarIcon: () => <Text>👤</Text> }}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 5]

// ---

// #### 3.c — Abas com estado independente
// Demonstrando o isolamento de estado entre as abas[cite: 5, 6]:
// ```javascript
// import React, { useState } from 'react';
// import { Text, View, TouchableOpacity, TextInput } from 'react-native';

// function TelaHome() {
//     const [contador, setContador] = useState(0);
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Contador: {contador}</Text>
//             <TouchableOpacity onPress={() => setContador(contador + 1)} style={{ backgroundColor: '#007AFF', padding: 10, marginTop: 10 }}>
//                 <Text style={{ color: '#fff' }}>Incrementar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaBusca() {
//     const [texto, setTexto] = useState('');
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//             <TextInput placeholder="Digite algo na busca..." value={texto} onChangeText={setTexto} style={{ borderWidth: 1, padding: 10 }} />
//         </View>
//     );
// }

// /* 
//   RESPOSTA À PERGUNTA:
//   - O contador da Home mantém o valor quando você volta para ela? Sim, porque o componente da aba continua montado em segundo plano (em memória).
//   - E o texto da Busca? Também é mantido pelo mesmo motivo, o estado local da tela isolada na aba persiste.
// */
// ```[cite: 5, 6]

// ---

// ### Exercício 4

// #### 4.a — Menu lateral
// Configurando o `Drawer Navigator`[cite: 6]:
// ```javascript
// Instalação: npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function TelaHome() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Deslize da esquerda para abrir o menu</Text></View>; }
// function TelaConfiguracoes() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Configurações</Text></View>; }
// function TelaSobre() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Sobre o App</Text></View>; }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={TelaHome} options={{ title: 'Início' }} />
//                 <Drawer.Screen name="Config" component={TelaConfiguracoes} options={{ title: 'Configurações' }} />
//                 <Drawer.Screen name="Sobre" component={TelaSobre} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 6]

// ---

// #### 4.b — Drawer com parâmetros
// Passando parâmetros para telas controladas por Drawer[cite: 6, 7]:
// ```javascript
// function TelaHome({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Deslize da esquerda para abrir o menu</Text>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('Config', { tema: 'escuro' })}
//                 style={{ marginTop: 20, backgroundColor: '#007AFF', padding: 10 }}
//             >
//                 <Text style={{ color: '#fff' }}>Ir para Config com tema</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaConfiguracoes({ route }) {
//     const tema = route.params?.tema || 'claro'; [cite: 7]
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Tema atual: {tema}</Text>
//         </View>
//     );
// }
// ```[cite: 6, 7]

// ---

// ### Exercício 5

// #### 5.a — Um Stack dentro de uma Tab
// Aninhando um Stack Navigator dentro de uma aba[cite: 7]:
// ```javascript
// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function TelaHome({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Início da Pilha</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')} style={{ backgroundColor: '#007AFF', padding: 10, marginTop: 10 }}>
//                 <Text style={{ color: '#fff' }}>Ir para Notificações</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function TelaNotificacoes() {
//     return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Notificações</Text></View>;
// }

// function HomeStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="HomeScreen" component={TelaHome} options={{ title: 'Início' }} />
//             <Stack.Screen name="Notificacoes" component={TelaNotificacoes} />
//         </Stack.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, tabBarLabel: 'Início' }} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 7]

// ---

// #### 5.b — Evitando header duplicado
// Ocultando o cabeçalho do Tab Navigator com `headerShown: false`[cite: 8]:
// ```javascript
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOptions={{ headerShown: false }}>
//                 <Tab.Screen name="HomeTab" component={HomeStack} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

// /* 
//   RESPOSTA AOS COMENTÁRIOS:
//   - Por que antes apareciam dois headers? Porque tanto o Tab Navigator quanto o Stack Navigator geravam um cabeçalho por padrão, criando um efeito duplicado (um em cima do outro).
//   - Diferença entre o header do Tab e do Stack: O header do Tab gerencia a barra de abas globais do aplicativo, enquanto o header do Stack gerencia a pilha de telas interna (fornecendo o botão de voltar padrão e o título específico da rota atual).
// */
// ```[cite: 8]

// ---

// #### 5.c — Tab, Stack, FlatList e parâmetros juntos
// Combinando todos os conceitos avançados de navegação[cite: 8]:
// ```javascript
// import React from 'react';
// import { Text, View, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const filmes = [
//     { id: '1', titulo: 'Matrix', ano: 1999 },
//     { id: '2', titulo: 'A Origem', ano: 2010 },
//     { id: '3', titulo: 'Interstellar', ano: 2014 },
//     { id: '4', titulo: 'O Senhor dos Anéis', ano: 2001 },
//     { id: '5', titulo: 'Batman: O Cavaleiro das Trevas', ano: 2008 },
// ];

// function TelaLista({ navigation }) {
//     return (
//         <FlatList
//             data={filmes}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Filme', { titulo: item.titulo, ano: item.ano })}
//                     style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
//                 >
//                     <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.titulo} ({item.ano})</Text>
//                 </TouchableOpacity>
//             )}
//         />
//     );
// }

// function TelaFilme({ route, navigation }) {
//     const { titulo, ano } = route.params;
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{titulo}</Text>
//             <Text>Ano: {ano}</Text>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, backgroundColor: '#007AFF', padding: 10 }}>
//                 <Text style={{ color: '#fff' }}>Voltar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function HomeStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Lista" component={TelaLista} options={{ title: 'Filmes' }} />
//             <Stack.Screen name="Filme" component={TelaFilme} />
//         </Stack.Navigator>
//     );
// }

// function PerfilTab({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('HomeTab', { screen: 'Filme', params: { titulo: 'Matrix', ano: 1999 } })}
//                 style={{ backgroundColor: '#28a745', padding: 10 }}
//             >
//                 <Text style={{ color: '#fff' }}>Ver filme favorito</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOptions={{ headerShown: false }}>
//                 <Tab.Screen name="HomeTab" component={HomeStack} />
//                 <Tab.Screen name="PerfilTab" component={PerfilTab} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 8]

// ---

// ### Exercício 6 — App de receitas
// Implementação do app de receitas estruturado com Tab e Stack[cite: 8]:
// ```javascript
// import React from 'react';
// import { Text, View, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const receitas = [
//     { id: '1', nome: 'Bolo de Chocolate', tempo: '40 min', ingredientes: 'Farinha, Cacau, Ovos, Açúcar, Leite' },
//     { id: '2', nome: 'Panqueca', tempo: '20 min', ingredientes: 'Farinha, Leite, Ovos, Sal' }
// ];

// function TelaReceitas({ navigation }) {
//     return (
//         <FlatList
//             data={receitas}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('DetalheReceita', item)}
//                     style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
//                 >
//                     <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
//                     <Text>Tempo: {item.tempo}</Text>
//                 </TouchableOpacity>
//             )}
//         />
//     );
// }

// function DetalheReceita({ route, navigation }) {
//     const { nome, tempo, ingredientes } = route.params;
//     return (
//         <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
//             <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{nome}</Text>
//             <Text style={{ marginTop: 10 }}>Tempo de preparo: {tempo}</Text>
//             <Text style={{ marginTop: 10 }}>Ingredientes: {ingredientes}</Text>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, backgroundColor: '#007AFF', padding: 10, alignItems: 'center' }}>
//                 <Text style={{ color: '#fff' }}>Voltar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function ReceitasStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="ListaReceitas" component={TelaReceitas} options={{ title: 'Receitas' }} />
//             <Stack.Screen name="DetalheReceita" component={DetalheReceita} options={{ title: 'Detalhes' }} />
//         </Stack.Navigator>
//     );
// }

// function TelaFavoritos() {
//     return (
//         <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Receita Favorita</Text>
//             <Text style={{ marginTop: 10 }}>Nome: Bolo de Chocolate</Text>
//             <Text>Tempo: 40 min</Text>
//             <Text>Ingredientes: Farinha, Cacau, Ovos, Açúcar, Leite</Text>
//         </View>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOptions={{ headerShown: false }}>
//                 <Tab.Screen name="ReceitasTab" component={ReceitasStack} options={{ tabBarLabel: 'Receitas' }} />
//                 <Tab.Screen name="FavoritosTab" component={TelaFavoritos} options={{ tabBarLabel: 'Favoritos' }} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// ```[cite: 8]

// ---

// ### Exercício 7 — App de contatos
// App contendo Tab, Stack, Drawer interno na aba de contatos e passagem de parâmetros[cite: 8, 9]:
// ```javascript
// import React from 'react';
// import { Text, View, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const contatos = [
//     { id: '1', nome: 'Ana Souza', telefone: '(11) 99999-1111', email: 'ana@email.com', favorito: true },
//     { id: '2', nome: 'Carlos Lima', telefone: '(11) 98888-2222', email: 'carlos@email.com', favorito: false }
// ];

// function ListaContatos({ route, navigation }) {
//     const filtroFavoritos = route.name === 'Favoritos';
//     const dadosFiltrados = filtroFavoritos ? contatos.filter(c => c.favorito) : contatos;

//     return (
//         <FlatList
//             data={dadosFiltrados}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('DetalheContato', item)}
//                     style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
//                 >
//                     <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
//                 </TouchableOpacity>
//             )}
//         />
//     );
// }

// function ContatosDrawer() {
//     return (
//         <Drawer.Navigator screenOptions={{ headerShown: false }}>
//             <Drawer.Screen name="Todos" component={ListaContatos} />
//             <Drawer.Screen name="Favoritos" component={ListaContatos} />
//         </Drawer.Navigator>
//     );
// }

// function DetalheContato({ route, navigation }) {
//     const { nome, telefone, email } = route.params;
//     return (
//         <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
//             <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{nome}</Text>
//             <Text>Telefone: {telefone}</Text>
//             <Text>E-mail: {email}</Text>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, backgroundColor: '#007AFF', padding: 10, alignItems: 'center' }}>
//                 <Text style={{ color: '#fff' }}>Voltar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function ContatosStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="DrawerContatos" component={ContatosDrawer} options={{ title: 'Contatos' }} />
//             <Stack.Screen name="DetalheContato" component={DetalheContato} options={{ title: 'Detalhes' }} />
//         </Stack.Navigator>
//     );
// }

// function TelaSobre() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 18 }}>App de Contatos v1.0</Text>
//         </View>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOptions={{ headerShown: false }}>
//                 <Tab.Screen name="ContatosTab" component={ContatosStack} options={{ tabBarLabel: 'Contatos' }} />
//                 <Tab.Screen name="SobreTab" component={TelaSobre} options={{ tabBarLabel: 'Sobre' }} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// 

// ---

// Ex 8
// import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaA({ navigation }) {
//     return (
//         Correção: Nome da rota alterado de 'TelaB' para 'B' conforme registrado no Stack.Screen
//         <TouchableOpacity onPress={() => navigation.navigate('B', { nome: 'Usuário Teste' })}>
//             <Text>Ir</Text>
//         </TouchableOpacity>
//     );
// } Correção: Chaves e parênteses fechados corretamente

// function TelaB({ route }) {
//     Correção: Tratamento com encadeamento opcional para evitar quebra caso seja aberta sem parâmetros
//     const nome = route.params?.nome || 'Visitante';
//     return <Text>{nome}</Text>;
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="A" component={TelaA} />
//                 <Stack.Screen name="B" component={TelaB} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
