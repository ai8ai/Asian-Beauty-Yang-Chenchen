// index.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';  // To navigate between screens

import { Cate } from '@/types'; 
import styles   from '@/styles/styles';

import HomeList  from '@/components/home/getHomeList'; // Import the Home Listed Categories

const HomeScreen = () => {
    const handleItemPress = (item: Cate) => {
        router.push({
            pathname: "/CatScreen",
            params: { itemid: item.id },
        });
    };

    const renderItem = ({ item }: { item: Cate }) => (
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


    return (
        <View style={styles.galleryContainer}>
            <FlatList
                data={HomeList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.galleryGrid}
            />
        </View>
    );
};

export default HomeScreen;
