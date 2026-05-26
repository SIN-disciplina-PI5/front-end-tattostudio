import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

// Como o React Native exige que o require seja estático, 
// você deve listar suas imagens aqui conforme for adicionando-as na pasta.
const tatuagemImagens = [
  // Exemplo de como usar quando tiver as fotos: 
  // require('../../assets/images/tatuagens/foto1.png'), 
  null, // Slot 1 (Vazio -> Fundo Cinza)
  null, // Slot 2
  null, // Slot 3
  null, // Slot 4
  null, // Slot 5
];

export default function TatuagensScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Grid de Portfólio */}
        <View style={styles.grid}>
          {tatuagemImagens.map((img, index) => (
            <View key={index} style={styles.gridItem}>
              <View style={styles.imageBox}>
                {img ? (
                  <Image source={img} style={styles.img} />
                ) : (
                  /* Fundo cinza caso não tenha imagem carregada no array */
                  <View style={styles.placeholder} />
                )}
              </View>
              <Text style={styles.label}>Ipsum</Text>
            </View>
          ))}
          
          {/* Botão de Estilo Personalizado */}
          <View style={styles.gridItem}>
            <TouchableOpacity style={[styles.imageBox, { backgroundColor: '#1A1A1A' }]}>
               <IconButton icon="pencil-outline" iconColor="#fff" size={30} />
            </TouchableOpacity>
            <Text style={styles.label}>Personalizado</Text>
          </View>
        </View>

        {/* Card de Promoção */}
        <Card style={styles.card}>
          <View style={styles.cardInfo}>
            <View style={styles.iconTag}>
               <IconButton icon="tag-outline" iconColor="#000" size={32} />
            </View>
            <View style={{ marginLeft: 15, flex: 1 }}>
              <Text style={styles.cardTitle}>Promoção do mês</Text>
              <Text style={styles.cardSub}>2 Tatuagens de até 10cm por R$80</Text>
              <Text style={styles.cardDetail}>traços simples / preto e cinza</Text>
            </View>
          </View>
        </Card>

        {/* Botão de Agendamento */}
        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.btnText}>Realizar agendamento</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0A0A0A' 
  },
  content: { 
    paddingHorizontal: 20,
    paddingTop: 10
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  gridItem: { 
    width: '31%', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  imageBox: { 
    width: '100%', 
    aspectRatio: 1, 
    borderRadius: 20, 
    backgroundColor: '#222', // Fundo cinza solicitado
    borderWidth: 1, 
    borderColor: '#333',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#222', 
  },
  img: { 
    width: '100%', 
    height: '100%' 
  },
  label: { 
    color: '#FFF', 
    marginTop: 8, 
    fontSize: 12,
    fontWeight: '500' 
  },
  card: { 
    backgroundColor: '#1A1A1A', 
    borderRadius: 25, 
    marginTop: 10, 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#333',
    elevation: 0
  },
  cardInfo: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  iconTag: { 
    backgroundColor: '#FFF', 
    borderRadius: 15 
  },
  cardTitle: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  cardSub: { 
    color: '#FFF', 
    fontSize: 13, 
    marginTop: 2 
  },
  cardDetail: { 
    color: '#777', 
    fontSize: 11 
  },
  btn: { 
    backgroundColor: '#1C1C1E', 
    height: 60, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 30, 
    marginBottom: 50,
    borderWidth: 1, 
    borderColor: '#333' 
  },
  btnText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});