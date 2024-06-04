import Lily from '../assets/images/Ecomm_02_Lily_004.jpg'
import PencilPlant from '../assets/images/image.jpg'
import Alocasia from '../assets/images/Ecomm_05_Alocasia_008.jpg'
import Snake from '../assets/images/Ecomm_17_Snake_001.jpg'
import Pink from '../assets/images/Ecomm_03_CalatheaPink_006.jpg'
import Orchid from '../assets/images/Ecomm_04_Orchid_005.jpg'
import Maiden from '../assets/images/Ecomm_13_MaidenHair_006.jpg'
import Cactus from '../assets/images/Ecomm_16_Cactus2_005.jpg'
import Fern from '../assets/images/Ecomm_07_Fern_003.jpg'
import Palm from '../assets/images/Ecomm_18_Palm_004.jpg'
import Gift from '../assets/images/giftcard-template.jpg'

import Lily2 from '../assets/images/Texture_09_012.jpg'
import PencilPlant2 from '../assets/images/Texture_06_010.jpg'
import Alocasia2 from '../assets/images/Texture_01_009.jpg'
import Snake2 from '../assets/images/Texture_07_016.jpg'
import Pink2 from '../assets/images/Texture_03_010.jpg'
import Orchid2 from '../assets/images/texture-orchid.jpg'
import Maiden2 from '../assets/images/Texture_08_029.jpg'
import Cactus2 from '../assets/images/texture-cactus.jpg'
import Fern2 from '../assets/images/Texture_10_016.jpg'
import Palm2 from '../assets/images/Texture_08_029.jpg'


const ShopDb = [
    {
        "id": 1,
        "name": "Lily",
        "price": 20.00,
        "image": Lily,
        "image2": Lily2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 2,
        "name": "Pencil Plant",
        "price": 12.00,
        "image": PencilPlant,
        "image2": PencilPlant2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 3,
        "name": "Alocasia",
        "price": 15.00,
        "image": Alocasia,
        "image2": Alocasia2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 4,
        "name": "Snake",
        "price": 12.00,
        "image": Snake,
        "image2": Snake2,
        "sizes": ["Small", "Medium", "Large"],
        "sale": "SOLD OUT"
    },
    {
        "id": 5,
        "name": "Orchid",
        "price": 30.00,
        "image": Orchid,
        "image2": Orchid2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 6,
        "name": 'Pink Calathea',
        "price": 20.00,
        "image": Pink,
        "image2": Pink2,
        "sizes": ["Small", "Medium", "Large"],
        "sale": "SALE"
    },
    {
        "id": 7,
        "name": "Maiden Hair",
        "price": 10.00,
        "image": Maiden,
        "image2": Maiden2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 8,
        "name": "Cactus",
        "price": 50.00,
        "image": Cactus,
        "image2": Cactus2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 9,
        "name": "Fern",
        "price": 25.00,
        "image": Fern,
        "image2": Fern2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 10,
        "name": "Palm",
        "price": 20.00,
        "image": Palm,
        "image2": Palm2,
        "sizes": ["Small", "Medium", "Large"]
    },
    {
        "id": 11,
        "name": "Gift Card",
        "price": 25.00,
        "image": Gift,
        'image2': Gift,
        "sizes": ["Small", "Medium", "Large"]
    }
];

export default ShopDb;
