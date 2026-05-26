import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

function MyCustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBarContainer}>
      {/* Header Fixo no Layout */}
      <View style={styles.headerRow}>
        <Text style={styles.greeting}>Olá, João</Text>
        <View style={styles.profileIcon} />
      </View>

      <Text style={styles.mainTitle}>Escolha seu estilo</Text>

      {/* Linha de Navegação (Botões) */}
      <View style={styles.linksRow}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          
          // Filtra para mostrar apenas o que queremos na barra
          const allowedRoutes = ['index', 'piercings', 'joias', 'artes'];
          if (!allowedRoutes.includes(route.name)) return null;

          const label = options.title !== undefined ? options.title : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <React.Fragment key={route.key}>
              <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <Text style={[styles.tabText, isFocused ? styles.tabTextActive : styles.tabTextInactive]}>
                  {label}
                </Text>
              </TouchableOpacity>
              {/* Divisor vertical entre os itens, exceto no último */}
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
    paddingBottom: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '300',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#444',
  },
  mainTitle: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  tabText: {
    fontSize: 16,
  },
  tabTextActive: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#666',
  },
  divider: {
    color: '#333',
    marginHorizontal: 12,
    fontSize: 16,
  },
});