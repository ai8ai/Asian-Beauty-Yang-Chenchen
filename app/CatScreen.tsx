import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/styles/styles';
import { Cate } from '@/types';
import { useNavigation } from '@react-navigation/native';

import {genCatCoverList} from '@/utils/genImageList'

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
                { id: "SYZcat02", title: "Explore the Beauty", cover: syzCatCover[1]  },
                { id: "SYZcat03", title: "Vibrant Colors", cover: syzCatCover[2]  },
                { id: "SYZcat04", title: "Bold & Confident", cover: syzCatCover[3]  },
                { id: "SYZcat05", title: "Artistic Vision", cover: syzCatCover[4]  },
                { id: "SYZcat06", title: "Nature's Essence", cover: syzCatCover[5]  },
                { id: "SYZcat07", title: "Graceful Elegance", cover: syzCatCover[6]  },
                { id: "SYZcat08", title: "Iconic Moments", cover: syzCatCover[7]  }
            ]);
        } else if (itemid === 'wxy') {
            setCategories([
                { id: "WXYwf1",  title: "Fresh & Trending", cover: wxyCatCover[0]  },
                { id: "WXYcat02", title: "Explore the Beauty", cover: wxyCatCover[1]  },
                { id: "WXYcat03", title: "Vibrant Colors", cover: wxyCatCover[2]  },
                { id: "WXYcat04", title: "Bold & Confident", cover: wxyCatCover[3]  },
                { id: "WXYcat05", title: "Artistic Vision", cover: wxyCatCover[4]  },
                { id: "WXYcat06", title: "Nature's Essence", cover: wxyCatCover[5]  },
                { id: "WXYcat07", title: "Graceful Elegance", cover: wxyCatCover[6]  },
                { id: "WXYcat08", title: "Iconic Moments", cover: wxyCatCover[7]  }

            ]);
        } else if (itemid === 'kele') {
            setCategories([
                { id: "KELEkf1",  title: "Fresh & Trending", cover: keleCatCover[0]  },
                { id: "KELEcat02", title: "Explore the Beauty", cover: keleCatCover[1]  },
                { id: "KELEcat03", title: "Vibrant Colors", cover: keleCatCover[2]  },
                { id: "KELEcat04", title: "Bold & Confident", cover: keleCatCover[3]  },
                { id: "KELEcat05", title: "Artistic Vision", cover: keleCatCover[4]  },
                { id: "KELEcat06", title: "Nature's Essence", cover: keleCatCover[5]  },
                { id: "KELEcat07", title: "Graceful Elegance", cover: keleCatCover[6]  },
                { id: "KELEcat08", title: "Iconic Moments", cover: keleCatCover[7]  }

            ]);
        } else if (itemid === 'xlz') {
            setCategories([
                { id: "XLZxf1",  title: "Fresh & Trending", cover: xlzCatCover[0]  },
                { id: "XLZcat02", title: "Explore the Beauty", cover: xlzCatCover[1]  },
                { id: "XLZcat03", title: "Vibrant Colors", cover: xlzCatCover[2]  },
                { id: "XLZcat04", title: "Bold & Confident", cover: xlzCatCover[3]  },
                { id: "XLZcat05", title: "Artistic Vision", cover: xlzCatCover[4]  },
                { id: "XLZcat06", title: "Nature's Essence", cover: xlzCatCover[5]  },
                { id: "XLZcat07", title: "Graceful Elegance", cover: xlzCatCover[6]  },
                { id: "XLZcat08", title: "Iconic Moments", cover: xlzCatCover[7]  },
            ]);
        } else if (itemid === 'others') {
            setCategories([
                { id: "OTHERSof1",  title: "Fresh & Trending", cover: othersCatCover[0]  },
                { id: "OTHERScat02", title: "Explore the Beauty", cover: othersCatCover[1]  },
                { id: "OTHERScat03", title: "Vibrant Colors", cover: othersCatCover[2]  },
                { id: "OTHERScat04", title: "Bold & Confident", cover: othersCatCover[3]  },
                { id: "OTHERScat05", title: "Artistic Vision", cover: othersCatCover[4]  },
                { id: "OTHERScat06", title: "Nature's Essence", cover: othersCatCover[5]  },
                { id: "OTHERScat07", title: "Graceful Elegance", cover: othersCatCover[6]  },
                { id: "OTHERScat08", title: "Iconic Moments", cover: othersCatCover[7]  }
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
