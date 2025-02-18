import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/styles/styles';
import { Cate } from '@/types';
import { useNavigation } from '@react-navigation/native';

import { genFreshList, genYCCList, genSYZList, genWXYList, genKeleList, genOthersList, genXLZList } from '@/components/cat/genImageList'

const CategoryScreen: React.FC = () => {
    const [categories, setCategories] = useState<Cate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // { id: "anran", title: "Anran 安然",            shorttitle:"Anran",            cover: anranHomeCover[0] },
    // { id: "kele", title: "Kele Vicky",             shorttitle:"Kele Vicky",    cover: keleHomeCover[0] },
    const { itemid, itemtitle } = useLocalSearchParams();  // Get the itemid from route params

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: itemtitle || "Beautiful Asian Girls" });
    }, [itemid]);

    useEffect(() => {
        if (itemid === 'ycc') {
            console.log("CatScreen received itemid:", itemid);  // Log itemid to console
            setCategories([
                { id: "YCCyf1", title: "Daily Fresh & Hot Trends", cover: genFreshList("ycc/yf", 20)[0], count: "10", path: "abfresh/ycc/yf" },
                { id: "YCCPure", title: "Angelically Innocent", cover: genYCCList("pure/pu", 5)[0], count: "10", path: "abycc/pure/pu" },
                { id: "YCCSpa", title: "Sultry Spaghetti Straps", cover: genYCCList("spaghetti/sp", 10)[0], count: "10", path: "abycc/spaghetti/sp" },
                { id: "YCCChe", title: "Elegant in Cheongsam", cover: genYCCList("cheongsam/ch", 10)[0], count: "10", path: "abycc/cheongsam/ch" },
                { id: "YCCStr", title: "Bare & Beautiful", cover: genYCCList("strapless/st", 10)[0], count: "10", path: "abycc/cheongsam/ch" },
                { id: "YCCBed", title: "Cozy & Seductive Moments", cover: genYCCList("bedbathsofa/be", 10)[0], count: "10", path: "abycc/bedbathsofa/be" },
                { id: "YCCSeq", title: "Dazzling in Sequins", cover: genYCCList("sequins/se", 10)[0], count: "10", path: "abycc/sequins/se" },
                { id: "YCCBlue", title: "Mystic in Blue", cover: genYCCList("blue/bl", 10)[0], count: "10", path: "abycc/blue/bl" },
                { id: "YCCFlo", title: "Flirty Floral Charms", cover: genYCCList("floralskirt/fl", 10)[0], count: "10", path: "abycc/floralskirt/fl" },
                { id: "YCCGlass", title: "Sensual in Glasses", cover: genYCCList("glass/gl", 10)[0], count: "10", path: "abycc/glass/gl" },
                { id: "YCCGreen", title: "Enchanting in Green", cover: genYCCList("green/gr", 10)[0], count: "10", path: "abycc/green/gr" },
                { id: "YCCDenim", title: "Casual Chic in Denim", cover: genYCCList("denim/de", 10)[0], count: "10", path: "abycc/denim/de" },
                { id: "YCCPink", title: "Pretty in Pink", cover: genYCCList("pinkgirl/pi", 10)[0], count: "10", path: "abycc/pinkgirl/pi" },
                { id: "YCCCos", title: "Fantasy & Cosplay Queens", cover: genYCCList("cosplay/co", 10)[0], count: "10", path: "abycc/cosplay/co" },
            ]);



        } else if (itemid === 'syz') {
            setCategories([
                { id: "SYZsf1", title: "Daily Fresh & Hot Trends", cover: genFreshList("syz/sf", 20)[0], count: "10", path: "abfresh/syz/sf" },
                { id: "SYZStr", title: "Bare & Beautiful", cover: genSYZList("strapless/st", 10)[0], count: "10", path: "absyz/strapless/st" },
                { id: "SYZSpa", title: "Sultry Spaghetti Straps",  cover: genSYZList("spaghetti/spa", 10)[2],  count: "10", path: "spaghetti/sp" },
                { id: "SYZLace", title: "Seductive Lace", cover: genSYZList("lace/la", 10)[1],  count: "10", path: "lace/la" },
            ]);


        } else if (itemid === 'wxy') {
            setCategories([
                { id: "WXYwf1", title: "Fresh & Trending", cover: genFreshList("wxy/wf", 20)[0] },
                { id: "WXYBar", title: "Night Life", cover: genWXYList("bar/bar", 10)[1] },
                { id: "WXYLace", title: "Seductive Lace", cover: genWXYList("lace/lace", 10)[2] },
                { id: "WXYSpa", title: "Sultry Spaghetti Straps", cover: genWXYList("spaghetti/spa", 10)[3] },
            ]);
        } else if (itemid === 'kele') {
            setCategories([
                { id: "KELEkf1", title: "Fresh & Trending", cover: genFreshList("kele/kf", 20)[0] },
                { id: "KELEChe", title: "cheongsam white", cover: genKeleList("cheongsam_white/che", 10)[1] },
                { id: "KELEFlo", title: "red floral", cover: genKeleList("floral_red/flo", 10)[2] },
                { id: "KELESpa", title: "spaghetti strap", cover: genKeleList("spaghetti_strap/spa", 10)[3] },
            ]);

        } else if (itemid === 'xlz') {
            setCategories([
                { id: "XLZxf1", title: "Fresh & Trending", cover: genFreshList("xlz/xf", 20)[0] },
                { id: "XLZSpa", title: "purple spaghetti", cover: genXLZList("purplespaghetti/spa", 10)[1] },
                { id: "XLZLace", title: "lace", cover: genXLZList("lace/lace", 10)[2] },
                { id: "XLZPro", title: "professional", cover: genXLZList("professional/pro", 10)[4] },
            ]);
        } else if (itemid === 'others') {
            setCategories([
                { id: "OTHERSof1", title: "Fresh & Trending", cover: genFreshList("others/of", 20)[0] },
                { id: "OTHERSStu", title: "student w glass", cover: genOthersList("student/stu", 10)[1] },
                { id: "OTHERSGreen", title: "green", cover: genOthersList("green/green", 10)[2] },
                { id: "OTHERSMid", title: "middle age", cover: genOthersList("middleage/mid", 10)[3] },
            ]);
        } else {
            setCategories([
                { id: "ELSef1", title: "Amazing Start!", cover: "https://ai8ai.github.io/abcat/default/yc1.jpg" },
                { id: "ELSef2", title: "Explore the Beauty", cover: "https://ai8ai.github.io/abcat/default/yc2.jpg" },
                { id: "ELSef3", title: "Vibrant Colors", cover: "https://ai8ai.github.io/abcat/default/yc3.jpg" },
                { id: "ELSef4", title: "Bold & Confident", cover: "https://ai8ai.github.io/abcat/default/yc4.jpg" },
                { id: "ELSef5", title: "Artistic Vision", cover: "https://ai8ai.github.io/abcat/default/yc5.jpg" },
                { id: "ELSef6", title: "Nature's Essence", cover: "https://ai8ai.github.io/abcat/default/yc6.jpg" },
                { id: "ELSef7", title: "Graceful Elegance", cover: "https://ai8ai.github.io/abcat/default/yc7.jpg" },
                { id: "ELSef8", title: "Iconic Moments", cover: "https://ai8ai.github.io/abcat/default/yc8.jpg" }
            ]);
        }
        setLoading(false);
    }, [itemid]);  // Re-run effect when itemid changes

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.galleryContainer}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.galleryItemContainer}
                        onPress={() => router.push({
                            pathname: "/cat2img", params: {
                                itemid: item.id, 
                                title: item.title,
                                path: item.path,
                                count: item.count,
                            }
                        })}
                    >
                        <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
                        <Text style={styles.galleryItemTitle} numberOfLines={2}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
                numColumns={2}
                contentContainerStyle={styles.galleryGrid}
            />
        </View>
    );
};

export default CategoryScreen;
