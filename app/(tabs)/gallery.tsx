import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import { Camera, Play, Heart, Coffee } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const imageWidth = (width - 60) / 2;

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string | any;
  title: string;
  category: 'cookies' | 'van' | 'kevvy-days';
  description?: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: '2',
      type: 'image',
      url: require('@/assets/images/cookies/cookies9.jpeg'),
      title: 'Loaded Cookie Stack',
      category: 'cookies',
      description: 'Our signature loaded cookies with coffee'
    },
    {
      id: '3',
      type: 'image',
      url: require('@/assets/images/vans/BB van1.jpeg'),
      title: 'Brewed Besties Mobile Cafe',
      category: 'van',
      description: 'Our beautiful mobile coffee van in action'
    },
    {
      id: '5',
      type: 'image',
      url: require('@/assets/images/cookies/cookies8.jpeg'),
      title: 'Cookie & Coffee Pairing',
      category: 'cookies',
      description: 'Perfect cookie and coffee combination'
    },
    {
      id: '7',
      type: 'image',
      url: require('@/assets/images/cookies/cookie7.jpeg'),
      title: 'Brewed Besties Cookies',
      category: 'cookies',
      description: 'Fresh cookies with our signature branding'
    },
    {
      id: '8',
      type: 'image',
      url: require('@/assets/images/vans/BB van 2.jpeg'),
      title: 'Van Logo Close-up',
      category: 'van',
      description: 'Beautiful Brewed Besties branding detail'
    },
    {
      id: '9',
      type: 'image',
      url: require('@/assets/images/cookies/cookies6.jpeg'),
      title: 'Cookie Gift Box',
      category: 'cookies',
      description: 'Beautifully packaged cookie selection'
    },
    {
      id: '10',
      type: 'image',
      url: require('@/assets/images/cookies/cookies5.jpeg'),
      title: 'Loaded Cookie Cross-Section',
      category: 'cookies',
      description: 'See the delicious layers inside our cookies'
    },
    {
      id: '11',
      type: 'image',
      url: require('@/assets/images/cookies/cookies4.jpeg'),
      title: 'Lotus Biscoff Cookie',
      category: 'cookies',
      description: 'Premium Biscoff loaded cookie with drizzle'
    },
    {
      id: '12',
      type: 'image',
      url: require('@/assets/images/cookies/cookies2.jpeg'),
      title: 'Cookie Collection',
      category: 'cookies',
      description: 'Variety of our handcrafted loaded cookies'
    },
    {
      id: '13',
      type: 'image',
      url: require('@/assets/images/cookies/cookie3.jpeg'),
      title: 'Chocolate Drizzle Cookies',
      category: 'cookies',
      description: 'Artfully decorated cookies with chocolate drizzle'
    },
    {
      id: '14',
      type: 'image',
      url: require('@/assets/images/cookies/cookies1.jpeg'),
      title: 'Fresh Batch Display',
      category: 'cookies',
      description: 'Fresh batch of our signature loaded cookies'
    },
    {
      id: '15',
      type: 'image',
      url: require('@/assets/images/coffee1.jpeg'),
      title: 'Premium Coffee Selection',
      category: 'van',
      description: 'Professional coffee service with latte art'
    },
    {
      id: '16',
      type: 'image',
      url: require('@/assets/images/vans/BB van 3.jpeg'),
      title: 'Van with Team Member',
      category: 'van',
      description: 'Our friendly team ready to serve'
    },
    {
      id: '17',
      type: 'image',
      url: require('@/assets/images/vans/BB van 4.jpeg'),
      title: 'Van Side View',
      category: 'van',
      description: 'Complete view of our mobile coffee setup'
    },
    {
      id: '18',
      type: 'image',
      url: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Kevvy Days Event',
      category: 'kevvy-days',
      description: 'Community gathering in Kevin\'s honor'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'cookies', name: 'Cookies', icon: Coffee },
    { id: 'van', name: 'Our Van', icon: Camera },
    { id: 'kevvy-days', name: 'Kevvy Days', icon: Heart },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <GradientBackground>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Camera size={40} color="#c084fc" />
          <Text style={styles.title}>Our Gallery</Text>
          <Text style={styles.subtitle}>Moments from cookies, van, and community</Text>
        </View>

        <View style={styles.content}>
          {/* Category Filter */}
          <Card style={styles.filterCard}>
            <Text style={styles.filterTitle}>Browse by Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
              <View style={styles.categories}>
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <TouchableOpacity
                      key={category.id}
                      style={[
                        styles.categoryButton,
                        selectedCategory === category.id && styles.categoryButtonSelected
                      ]}
                      onPress={() => setSelectedCategory(category.id)}
                    >
                      <IconComponent 
                        size={20} 
                        color={selectedCategory === category.id ? '#ffffff' : '#c084fc'} 
                      />
                      <Text style={[
                        styles.categoryText,
                        selectedCategory === category.id && styles.categoryTextSelected
                      ]}>
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </Card>

          {/* Gallery Grid */}
          <View style={styles.gallery}>
            <Text style={styles.galleryTitle}>
              {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
              <Text style={styles.galleryCount}> ({filteredItems.length})</Text>
            </Text>
            
            <View style={styles.galleryGrid}>
              {filteredItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.galleryItem}>
                  <Image 
                    source={typeof item.url === 'string' ? { uri: item.url } : item.url} 
                    style={styles.galleryImage} 
                  />
                  {item.type === 'video' && (
                    <View style={styles.videoOverlay}>
                      <Play size={24} color="#ffffff" fill="#ffffff" />
                    </View>
                  )}
                  <View style={styles.imageOverlay}>
                    <Text style={styles.imageTitle}>{item.title}</Text>
                    {item.description && (
                      <Text style={styles.imageDescription}>{item.description}</Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Featured Moments */}
          <Card style={styles.featuredCard}>
            <Text style={styles.featuredTitle}>✨ Featured Moments</Text>
            <Text style={styles.featuredText}>
              Every photo tells a story of connection, joy, and community. From our delicious cookies to our beautiful van, 
              we're honored to share these special moments with you.
            </Text>
            
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>200+</Text>
                <Text style={styles.statLabel}>Events Catered</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>10,000+</Text>
                <Text style={styles.statLabel}>Cookies Served</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>100+</Text>
                <Text style={styles.statLabel}>Happy Customers</Text>
              </View>
            </View>
          </Card>

          {/* Social Media */}
          <Card style={styles.socialCard}>
            <Text style={styles.socialTitle}>📸 Follow Our Journey</Text>
            <Text style={styles.socialText}>
              See more behind-the-scenes moments and customer photos on our social media!
            </Text>
            <View style={styles.socialLinks}>
              <View style={styles.socialLink}>
                <Text style={styles.socialIcon}>📱</Text>
                <Text style={styles.socialName}>Instagram: @brewed_besties</Text>
              </View>
              <View style={styles.socialLink}>
                <Text style={styles.socialIcon}>👥</Text>
                <Text style={styles.socialName}>Facebook: Brewed Besties</Text>
              </View>
              <View style={styles.socialLink}>
                <Text style={styles.socialIcon}>🎵</Text>
                <Text style={styles.socialName}>TikTok: @brewed_besties</Text>
              </View>
            </View>
          </Card>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Want your event featured? Tag us in your photos! #BrewedBesties
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
  filterCard: {
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 12,
  },
  categoriesScroll: {
    marginHorizontal: -20,
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#c084fc',
    backgroundColor: '#ffffff',
  },
  categoryButtonSelected: {
    backgroundColor: '#c084fc',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#c084fc',
    marginLeft: 6,
  },
  categoryTextSelected: {
    color: '#ffffff',
  },
  gallery: {
    marginBottom: 20,
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  galleryCount: {
    color: '#6b7280',
    fontWeight: '400',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: imageWidth,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  galleryImage: {
    width: '100%',
    height: imageWidth,
    resizeMode: 'cover',
  },
  videoOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 16,
    padding: 8,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
  },
  imageTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 2,
  },
  imageDescription: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.9,
  },
  featuredCard: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
    borderWidth: 1,
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 12,
  },
  featuredText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#92400e',
  },
  statLabel: {
    fontSize: 12,
    color: '#92400e',
    textAlign: 'center',
    marginTop: 4,
  },
  socialCard: {
    marginBottom: 20,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 12,
  },
  socialText: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  socialLinks: {
    gap: 8,
  },
  socialLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  socialName: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});