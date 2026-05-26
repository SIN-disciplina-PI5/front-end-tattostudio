import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { withLayoutContext } from 'expo-router';
import { IconButton } from 'react-native-paper';

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

function MyCustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBarContainer}>
      {/* Header com Olá e Ícone de Perfil */}
      <View style={styles.headerRow}>
        <Text style={styles.greeting}>Olá, João</Text>
        <TouchableOpacity style={styles.profileButton}>
           <IconButton icon="account-outline" iconColor="#FFF" size={28} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.mainTitle}>Escolha seu estilo</Text>

      {/* Navegação Estilizada (Cápsula na ativa) */}
      <View style={styles.linksRow}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          
          const allowed = ['index', 'piercings', 'joias', 'artes'];
          if (!allowed.includes(route.name)) return null;

          const label = options.title !== undefined ? options.title : route.name;
          const isFocused = state.index === index;

          return (
            <React.Fragment key={route.key}>
              <TouchableOpacity 
                onPress={() => navigation.navigate(route.name)}
                style={[styles.tabItem, isFocused && styles.tabItemActive]}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, isFocused ? styles.tabTextActive : styles.tabTextInactive]}>
                  {label}
                </Text>
              </TouchableOpacity>
              
              {/* Divisor vertical centralizado entre as abas */}
              {index < 3 && <Text style={styles.divider}>|</Text>}
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
      <StatusBar barStyle="light-content" />
      <MaterialTopTabs
        tabBar={(props) => <MyCustomTabBar {...props} />}
        screenOptions={{
          swipeEnabled: true,
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: 'Tatuagens' }} />
        <MaterialTopTabs.Screen name="piercings" options={{ title: 'Piercings' }} />
        <MaterialTopTabs.Screen name="joias" options={{ title: 'Joias' }} />
        <MaterialTopTabs.Screen name="artes" options={{ title: 'Artes' }} />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: '#0A0A0A',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: { 
    color: '#FFF', 
    fontSize: 26, 
    fontWeight: '300',
    letterSpacing: 0.5
  },
  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A'
  },
  profileIcon: {
    margin: 0,
  },
  mainTitle: { 
    color: '#FFF', 
    fontSize: 34, 
    fontWeight: 'bold', 
    marginBottom: 25 
  },
  linksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  tabItemActive: {
    backgroundColor: '#1A1A1B', // Cor do fundo arredondado da aba ativa
  },
  tabText: { 
    fontSize: 18,
  },
  tabTextActive: { 
    color: '#FFF', 
    fontWeight: '500' 
  },
  tabTextInactive: { 
    color: '#888' 
  },
  divider: { 
    color: '#333', 
    marginHorizontal: 4, 
    fontSize: 20,
    fontWeight: '200'
  }
});