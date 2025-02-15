import React from 'react';
import { router } from 'expo-router';

import CatScreen from '@/app/CatScreen';
import getMyCat from '@/components/cat/getCatList';

const YCC = () => {
    return (
        <CatScreen
            fetchCategoryData={() => getMyCat('ccc_cat')}
            onPressItem={(item) => router.push({ pathname: '/detail/cat2img', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
