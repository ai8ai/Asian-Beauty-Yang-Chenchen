// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const yccCovers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_10.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_11.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_12.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_13.jpg",
]
const srcYCC = yccCovers.sort(() => Math.random() - 0.5);

const yccCate: Cate[] = [
    { id: "1", title: "Amazing Start!", cover: srcYCC[0] },
    { id: "2", title: "Explore the Beauty", cover: srcYCC[1] },
    { id: "3", title: "Vibrant Colors", cover: srcYCC[2] },
    { id: "4", title: "Bold & Confident", cover: srcYCC[3] },
    { id: "5", title: "Artistic Vision", cover: srcYCC[4] },
    { id: "6", title: "Nature's Essence", cover: srcYCC[5] },
    { id: "7", title: "Graceful Elegance", cover: srcYCC[6] },
    { id: "8", title: "Iconic Moments", cover: srcYCC[7] }
];

const YccCatPromise = Promise.resolve(yccCate);

export default YccCatPromise;