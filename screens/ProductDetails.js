import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductDetails({ route, navigation }) {

  const { name, price, description } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.icon}>🛍️</Text>

        <Text style={styles.title}>{name}</Text>

        <Text style={styles.price}>{price}</Text>

        <Text style={styles.description}>
          {description}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 18,
    elevation: 4,
    marginBottom: 20,
  },

  icon: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 20,
  },

  button: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
