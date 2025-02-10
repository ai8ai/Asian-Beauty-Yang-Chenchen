import { Cate } from '@/types'; // Import the TopCate interface

const keleCovers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_1.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_2.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_3.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_4.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_5.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_6.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_7.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_8.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat_kele/kelecat_9.jpg",
]
const srckele = keleCovers.sort(() => Math.random() - 0.5);

const keleCate: Cate[] = [
    { id: "1", title: "Amazing Start!", cover: srckele[0] },
    { id: "2", title: "Explore the Beauty", cover: srckele[1] },
    { id: "3", title: "Vibrant Colors", cover: srckele[2] },
    { id: "4", title: "Bold & Confident", cover: srckele[3] },
    { id: "5", title: "Artistic Vision", cover: srckele[4] },
    { id: "6", title: "Nature's Essence", cover: srckele[5] },
    { id: "7", title: "Graceful Elegance", cover: srckele[6] },
    { id: "8", title: "Iconic Moments", cover: srckele[7] }
];

const keleCatPromise = Promise.resolve(keleCate);

export default keleCatPromise;