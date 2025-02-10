// utils/getCategoryData.ts
import { Cate } from '@/types';
import {YccCatPromise} from '@/paths/getLocalCate'; // Adjust to your data sources

const getCategoryData = async (category: string): Promise<Cate[]> => {
    switch (category) {
        case 'cat1':
            return await YccCatPromise; // Replace with actual data fetching
        case 'cat2':
            return await YccCatPromise; // Replace with another data source if needed
        default:
            return await YccCatPromise;
    }
};

export default getCategoryData;
