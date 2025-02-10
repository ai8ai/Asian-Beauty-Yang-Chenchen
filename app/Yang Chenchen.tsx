import React from 'react';
import { router } from 'expo-router';

import CategoryScreen from '@/components/CategoryScreen';
import getCategoryData from '@/utils/getCategoryData';

const YCC = () => {
    return (
        <CategoryScreen
            fetchCategoryData={() => getCategoryData('ycc_cat')}
            onPressItem={(item) => router.push({ pathname: '/detail/cat2img', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
