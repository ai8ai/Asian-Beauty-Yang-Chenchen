// Category
import { CatInterface, SubCategoryConfig } from '@/config/tstype';
import { genImgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "ycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genImgList("abcat/ycc/yc", 5)[0] },
    { id: "syz", title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genImgList("abcat/syz/sc", 5)[0] },
    { id: "wxy", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genImgList("abcat/wxy/wc", 5)[0] },
    { id: "kele", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genImgList("abcat/kele/kc", 5)[0] },
    { id: "anran", title: "Anran 安然", shorttitle: "Anran", cover: genImgList("abcat/anran/ac", 10)[0] },
    { id: "xlz", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genImgList("abcat/xlz/xc", 5)[0] },
    { id: "ccc", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genImgList("abcat/ccc/cc", 5)[0] },
    { id: "dxy", title: "Du Xiaoyu 杜小雨", shorttitle: "Du Xiaoyu", cover: genImgList("abcat/dxy/dc", 5)[0] },
    { id: "lxl", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genImgList("abcat/lxl/lc", 5)[0] },
    { id: "holiday", title: "Holidays", shorttitle: "Holidays", cover: genImgList("abcat/holiday/hc", 5)[0] },
    { id: "special", title: "Special Taste", shorttitle: "Special Taste", cover: genImgList("abcat/special/sc", 5)[0] },
    { id: "others", title: "and More...", shorttitle: "and More...", cover: genImgList("abcat/others/oc", 5)[0] },
];

export const Cat2Sub2Img: SubCategoryConfig = {
    ycc: genSubCat("abycc", [
        { id: "YCCyf1", title: "Daily Fresh & Hot Trends", count: "20", key: "ycc/yf" },
        { id: "YCCPure", title: "Angelically Innocent", count: "30", key: "pure/pu" },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
        { id: "YCCChe", title: "Elegant in Cheongsam", count: "50", key: "cheongsam/ch" },
        { id: "YCCStr", title: "Bare & Beautiful", count: "40", key: "strapless/st" },
        { id: "YCCBed", title: "Cozy & Seductive Moments", count: "30", key: "bedbathsofa/be" },
        { id: "YCCSeq", title: "Dazzling in Sequins", count: "40", key: "sequins/se" },
        { id: "YCCBlue", title: "Mystic in Blue", count: "50", key: "blue/bl" },
        { id: "YCCFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt/fl" },
        { id: "YCCGlass", title: "Sensual in Glasses", count: "30", key: "glass/gl" },
        { id: "YCCGreen", title: "Enchanting in Green", count: "60", key: "green/gr" },
        { id: "YCCDenim", title: "Casual Chic in Denim", count: "50", key: "demins/de" },
        { id: "YCCPink", title: "Pretty in Pink", count: "20", key: "pinkgirl/pi" },
        { id: "YCCCos", title: "Fantasy & Cosplay Queens", count: "40", key: "cosplay/co" },
    ]),

    syz: genSubCat("absyz", [
        { id: "SYZStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "SYZBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "SYZDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
        { id: "SYZFlo", title: "Flirty Floral Charms", count: "10", key: "floral/fl" },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
        { id: "SYZOne", title: "Fantasy & Queens", count: "10", key: "oneshoulder/on" },
        { id: "SYZOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "SYZSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "SYZStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
    ]),

    wxy: genSubCat("abwxy", [
        { id: "wxyStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "wxyBar", title: "Night Life", count: "10", key: "bar/ba" },
        { id: "wxyBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "wxyChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
        { id: "wxyCro", title: "Sassy in Croptops", count: "10", key: "croptop/cr" },
        { id: "wxyDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
        { id: "wxyFormal", title: "Enchanting in Business", count: "10", key: "formal/fo" },
        { id: "wxyHalt", title: "Allure en Halter", count: "10", key: "haltertop/ha" },
        { id: "wxyLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
        { id: "wxyNight", title: "Nocturne in New York", count: "10", key: "nightnewyork/ni" },
        { id: "wxyOff", title: "Chic at Work", count: "10", key: "office/of" },
		{ id: "wxyOut", title: "Breeze & Beyond", count: "10", key: "outdoor/ou" },
		{ id: "wxyPants", title: "Chic in Motion", count: "10", key: "pants/pa" },
		{ id: "wxySee", title: "Seethrough ...", count: "10", key: "seethrough/se" },
		{ id: "wxySpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
        { id: "wxyUni", title: "Mystic in Uniform", count: "10", key: "uniform/un" },
    ]),

    ccc: genSubCat("abccc", [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", key: "bbs/ba" },
		{ id: "cccBri", title: "Briliant ...", count: "10", key: "briliant/br" },
		{ id: "cccSexy", title: "Sultry", count: "10", key: "sexy/se" },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
    ]),
    
    dxy: genSubCat("abdxy", [
        { id: "dxyViolet", title: "Daily Fresh & Hot Trends", count: "10", key: "violet/vi" },
        { id: "dxyGreen", title: "Cozy & Seductive Moments", count: "10", key: "green/gr" },
		{ id: "dxyPink", title: "Briliant Pinkcount", count: "10", key: "pink/pi" },
    ]),

    lxl: genSubCat("ablxl", [
        { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bedbathsofa/be" },
        { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
        { id: "lxlDeco", title: "Sublime Décolleté", count: "10", key: "deco/de" },
        { id: "lxlFish", title: "Daily Fresh & Hot Trends", count: "10", key: "fishdress/fi" },
        { id: "lxlOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "lxlPen", title: "Seductive Pencil", count: "10", key: "pencilskirt/pe" },
        { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "lxlStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
        { id: "lxlTeacher", title: "Enchanting in Teaching", count: "10", key: "teacher/te" },
    ]),

    

};

// Helper function to generate subcategory data
function genSubCat(subBasePath: string, items: { id: string; title: string; count: string; key: string }[]) {
    return items.map(({ id, title, count, key }) => ({
        id,
        title,
        count,
        cover: genImgList(`${subBasePath}/${key}`, 10)[0],
        path: `${subBasePath}/${key}`,
    }));
}


//     } else if (itemid === 'kele') {
//         setCategories([
//             { id: "KELEkf1", title: "Daily Fresh & Hot Trends", cover: genFreshList("kele/kf", 20)[0], count: "10", path: "abfresh/kele/kf" },
//             { id: "KELEBat", title: "Dreamy Comfort & Sensual Retreats", cover: genKeleList("bathbedsofa/ba", 10)[0], count: "10", path: "abkele/bathbedsofa/ba" },
//             { id: "KELEChe", title: "Timeless Grace in Silk & Lace", cover: genKeleList("cheongsam/ch", 10)[2], count: "10", path: "abkele/cheongsam/ch" },
//             { id: "KELEFlo", title: "Whimsical Blooms & Petal Charms", cover: genKeleList("floral/fl", 10)[1], count: "10", path: "abkele/floral/fl" },
//             { id: "KELEHome", title: "Cozy Chic & Homely Elegance", cover: genKeleList("home/ho", 10)[0], count: "10", path: "abkele/home/ho" },
//             { id: "KELEOffice", title: "Power & Poise in the Workplace", cover: genKeleList("office/of", 10)[2], count: "10", path: "abkele/office/of" },
//             { id: "KELESofa", title: "Lounge in Luxe & Leisure", cover: genKeleList("sofa/so", 10)[1], count: "10", path: "abkele/sofa/so" },
//             { id: "KELESto", title: "Silken Allure & Enchanting Legs", cover: genKeleList("stockings/st", 10)[0], count: "10", path: "abkele/stockings/st" },
//         ]);

//     } else if (itemid === 'anran') {
//         setCategories([
//             { id: "ANRANaf1", title: "Daily Fresh & Hot Trends", cover: genFreshList("anran/af", 20)[0], count: "10", path: "abfresh/anran/af" },
//             { id: "ANRANClass", title: "Scholarly Chic & Study Glam", cover: genAnranList("classroom/cl", 10)[2], count: "10", path: "abanran/classroom/cl" },
//             { id: "ANRANHotel", title: "Luxe Escapes & Midnight Whispers", cover: genAnranList("hotel/ho", 10)[1], count: "10", path: "abanran/hotel/ho" },
//             { id: "ANRANDenim", title: "Casual Chic in Denim", cover: genAnranList("demins/de", 10)[0], count: "10", path: "abanran/demins/de" },
//             { id: "ANRANOffice", title: "Power & Poise in the Workplace", cover: genAnranList("office/of", 10)[2], count: "10", path: "abanran/office/of" },
//             { id: "ANRANSto", title: "Silken Allure & Enchanting Legs", cover: genAnranList("stockings/st", 10)[0], count: "10", path: "abanran/stockings/st" },
//         ]);


//     } else if (itemid === 'xlz') {
//         setCategories([
//             { id: "XLZxf1", title: "Daily Fresh & Hot Trends", cover: genFreshList("xlz/xf", 20)[0], count: "10", path: "abfresh/xlz/xf" },
//             { id: "XLZBed", title: "Cozy & Seductive Moments", cover: genXLZList("bedbathsofa/be", 10)[0], count: "10", path: "abxlz/bedbathsofa/be" },
//             { id: "XLZOffice", title: "Power & Poise in the Workplace", cover: genXLZList("office/of", 10)[2], count: "10", path: "abxlz/office/of" },
//             { id: "XLZSee", title: "Ethereal Elegance & Sheer Temptation", cover: genXLZList("seethrough/se", 10)[2], count: "10", path: "abxlz/seethrough/se" },
//             { id: "XLZSpa", title: "Luxe Escapes & Midnight Whispers", cover: genXLZList("spaghetti/sp", 10)[1], count: "10", path: "abxlz/spaghetti/sp" },
//             { id: "XLZSto", title: "Silken Allure & Enchanting Legs", cover: genXLZList("stockings/st", 10)[0], count: "10", path: "abxlz/stockings/st" },
//         ]);



//     } else if (itemid === 'lxl') {
//         setCategories([
//             { id: "LXLlf1", title: "Fresh & Trending", cover: genFreshList("lxl/lf", 20)[0], count: "10", path: "abfresh/lxl/lf" },
//             { id: "LXLBed", title: "Cozy & Seductive Moments", cover: genLXLList("bedbathsofa/be", 10)[0], count: "10", path: "ablxl/bedbathsofa/be" },
//             { id: "LXLChe", title: "Elegant in Cheongsam", cover: genLXLList("cheongsam/ch", 10)[0], count: "10", path: "ablxl/cheongsam/ch" },
//             { id: "LXLFish", title: "Night Life", cover: genLXLList("fishdress/fi", 10)[1], count: "10", path: "ablxl/fishdress/fi" },
//             { id: "LXLOffice", title: "Chic at Work", cover: genLXLList("office/of", 10)[0], count: "10", path: "ablxl/office/of" },
//             { id: "LXLPencil", title: "Seductive Pencil", cover: genLXLList("pencilskirt/pe", 10)[2], count: "10", path: "ablxl/pencilskirt/pe" },
//             { id: "LXLSpa", title: "Sultry Spaghetti Straps", cover: genLXLList("spaghetti/sp", 10)[0], count: "10", path: "ablxl/spaghetti/sp" },
//             { id: "LXLStr", title: "Chic in Motion", cover: genLXLList("strapless/st", 10)[0], count: "10", path: "ablxl/strapless/st" },
//         ]);



//     } else if (itemid === 'others') {
//         setCategories([
//             { id: "OTHERSof1", title: "Fresh & Trending", cover: genFreshList("others/of", 20)[0], count: "10", path: "abfresh/others/of" },
//             { id: "OTHERSStu", title: "student w glass", cover: genOthersList("student/stu", 5)[1], count: "10", path: "abothers/student/stu" },
//             { id: "OTHERSGreen", title: "green", cover: genOthersList("green/green", 5)[2], count: "10", path: "abothers/green/green" },
//             { id: "OTHERSMid", title: "middle age", cover: genOthersList("middleage/mid", 5)[3], count: "10", path: "abothers/middleage/mid" },
//         ]);

//     } else if (itemid === 'special') {
//         setCategories([
//             { id: "SpecialBack", title: "Elegance from Behind", cover: genImgList("abspecialtaste/back/ba", 10)[0], path: "abspecialtaste/back/ba", count: "10" },
//             { id: "SpecialFinger", title: "Graceful Fingertips", cover: genImgList("abspecialtaste/finger/fi", 10)[0], path: "abspecialtaste/finger/fi", count: "10" },
//             { id: "SpecialButt", title: "Curves & Confidence", cover: genImgList("abspecialtaste/butt/bu", 10)[0], path: "abspecialtaste/butt/bu", count: "10" },
//             { id: "SpecialLeg", title: "Poise in Every Step", cover: genImgList("abspecialtaste/legfeet/le", 10)[0], path: "abspecialtaste/legfeet/le", count: "10" },
//         ]);
//     } else if (itemid === 'holiday') {
//         setCategories([
//             { id: "HolidayLu", title: "Chinese New Year", cover: genImgList("abholiday/luneryear/lu", 10)[0], count: "30", path: "abholiday/luneryear/lu" },
//         ]);
//     } else {
//         setCategories([
//             { id: "ELSef1", title: "Amazing Start!", cover: "https://ai8ai.github.io/abcat/default/yc1.jpg" },
//             { id: "ELSef2", title: "Explore the Beauty", cover: "https://ai8ai.github.io/abcat/default/yc2.jpg" },
//             { id: "ELSef3", title: "Vibrant Colors", cover: "https://ai8ai.github.io/abcat/default/yc3.jpg" },
//             { id: "ELSef4", title: "Bold & Confident", cover: "https://ai8ai.github.io/abcat/default/yc4.jpg" },
//             { id: "ELSef5", title: "Artistic Vision", cover: "https://ai8ai.github.io/abcat/default/yc5.jpg" },
//             { id: "ELSef6", title: "Nature's Essence", cover: "https://ai8ai.github.io/abcat/default/yc6.jpg" },
//             { id: "ELSef7", title: "Graceful Elegance", cover: "https://ai8ai.github.io/abcat/default/yc7.jpg" },
//             { id: "ELSef8", title: "Iconic Moments", cover: "https://ai8ai.github.io/abcat/default/yc8.jpg" }
//         ]);
//     }
//     setLoading(false);
// }, [itemid]);  // Re-run effect when itemid changes






// lxl: genSubCat("ablxl", [
//     { id: "lxlyf1", title: "Daily Fresh & Hot Trends", count: "20", key: "lxl/yf" },
//     { id: "lxlPure", title: "Angelically Innocent", count: "30", key: "pure/pu" },
//     { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
//     { id: "lxlChe", title: "Elegant in Cheongsam", count: "50", key: "cheongsam/ch" },
//     { id: "lxlStr", title: "Bare & Beautiful", count: "40", key: "strapless/st" },
//     { id: "lxlBed", title: "Cozy & Seductive Moments", count: "30", key: "bedbathsofa/be" },
//     { id: "lxlSeq", title: "Dazzling in Sequins", count: "40", key: "sequins/se" },
//     { id: "lxlBlue", title: "Mystic in Blue", count: "50", key: "blue/bl" },
//     { id: "lxlFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt/fl" },
//     { id: "lxlGlass", title: "Sensual in Glasses", count: "30", key: "glass/gl" },
//     { id: "lxlGreen", title: "Enchanting in Green", count: "60", key: "green/gr" },
//     { id: "lxlDenim", title: "Casual Chic in Denim", count: "50", key: "demins/de" },
//     { id: "lxlPink", title: "Pretty in Pink", count: "20", key: "pinkgirl/pi" },
//     { id: "lxlCos", title: "Fantasy & Cosplay Queens", count: "40", key: "cosplay/co" },
//     { id: "lxlStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
//     { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
//     { id: "lxlDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
//     { id: "lxlFlo", title: "Flirty Floral Charms", count: "10", key: "floral/fl" },
//     { id: "lxlLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
//     { id: "lxlOne", title: "Fantasy & Queens", count: "10", key: "oneshoulder/on" },
//     { id: "lxlOff", title: "Chic at Work", count: "10", key: "office/of" },
//     { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
//     { id: "lxlStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
//     { id: "lxlStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
//     { id: "lxlBar", title: "Night Life", count: "10", key: "bar/ba" },
//     { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
//     { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
//     { id: "lxlCro", title: "Sassy in Croptops", count: "10", key: "croptop/cr" },
//     { id: "lxlDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
//     { id: "lxlFormal", title: "Enchanting in Business", count: "10", key: "formal/fo" },
//     { id: "lxlHalt", title: "Allure en Halter", count: "10", key: "haltertop/ha" },
//     { id: "lxlLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
//     { id: "lxlNight", title: "Nocturne in New York", count: "10", key: "nightnewyork/ni" },
//     { id: "lxlOff", title: "Chic at Work", count: "10", key: "office/of" },
//     { id: "lxlOut", title: "Breeze & Beyond", count: "10", key: "outdoor/ou" },
//     { id: "lxlPants", title: "Chic in Motion", count: "10", key: "pants/pa" },
//     { id: "lxlSee", title: "Seethrough ...", count: "10", key: "seethrough/se" },
//     { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
//     { id: "lxlUni", title: "Mystic in Uniform", count: "10", key: "uniform/un" },

// ]),