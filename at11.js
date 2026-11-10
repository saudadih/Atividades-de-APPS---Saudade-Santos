//at1
// import { useContext } from 'react';
// import {View,Text,Button,StyleSheet,} from 'react-native';
// import {TemaContext,TemaProvider,} from './contexts/TemaContext';

// function Home() {
//   const { modo, cores, alternarTema } =
//     useContext(TemaContext);

//   return (
//     <View style={{ backgroundColor: cores.fundo }}>
//      <Text
//        style={[styles.titulo, { color: cores.texto }]}>
//       <Text style={[styles.titulo, { color: cores.texto }]}></Text>
//        Tema atual: {modo}
//      </Text>
//      <Button title="Trocar tema" onPress={alternarTema}/>
//     </View>
//   );
// }
// export default function App() {
//   return (
//     <TemaProvider>
//       <Home />
//     </TemaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 16,
//   },
//   titulo: {
//    fontSize: 24 
//   },
// });

//at2

// import { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
// } from 'react-native';
// import {
//   AuthProvider,
//   useAuth,
// } from './contexts/AuthContext';

// function Login() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [erro, setErro] = useState('');

//   function entrar() {
//     const ok = login(email, senha);
//     if (!ok) {
//       setErro('Senha incorreta (dica: 123456)');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Login</Text>
      
//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />
      
//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={senha}
//         onChangeText={setSenha}
//       />
      
//       {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      
//       <Button title="Entrar" onPress={entrar} />
//     </View>
//   );
// }

// function Home() {
//   const { usuario, logout } = useAuth();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         Bem-vindo, {usuario?.nome || 'Usuário'}!
//       </Text>
//       <Button title="Sair" onPress={logout} />
//     </View>
//   );
// }

// function Rotas() {
//   const { logado } = useAuth();
//   return logado ? <Home /> : <Login />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Rotas />
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center', // Garante que os itens fiquem centralizados
//     padding: 20,
//     gap: 12,
//     backgroundColor: '#fff',
//   },
//   titulo: { 
//     fontSize: 28, 
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   campo: {
//     width: '100%', // Ocupa toda a largura disponível respeitando o padding da tela
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 8,
//     padding: 12,
//     backgroundColor: '#f9f9f9',
//   },
//   erro: { 
//     color: 'red',
//     textAlign: 'center',
//   },
// });