// utils/getCategoryData.ts
import { Cate } from '@/types';
import YccCatPromise from '@/constants/Cat_YCC';
import SyzCatPromise from '@/constants/Cat_SYZ';
import WxyCatPromise from '@/constants/Cat_WXY';
import KeleCatPromise from '@/constants/Cat_KELE';
import AnranCatPromise from '@/constants/Cat_ANRAN';
import CccCatPromise from '@/constants/Cat_CCC';
import XlzCatPromise from '@/constants/Cat_XLZ';
import DxyCatPromise from '@/constants/Cat_DXY';
import LxlCatPromise from '@/constants/Cat_LXL';
import OthersCatPromise from '@/constants/Cat_OTHERS';

const getCategoryData = async (category: string): Promise<Cate[]> => {
    switch (category) {
        case 'ycc_cat':
            return await YccCatPromise; // Replace with actual data fetching
        case 'syz_cat':
            return await SyzCatPromise; // Replace with actual data fetching
        case 'wxy_cat':
            return await WxyCatPromise; // Replace with actual data fetching
        case 'kele_cat':
            return await KeleCatPromise; // Replace with actual data fetching
        case 'anran_cat':
            return await AnranCatPromise; // Replace with actual data fetching
        case 'ccc_cat':
            return await CccCatPromise; // Replace with actual data fetching
        case 'xlz_cat':
            return await XlzCatPromise; // Replace with another data source if needed
        case 'dxy_cat':
            return await DxyCatPromise; // Replace with another data source if needed
        case 'lxl_cat':
            return await LxlCatPromise; // Replace with another data source if needed
        default:
            return await OthersCatPromise;
    }
};

export default getCategoryData;
