import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Calendar, Heart, Briefcase, GraduationCap, Users } from 'lucide-react-native';

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  duration: string;
  location: string;
  guestCount: string;
  services: string[];
  specialRequests: string;
  budget: string;
}

export default function BookingsPage() {
  const [form, setForm] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    duration: '',
    location: '',
    guestCount: '',
    services: [],
    specialRequests: '',
    budget: '',
  });

  const eventTypes = [
    { id: 'wedding', name: 'Wedding', icon: Heart },
    { id: 'birthday', name: 'Birthday Party', icon: Users },
    { id: 'corporate', name: 'Corporate Event', icon: Briefcase },
    { id: 'school', name: 'School Event', icon: GraduationCap },
  ];

  const serviceOptions = [
    'Coffee Bar Service',
    'Cookie Platters',
    'Barista Service',
    'Custom Menu',
    'Setup & Cleanup',
  ];

  const toggleService = (service: string) => {
    const updatedServices = form.services.includes(service)
      ? form.services.filter(s => s !== service)
      : [...form.services, service];
    setForm({ ...form, services: updatedServices });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.eventType || !form.eventDate) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }
    
    Alert.alert(
      'Booking Request Submitted!', 
      'Thank you for your interest! We\'ll contact you within 24 hours to discuss your event details and provide a custom quote.',
      [{ text: 'OK' }]
    );
  };

  return (
    <GradientBackground>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Calendar size={40} color="#c084fc" />
          <Text style={styles.title}>Book Your Event</Text>
          <Text style={styles.subtitle}>Let us make your special day even more memorable</Text>
        </View>

        <View style={styles.content}>
          {/* Event Type Selection */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>🎉 What's the Occasion?</Text>
            <View style={styles.eventGrid}>
              {eventTypes.map((event) => {
                const IconComponent = event.icon;
                return (
                  <TouchableOpacity
                    key={event.id}
                    style={[
                      styles.eventOption,
                      form.eventType === event.id && styles.eventOptionSelected
                    ]}
                    onPress={() => setForm({ ...form, eventType: event.id })}
                  >
                    <IconComponent 
                      size={24} 
                      color={form.eventType === event.id ? '#ffffff' : '#c084fc'} 
                    />
                    <Text style={[
                      styles.eventOptionText,
                      form.eventType === event.id && styles.eventOptionTextSelected
                    ]}>
                      {event.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </Card>

          {/* Contact Information */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>📝 Your Details</Text>
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

          {/* Event Details */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>📅 Event Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Event Date *"
              value={form.eventDate}
              onChangeText={(text) => setForm({ ...form, eventDate: text })}
            />
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Start Time"
                value={form.eventTime}
                onChangeText={(text) => setForm({ ...form, eventTime: text })}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Duration (hours)"
                value={form.duration}
                onChangeText={(text) => setForm({ ...form, duration: text })}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Event Location/Address"
              value={form.location}
              onChangeText={(text) => setForm({ ...form, location: text })}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Expected Number of Guests"
              value={form.guestCount}
              onChangeText={(text) => setForm({ ...form, guestCount: text })}
              keyboardType="number-pad"
            />
          </Card>

          {/* Services */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>☕ Services Needed</Text>
            <Text style={styles.sectionSubtitle}>Select all that apply:</Text>
            {serviceOptions.map((service) => (
              <TouchableOpacity
                key={service}
                style={styles.serviceOption}
                onPress={() => toggleService(service)}
              >
                <View style={[
                  styles.checkbox,
                  form.services.includes(service) && styles.checkboxSelected
                ]}>
                  {form.services.includes(service) && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={styles.serviceText}>{service}</Text>
              </TouchableOpacity>
            ))}
          </Card>

          {/* Additional Information */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>💭 Additional Information</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Special requests, dietary requirements, or additional details"
              value={form.specialRequests}
              onChangeText={(text) => setForm({ ...form, specialRequests: text })}
              multiline
              numberOfLines={4}
            />
            <TextInput
              style={styles.input}
              placeholder="Approximate Budget (optional)"
              value={form.budget}
              onChangeText={(text) => setForm({ ...form, budget: text })}
            />
          </Card>

          {/* Pricing Info */}
          <Card style={styles.pricingCard}>
            <Text style={styles.pricingTitle}>💝 Custom Quotes</Text>
            <Text style={styles.pricingText}>
              Every event is unique! We provide personalized quotes based on your specific needs, 
              guest count, duration, and services required.
            </Text>
            <Text style={styles.pricingText}>
              Our packages start from $200 and include setup, service, and cleanup.
            </Text>
          </Card>

          {/* Submit Button */}
          <Button
            title="Submit Booking Request"
            onPress={handleSubmit}
            style={styles.submitButton}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Questions? Call us at 0409 793 219 or 0424 224 845
            </Text>
            <Text style={styles.footerText}>
              Email: brewedbesties@outlook.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#374151',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  eventGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  eventOption: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    marginBottom: 12,
    alignItems: 'center',
  },
  eventOptionSelected: {
    borderColor: '#c084fc',
    backgroundColor: '#c084fc',
  },
  eventOptionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginTop: 8,
  },
  eventOptionTextSelected: {
    color: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  serviceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#c084fc',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#c084fc',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  serviceText: {
    fontSize: 16,
    color: '#374151',
  },
  pricingCard: {
    backgroundColor: '#f0fdf4',
    borderColor: '#22c55e',
    borderWidth: 1,
    marginBottom: 20,
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
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 2,
  },
});