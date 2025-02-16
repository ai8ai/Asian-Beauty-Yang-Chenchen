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

export const genCatCoverList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_CAT}${path}${i + 1}.jpg`);  

export const genFreshList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_FRESH}${path}${i + 1}.jpg`);  

export const genYCCList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_YCC}${path}${i + 1}.jpg`);  
