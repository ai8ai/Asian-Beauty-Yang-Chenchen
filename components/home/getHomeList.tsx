// Home Category
import { Cate } from '@/types';
import {genImgList} from '@/utils/genImageList'

const yccHomeCover = genImgList("abcat/ycc/yc", 10).sort(() => Math.random() - 0.5);
const syzHomeCover = genImgList("abcat/syz/sc", 10).sort(() => Math.random() - 0.5);
const wxyHomeCover = genImgList("abcat/wxy/wc", 10).sort(() => Math.random() - 0.5);
const keleHomeCover= genImgList("abcat/kele/kc",10).sort(() => Math.random() - 0.5);
const xlzHomeCover = genImgList("abcat/xlz/xc", 10).sort(() => Math.random() - 0.5);
const othersHomeCover= genImgList("abcat/others/oc",10).sort(() => Math.random() - 0.5);

const HomeList: Cate[] = [
    { id: "ycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨", route: "CatScreen", cover: yccHomeCover[0] },
    { id: "syz", title: "Son Yoon Joo \n 손윤주 孙允珠",      route: "yiren/sunyunzhu",     cover: syzHomeCover[0] },
    { id: "wxy", title: "Wang Xinyao \n Yanni 王馨瑶",    route: "yiren/wangxinyao",  cover: wxyHomeCover[0] },
    { id: "kele", title: "Kele Vicky",                     route: "yiren/kele",        cover: keleHomeCover[0] },
    { id: "xlz", title: "Xu Lizhi Booty \n 徐莉芝",       route: "yiren/xulizhi",     cover: xlzHomeCover[0] },
    { id: "others", title: "and More...",                    route: "yiren/others",       cover: othersHomeCover[0] },
    // { id: "5", title: "Anran 安然",                  route: "yiren/anran",   cover: anranHomeCover[0] },
    // { id: "6", title: "Cheng Chengcheng 程程程",    route: "yiren/chengchengcheng",    cover: cccHomeCover[0] },
    // { id: "8", title: "Du Xiaoyu 杜小雨",           route: "yiren/duxiaoyu",    cover: dxyHomeCover[0] },
    // { id: "9", title: "Lin Xinglan 林星阑",          route: "yiren/linxinglan",   cover: lxlHomeCover[0] },
] as const;

export default HomeList;
