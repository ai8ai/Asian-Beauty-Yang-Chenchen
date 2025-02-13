// utils/getCategoryData.ts
import { Cate } from '@/types';
import fetchCover_Cat from '@/constants/fetchCover_Cat';

const getCategoryData = async (category: string): Promise<Cate[]> => {
    const categoryMap: Record<string, { coverKey: string; catKey: string }> = {
        ycc_cat: { coverKey: 'HomeCoverYCC', catKey: 'CatYCC' },
        syz_cat: { coverKey: 'HomeCoverSYZ', catKey: 'CatSYZ' },
        wxy_cat: { coverKey: 'HomeCoverWXY', catKey: 'CatWXY' },
        kele_cat: { coverKey: 'HomeCoverKELE', catKey: 'CatKELE' },
        anran_cat: { coverKey: 'HomeCoverANRAN', catKey: 'CatANRAN' },
        ccc_cat: { coverKey: 'HomeCoverCCC', catKey: 'CatCCC' },
        xlz_cat: { coverKey: 'HomeCoverXLZ', catKey: 'CatXLZ' },
        dxy_cat: { coverKey: 'HomeCoverDXY', catKey: 'CatDXY' },
        lxl_cat: { coverKey: 'HomeCoverLXL', catKey: 'CatLXL' },
        default: { coverKey: 'HomeCoverOTHERS', catKey: 'CatOTHERS' },
    };

    const { coverKey, catKey } = categoryMap[category] || categoryMap.default;

    try {
        const data = await fetchCover_Cat();
        const covers = data[coverKey] || [];
        const subCats = data[catKey] || [];
        const shuffledCovers = covers.sort(() => Math.random() - 0.5);

        return subCats.map((catItem: any) => ({
            id: catItem.id,
            title: catItem.title,
            cover: shuffledCovers[catItem.coverIndex] || "",
        }));
    } catch (error) {
        console.error(`Error fetching category data for ${category}:`, error);
        return [];
    }
};

export default getCategoryData;
