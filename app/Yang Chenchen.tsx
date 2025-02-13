// ycc_cat.tsx
import React from 'react';
import { router } from 'expo-router';

import CategoryScreen from '@/components/cat/CatPage';
import getMyCat       from '@/components/cat/getCatList';

const YCC = () => {
    return (
        <CategoryScreen
            fetchCategoryData={() => getMyCat('ycc_cat')}
            onPressItem={(item) => router.push({ pathname: '@/components/detail/cat2img', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
