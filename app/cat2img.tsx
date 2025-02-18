// cat2img.tsx
import React, { useEffect, useMemo  } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import Slideshow from '@/components/SlideshowOnline';
const BASE_URL = "https://ai8ai.github.io/";


const Cat2Img = () => {
    const par = useLocalSearchParams();
    const navigation = useNavigation();

    const catId = Array.isArray(par.itemid) ? par.itemid[0] : par.itemid;
    const path = Array.isArray(par.path) ? par.path[0] : par.path;
    const count = Array.isArray(par.count) ? par.count[0] : par.count;

    const imageList = useMemo(() => {
        const numCount = parseInt(count || '0', 10);
        if (!path || isNaN(numCount) || numCount <= 0) return [];
        return Array.from({ length: numCount }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`);
    }, [path, count]);

    useEffect(() => {
        navigation.setOptions({
            title: catId || "Asian Beantiful Women",
            headerShown: false,  // Hides the header
        });
    }, [navigation]);

    return <Slideshow images={imageList} />;
};

export default Cat2Img;