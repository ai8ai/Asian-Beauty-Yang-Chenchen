import React from 'react';
import { router } from 'expo-router';

import CategoryScreen from '@/components/CategoryScreen';
import getMyCat from '@/app/cat/getMyCat';

const YCC = () => {
    return (
        <CategoryScreen
            fetchCategoryData={() => getMyCat('wxy_cat')}
            onPressItem={(item) => router.push({ pathname: '/detail/cat2img', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
