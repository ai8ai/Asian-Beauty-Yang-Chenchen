// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const yccTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/ycc/yc1.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc2.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc3.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc4.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc5.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc6.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc7.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc8.jpg",
    "https://ai8ai.github.io/abcat/ycc/yc9.jpg",
];
const srcTopYCC = yccTopCovers.sort(() => Math.random() - 0.5);

const syzTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/syz/sc1.png",
    "https://ai8ai.github.io/abcat/syz/sc2.jpg",
    "https://ai8ai.github.io/abcat/syz/sc3.jpg",
    "https://ai8ai.github.io/abcat/syz/sc4.jpg",
    "https://ai8ai.github.io/abcat/syz/sc5.png",
    "https://ai8ai.github.io/abcat/syz/sc6.JPG",
    "https://ai8ai.github.io/abcat/syz/sc7.jpg",
    "https://ai8ai.github.io/abcat/syz/sc8.jpg",
    "https://ai8ai.github.io/abcat/syz/sc9.webp",
];
const syzTopYCC = syzTopCovers.sort(() => Math.random() - 0.5);

const wxyTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/wxy/wc1.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc2.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc3.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc4.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc5.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc6.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc7.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc8.jpg",
];
const wxyTopYCC = wxyTopCovers.sort(() => Math.random() - 0.5);

const keleTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/kele/kc1.jpg",
    "https://ai8ai.github.io/abcat/kele/kc2.jpg",
    "https://ai8ai.github.io/abcat/kele/kc3.jpg",
    "https://ai8ai.github.io/abcat/kele/kc4.jpg",
    "https://ai8ai.github.io/abcat/kele/kc5.jpg",
    "https://ai8ai.github.io/abcat/kele/kc6.PNG",
];
const keleTopYCC = keleTopCovers.sort(() => Math.random() - 0.5);

const anranTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/anran/ac1.jpg",
    "https://ai8ai.github.io/abcat/anran/ac2.jpg",
    "https://ai8ai.github.io/abcat/anran/ac3.jpg",
    "https://ai8ai.github.io/abcat/anran/ac4.jpg",
    "https://ai8ai.github.io/abcat/anran/ac5.jpg",
];
const anranTopYCC = anranTopCovers.sort(() => Math.random() - 0.5);

const cccTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/ccc/cc1.jpg",
    "https://ai8ai.github.io/abcat/ccc/cc2.jpg",
    "https://ai8ai.github.io/abcat/ccc/cc3.jpg",
    "https://ai8ai.github.io/abcat/ccc/cc4.jpg",
    "https://ai8ai.github.io/abcat/ccc/cc5.jpg",
];
const cccTop = cccTopCovers.sort(() => Math.random() - 0.5);

const xlzTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/xlz/xc1.jpg",
    "https://ai8ai.github.io/abcat/xlz/xc2.jpg",
    "https://ai8ai.github.io/abcat/xlz/xc3.jpg",
    "https://ai8ai.github.io/abcat/xlz/xc4.jpg",
    "https://ai8ai.github.io/abcat/xlz/xc5.jpg",
];
const xlzTopYCC = xlzTopCovers.sort(() => Math.random() - 0.5);

const dxyTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/dxy/dc1.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc2.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc3.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc4.JPG",
];
const dxyTopYCC = dxyTopCovers.sort(() => Math.random() - 0.5);

const lxlTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/lxl/lc1.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc2.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc3.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc4.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc5.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc6.jpg",
];
const lxlTopYCC = lxlTopCovers.sort(() => Math.random() - 0.5);

const othersTopCovers: string[] = [
    "https://ai8ai.github.io/abcat/others/oc1.jpg",
    "https://ai8ai.github.io/abcat/others/oc2.jpg",
    "https://ai8ai.github.io/abcat/others/oc3.jpg",
    "https://ai8ai.github.io/abcat/others/oc4.jpg",
    "https://ai8ai.github.io/abcat/others/oc5.jpg",
    "https://ai8ai.github.io/abcat/others/oc6.jpg",
    "https://ai8ai.github.io/abcat/others/oc7.jpg",
    "https://ai8ai.github.io/abcat/others/oc8.jpg",
    "https://ai8ai.github.io/abcat/others/oc9.PNG",
];
const othersTopYCC = othersTopCovers.sort(() => Math.random() - 0.5);


const topCategories: Cate[] = [
    { id: "1", title: "Yang Chenchen \n Yome Sugar 杨晨晨", cover: srcTopYCC[0] },
    { id: "2", title: "Son Yoon Joo \n 손윤주 孙允珠",  cover: syzTopYCC[0] },
    { id: "3", title: "Wang Xinyao \n Yanni 王馨瑶",    cover: wxyTopYCC[0] },
    { id: "4", title: "Kele Vicky",                 cover: keleTopYCC[0] },
    { id: "5", title: "Anran 安然",                 cover: anranTopYCC[0] },
    { id: "6", title: "Cheng Chengcheng 程程程",    cover: cccTop[0] },
    { id: "7", title: "Xu Lizhi Booty \n 徐莉芝",   cover: xlzTopYCC[0] },
    { id: "8", title: "Du Xiaoyu 杜小雨",           cover: dxyTopYCC[0] },
    { id: "9", title: "Lin Xinglan 林星阑",         cover: lxlTopYCC[0] },
    { id: "10",title: "and More...",               cover: othersTopYCC[0] },
];


// const yccCate: Cate[] = [
//     { id: "1", title: "Amazing Start!", cover: srcTopYCC[0] },
//     { id: "2", title: "Explore the Beauty", cover: srcTopYCC[1] },
//     { id: "3", title: "Vibrant Colors", cover: srcTopYCC[2] },
//     { id: "4", title: "Bold & Confident", cover: srcTopYCC[0] },
//     { id: "5", title: "Artistic Vision", cover: srcTopYCC[1] },
//     { id: "6", title: "Nature's Essence", cover: srcTopYCC[2] },
//     { id: "7", title: "Graceful Elegance", cover: srcTopYCC[0] },
//     { id: "8", title: "Iconic Moments", cover: srcTopYCC[1] }
// ];

// Return a promise that resolves to local data
const TopCatPromise = Promise.resolve(topCategories);
// const YccCatPromise = Promise.resolve(yccCate);

export { TopCatPromise};