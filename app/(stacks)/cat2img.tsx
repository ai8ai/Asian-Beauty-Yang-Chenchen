// cat2img.tsx
import React, {useState, useEffect, useMemo  } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import Slideshow from '@/components/Slideshow';
const BASE_URL = "https://ai8ai.github.io/";


const Cat2Img = () => {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();

    const par = useLocalSearchParams();
    const catId =Array.isArray(par.itemid) ? par.itemid[0] : par.itemid;
    const path = Array.isArray(par.path) ? par.path[0] : par.path;
    const count = Array.isArray(par.count) ? par.count[0] : par.count;

    const imageList = useMemo(() => {
        // console.log(catId + '  ' + path + '  '+ count)
        const numCount = parseInt(count || '0', 10); // 10 is radix , not a number 10
        if (!path) {            return ["fff-path"];        }
        if ( isNaN(numCount) || numCount <= 0) return ["fff-numCount"];
        return Array.from({ length: numCount }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);
    }, [path, count]);
    
    console.log("-------- Generated imageList:", imageList);

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

    return <Slideshow images={imageList} />;
};

export default Cat2Img;