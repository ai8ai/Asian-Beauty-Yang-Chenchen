// getTopCate.tsx
import { Cate } from '@/types'; // Import the TopCate interface

const yccTopCovers: string[] = [
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_31.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_21.jpg",
    "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_4.jpg",
];
const srcTopYCC = yccTopCovers.sort(() => Math.random() - 0.5);

const topCategories: Cate[] = [
    { id: "1", title: "Yang Chenchen \n Yome Sugar 杨晨晨", cover: srcTopYCC[0] },
    { id: "2", title: "Son Yoon Joo \n 손윤주 孙允珠", cover: "https://aidres.com/gallery/sunyunzhu/sunyunzhu_large%20(1).webp" },
    { id: "3", title: "Wang Xinyao \n Yanni 王馨瑶", cover: "https://aidres.com/gallery/wangxinyao1/74620af8c7fdbdd3895087a364dd30d0.jpg" },
    { id: "4", title: "Kele Vicky", cover: "https://aidres.com/gallery/vicky_kele/%E5%8F%AF%E6%A8%82Vicky%20937.jpg" },
    { id: "5", title: "Anran 安然", cover: "https://aidres.com/gallery/anran/anran%20(18).jpg" },
    { id: "6", title: "Cheng Chengcheng 程程程", cover: "https://aidres.com/gallery/chengchengcheng/xiaoyu-language-painting-world20231017-vol1128-cheng-chengcheng--4khd.com-029.webp" },
    { id: "7", title: "Xu Lizhi Booty \n 徐莉芝", cover: "https://aidres.com/gallery/xulizhi/xulizhi_a%20(124).webp" },
    { id: "8", title: "Du Xiaoyu 杜小雨", cover: "https://aidres.com/gallery/duxiaoyu/5c47be55e3b13.jpg" },
    { id: "9", title: "Lin Xinglan 林星阑", cover: "https://aidres.com/gallery/linxinglan/[XIAOYU%E8%AF%AD%E7%94%BB%E7%95%8C]2023.09.15%20VOL.1112%20%E6%9E%97%E6%98%9F%E9%98%91-033.jpg" },
    { id: "10",title: "and More...", cover: "https://aidres.com/gallery/elegant/chengchengcheng_C%20(1134).jpg" },
];





const yccCate: Cate[] = [
    { id: "1", title: "Amazing Start!", cover: srcTopYCC[0] },
    { id: "2", title: "Explore the Beauty", cover: srcTopYCC[1] },
    { id: "3", title: "Vibrant Colors", cover: srcTopYCC[2] },
    { id: "4", title: "Bold & Confident", cover: srcTopYCC[0] },
    { id: "5", title: "Artistic Vision", cover: srcTopYCC[1] },
    { id: "6", title: "Nature's Essence", cover: srcTopYCC[2] },
    { id: "7", title: "Graceful Elegance", cover: srcTopYCC[0] },
    { id: "8", title: "Iconic Moments", cover: srcTopYCC[1] }
];

// Return a promise that resolves to local data
const TopCatPromise = Promise.resolve(topCategories);
const YccCatPromise = Promise.resolve(yccCate);

export { TopCatPromise, YccCatPromise};