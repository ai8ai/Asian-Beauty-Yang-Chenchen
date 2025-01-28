interface YccCategory {
    id: string;
    title: string;
    cover: string;
}

let YccCat: YccCategory[] = [];

async function fetchYccCategoryCover(): Promise<YccCategory[]> {
    try {
        // const response = await fetch('https://gist.githubusercontent.com/aiseeingvoice/315a95da057aed01e4ff06de24d00315/raw/9a1b58edb1d787bbab96681369152db85b229dfa/gistfile1.txt');
        const response = await fetch('https://raw.githubusercontent.com/AIdrescom/YccData/refs/heads/main/ycccat.json');

        if (!response.ok) {
            throw new Error('Failed to fetch category covers');
        }

        // Parse the JSON response
        const yccCategoryCover: string[] = await response.json();

        // Shuffle the array (optional)
        const srcArray = yccCategoryCover.sort(() => Math.random() - 0.5);

        // Populate the YccCat array
        YccCat = [
            {
                "id": "1",
                "title": "Chenchen New!",
                "cover": srcArray[0]
            },
            {
                "id": "2",
                "title": "pure & provocative",
                "cover": srcArray[1]
            },
            {
                "id": "3",
                "title": "electric moment",
                "cover": srcArray[2]
            },
            {
                "id": "4",
                "title": "beautiful & sassy",
                "cover": srcArray[3]
            },
            {
                "id": "5",
                "title": "graceful elegance",
                "cover": srcArray[4]
            },
            {
                "id": "6",
                "title": "alluring",
                "cover": srcArray[5]
            },
            {
                "id": "7",
                "title": "full of charm",
                "cover": srcArray[6]
            },
            {
                "id": "8",
                "title": "professional Yome",
                "cover": srcArray[7]
            }
        ];

        console.log('YccCat1:', YccCat);
        return YccCat; // Return the populated array
    } catch (error) {
        console.error('Error fetching category covers:', error);
        throw error; // Re-throw the error to handle it elsewhere
    }
}

// Export a Promise that resolves to YccCat
const YccCatPromise = fetchYccCategoryCover();

export default YccCatPromise;