// at.8
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Contador</Text>

//       <Text style={styles.numero}>{contador}</Text>

//       <Button
//         title="+1"
//         onPress={() => setContador(contador + 1)}
//       />

//       <Button
//         title="-1"
//         onPress={() => setContador(contador - 1)}
//       />

//       <Button
//         title="Zerar"
//         onPress={() => setContador(0)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     gap: 15,
//   },

//   titulo: {
//     fontSize: 28,
//     fontWeight: 'bold',
//   },

//   numero: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, TextInput } from 'react-native';

// export default function Saudacao() {
//   const [nome, setNome] = useState('');

//   return (
//     <View style={{ padding: 20 }}>

//       <TextInput
//         placeholder="Digite seu nome"
//         value={nome}
//         onChangeText={setNome}
//         style={{
//           borderWidth: 1,
//           borderColor: '#999',
//           padding: 10,
//           borderRadius: 5,
//           marginBottom: 15,
//         }}
//       />

//       <Text style={{ fontSize: 20 }}>
//         {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
//       </Text>

//     </View>
//   );
// } 

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet
// } from 'react-native';

// export default function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [texto, setTexto] = useState('');

//   // Adicionar tarefa
//   const adicionar = (texto) => {
//     if (texto.trim() === '') return;

//     setTarefas(ant => [
//       ...ant,
//       {
//         id: Date.now().toString(),
//         texto,
//         feita: false
//       },
//     ]);

//     setTexto('');
//   };

//   // Remover tarefa
//   const remover = (id) =>
//     setTarefas(ant => ant.filter(t => t.id !== id));

//   // Marcar tarefa como concluída
//   const alternar = (id) =>
//     setTarefas(ant => ant.map(t =>
//       t.id === id ? { ...t, feita: !t.feita } : t
//     ));

//   return (
//     <View style={styles.container}>

//       <Text style={styles.titulo}>Lista de Tarefas</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Digite uma tarefa"
//         value={texto}
//         onChangeText={setTexto}
//       />

//       <Button
//         title="Adicionar tarefa"
//         onPress={() => adicionar(texto)}
//       />

//       <FlatList
//         data={tarefas}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.tarefa}>

//             <TouchableOpacity
//               onPress={() => alternar(item.id)}
//               style={{ flex: 1 }}
//             >
//               <Text
//                 style={[
//                   styles.textoTarefa,
//                   item.feita && styles.concluida
//                 ]}
//               >
//                 {item.feita ? '✓ ' : '○ '}
//                 {item.texto}
//               </Text>
//             </TouchableOpacity>

//             <Button
//               title="Excluir"
//               color="red"
//               onPress={() => remover(item.id)}
//             />

//           </View>
//         )}
//       />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },

//   tarefa: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginTop: 10,
//     borderRadius: 5,
//   },

//   textoTarefa: {
//     fontSize: 18,
//   },

//   concluida: {
//     textDecorationLine: 'line-through',
//     color: 'gray',
//   },
// });

// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet
// } from 'react-native';

// // URL da API
// const URL_API = 'https://jsonplaceholder.typicode.com/users';

// // Componente para exibir a lista
// function Lista({ dados }) {
//   return (
//     <FlatList
//       data={dados}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.usuario}>
//           <Text style={styles.nome}>{item.name}</Text>
//           <Text>Email: {item.email}</Text>
//           <Text>Cidade: {item.address.city}</Text>
//         </View>
//       )}
//     />
//   );
// }

// // Componente principal
// export default function ListaUsuarios() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [carregando, setCarregando] = useState(true);

//   useEffect(() => {
//     async function carregar() {
//       try {
//         const resposta = await fetch(URL_API);

//         if (!resposta.ok) {
//           throw new Error('Erro ao buscar usuários');
//         }

//         const dados = await resposta.json();

//         setUsuarios(dados);
//       } catch (erro) {
//         console.log('Erro:', erro);
//       } finally {
//         setCarregando(false);
//       }
//     }

//     carregar();
//   }, []);

//   if (carregando) {
//     return (
//       <View style={styles.centralizar}>
//         <ActivityIndicator size="large" color="blue" />
//         <Text>Carregando usuários...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Lista de Usuários</Text>

//       <Lista dados={usuarios} />
//     </View>
//   );
// }

// // Estilos
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },

//   centralizar: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   titulo: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   usuario: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },

//   nome: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// }); 

// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet
// } from 'react-native';

// // URL da API
// const API = 'https://jsonplaceholder.typicode.com';

// // Componente DetalhePost
// export default function DetalhePost({ postId }) {
//   const [post, setPost] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(false);

//   useEffect(() => {
//     setPost(null);
//     setCarregando(true);
//     setErro(false);

//     fetch(`${API}/posts/${postId}`)
//       .then(r => {
//         if (!r.ok) {
//           throw new Error('Erro ao buscar postagem');
//         }
//         return r.json();
//       })
//       .then(dados => {
//         setPost(dados);
//       })
//       .catch(() => {
//         setErro(true);
//       })
//       .finally(() => {
//         setCarregando(false);
//       });

//   }, [postId]);

//   if (carregando) {
//     return (
//       <View style={styles.centralizar}>
//         <ActivityIndicator size="large" color="blue" />
//         <Text>Carregando postagem...</Text>
//       </View>
//     );
//   }

//   if (erro || !post) {
//     return (
//       <Text style={styles.erro}>
//         Não foi possível carregar a postagem.
//       </Text>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         {post.title}
//       </Text>

//       <Text style={styles.texto}>
//         {post.body}
//       </Text>

//       <Text style={styles.id}>
//         Postagem número: {post.id}
//       </Text>
//     </View>
//   );
// }

// // Estilos
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },

//   centralizar: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#222',
//   },

//   texto: {
//     fontSize: 17,
//     lineHeight: 25,
//     color: '#444',
//   },

//   id: {
//     marginTop: 20,
//     color: 'gray',
//   },

//   erro: {
//     color: 'red',
//     textAlign: 'center',
//     margin: 20,
//   },
// }); 
// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   Button,
//   StyleSheet
// } from 'react-native';

// export default function Cronometro() {
//   const [segundos, setSegundos] = useState(0);
//   const [ativo, setAtivo] = useState(true);

//   useEffect(() => {
//     if (!ativo) return;

//     const id = setInterval(() => {
//       setSegundos(s => s + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, [ativo]);

//   const zerar = () => {
//     setSegundos(0);
//     setAtivo(false);
//   };

//   const formatarTempo = (total) => {
//     const minutos = Math.floor(total / 60);
//     const seg = total % 60;

//     return `${String(minutos).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
//   };

//   return (
//     <View style={styles.container}>

//       <Text style={styles.titulo}>
//         Cronômetro
//       </Text>

//       <Text style={styles.numero}>
//         {formatarTempo(segundos)}
//       </Text>

//       <View style={styles.botoes}>
//         <Button
//           title={ativo ? 'Pausar' : 'Continuar'}
//           onPress={() => setAtivo(!ativo)}
//         />

//         <Button
//           title="Zerar"
//           color="red"
//           onPress={zerar}
//         />
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//   },

//   titulo: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },

//   numero: {
//     fontSize: 60,
//     fontWeight: 'bold',
//     color: 'blue',
//     marginBottom: 30,
//   },

//   botoes: {
//     flexDirection: 'row',
//     gap: 20,
//   },
// }); 
// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
//   Image
// } from 'react-native';

// // API de produtos
// const API = 'https://dummyjson.com/products';

// export default function BuscaProdutos() {
//   const [termo, setTermo] = useState('');
//   const [resultados, setResultados] = useState([]);
//   const [carregando, setCarregando] = useState(false);
//   const [erro, setErro] = useState('');

//   useEffect(() => {
//     if (termo.trim().length < 3) {
//       setResultados([]);
//       setCarregando(false);
//       setErro('');
//       return;
//     }

//     setCarregando(true);
//     setErro('');

//     const timer = setTimeout(async () => {
//       try {
//         const r = await fetch(
//           `${API}/search?q=${encodeURIComponent(termo)}`
//         );

//         if (!r.ok) {
//           throw new Error('Erro ao buscar produtos');
//         }

//         const dados = await r.json();

//         setResultados(dados.products);
//       } catch (error) {
//         setErro('Não foi possível carregar os produtos.');
//         setResultados([]);
//       } finally {
//         setCarregando(false);
//       }
//     }, 500);

//     return () => clearTimeout(timer);

//   }, [termo]);

//   return (
//     <View style={styles.container}>

//       <Text style={styles.titulo}>
//         Buscar Produtos
//       </Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Digite o nome do produto..."
//         value={termo}
//         onChangeText={setTermo}
//       />

//       {carregando && (
//         <ActivityIndicator size="large" color="blue" />
//       )}

//       {erro !== '' && (
//         <Text style={styles.erro}>{erro}</Text>
//       )}

//       {!carregando && termo.trim().length < 3 && (
//         <Text style={styles.aviso}>
//           Digite pelo menos 3 caracteres.
//         </Text>
//       )}

//       <FlatList
//         data={resultados}
//         keyExtractor={item => item.id.toString()}
//         ListEmptyComponent={
//           !carregando && termo.trim().length >= 3 && !erro
//             ? <Text>Nenhum produto encontrado.</Text>
//             : null
//         }
//         renderItem={({ item }) => (
//           <View style={styles.produto}>

//             <Image
//               source={{ uri: item.thumbnail }}
//               style={styles.imagem}
//             />

//             <View style={styles.info}>
//               <Text style={styles.nome}>
//                 {item.title}
//               </Text>

//               <Text style={styles.preco}>
//                 R$ {item.price.toFixed(2)}
//               </Text>

//               <Text style={styles.descricao}>
//                 {item.description}
//               </Text>
//             </View>

//           </View>
//         )}
//       />

//     </View>
//   );
// }

// // Estilos
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 15,
//   },

//   aviso: {
//     color: 'gray',
//     marginBottom: 10,
//   },

//   erro: {
//     color: 'red',
//     marginBottom: 10,
//   },

//   produto: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginBottom: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },

//   imagem: {
//     width: 90,
//     height: 90,
//     resizeMode: 'contain',
//     marginRight: 12,
//   },

//   info: {
//     flex: 1,
//   },

//   nome: {
//     fontSize: 17,
//     fontWeight: 'bold',
//   },

//   preco: {
//     fontSize: 16,
//     color: 'green',
//     marginVertical: 5,
//   },

//   descricao: {
//     fontSize: 12,
//     color: '#666',
//   },
// });