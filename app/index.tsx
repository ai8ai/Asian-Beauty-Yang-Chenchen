// index.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { router } from 'expo-router';  // To navigate between screens

import styles from '@/styles/styles';
import TopCatPromise from '@/paths/getTopCate'; // Import the Promise

import { TopCate } from '@/types'; 

const HomeScreen = () => {
    const [yccCategories, setYccCategories] = useState<TopCate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch the YccCat data when the component mounts
        const fetchData = async () => {
            try {
                const data = await TopCatPromise; // Wait for the Promise to resolve
                setYccCategories(data); // Update state with the fetched data
            } catch (err) {
                setError('Failed to load categories.'); // Handle errors
                console.error(err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, []);


    const handleItemPress = (item: TopCate) => {
        console.log(item.id)
        router.push({
            pathname: '/profile',
            params: { itemid: item.id },
        });
    };

    const renderItem = ({ item }: { item: TopCate }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => handleItemPress(item)}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle} numberOfLines={2}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.galleryContainer}>
            <FlatList
                data={yccCategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.galleryGrid}
            />
        </View>
    );
};

export default HomeScreen;
