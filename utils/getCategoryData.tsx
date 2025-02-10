// utils/getCategoryData.ts
import { Cate } from '@/types';
import YccCatPromise from '@/constants/Cat_YCC';
import WxyCatPromise from '@/constants/Cat_WXY';
import KeleCatPromise from '@/constants/Cat_KELE';

const getCategoryData = async (category: string): Promise<Cate[]> => {
    switch (category) {
        case 'ycc_cat':
            return await YccCatPromise; // Replace with actual data fetching
        case 'wxy_cat':
            return await WxyCatPromise; // Replace with another data source if needed
        case 'kele_cat':
            return await KeleCatPromise; // Replace with another data source if needed
        default:
            return await YccCatPromise;
    }
};

export default getCategoryData;
