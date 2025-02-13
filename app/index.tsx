// index.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { router } from 'expo-router';  // To navigate between screens
import { Cate } from '@/types'; 
import styles   from '@/styles/styles';

import HomeList from '@/components/home/getHomeList'; // Import the Home Listed Categories

const routeMap: Record<string, string> = {
    "1": "yiren/Yang Chenchen",
    "2": "yiren/Sun Yunzhu",
    "3": "yiren/Wang Xinyao",
    "4": "yiren/Vicky Kele",
    "5": "yiren/Anran",
    "6": "yiren/Cheng Chengcheng",
    "7": "yiren/Xu Lizhi",
    "8": "yiren/Du Xiaoyu",
    "9": "yiren/Lin Xinglan",
    "10": "yiren/and More",
};


const HomeScreen = () => {
    const handleItemPress = (item: Cate) => {
        const pathname = routeMap[item.id] || "/detail/profile" as any;
        router.push({
            pathname,
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
