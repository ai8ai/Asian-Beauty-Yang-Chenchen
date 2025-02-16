// cat2img.tsx
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import Slideshow from '@/components/SlideshowOnline';
import {genFreshList, genYCCList, genSYZList, genWXYList, genKeleList,genOthersList, genXLZList} from '@/utils/genImageList'

const yccList = genFreshList("ycc/yf", 20).sort(() => Math.random() - 0.5);
const syzList = genFreshList("syz/sf", 20).sort(() => Math.random() - 0.5);
const wxyList = genFreshList("wxy/wf", 20).sort(() => Math.random() - 0.5);
const keleList= genFreshList("kele/kf",20).sort(() => Math.random() - 0.5);
const xlzList = genFreshList("xlz/xf", 20).sort(() => Math.random() - 0.5);
const othersList= genFreshList("others/of",20).sort(() => Math.random() - 0.5);

const yccPure= genYCCList("pure/pur", 5).sort(() => Math.random() - 0.5);
const yccSpa = genYCCList("spaghetti/spa", 5).sort(() => Math.random() - 0.5);
const yccSea = genYCCList("seaside/sea", 5).sort(() => Math.random() - 0.5);

const syzStr = genSYZList("lace/lace", 5).sort(() => Math.random() - 0.5);
const syzSpa = genSYZList("spaghetti/spa", 5).sort(() => Math.random() - 0.5);
const syzLace = genSYZList("strapless/str", 5).sort(() => Math.random() - 0.5);

const wxyLace = genWXYList("lace/lace", 5).sort(() => Math.random() - 0.5);
const wxySpa = genWXYList("spaghetti/spa", 5).sort(() => Math.random() - 0.5);
const wxyBar = genWXYList("bar/bar", 5).sort(() => Math.random() - 0.5);

const xlzLace = genXLZList("lace/lace", 5).sort(() => Math.random() - 0.5);
const xlzSpa = genXLZList("purplespaghetti/spa", 5).sort(() => Math.random() - 0.5);
const xlzPro = genXLZList("professional/pro", 5).sort(() => Math.random() - 0.5);


const keleFlo = genKeleList("floral_red/flo", 5).sort(() => Math.random() - 0.5);
const keleSpa = genKeleList("spaghetti_strap/spa", 5).sort(() => Math.random() - 0.5);
const keleChe = genKeleList("cheongsam_white/che", 5).sort(() => Math.random() - 0.5);

const oGreen = genOthersList("green/green", 5).sort(() => Math.random() - 0.5);
const oMid = genOthersList("middleage/mid", 5).sort(() => Math.random() - 0.5);
const oStu = genOthersList("student/stu", 5).sort(() => Math.random() - 0.5);

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

        } else if (catId === 'SYZStr') {
            setImages(syzStr);
        } else if (catId === 'SYZSpa') {
            setImages(syzSpa);
        } else if (catId === 'SYZLace') {
            setImages(syzLace);


        } else if (catId === 'WXYBar') {
            setImages(wxyBar);
        } else if (catId === 'WXYSpa') {
            setImages(wxySpa);
        } else if (catId === 'WXYLace') {
            setImages(wxyLace);


        } else if (catId === 'XLZPro') {
            setImages(xlzPro);
        } else if (catId === 'XLZSpa') {
            setImages(xlzSpa);
        } else if (catId === 'XLZLace') {
            setImages(xlzLace);



        } else if (catId === 'KELEChe') {
            setImages(keleChe);
        } else if (catId === 'KELESpa') {
            setImages(keleSpa);
        } else if (catId === 'KELEFlo') {
            setImages(keleFlo);


        } else if (catId === 'OTHERSGreen') {
            setImages(oGreen);
        } else if (catId === 'OTHERSMid') {
            setImages(oMid);
        } else if (catId === 'OTHERSStu') {
            setImages(oStu);


        } else {
            console.log('error ---')
            setImages(yccList);
        }

    }, [catId]);



    useEffect(() => {
        navigation.setOptions({ 
            title: catId || "Asian Beantiful Women",
            headerShown: false,  // Hides the header
        });
    }, [catId, navigation]);

    return <Slideshow images={images} />;
};

export default Cat2Img;
