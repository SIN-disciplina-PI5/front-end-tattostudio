import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

export default function TatuagensScreen() {
  // Simulação de dados das tatuagens
  const tatuagens = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Grid de Estilos */}
        <View style={styles.grid}>
          {tatuagens.map((item) => (
            <View key={item} style={styles.gridItem}>
              <View style={styles.imageContainer}>
                 <Image 
                  source={{ uri: `https://picsum.photos/200/200?random=${item}` }} 
                  style={styles.styleImage} 
                />
              </View>
              <Text style={styles.styleLabel}>Ipsum</Text>
            </View>
          ))}
          
          {/* Item Personalizado */}
          <View style={styles.gridItem}>
            <View style={[styles.imageContainer, styles.customButton]}>
               <IconButton icon="pencil-outline" iconColor="#fff" size={30} />
            </View>
            <Text style={styles.styleLabel}>Personalizado</Text>
          </View>
        </View>

        {/* Banner de Promoção */}
        <Card style={styles.promoCard}>
          <View style={styles.promoContent}>
            <View style={styles.promoIconContainer}>
               <IconButton icon="tag-outline" iconColor="#000" size={35} />
            </View>
            <View style={styles.promoTextContainer}>
              <Text style={styles.promoTitle}>Promoção do mês</Text>
              <Text style={styles.promoSubtitle}>2 Tatuagens de até 10cm por R$80</Text>
              <Text style={styles.promoDetails}>traços simples / preto e cinza</Text>
            </View>
          </View>
        </Card>

        {/* Botão Realizar Agendamento */}
        <TouchableOpacity style={styles.bookingButton} activeOpacity={0.8}>
          <Text style={styles.bookingButtonText}>Realizar agendamento</Text>
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
    padding: 20 
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  gridItem: { 
    width: '30%', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  imageContainer: { 
    width: '100%', 
    aspectRatio: 1, 
    borderRadius: 20, 
    backgroundColor: '#1A1A1A', 
    borderWidth: 1, 
    borderColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden'
  },
  styleImage: { 
    width: '100%', 
    height: '100%' 
  },
  styleLabel: { 
    color: '#FFF', 
    marginTop: 8, 
    fontSize: 12, 
    fontWeight: '500' 
  },
  customButton: { 
    backgroundColor: '#1A1A1A' 
  },
  promoCard: { 
    backgroundColor: '#1A1A1A', 
    borderRadius: 25, 
    marginTop: 10, 
    padding: 15,
    borderWidth: 1,
    borderColor: '#333'
  },
  promoContent: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  promoIconContainer: { 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    padding: 0 
  },
  promoTextContainer: { 
    marginLeft: 15, 
    flex: 1 
  },
  promoTitle: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  promoSubtitle: { 
    color: '#FFF', 
    fontSize: 13, 
    marginTop: 2 
  },
  promoDetails: { 
    color: '#888', 
    fontSize: 11 
  },
  bookingButton: { 
    backgroundColor: '#1C1C1E', 
    height: 60, 
    borderRadius: 18, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 30, 
    marginBottom: 40,
    borderWidth: 1, 
    borderColor: '#333' 
  },
  bookingButtonText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});