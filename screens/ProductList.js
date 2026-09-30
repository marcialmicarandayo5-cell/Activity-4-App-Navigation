import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ProductList({ navigation }) {

  const products = [
    {
      name: 'Laptop',
      price: '$500',
      description: 'A simple laptops for school work.',
      icon: '💻',
    },
    {
      name: 'Headphones',
      price: '$50',
      description: 'Comfortable headphones for music and videos.',
      icon: '🎧',
    },
    {
      name: 'Keyboard',
      price: '$30',
      description: 'A simple keyboard for typing and gaming.',
      icon: '⌨️',
    },
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Our Products</Text>

      <Text style={styles.subtitle}>
        Choose a product to see more details.
      </Text>

      {products.map((product, index) => (
        <View style={styles.card} key={index}>

          <Text style={styles.icon}>{product.icon}</Text>

          <Text style={styles.name}>{product.name}</Text>

          <Text style={styles.price}>{product.price}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Details', {
                name: product.name,
                price: product.price,
                description: product.description,
              })
            }
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>

        </View>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Go Back</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },

  subtitle: {
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  icon: {
    fontSize: 40,
    marginBottom: 10,
  },

  name: {
    fontSize: 21,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 17,
    color: '#555',
    marginTop: 5,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#222',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  backButton: {
    padding: 15,
    alignItems: 'center',
    marginBottom: 25,
  },

  backText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
