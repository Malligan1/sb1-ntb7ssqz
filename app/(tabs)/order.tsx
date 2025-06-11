import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Dimensions, Image } from 'react-native';
import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Cookie, Package, MapPin, Clock, Sparkles } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  cookieType: string;
  quantity: string;
  deliveryType: string;
  address: string;
  pickupTime: string;
  specialRequests: string;
  dietaryNotes: string;
}

export default function OrderPage() {
  const [form, setForm] = useState<OrderForm>({
    name: '',
    email: '',
    phone: '',
    cookieType: '',
    quantity: '',
    deliveryType: 'pickup',
    address: '',
    pickupTime: '',
    specialRequests: '',
    dietaryNotes: '',
  });

  const [scrollY, setScrollY] = useState(0);

  const cookieTypes = [
    'Choc Chip',
    'Double Choc Chip',
    'Biscoff',
  ];

  const handleScroll = (event: any) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.cookieType || !form.quantity) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }
    
    Alert.alert(
      'Order Submitted!', 
      'Thank you for your order! We\'ll contact you within 24 hours to confirm details and arrange pickup/delivery.',
      [{ text: 'OK' }]
    );
  };

  // Calculate parallax effect
  const parallaxOffset = scrollY * 0.1;

  return (
    <View style={styles.container}>
      {/* Full Coverage Cookie Background */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require('@/assets/images/cookie pic.jpeg')}
          style={[
            styles.backgroundImage,
            {
              transform: [{ translateY: -parallaxOffset }]
            }
          ]}
          resizeMode="cover"
        />
        {/* Overlay for better text readability */}
        <View style={styles.backgroundOverlay} />
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Cookie size={50} color="#ffffff" />
            <Text style={styles.title}>Order Loaded Cookies</Text>
            <Text style={styles.subtitle}>Fresh-baked cookies made with love</Text>
          </View>
        </View>

        {/* Content with transparent backgrounds */}
        <View style={styles.content}>
          {/* Cookie Selection */}
          <Card style={styles.transparentSection}>
            <Text style={styles.sectionTitle}>🍪 Choose Your Cookies</Text>
            <Text style={styles.sectionSubtitle}>Premium handcrafted flavors</Text>
            <View style={styles.cookieGrid}>
              {cookieTypes.map((cookie) => (
                <TouchableOpacity
                  key={cookie}
                  style={[
                    styles.cookieOption,
                    form.cookieType === cookie && styles.cookieOptionSelected
                  ]}
                  onPress={() => setForm({ ...form, cookieType: cookie })}
                >
                  <Text style={[
                    styles.cookieOptionText,
                    form.cookieType === cookie && styles.cookieOptionTextSelected
                  ]}>
                    {cookie}
                  </Text>
                  <Text style={[
                    styles.cookieSubtext,
                    form.cookieType === cookie && styles.cookieSubtextSelected
                  ]}>
                    Premium
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            {/* New Flavors Info Box */}
            <View style={styles.newFlavorsBox}>
              <View style={styles.newFlavorsHeader}>
                <Sparkles size={20} color="#f59e0b" />
                <Text style={styles.newFlavorsTitle}>New Exciting Flavors Coming Soon! 🍪✨</Text>
              </View>
              <Text style={styles.newFlavorsText}>
                Stay tuned for more delicious cookie varieties that will make your taste buds dance! 
                Follow us on social media for updates on new flavor releases.
              </Text>
            </View>
          </Card>

          {/* Contact Information */}
          <Card style={styles.transparentSection}>
            <Text style={styles.sectionTitle}>📝 Contact Information</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name *"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address *"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number *"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType="phone-pad"
            />
          </Card>

          {/* Order Details */}
          <Card style={styles.transparentSection}>
            <Text style={styles.sectionTitle}>📦 Order Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Quantity (dozen/half dozen) *"
              value={form.quantity}
              onChangeText={(text) => setForm({ ...form, quantity: text })}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Special requests or custom mix details"
              value={form.specialRequests}
              onChangeText={(text) => setForm({ ...form, specialRequests: text })}
              multiline
              numberOfLines={3}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Dietary requirements or allergies"
              value={form.dietaryNotes}
              onChangeText={(text) => setForm({ ...form, dietaryNotes: text })}
              multiline
              numberOfLines={2}
            />
          </Card>

          {/* Delivery Options */}
          <Card style={styles.transparentSection}>
            <Text style={styles.sectionTitle}>🚚 Pickup or Delivery</Text>
            <View style={styles.deliveryOptions}>
              <TouchableOpacity
                style={[
                  styles.deliveryOption,
                  form.deliveryType === 'pickup' && styles.deliveryOptionSelected
                ]}
                onPress={() => setForm({ ...form, deliveryType: 'pickup' })}
              >
                <Package size={20} color={form.deliveryType === 'pickup' ? '#ffffff' : '#c084fc'} />
                <Text style={[
                  styles.deliveryOptionText,
                  form.deliveryType === 'pickup' && styles.deliveryOptionTextSelected
                ]}>
                  Pickup
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.deliveryOption,
                  form.deliveryType === 'delivery' && styles.deliveryOptionSelected
                ]}
                onPress={() => setForm({ ...form, deliveryType: 'delivery' })}
              >
                <MapPin size={20} color={form.deliveryType === 'delivery' ? '#ffffff' : '#c084fc'} />
                <Text style={[
                  styles.deliveryOptionText,
                  form.deliveryType === 'delivery' && styles.deliveryOptionTextSelected
                ]}>
                  Delivery
                </Text>
              </TouchableOpacity>
            </View>
            
            {form.deliveryType === 'delivery' && (
              <TextInput
                style={styles.input}
                placeholder="Delivery address"
                value={form.address}
                onChangeText={(text) => setForm({ ...form, address: text })}
                multiline
              />
            )}
            
            <View style={styles.inputRow}>
              <Clock size={20} color="#c084fc" />
              <TextInput
                style={[styles.input, { flex: 1, marginLeft: 10 }]}
                placeholder="Preferred pickup/delivery time"
                value={form.pickupTime}
                onChangeText={(text) => setForm({ ...form, pickupTime: text })}
              />
            </View>
          </Card>

          {/* Pricing Info */}
          <Card style={styles.pricingCard}>
            <Text style={styles.pricingTitle}>💝 Pricing Information</Text>
            <Text style={styles.pricingText}>
              We'll provide a custom quote based on your order. Prices vary by cookie type and quantity.
            </Text>
            <Text style={styles.pricingText}>
              Payment options: Cash, Card, or Bank Transfer
            </Text>
          </Card>

          {/* Submit Button */}
          <Button
            title="Submit Order"
            onPress={handleSubmit}
            style={styles.submitButton}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Questions? Call us at 0409 793 219 or 0424 224 845
            </Text>
          </View>

          {/* Additional spacing for better parallax effect */}
          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: -100,
    left: -50,
    width: width + 100, // Extend beyond screen width
    height: height + 200, // Extend beyond screen height
    opacity: 0.4,
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
  },
  header: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 20,
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  transparentSection: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#374151',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
    fontWeight: '600',
  },
  cookieGrid: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 20,
  },
  cookieOption: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(192, 132, 252, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cookieOptionSelected: {
    borderColor: '#c084fc',
    backgroundColor: 'rgba(192, 132, 252, 0.95)',
    shadowColor: '#c084fc',
    shadowOpacity: 0.3,
  },
  cookieOptionText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 4,
  },
  cookieOptionTextSelected: {
    color: '#ffffff',
  },
  cookieSubtext: {
    fontSize: 12,
    fontWeight: '600',
    color: '#c084fc',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cookieSubtextSelected: {
    color: '#ffffff',
  },
  newFlavorsBox: {
    backgroundColor: 'rgba(254, 243, 199, 0.95)',
    borderColor: '#f59e0b',
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#f59e0b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  newFlavorsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  newFlavorsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#92400e',
    marginLeft: 8,
    flex: 1,
  },
  newFlavorsText: {
    fontSize: 14,
    color: '#92400e',
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(209, 213, 219, 0.8)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  deliveryOptions: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  deliveryOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#c084fc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginRight: 8,
  },
  deliveryOptionSelected: {
    backgroundColor: '#c084fc',
  },
  deliveryOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#c084fc',
    marginLeft: 8,
  },
  deliveryOptionTextSelected: {
    color: '#ffffff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingCard: {
    backgroundColor: 'rgba(240, 253, 244, 0.95)',
    borderColor: '#22c55e',
    borderWidth: 2,
    marginBottom: 20,
    shadowColor: '#22c55e',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  pricingTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#166534',
    marginBottom: 12,
    textAlign: 'center',
  },
  pricingText: {
    fontSize: 14,
    color: '#166534',
    textAlign: 'center',
    marginBottom: 4,
  },
  submitButton: {
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 16,
    borderRadius: 12,
  },
  footerText: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 100,
  },
});