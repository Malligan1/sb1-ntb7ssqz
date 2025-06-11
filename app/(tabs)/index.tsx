import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { useState } from 'react';
import GradientBackground from '@/components/GradientBackground';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { Coffee, Heart, MapPin } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: any) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  // Calculate parallax offset - beans move slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <View style={styles.container}>
      {/* Fixed Parallax Background */}
      <View style={styles.parallaxContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1200' }}
          style={[
            styles.parallaxBackground,
            {
              transform: [{ translateY: -parallaxOffset }]
            }
          ]}
          resizeMode="cover"
        />
        <View style={styles.parallaxOverlay} />
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.heroContent}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroTitle}>Brewed Besties</Text>
              <Text style={styles.heroSubtitle}>Brewed with love by besties.</Text>
              <Text style={styles.heroTagline}>Coffee. Cookies. Community.</Text>
            </View>
          </View>
        </View>

        {/* Content with solid background */}
        <View style={styles.contentWrapper}>
          <GradientBackground style={styles.contentBackground}>
            <View style={styles.content}>
              {/* Main CTAs */}
              <Card style={styles.ctaCard}>
                <Text style={styles.ctaTitle}>Ready to Experience the Magic?</Text>
                <Button
                  title="Book Us for Your Event"
                  onPress={() => console.log('Navigate to bookings')}
                />
                <Button
                  title="Order Cookies Now"
                  onPress={() => console.log('Navigate to orders')}
                  variant="secondary"
                />
              </Card>

              {/* Features */}
              <View style={styles.featuresGrid}>
                <Card style={styles.featureCard}>
                  <Coffee size={40} color="#c084fc" />
                  <Text style={styles.featureTitle}>Premium Coffee</Text>
                  <Text style={styles.featureDescription}>
                    Expertly crafted coffee made with love and the finest beans
                  </Text>
                </Card>

                <Card style={styles.featureCard}>
                  <Heart size={40} color="#f9a8d4" />
                  <Text style={styles.featureTitle}>Loaded Cookies</Text>
                  <Text style={styles.featureDescription}>
                    Freshly baked cookies that are perfect for any occasion
                  </Text>
                </Card>

                <Card style={styles.featureCard}>
                  <MapPin size={40} color="#67e8f9" />
                  <Text style={styles.featureTitle}>Mobile Service</Text>
                  <Text style={styles.featureDescription}>
                    We bring the café experience directly to your event
                  </Text>
                </Card>
              </View>

              {/* Kevvy Days Banner */}
              <Card style={styles.kevvyBanner}>
                <Text style={styles.bannerTitle}>🌟 Kevvy Days Special</Text>
                <Text style={styles.bannerDescription}>
                  Join us for our special community events honoring Kevin's dream. 
                  Follow us on social media for upcoming dates and locations!
                </Text>
              </Card>

              {/* Quick Contact */}
              <Card style={styles.contactCard}>
                <Text style={styles.contactTitle}>Get in Touch</Text>
                <Text style={styles.contactText}>📞 0409 793 219 / 0424 224 845</Text>
                <Text style={styles.contactText}>📧 brewedbesties@outlook.com</Text>
                <Text style={styles.contactText}>📍 Serving Glenmore Park, St Marys & surrounding areas</Text>
              </Card>

              {/* Additional spacing for better parallax effect */}
              <View style={styles.bottomSpacing} />
            </View>
          </GradientBackground>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  parallaxContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 1.5, // Make it taller for parallax effect
    zIndex: 0,
  },
  parallaxBackground: {
    width: '100%',
    height: '100%',
  },
  parallaxOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
  },
  hero: {
    height: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTextContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 20,
    backdropFilter: 'blur(10px)',
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  heroTagline: {
    fontSize: 18,
    color: '#f9a8d4',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  contentWrapper: {
    minHeight: height,
    zIndex: 2,
  },
  contentBackground: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  ctaCard: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#374151',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featureCard: {
    width: (width - 60) / 2,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
    color: '#374151',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6b7280',
    lineHeight: 20,
  },
  kevvyBanner: {
    backgroundColor: 'rgba(254, 243, 199, 0.95)',
    borderColor: '#f59e0b',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#f59e0b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#92400e',
    marginBottom: 8,
    textAlign: 'center',
  },
  bannerDescription: {
    fontSize: 14,
    color: '#92400e',
    textAlign: 'center',
    lineHeight: 20,
  },
  contactCard: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    color: '#374151',
  },
  contactText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 4,
  },
  bottomSpacing: {
    height: 100,
  },
});