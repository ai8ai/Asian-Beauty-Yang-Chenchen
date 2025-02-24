// Category
import { CatInterface, SubCategoryConfig } from '@/config/tstype';
import { genImgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "ycc",    title: "Yang Chenchen \n Yome Sugar 杨晨晨",shorttitle:"Yang Chenchen", cover: genImgList("abcat/ycc/yc", 10)[0] },
    { id: "syz",    title: "Son Yoon Joo \n 손윤주 孙允珠",      shorttitle:"Son Yoon Joo",  cover: genImgList("abcat/syz/sc", 10)[0] },
    { id: "wxy",    title: "Wang Xinyao \n Yanni 王馨瑶",        shorttitle:"Wang Xinyao",    cover: genImgList("abcat/wxy/wc", 10)[0] },
    { id: "kele",   title: "Kele Vicky",                        shorttitle:"Kele Vicky",    cover: genImgList("abcat/kele/kc", 10)[0] },
    { id: "anran",  title: "Anran 安然",                        shorttitle:"Anran",            cover: genImgList("abcat/anran/ac", 10)[0] },
    { id: "xlz",    title: "Xu Lizhi Booty \n 徐莉芝",      shorttitle:"Xu Lizhi",      cover: genImgList("abcat/xlz/xc", 10)[0] },
    { id: "ccc",    title: "Cheng Chengcheng 程程程",       shorttitle:"Cheng Chengcheng", cover: genImgList("abcat/ccc/cc", 10)[0] },
    { id: "dxy",    title: "Du Xiaoyu 杜小雨",              shorttitle:"Du Xiaoyu",        cover: genImgList("abcat/dxy/dc", 10)[0] },
    { id: "lxl",    title: "Lin Xinglan 林星阑",            shorttitle:"Lin Xinglan",      cover: genImgList("abcat/lxl/lc", 10)[0] },
    { id: "holiday",title: "Holidays",                      shorttitle:"Holidays",      cover: genImgList("abcat/holiday/hc", 10)[0] },
    { id: "special",title: "Special Taste",                 shorttitle:"Special Taste", cover: genImgList("abcat/special/sc", 10)[0] },
    { id: "others", title: "and More...",                   shorttitle:"and More...",   cover: genImgList("abcat/others/oc", 10)[0] },
];

export const Cat2Sub2Img: SubCategoryConfig = {
    scene: generateSubCategory("isce", [
        { id: "sc1", title: "Sea",  count: "10",  key: "sea/se" },
        { id: "sc2", title: "Lone", count: "10",  key: "lone/lo" },
        { id: "sc3", title: "Land", count: "10",  key: "land/la" },
    ]),
    i2: generateSubCategory("i2", [
        { id: "i21", title: "Two",  count: "10",  key: "two/tw" },
        { id: "i22", title: "More", count: "10",  key: "more/mo" },
    ]),
    back: generateSubCategory("iback", [
        { id: "ba1", title: "Butt",  count: "10",  key: "butt/bu" },
        { id: "ba2", title: "Back", count: "30",  key: "back/ba" },
    ]),
    art: generateSubCategory("iart", [
        { id: "ar1", title: "Face",   count: "10",  key: "face/fa" },
        { id: "ar2", title: "Flower", count: "10",  key: "flower/fl" },
        { id: "ar3", title: "History",count: "10",  key: "history/hi" },
        { id: "ar4", title: "Human",  count: "10",  key: "human/hu" },
        { id: "ar5", title: "Leg",    count: "5",  key: "leg/le" },
        { id: "ar6", title: "Lips",   count: "10",  key: "lips/li" },
        { id: "ar7", title: "Nature", count: "10",  key: "nature/na" },
    ]),
    bbs: generateSubCategory("ibbs", [
        { id: "bb1", title: "Stunning", count: "10",  key: "stunning/st" },
        { id: "bb2", title: "Black",    count: "10",  key: "black/bl" },
        { id: "bb3", title: "Red",      count: "10",  key: "red/re" },
        { id: "bb4", title: "White",    count: "10",  key: "white/wh" },
        { id: "bb5", title: "Lying Down",count:"10",  key: "lying/ly" },
        { id: "bb6", title: "Lace",     count: "10",  key: "lace/la" },
        { id: "bb7", title: "Sequins",  count: "10",  key: "sequins/se" },
        { id: "bb8", title: "Alien",    count: "10",  key: "alien/al" },
    ]),
    pro: generateSubCategory("ipro", [
        { id: "pr1", title: "Stunning", count: "10",  key: "stunning/st" },
        { id: "pr2", title: "Suite",    count: "10",  key: "suite/su" },
        { id: "pr3", title: "Shirt",      count: "10",  key: "shirt/sh" },
        { id: "pr4", title: "Professional",count: "10",  key: "professional/pr" },
        { id: "pr5", title: "Office",count:"10",  key: "office/of" },
        { id: "pr6", title: "Classroom",     count: "10",  key: "classroom/cl" },
    ]),
    car: generateSubCategory("icar", [
        { id: "ca1", title: "Stunning", count: "20",  key: "stunning/st" },
        { id: "ca2", title: "Model",    count: "20",  key: "model/mo" },
    ]),
    
};

// Helper function to generate subcategory data
function generateSubCategory(subBasePath: string, items: { id: string;      title: string;      count: string;      key: string }[]) {
    return items.map(({ id, title, count,  key }) => ({
        id,
        title,
        count,
        cover: genImgList(`${subBasePath}/${key}`, 10)[0],
        path: `${subBasePath}/${key}`,
    }));
}
