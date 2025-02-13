import React from 'react';
import { router } from 'expo-router';

import CategoryScreen from '@/components/cat/CatPage';
import getMyCat from '@/components/cat/getCatList';

const YCC = () => {
    return (
        <CategoryScreen
            fetchCategoryData={() => getMyCat('lxl_cat')}
            onPressItem={(item) => router.push({ pathname: '/detail/cat2img', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
