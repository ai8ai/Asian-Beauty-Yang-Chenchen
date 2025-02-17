// cat2img.tsx
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import Slideshow from '@/components/SlideshowOnline';
import { genFreshList, genYCCList, genSYZList, genWXYList, genKeleList, genOthersList, genXLZList } from '@/components/cat/genImageList'

//#region Fresh
//#endregion

//#region YCC
const yccPure = genYCCList("pure/pu", 5);
const yccSpa = genYCCList("spaghetti/sp", 5);
const yccChe = genYCCList("cheongsam/ch", 5);
const yccStr = genYCCList("strapless/st", 5);
const yccBed = genYCCList("bedbathsofa/be", 5);
const yccSeq = genYCCList("sequins/se", 5);
const yccBlue = genYCCList("blue/bl", 5);
const yccFlo = genYCCList("floralskirt/fl", 5);
const yccGlass = genYCCList("glass/gl", 5);
const yccGreen = genYCCList("green/gr", 5);
const yccDenim = genYCCList("denim/de", 5);
const yccPink = genYCCList("pinkgirl/pi", 5);
const yccCos = genYCCList("cosplay/co", 5);
//#endregion

//#region syz
const syzStr = genSYZList("lace/lace", 5);
const syzSpa = genSYZList("spaghetti/spa", 5);
const syzLace = genSYZList("strapless/str", 5);
//#endregion

//#region wxy
const wxyLace = genWXYList("lace/lace", 5);
const wxySpa = genWXYList("spaghetti/spa", 5);
const wxyBar = genWXYList("bar/bar", 5);
//#endregion

//#region wxlz
const xlzLace = genXLZList("lace/lace", 5);
const xlzSpa = genXLZList("purplespaghetti/spa", 5);
const xlzPro = genXLZList("professional/pro", 5);
//#endregion

//#region kele
const keleFlo = genKeleList("floral_red/flo", 5);
const keleSpa = genKeleList("spaghetti_strap/spa", 5);
const keleChe = genKeleList("cheongsam_white/che", 5);
//#endregion

//#region others
const oGreen = genOthersList("green/green", 5);
const oMid = genOthersList("middleage/mid", 5);
const oStu = genOthersList("student/stu", 5);
//#endregion

const Cat2Img = () => {
    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const catId = Array.isArray(params.itemid) ? params.itemid[0] : params.itemid;
    const [images, setImages] = useState<string[]>([]);

    console.log("====" + catId)

    useEffect(() => {
        console.log("CatScreen received catId:", catId); // Log catId to console
    
        // Category mapping object with explicit type
        const categoryMap: Record<string, string[]> = {
            // Main Categories
            YCCyf1: yccList,
            SYZsf1: syzList,
            WXYwf1: wxyList,
            KELEkf1: keleList,
            XLZxf1: xlzList,
            OTHERSof1: othersList,

            // YCC Subcategories
            YCCPure: yccPure,
            YCCSpa: yccSpa,
            YCCChe: yccChe,
            YCCStr: yccStr,
            YCCBed: yccBed,
            YCCSeq: yccSeq,
            YCCBlue: yccBlue,
            YCCFlo: yccFlo,
            YCCGlass: yccGlass,
            YCCGreen: yccGreen,
            YCCDenim: yccDenim,
            YCCPink: yccPink,
            YCCCos: yccCos,

            // SYZ Subcategories
            SYZStr: syzStr,
            SYZSpa: syzSpa,
            SYZLace: syzLace,

            // WXY Subcategories
            WXYBar: wxyBar,
            WXYSpa: wxySpa,
            WXYLace: wxyLace,

            // XLZ Subcategories
            XLZPro: xlzPro,
            XLZSpa: xlzSpa,
            XLZLace: xlzLace,

            // KELE Subcategories
            KELEChe: keleChe,
            KELESpa: keleSpa,
            KELEFlo: keleFlo,

            // OTHERS Subcategories
            OTHERSGreen: oGreen,
            OTHERSMid: oMid,
            OTHERSStu: oStu,
        };

        // Set images based on categoryId or fallback to default
        setImages(categoryMap[catId] || yccList);
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