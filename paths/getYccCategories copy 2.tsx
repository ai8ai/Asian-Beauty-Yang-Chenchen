interface YccCategory {
    id: string;
    title: string;
    cover: string;
}

let YccCat: YccCategory[] = [];

async function fetchYccCategoryCover() {
    try {
        const response = await fetch('https://gist.githubusercontent.com/aiseeingvoice/315a95da057aed01e4ff06de24d00315/raw/9a1b58edb1d787bbab96681369152db85b229dfa/gistfile1.txt');
        
        if (!response.ok) {
            throw new Error('Failed to fetch category covers');
        }

        // Parse the JSON response
        const yccCategoryCover: string[] = await response.json();
        // console.log(yccCategoryCover)

        // Shuffle the array (optional)
        const srcArray = yccCategoryCover.sort(() => Math.random() - 0.5);

        // Populate the YccCat array
        YccCat = [
            {
                id: "1",
                title: "Chenchen New!",
                cover: srcArray[0] || '', // Handle cases where the array might be empty
            },
            {
                id: "2",
                title: "pure & provocative",
                cover: srcArray[1] || '', // Handle cases where the array might be empty
            },
        ];

        // console.log('YccCat:', YccCat);
    } catch (error) {
        console.error('Error fetching category covers:', error);
    }
}

// Call the function to populate YccCat
fetchYccCategoryCover();

export default YccCat;
