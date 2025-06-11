import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity, Linking } from 'react-native';
import { useState } from 'react';
import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react-native';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Missing Information', 'Please fill in your name, email, and message.');
      return;
    }
    
    Alert.alert(
      'Message Sent!', 
      'Thank you for reaching out! We\'ll get back to you within 24 hours.',
      [{ text: 'OK', onPress: () => {
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }}]
    );
  };

  const handlePhonePress = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:brewedbesties@outlook.com');
  };

  const handleSocialPress = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com/brewed_besties',
      facebook: 'https://facebook.com/brewedbesties',
      tiktok: 'https://tiktok.com/@brewed_besties',
    };
    
    const url = urls[platform as keyof typeof urls];
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <GradientBackground>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Phone size={40} color="#c084fc" />
          <Text style={styles.title}>Get In Touch</Text>
          <Text style={styles.subtitle}>We're here to help make your event perfect</Text>
        </View>

        <View style={styles.content}>
          {/* Quick Contact */}
          <Card style={styles.quickContactCard}>
            <Text style={styles.quickContactTitle}>📞 Quick Contact</Text>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handlePhonePress('0409793219')}
            >
              <Phone size={20} color="#c084fc" />
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Leah</Text>
                <Text style={styles.contactValue}>0409 793 219</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handlePhonePress('0424224845')}
            >
              <Phone size={20} color="#c084fc" />
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Chelsea</Text>
                <Text style={styles.contactValue}>0424 224 845</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={handleEmailPress}
            >
              <Mail size={20} color="#c084fc" />
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>brewedbesties@outlook.com</Text>
              </View>
            </TouchableOpacity>
          </Card>

          {/* Service Area */}
          <Card style={styles.serviceAreaCard}>
            <View style={styles.serviceAreaHeader}>
              <MapPin size={24} color="#67e8f9" />
              <Text style={styles.serviceAreaTitle}>Service Area</Text>
            </View>
            <Text style={styles.serviceAreaText}>
              We proudly serve the following areas:
            </Text>
            <View style={styles.areasList}>
              <Text style={styles.areaItem}>📍 Glenmore Park</Text>
              <Text style={styles.areaItem}>📍 St Marys</Text>
              <Text style={styles.areaItem}>📍 Penrith</Text>
              <Text style={styles.areaItem}>📍 Mount Druitt</Text>
              <Text style={styles.areaItem}>📍 Blacktown</Text>
              <Text style={styles.areaItem}>📍 And surrounding Western Sydney areas</Text>
            </View>
            <Text style={styles.serviceAreaNote}>
              Outside our usual area? Contact us anyway - we love to travel for special events!
            </Text>
          </Card>

          {/* Contact Form */}
          <Card style={styles.formCard}>
            <Text style={styles.formTitle}>Send us a Message</Text>
            <Text style={styles.formSubtitle}>
              Have a question or want to discuss your event? We'd love to hear from you!
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Your Name *"
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
              placeholder="Phone Number"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType="phone-pad"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Subject"
              value={form.subject}
              onChangeText={(text) => setForm({ ...form, subject: text })}
            />
            
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Your message *"
              value={form.message}
              onChangeText={(text) => setForm({ ...form, message: text })}
              multiline
              numberOfLines={5}
            />
            
            <Button
              title="Send Message"
              onPress={handleSubmit}
              style={styles.submitButton}
            />
          </Card>

          {/* Social Media */}
          <Card style={styles.socialCard}>
            <Text style={styles.socialTitle}>Follow Our Journey</Text>
            <Text style={styles.socialDescription}>
              Stay connected with us on social media for updates, behind-the-scenes content, and customer features!
            </Text>
            
            <View style={styles.socialButtons}>
              <TouchableOpacity 
                style={styles.socialButton}
                onPress={() => handleSocialPress('instagram')}
              >
                <Instagram size={24} color="#ffffff" />
                <Text style={styles.socialButtonText}>@brewed_besties</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.socialButton, styles.facebookButton]}
                onPress={() => handleSocialPress('facebook')}
              >
                <Facebook size={24} color="#ffffff" />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.socialButton, styles.tiktokButton]}
                onPress={() => handleSocialPress('tiktok')}
              >
                <MessageCircle size={24} color="#ffffff" />
                <Text style={styles.socialButtonText}>TikTok</Text>
              </TouchableOpacity>
            </View>
          </Card>

          {/* Business Hours */}
          <Card style={styles.hoursCard}>
            <Text style={styles.hoursTitle}>⏰ Availability</Text>
            <Text style={styles.hoursText}>
              We're a mobile service, so our hours are flexible based on your event needs!
            </Text>
            <View style={styles.hoursList}>
              <Text style={styles.hoursItem}>☀️ Morning Events: 7:00 AM onwards</Text>
              <Text style={styles.hoursItem}>🌅 Afternoon Events: 12:00 PM onwards</Text>
              <Text style={styles.hoursItem}>🌆 Evening Events: Available upon request</Text>
              <Text style={styles.hoursItem}>📅 Weekends: Most popular for events</Text>
              <Text style={styles.hoursItem}>📞 24/7: Phone and email inquiries</Text>
            </View>
          </Card>

          {/* FAQ */}
          <Card style={styles.faqCard}>
            <Text style={styles.faqTitle}>❓ Frequently Asked Questions</Text>
            
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>How far in advance should I book?</Text>
              <Text style={styles.faqAnswer}>
                We recommend booking 2-4 weeks in advance for regular events, and 6-8 weeks for weddings or large corporate events.
              </Text>
            </View>
            
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Do you provide everything needed?</Text>
              <Text style={styles.faqAnswer}>
                Yes! We bring our mobile coffee setup, all equipment, supplies, and staff. You just provide the space and guests!
              </Text>
            </View>
            
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>What's your minimum booking?</Text>
              <Text style={styles.faqAnswer}>
                Our minimum booking is typically 2 hours, but we're flexible for special circumstances.
              </Text>
            </View>
          </Card>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Can't wait to be part of your special day! 💕
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
  quickContactCard: {
    marginBottom: 20,
  },
  quickContactTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  contactInfo: {
    marginLeft: 16,
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  contactValue: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '700',
    marginTop: 2,
  },
  serviceAreaCard: {
    marginBottom: 20,
  },
  serviceAreaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceAreaTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginLeft: 12,
  },
  serviceAreaText: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 12,
  },
  areasList: {
    marginBottom: 12,
  },
  areaItem: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  serviceAreaNote: {
    fontSize: 13,
    color: '#c084fc',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  formCard: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
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
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 8,
  },
  socialCard: {
    marginBottom: 20,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  socialDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtons: {
    gap: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e91e63',
    padding: 16,
    borderRadius: 12,
  },
  facebookButton: {
    backgroundColor: '#1877f2',
  },
  tiktokButton: {
    backgroundColor: '#000000',
  },
  socialButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },
  hoursCard: {
    backgroundColor: '#f0fdf4',
    borderColor: '#22c55e',
    borderWidth: 1,
    marginBottom: 20,
  },
  hoursTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 12,
  },
  hoursText: {
    fontSize: 14,
    color: '#166534',
    textAlign: 'center',
    marginBottom: 16,
  },
  hoursList: {
    gap: 4,
  },
  hoursItem: {
    fontSize: 14,
    color: '#166534',
  },
  faqCard: {
    marginBottom: 20,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 6,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#c084fc',
    textAlign: 'center',
    fontWeight: '600',
  },
});