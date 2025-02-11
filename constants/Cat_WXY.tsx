// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const covers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_10.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_11.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_12.jpg",
]
const srcCover = covers.sort(() => Math.random() - 0.5);

const wxyCat: Cate[] = [
    { id: "WXYcat01", title: "Office", cover: srcCover[0] },
    { id: "WXYcat02", title: "Lace", cover: srcCover[1] },
    { id: "WXYcat03", title: "Vibrant Colors", cover: srcCover[2] },
    { id: "WXYcat04", title: "Bold & Confident", cover: srcCover[3] },
    { id: "WXYcat05", title: "Artistic Vision", cover: srcCover[4] },
    { id: "WXYcat06", title: "Nature's Essence", cover: srcCover[5] },
    { id: "WXYcat07", title: "Graceful Elegance", cover: srcCover[6] },
    { id: "WXYcat08", title: "Iconic Moments", cover: srcCover[7] }
];

const WXYCatPromise = Promise.resolve(wxyCat);

export default WXYCatPromise;