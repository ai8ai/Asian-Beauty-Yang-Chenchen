// cat2img.tsx
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation  } from 'expo-router';

import Slideshow from '@/components/SlideshowOnline';
import { getImagesByCategory } from '@/paths/getYccImagesPath';

const Cat2Img = () => {
    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const catId = Array.isArray(params.itemid) ? params.itemid[0] : params.itemid;

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const fetchedImages = await getImagesByCategory(catId || '1'); // Default to '1' if no ID
            setImages(fetchedImages);
        };

        fetchImages();
    }, [catId]);

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return <Slideshow images={images} />;
};

export default Cat2Img;
