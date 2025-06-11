import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Star, Heart, MessageCircle } from 'lucide-react-native';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  event?: string;
  date: string;
}

interface ReviewForm {
  name: string;
  email: string;
  rating: number;
  comment: string;
  event: string;
}

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<ReviewForm>({
    name: '',
    email: '',
    rating: 0,
    comment: '',
    event: '',
  });

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Sarah M.',
      rating: 5,
      comment: 'Absolutely amazing service! Leah and Chelsea made our wedding day perfect. The coffee was incredible and the cookies were a huge hit with all our guests. Thank you for being part of our special day! ❤️',
      event: 'Wedding',
      date: '2 weeks ago'
    },
    {
      id: '2',
      name: 'Mike & Lisa',
      rating: 5,
      comment: 'Hired Brewed Besties for our daughter\'s 16th birthday party. The girls were professional, friendly, and the setup looked amazing. All the teenagers loved the cookies and coffee. Highly recommend!',
      event: 'Birthday Party',
      date: '1 month ago'
    },
    {
      id: '3',
      name: 'Corporate Events Co.',
      rating: 5,
      comment: 'We\'ve used Brewed Besties for multiple corporate events and they never disappoint. Professional service, great coffee, and they always arrive on time. Our employees love when we book them!',
      event: 'Corporate Event',
      date: '3 weeks ago'
    },
    {
      id: '4',
      name: 'Jenny K.',
      rating: 5,
      comment: 'The Kevvy Days event was so beautiful and touching. You can feel the love and passion that goes into everything they do. The coffee is top-notch and the community spirit is incredible. 💕',
      event: 'Kevvy Days',
      date: '1 week ago'
    },
    {
      id: '5',
      name: 'St Mary\'s Primary',
      rating: 5,
      comment: 'Brewed Besties catered our school fete and it was fantastic! The kids loved the cookies and the parents couldn\'t get enough of the coffee. Great value and excellent service.',
      event: 'School Event',
      date: '2 months ago'
    }
  ];

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            disabled={!interactive}
            onPress={() => interactive && setForm({ ...form, rating: star })}
          >
            <Star
              size={20}
              color={star <= rating ? '#fbbf24' : '#d1d5db'}
              fill={star <= rating ? '#fbbf24' : 'transparent'}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleSubmitReview = () => {
    if (!form.name || !form.comment || form.rating === 0) {
      Alert.alert('Missing Information', 'Please fill in your name, rating, and comment.');
      return;
    }
    
    Alert.alert(
      'Review Submitted!', 
      'Thank you for your feedback! Your review will be visible once approved.',
      [{ text: 'OK', onPress: () => {
        setForm({ name: '', email: '', rating: 0, comment: '', event: '' });
        setShowForm(false);
      }}]
    );
  };

  return (
    <GradientBackground>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Star size={40} color="#fbbf24" fill="#fbbf24" />
          <Text style={styles.title}>Customer Reviews</Text>
          <Text style={styles.subtitle}>What our community is saying about us</Text>
        </View>

        <View style={styles.content}>
          {/* Overall Rating */}
          <Card style={styles.overallCard}>
            <View style={styles.overallRating}>
              <Text style={styles.ratingNumber}>5.0</Text>
              <View>
                {renderStars(5)}
                <Text style={styles.ratingText}>Based on {reviews.length} reviews</Text>
              </View>
            </View>
            <View style={styles.ratingBreakdown}>
              <Text style={styles.breakdownText}>⭐⭐⭐⭐⭐ 100% of customers</Text>
            </View>
          </Card>

          {/* Write Review Button */}
          {!showForm && (
            <Button
              title="Write a Review"
              onPress={() => setShowForm(true)}
              style={styles.reviewButton}
            />
          )}

          {/* Review Form */}
          {showForm && (
            <Card style={styles.formCard}>
              <Text style={styles.formTitle}>Share Your Experience</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Name *"
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Email (optional)"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Event Type (optional)"
                value={form.event}
                onChangeText={(text) => setForm({ ...form, event: text })}
              />
              
              <View style={styles.ratingSection}>
                <Text style={styles.ratingLabel}>Your Rating *</Text>
                {renderStars(form.rating, true)}
              </View>
              
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us about your experience *"
                value={form.comment}
                onChangeText={(text) => setForm({ ...form, comment: text })}
                multiline
                numberOfLines={4}
              />
              
              <View style={styles.formButtons}>
                <Button
                  title="Submit Review"
                  onPress={handleSubmitReview}
                  style={styles.submitButton}
                />
                <Button
                  title="Cancel"
                  onPress={() => setShowForm(false)}
                  variant="secondary"
                  style={styles.cancelButton}
                />
              </View>
            </Card>
          )}

          {/* Reviews List */}
          <View style={styles.reviewsList}>
            <Text style={styles.reviewsTitle}>Recent Reviews</Text>
            {reviews.map((review) => (
              <Card key={review.id} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <View style={styles.reviewInfo}>
                    <Text style={styles.reviewName}>{review.name}</Text>
                    <Text style={styles.reviewDate}>{review.date}</Text>
                  </View>
                  {renderStars(review.rating)}
                </View>
                
                {review.event && (
                  <View style={styles.eventTag}>
                    <Text style={styles.eventTagText}>{review.event}</Text>
                  </View>
                )}
                
                <Text style={styles.reviewComment}>{review.comment}</Text>
                
                <View style={styles.reviewFooter}>
                  <Heart size={16} color="#f9a8d4" />
                  <Text style={styles.helpfulText}>Helpful review</Text>
                </View>
              </Card>
            ))}
          </View>

          {/* Social Proof */}
          <Card style={styles.socialCard}>
            <MessageCircle size={30} color="#67e8f9" />
            <Text style={styles.socialTitle}>Follow us for more reviews!</Text>
            <Text style={styles.socialText}>
              See what our community is saying on Instagram @brewed_besties
            </Text>
            <Text style={styles.socialText}>
              Join our Facebook community for updates and customer stories
            </Text>
          </Card>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Have feedback? Contact us at brewedbesties@outlook.com
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
  overallCard: {
    marginBottom: 20,
  },
  overallRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingNumber: {
    fontSize: 48,
    fontWeight: '800',
    color: '#374151',
    marginRight: 20,
  },
  ratingText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  ratingBreakdown: {
    alignItems: 'center',
  },
  breakdownText: {
    fontSize: 16,
    color: '#22c55e',
    fontWeight: '600',
  },
  reviewButton: {
    marginBottom: 20,
  },
  formCard: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 16,
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
    minHeight: 100,
    textAlignVertical: 'top',
  },
  ratingSection: {
    marginBottom: 16,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  submitButton: {
    flex: 1,
  },
  cancelButton: {
    flex: 1,
  },
  reviewsList: {
    marginBottom: 20,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  reviewCard: {
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  reviewDate: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  eventTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  eventTagText: {
    fontSize: 12,
    color: '#0284c7',
    fontWeight: '600',
  },
  reviewComment: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
    marginBottom: 12,
  },
  reviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpfulText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 6,
  },
  socialCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  socialText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 4,
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