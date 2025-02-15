/**
 * dxyCovers.ts
 * 
 * This module generates a list of image URLs based on a given directory path and file name pattern.
 * Example Usage:
 * generateCovers("dxy/dc", 1000) will generate:
 * ["https://ai8ai.github.io/abcat/dxy/dc1.jpg", ..., "https://ai8ai.github.io/abcat/dxy/dc1000.jpg"]
 */

const BASE_URL_CAT = "https://ai8ai.github.io/abcat/";
const BASE_URL_FRESH = "https://ai8ai.github.io/abfresh/";
const BASE_URL_YCC = "https://ai8ai.github.io/abycc/";
const BASE_URL_SYZ = "https://ai8ai.github.io/absyz/";
const BASE_URL_WXY = "https://ai8ai.github.io/abwxy/";
const BASE_URL_KELE = "https://ai8ai.github.io/abkele/";
const BASE_URL_XLZ = "https://ai8ai.github.io/abxlz/";
const BASE_URL_OTHERS = "https://ai8ai.github.io/abothers/";
const BASE_URL_ANRAN = "https://ai8ai.github.io/abanran/";
const BASE_URL_CCC = "https://ai8ai.github.io/abccc/";
const BASE_URL_DXY = "https://ai8ai.github.io/abdxy/";
const BASE_URL_LXL = "https://ai8ai.github.io/ablxl/";
// const BASE_URL_ = "https://ai8ai.github.io/ab/";

export const genCatCoverList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_CAT}${path}${i + 1}.jpg`);  

export const genFreshList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_FRESH}${path}${i + 1}.jpg`);  

export const genYCCList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_YCC}${path}${i + 1}.jpg`);  

export const genSYZList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_SYZ}${path}${i + 1}.jpg`);  

export const genWXYList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_WXY}${path}${i + 1}.jpg`);  

export const genKeleList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_KELE}${path}${i + 1}.jpg`);  

export const genXLZList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_XLZ}${path}${i + 1}.jpg`);  

export const genOthersList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_OTHERS}${path}${i + 1}.jpg`);  


export const genCCCList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_CCC}${path}${i + 1}.jpg`);  

export const genANRANList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_ANRAN}${path}${i + 1}.jpg`);  

export const genDXYList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_DXY}${path}${i + 1}.jpg`);  

export const genLXLList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_LXL}${path}${i + 1}.jpg`);  
