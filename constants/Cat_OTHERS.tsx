// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const yccCovers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_10.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_11.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_12.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_13.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_14.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_15.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_16.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_17.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_18.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_19.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_2.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_20.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_21.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_22.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_23.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_24.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_25.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_26.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_27.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_28.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_29.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_3.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_30.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_31.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_32.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_33.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_34.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_35.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_36.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_37.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_38.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_39.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_4.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_40.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_41.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_42.PNG",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_43.PNG",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_44.PNG",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_45.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_46.png",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_47.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_48.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_49.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_5.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_50.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_6.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_7.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_8.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_9.jpg"
]
const srcYCC = yccCovers.sort(() => Math.random() - 0.5);

const yccCate: Cate[] = [
    { id: "YCCcat01", title: "Amazing Start!", cover: srcYCC[0] },
    { id: "YCCcat02", title: "Explore the Beauty", cover: srcYCC[1] },
    { id: "YCCcat03", title: "Vibrant Colors", cover: srcYCC[2] },
    { id: "YCCcat04", title: "Bold & Confident", cover: srcYCC[3] },
    { id: "YCCcat05", title: "Artistic Vision", cover: srcYCC[4] },
    { id: "YCCcat06", title: "Nature's Essence", cover: srcYCC[5] },
    { id: "YCCcat07", title: "Graceful Elegance", cover: srcYCC[6] },
    { id: "YCCcat08", title: "Iconic Moments", cover: srcYCC[7] }
];

const YccCatPromise = Promise.resolve(yccCate);

export default YccCatPromise;