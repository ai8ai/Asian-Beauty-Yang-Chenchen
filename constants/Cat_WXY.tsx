import { Cate } from '@/types'; // Import the TopCate interface

const wxyCovers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_2.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_3.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_4.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_5.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_6.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_7.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_8.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_wxy/wxycat_9.jpg",
]
const srcwxy = wxyCovers.sort(() => Math.random() - 0.5);

const wxyCate: Cate[] = [
    { id: "1", title: "Amazing Start!", cover: srcwxy[0] },
    { id: "2", title: "Explore the Beauty", cover: srcwxy[1] },
    { id: "3", title: "Vibrant Colors", cover: srcwxy[2] },
    { id: "4", title: "Bold & Confident", cover: srcwxy[3] },
    { id: "5", title: "Artistic Vision", cover: srcwxy[4] },
    { id: "6", title: "Nature's Essence", cover: srcwxy[5] },
    { id: "7", title: "Graceful Elegance", cover: srcwxy[6] },
    { id: "8", title: "Iconic Moments", cover: srcwxy[7] }
];

const wxyCatPromise = Promise.resolve(wxyCate);

export default wxyCatPromise;