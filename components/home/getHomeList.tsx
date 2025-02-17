// Home Category
import { Cate } from '@/types';
import {genCatCoverList} from '@/components/cat/genImageList'

const yccHomeCover = genCatCoverList("ycc/yc", 10);
const syzHomeCover = genCatCoverList("syz/sc", 10);
const wxyHomeCover = genCatCoverList("wxy/wc", 10);
const keleHomeCover= genCatCoverList("kele/kc",10);
const xlzHomeCover = genCatCoverList("xlz/xc", 10);
const othersHomeCover= genCatCoverList("others/oc",10);
const dxyHomeCover = genCatCoverList("dxy/dc", 10);
const lxlHomeCover = genCatCoverList("lxl/lc", 10);
const anranHomeCover=genCatCoverList("anran/ac", 10);
const cccHomeCover = genCatCoverList("ccc/cc", 10);

const HomeList: Cate[] = [
    { id: "ycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨",shorttitle:"Yang Chenchen", cover: yccHomeCover[0] },
    { id: "syz", title: "Son Yoon Joo \n 손윤주 孙允珠",     shorttitle:"Son Yoon Joo",  cover: syzHomeCover[0] },
    { id: "wxy", title: "Wang Xinyao \n Yanni 王馨瑶",      shorttitle:"Wang Xinyao",    cover: wxyHomeCover[0] },
    { id: "xlz", title: "Xu Lizhi Booty \n 徐莉芝",shorttitle:"Xu Lizhi",      cover: xlzHomeCover[0] },
    { id: "ccc", title: "Cheng Chengcheng 程程程", shorttitle:"Cheng Chengcheng", cover: cccHomeCover[0] },
    { id: "anran", title: "Anran 安然",            shorttitle:"Anran",            cover: anranHomeCover[0] },
    { id: "kele", title: "Kele Vicky",             shorttitle:"Kele Vicky",    cover: keleHomeCover[0] },
    { id: "dxy", title: "Du Xiaoyu 杜小雨",        shorttitle:"Du Xiaoyu",        cover: dxyHomeCover[0] },
    { id: "lxl", title: "Lin Xinglan 林星阑",      shorttitle:"Lin Xinglan",      cover: lxlHomeCover[0] },
    { id: "others", title: "and More...",         shorttitle:"and More...",      cover: othersHomeCover[0] },
] as const;

export default HomeList;
