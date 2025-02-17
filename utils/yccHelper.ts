const shuffleList = (genFunc: Function, path: string, count: number) => {
    return genFunc(path, count).sort(() => Math.random() - 0.5); // Shuffle everything
};

export const getAllShuffledLists = () => ({
    yccSeq: shuffleList(genYCCList, "sequins/se", 5),
    yccBlue: shuffleList(genYCCList, "blue/bl", 5),
    yccFlo: shuffleList(genYCCList, "floralskirt/fl", 5),
    yccGlass: shuffleList(genYCCList, "glass/gl", 5),
    yccGreen: shuffleList(genYCCList, "green/gr", 5),
    yccDenim: shuffleList(genYCCList, "denim/de", 5),
    yccPink: shuffleList(genYCCList, "pinkgirl/pi", 5),
    yccCos: shuffleList(genYCCList, "cosplay/co", 5),

    syzStr: shuffleList(genSYZList, "lace/lace", 5),
    syzSpa: shuffleList(genSYZList, "spaghetti/spa", 5),
    syzLace: shuffleList(genSYZList, "strapless/str", 5),

    wxyLace: shuffleList(genWXYList, "lace/lace", 5),
    wxySpa: shuffleList(genWXYList, "spaghetti/spa", 5),
    wxyBar: shuffleList(genWXYList, "bar/bar", 5),
});
