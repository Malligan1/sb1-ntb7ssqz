import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import { Heart, Coffee, Users } from 'lucide-react-native';
import Bestie1 from '@/assets/images/assets/Processed_Image_2_Centered_CircleReady.jpg';
import Bestie2 from '@/assets/images/assets/Processed_Image_1_Centered_CircleReady.jpg';



export default function AboutPage() {
  return (
    <GradientBackground>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Meet the Besties</Text>
          <Text style={styles.subtitle}>The heart and soul behind Brewed Besties</Text>
        </View>

        <View style={styles.content}>
          {/* Leah's Section */}
          <Card style={styles.personCard}>
            <View style={styles.personHeader}>
              <View style={styles.avatarContainer}>
                <Image
                  source={Bestie1}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.personInfo}>
                <Text style={styles.personName}>Meet Leah</Text>
                <Text style={styles.personAge}>24-year-old mum</Text>
              </View>
            </View>
            <Text style={styles.personBio}>
              Leah is the driving force behind Brewed Besties, carrying forward her late husband Kevin's dream of owning a coffee van. 
              With determination and love, she's turned this dream into reality while raising her family. 
              Every cup served is a tribute to Kevin's memory and their shared vision of bringing joy to the community.
            </Text>
            <View style={styles.iconRow}>
              <Heart size={20} color="#f9a8d4" />
              <Text style={styles.iconText}>Honoring Kevin's dream</Text>
            </View>
          </Card>

          {/* Chelsea's Section */}
          <Card style={styles.personCard}>
            <View style={styles.personHeader}>
              <View style={styles.avatarContainer}>
                <Image
                  source={Bestie2}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.personInfo}>
                <Text style={styles.personName}>Meet Chelsea</Text>
                <Text style={styles.personAge}>Hospitality Expert</Text>
              </View>
            </View>
            <Text style={styles.personBio}>
              With 10 years of experience in hospitality, Chelsea brings passion and expertise to every interaction. 
              Her love for coffee and dedication to exceptional service ensures that every customer feels welcomed and valued. 
              She's the friendly face that makes every visit memorable.
            </Text>
            <View style={styles.iconRow}>
              <Coffee size={20} color="#c084fc" />
              <Text style={styles.iconText}>10 years hospitality experience</Text>
            </View>
          </Card>

          {/* Our Story Section */}
          <Card style={styles.storyCard}>
            <View style={styles.storyHeader}>
              <Users size={30} color="#67e8f9" />
              <Text style={styles.storyTitle}>Our Story</Text>
            </View>
            <Text style={styles.storyText}>
              Brewed Besties was born from love, loss, and the power of dreams. Kevin always envisioned owning a coffee van, 
              bringing people together over great coffee and delicious treats. When we lost Kevin, Leah knew she had to make his dream come true.
            </Text>
            <Text style={styles.storyText}>
              Together with Chelsea, they've created more than just a mobile coffee service – they've built a community hub on wheels. 
              Every "Kevvy Day" event is a celebration of Kevin's life and his vision of connecting people through the simple joy of sharing coffee and cookies.
            </Text>
            <Text style={styles.storyText}>
              We're not just serving coffee; we're serving memories, building connections, and honoring a beautiful dream. 
              When you choose Brewed Besties, you become part of our extended family and Kevin's lasting legacy.
            </Text>
          </Card>

          {/* Kevvy Days Section */}
          <Card style={styles.kevvyCard}>
            <Text style={styles.kevvyTitle}>✨ Kevvy Days</Text>
            <Text style={styles.kevvyDescription}>
              Special community events where we give back and celebrate Kevin's memory. 
              These days are about bringing our community together, sharing stories, 
              and creating new memories while honoring the beautiful spirit that started it all.
            </Text>
            <Text style={styles.kevvySubtext}>
              Follow us on social media to join our next Kevvy Day celebration!
            </Text>
          </Card>

          {/* Values Section */}
          <Card style={styles.valuesCard}>
            <Text style={styles.valuesTitle}>Our Values</Text>
            <View style={styles.valuesList}>
              <View style={styles.valueItem}>
                <Text style={styles.valueEmoji}>❤️</Text>
                <Text style={styles.valueText}>Community First - We believe in bringing people together</Text>
              </View>
              <View style={styles.valueItem}>
                <Text style={styles.valueEmoji}>☕</Text>
                <Text style={styles.valueText}>Quality Always - Premium coffee and fresh-baked cookies</Text>
              </View>
              <View style={styles.valueItem}>
                <Text style={styles.valueEmoji}>🌟</Text>
                <Text style={styles.valueText}>Love in Every Cup - Honoring Kevin's dream with every serve</Text>
              </View>
              <View style={styles.valueItem}>
                <Text style={styles.valueEmoji}>🤝</Text>
                <Text style={styles.valueText}>Friendship & Support - We're more than vendors, we're friends</Text>
              </View>
            </View>
          </Card>
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
    fontSize: 32,
    fontWeight: '800',
    color: '#374151',
    textAlign: 'center',
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
  personCard: {
    marginBottom: 20,
  },
  personHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffffff',
    marginRight: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 4,
  },
  personAge: {
    fontSize: 16,
    color: '#6b7280',
  },
  personBio: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
    marginBottom: 12,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
    fontStyle: 'italic',
  },
  storyCard: {
    marginBottom: 20,
  },
  storyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  storyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    marginLeft: 12,
  },
  storyText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
    marginBottom: 12,
  },
  kevvyCard: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
    borderWidth: 1,
    marginBottom: 20,
  },
  kevvyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 12,
  },
  kevvyDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 8,
  },
  kevvySubtext: {
    fontSize: 13,
    color: '#92400e',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  valuesCard: {
    marginBottom: 20,
  },
  valuesTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 16,
  },
  valuesList: {
    marginTop: 8,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  valueEmoji: {
    fontSize: 18,
    marginRight: 12,
    marginTop: 2,
  },
  valueText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
    flex: 1,
  },
});