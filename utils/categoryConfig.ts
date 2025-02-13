// utils/categoryConfig.ts
export const CATEGORY_MAPPING: Record<string, { title: string; dataFetcher: Promise<any>; pathname: string }> = {
    cat1: { title: "Yang Chenchen Collection", dataFetcher: import("@/app/home/getHomeList").then(m => m.default), pathname: "/ycc" },
    cat2: { title: "Son Yoon Joo Collection", dataFetcher: import("@/paths/getAfcCate").then(m => m.default), pathname: "/afc" },
    cat3: { title: "Wang Xinyao Collection", dataFetcher: import("@/paths/getAfcCate").then(m => m.default), pathname: "/wxy" },
    cat4: { title: "Kele Vicky Collection", dataFetcher: import("@/paths/getAfcCate").then(m => m.default), pathname: "/kv" },
    // Add more categories here...
};
