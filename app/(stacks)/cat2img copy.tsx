import React, {useState, useEffect, useMemo  } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import styles         from '@/config/styles';
import { genImgList } from '@/utils/genImageList'

export default function SlideshowScreen() {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();

    const { imgPath, count } = useLocalSearchParams();
    // "count": "10",   "path": "abspecialtaste/finger/fi"}

    const images = genImgList(imgPath as string, Number(count));

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleSwipeLeft = () => {
        goToNextImage();
    };

    const handleSwipeRight = () => {
        console.log(images[currentIndex]);
        goToPrevImage();
    };

    useEffect(() => {
        if (parentNavi) {
            parentNavi.setOptions({ headerShown: false }); // Hide Drawer header
        }
        return () => {
            if (parentNavi) {
                parentNavi.setOptions({ headerShown: true }); // Restore Drawer header on exit
            }
        };
    }, [parentNavi]);


    return (
        <View style={styles.sliderContainer}>
            {images.length > 0 ? (
                <Image source={{ uri: images[currentIndex] }} style={styles.sliderImage} />
            ) : (
                <Text style={styles.sliderNavText}>No images available</Text>
            )}          
            <View style={styles.sliderNavigation}>
                <TouchableOpacity onPress={handleSwipeRight} style={styles.sliderNavButton}>
                    <Text style={styles.sliderNavText}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSwipeLeft} style={styles.sliderNavButton}>
                    <Text style={styles.sliderNavText}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

