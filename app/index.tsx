// index.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { router } from 'expo-router';  // To navigate between screens
import { Cate } from '@/types'; 
import styles   from '@/styles/styles';

import HomeList from '@/components/home/getHomeList'; // Import the Home Listed Categories

const routeMap: Record<string, string> = {
    "1": "yiren/yangchenchen",
    "2": "yiren/sunyunzhu",
    "3": "yiren/wangxinyao",
    "4": "yiren/kele",
    "5": "yiren/anran",
    "6": "yiren/chengchengcheng",
    "7": "yiren/xulizhi",
    "8": "yiren/duxiaoyu",
    "9": "yiren/linxinglan",
    "10": "yiren/others",
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
