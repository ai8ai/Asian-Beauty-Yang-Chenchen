import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/styles/styles';
import { Cate } from '@/types';
import { useNavigation } from '@react-navigation/native';

import {genCatCoverList} from '@/components/cat/genImageList'

const CategoryScreen: React.FC = () => {
    const [categories, setCategories] = useState<Cate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { itemid, itemtitle } = useLocalSearchParams();  // Get the itemid from route params

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: itemtitle || "Beautiful Asian Girls" });
    }, [itemid]);

    const yccCatCover = genCatCoverList("ycc/yc", 20).sort(() => Math.random() - 0.5);
    const syzCatCover = genCatCoverList("syz/sc", 20).sort(() => Math.random() - 0.5);
    const wxyCatCover = genCatCoverList("wxy/wc", 20).sort(() => Math.random() - 0.5);
    const keleCatCover= genCatCoverList("kele/kc",20).sort(() => Math.random() - 0.5);
    const xlzCatCover = genCatCoverList("xlz/xc", 20).sort(() => Math.random() - 0.5);
    const othersCatCover= genCatCoverList("others/oc",20).sort(() => Math.random() - 0.5);
    const dxyCatCover = genCatCoverList("dxy/dc", 20).sort(() => Math.random() - 0.5);
    const cccCatCover = genCatCoverList("ccc/cc", 20).sort(() => Math.random() - 0.5);
    const lxlCatCover = genCatCoverList("lxl/lc", 20).sort(() => Math.random() - 0.5);
    const anranCatCover = genCatCoverList("anran/ac", 20).sort(() => Math.random() - 0.5);
    
    useEffect(() => {

        if (itemid === 'ycc') {
            console.log("CatScreen received itemid:", itemid);  // Log itemid to console
            setCategories([
                { id: "YCCyf1", title: "Fresh & Trending", cover: yccCatCover[0]  },
                { id: "YCCPure",title: "pure", cover: yccCatCover[1]  },
                { id: "YCCSea", title: "seaside green", cover: yccCatCover[2]  },
                { id: "YCCSpa", title: "spaghetti strap", cover: yccCatCover[3]  },
            ]);
        } else if (itemid === 'syz') {
            setCategories([
                { id: "SYZsf1",  title: "Fresh & Trending", cover: syzCatCover[0]  },
                { id: "SYZStr", title: "strapless top", cover: syzCatCover[1]  },
                { id: "SYZSpa", title: "spaghetti strap", cover: syzCatCover[2]  },
                { id: "SYZLace", title: "lace", cover: syzCatCover[3]  },
            ]);
        } else if (itemid === 'wxy') {
            setCategories([
                { id: "WXYwf1",  title: "Fresh & Trending", cover: wxyCatCover[0]  },
                { id: "WXYBar", title: "bar", cover: wxyCatCover[1]  },
                { id: "WXYLace", title: "lace", cover: wxyCatCover[2]  },
                { id: "WXYSpa", title: "spaghetti strap", cover: wxyCatCover[3]  },
            ]);
        } else if (itemid === 'kele') {
            setCategories([
                { id: "KELEkf1",  title: "Fresh & Trending", cover: keleCatCover[0]  },
                { id: "KELEChe", title: "cheongsam white", cover: keleCatCover[1]  },
                { id: "KELEFlo", title: "red floral", cover: keleCatCover[2]  },
                { id: "KELESpa", title: "spaghetti strap", cover: keleCatCover[3]  },
            ]);
        } else if (itemid === 'xlz') {
            setCategories([
                { id: "XLZxf1",  title: "Fresh & Trending", cover: xlzCatCover[0]  },
                { id: "XLZSpa", title: "purple spaghetti", cover: xlzCatCover[1]  },
                { id: "XLZLace", title: "lace", cover: xlzCatCover[2]  },
                { id: "XLZPro", title: "professional", cover: xlzCatCover[4]  },
            ]);
        } else if (itemid === 'others') {
            setCategories([
                { id: "OTHERSof1",  title: "Fresh & Trending", cover: othersCatCover[0]  },
                { id: "OTHERSStu", title: "student w glass", cover: othersCatCover[1]  },
                { id: "OTHERSGreen", title: "green", cover: othersCatCover[2]  },
                { id: "OTHERSMid", title: "middle age", cover: othersCatCover[3]  },
            ]);
        } else {
            setCategories([
                { id: "ELSef1", title: "Amazing Start!",    cover: "https://ai8ai.github.io/abcat/default/yc1.jpg"},
                { id: "ELSef2", title: "Explore the Beauty",cover: "https://ai8ai.github.io/abcat/default/yc2.jpg"},
                { id: "ELSef3", title: "Vibrant Colors",    cover: "https://ai8ai.github.io/abcat/default/yc3.jpg"},
                { id: "ELSef4", title: "Bold & Confident",  cover: "https://ai8ai.github.io/abcat/default/yc4.jpg"},
                { id: "ELSef5", title: "Artistic Vision",   cover: "https://ai8ai.github.io/abcat/default/yc5.jpg"},
                { id: "ELSef6", title: "Nature's Essence",  cover: "https://ai8ai.github.io/abcat/default/yc6.jpg"},
                { id: "ELSef7", title: "Graceful Elegance", cover: "https://ai8ai.github.io/abcat/default/yc7.jpg"},
                { id: "ELSef8", title: "Iconic Moments",    cover: "https://ai8ai.github.io/abcat/default/yc8.jpg"}
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
                        onPress={() => router.push({ pathname: "/cat2img", params: { itemid: item.id, title: item.title } })}
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
