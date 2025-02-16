// cat2img.tsx
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import Slideshow from '@/components/SlideshowOnline';
import {genFreshList, genYCCList} from '@/utils/genImageList'

const yccList = genFreshList("ycc/yf", 20).sort(() => Math.random() - 0.5);
const syzList = genFreshList("syz/sf", 20).sort(() => Math.random() - 0.5);
const wxyList = genFreshList("wxy/wf", 20).sort(() => Math.random() - 0.5);
const keleList= genFreshList("kele/kf",20).sort(() => Math.random() - 0.5);
const xlzList = genFreshList("xlz/xf", 20).sort(() => Math.random() - 0.5);
const othersList= genFreshList("others/of",20).sort(() => Math.random() - 0.5);

const yccPure= genYCCList("pure/pur", 5).sort(() => Math.random() - 0.5);
const yccSpa = genYCCList("spaghetti/spa", 5).sort(() => Math.random() - 0.5);
const yccSea = genYCCList("seaside/sea", 5).sort(() => Math.random() - 0.5);

const Cat2Img = () => {
    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const catId = Array.isArray(params.itemid) ? params.itemid[0] : params.itemid;
    const [images, setImages] = useState<string[]>([]);

    console.log("====" + catId)

    useEffect(() => {
        if (catId === 'YCCyf1') {
            console.log("CatScreen received catId:", catId);  // Log catId to console
            setImages(yccList);
        } else if (catId === 'SYZsf1') {
            setImages(syzList);
        } else if (catId === 'WXYwf1') {
            setImages(wxyList);
        } else if (catId === 'KELEkf1') {
            setImages(keleList);
        } else if (catId === 'XLZxf1') {
            setImages(xlzList);
        } else if (catId === 'OTHERSof1') {
            setImages(othersList);
        } else if (catId === 'YCCpure') {
            setImages(yccPure);
        } else if (catId === 'YCCSpa') {
            setImages(yccSpa);
        } else if (catId === 'YCCSea') {
            setImages(yccSea);
        } else {
            console.log('error ---')
            setImages(yccList);
        }

    }, [catId]);

    // useEffect(() => {
    //     navigation.setOptions({ headerShown: false });
    // }, [navigation]);


    useEffect(() => {
        navigation.setOptions({ 
            title: catId || "Default Title s",
            headerShown: false,  // Hides the header
        });
    }, [catId, navigation]);

    return <Slideshow images={images} />;
};

export default Cat2Img;
