// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const yccCovers: string[] = [
    "https://ai8ai.github.io/abcat/ycc/yc1.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc2.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc3.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc4.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc5.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc6.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc7.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc8.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc9.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc10.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc11.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc12.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc13.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc14.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc15.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc16.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc17.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc18.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc19.jpg",
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