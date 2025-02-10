// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const dxyCovers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_10.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_11.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_12.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_13.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_14.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_15.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_16.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_17.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_18.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_19.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_2.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_20.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_21.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_22.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_23.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_24.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_25.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_26.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_27.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_28.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_29.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_3.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_30.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_31.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_32.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_33.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_34.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_35.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_36.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_37.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_38.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_39.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_4.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_40.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_41.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_42.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_43.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_44.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_45.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_46.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_47.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_48.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_49.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_5.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_50.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_6.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_7.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_8.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/ccred/ccred_9.jpg"
]
const srcdxy = dxyCovers.sort(() => Math.random() - 0.5);

const dxyCate: Cate[] = [
    { id: "1", title: "Amazing Start!", cover: srcdxy[0] },
    { id: "2", title: "Explore the Beauty", cover: srcdxy[1] },
    { id: "3", title: "Vibrant Colors", cover: srcdxy[2] },
    { id: "4", title: "Bold & Confident", cover: srcdxy[3] },
    { id: "5", title: "Artistic Vision", cover: srcdxy[4] },
    { id: "6", title: "Nature's Essence", cover: srcdxy[5] },
    { id: "7", title: "Graceful Elegance", cover: srcdxy[6] },
    { id: "8", title: "Iconic Moments", cover: srcdxy[7] }
];

const dxyCatPromise = Promise.resolve(dxyCate);

export default dxyCatPromise;