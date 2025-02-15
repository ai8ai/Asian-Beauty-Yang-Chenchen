/**
 * dxyCovers.ts
 * 
 * This module generates a list of image URLs based on a given directory path and file name pattern.
 * Example Usage:
 * generateCovers("dxy/dc", 1000) will generate:
 * ["https://ai8ai.github.io/abcat/dxy/dc1.jpg", ..., "https://ai8ai.github.io/abcat/dxy/dc1000.jpg"]
 */

const BASE_URL = "https://ai8ai.github.io/";

export const genImgList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`);  