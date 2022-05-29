const productos = [
    {
        id: "1",
        nombre: 'Leffe Brune 330ml',
        precio: 570,
        imagen: 'https://cdn.shopify.com/s/files/1/1103/5152/products/Leffe_Brune_1000x2048_1_1024x1024.jpg?v=1556024381',
        stock: 10,
        descripcion:'Leffe Brune es una cerveza de abadía. La malta tostada oscura le otorga a la cerveza su color oscuro y café, y su sabor ligeramente dulce. Su receta data de los años 1200, cuando los monjes en Dinant, Bélgica (en la Abadía Leffe), comenzaron a purificar el agua convirtiéndola en cerveza, en un intento por evitar las epidemias de enfermedades transmitidas por el agua. El resultado fue una cerveza oscura, de gran cuerpo; y los aldeanos de Dinant y los peregrinos que pasaban por ahí fueron muy felices al compartirla.',
        pais: 'Bélgica',
        estilo: 'Belgian Brown Ale',
        porcentaje: 6.5,
        IBU: 20,
        category: 'importada' 
    },
    {
        id: "2",
        nombre: 'Leffe Blonde 330ml',
        precio: 570,
        imagen: 'https://cdn.shopify.com/s/files/1/0454/8984/8477/products/LEFFE-blonde_720x.png?v=1599530689',
        stock: 15,
        descripcion: 'La cerveza Leffe fue originalmente elaborada por monjes en la Abadía Leffe cerca de Dinant, Bélgica, utilizando ingredientes que crecían en el área cercana. La Leffe de hoy es una descendiente de la primera cerveza producida en siglo 13. Leffe Blond es una cerveza ale blanca afrutada y ligeramente especiada, es perfecta como aperitivo y suficientemente versátil para disfrutarse con carne roja, platillos agridulces, o quesos suaves como el Camembert y el Brie.',
        pais: 'Bélgica', 
        estilo: 'Belgian Blonde Ale',
        porcentaje: 6.6,
        IBU: 20,
        category: 'importada' 
    },
    {
        id: "3",
        nombre: 'Paulaner Salvator Doppelbock 500ml',
        precio: 830,
        imagen: 'https://houseofales.co.uk/wp-content/uploads/2022/02/Paulaner-Salvator_63933650c245fb13c9142a027f46c322-680x680.png',
        stock: 12,
        descripcion: 'El Doppelbock-Bier de fermentación inferior reúne los mejores lúpulos y la malta de cebada oscura. Los monjes Paulaner sirvieron como sustituto de la comida en la Cuaresma. Su cervecero más famoso fue el hermano Bernabé, que fue el jefe de la cervecería del monasterio Paulaner a partir de 1773. Su receta original es la misma que en la época de Bernabé. Para proteger la receta original, Paulaner tenía la marca registrada Salvator patentada en 1896.',
        pais: 'Alemania', 
        estilo: 'Doppelbock',
        porcentaje: 8,
        IBU: 28,
        category: 'importada' 
    },
    {
        id: "4",
        nombre: 'Delirium Tremens 330ml',
        precio: 945,
        imagen: 'https://cdn.shopify.com/s/files/1/0271/8158/0388/products/cerveza-delirium-tremens-escerveza-1_600x.jpg?v=1648892844',
        stock: 4,
        descripcion: 'Rubio pálido, la efervescencia fina y regular asegura una cabeza fina y estable. Ligeramente malteado, un agradable toque de alcohol, picante. Se siente como si la inyección de alcohol estuviera inflamando la boca. En realidad se calientan la lengua y el paladar. El sabor se caracteriza por su redondez. El retrogusto es fuerte, duradero y amargo seco.',
        pais: 'Bélgica',
        estilo: 'Strong Golden Ale',
        porcentaje: 9,
        IBU: 26,
        category: 'importada' 
    },
    {
        id:"5",
        nombre: 'Delirium Nocturnum 330ml',
        precio: 945,
        imagen: 'https://cdn.shopify.com/s/files/1/0271/8158/0388/products/cerveza-delirium-nocturnum-escerveza-1_600x.jpg?v=1648892846',
        stock: 10,
        descripcion: 'Marrón chocolate oscuro. Una espuma compacta, de color blanco-amarillo, estable y cremosa. Toques de caramelo, mocca y chocolate. También están presentes especias como el regaliz y el cilantro. Al principio, una sensación muy agradable en boca a alcohol y suavidad. Le sigue un creciente amargor, que en parte procede del lúpulo, pero también de la malta tostada y de la malta de chocolate. Hacia el final, agradable equilibrio entre los toques amargo, agrio y dulce.',
        pais: 'Bélgica',
        estilo: 'Strong Dark Ale',
        porcentaje: 9,
        IBU: 26,
        category: 'importada' 
    },
    {
        id:"6",
        nombre: 'Gulden Draak 330ml',
        precio: 1090,
        imagen: 'https://cdn.shopify.com/s/files/1/0271/8158/0388/products/gulden-draak-classic-escerveza-1_600x.jpg?v=1648893313',
        stock: 3,
        descripcion: 'Gulden Draak es una cerveza de fermentación alta, con segunda fermentación, para la cual se utiliza levadura de vino. Muy completa en boca, con toques de chocolate, caramelo y alcohol; aftertaste agridulce y muy prolongado.',
        pais: 'Bélgica',
        estilo: 'Belgian Strong Ale',
        porcentaje: 10.5,
        IBU: 30,
        category: 'importada' 
    },
    {
        id:"7",
        nombre: 'Paulaner Hefe-Weissbier 330ml',
        precio: 754,
        imagen: 'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55141_default_small.jpeg',
        stock:25,
        descripcion: 'La cerveza blanca de levadura número 1 en Alemania y una de las más apreciadas del mundo. De apariencia turbia, se presenta en el vaso con un brillante color dorado aterciopelado, bajo robusta corona de espuma que verdaderamente merece este nombre. Ya desde el comienzo de su preparación emana de este clásico de la cerveza blanca de Múnich un ligero aroma a plátano.',
        pais: 'Alemania', 
        estilo: 'Weissbier',
        porcentaje: 5.5,
        IBU: 16,
        category: 'importada' 
    },
    {
        id:"8",
        nombre: 'Duvel Blonde Ale 330ml',
        precio: 560, 
        imagen:'https://www.espaciovino.com.ar/media/default/0001/57/thumb_56267_default_big.jpeg',
        stock: 14, 
        descripcion: 'Cerveza especial belga, 8,5% de alcohol, de alta fermentación, con segunda fermentación en botella. Aromas afrutados, evocando el olor a pera y manzana.',
        pais: 'Bélgica',
        estilo: 'Belgian Strong Ale',
        porcentaje: 8.5,
        IBU: 33,
        category: 'importada' 
    },
    {
        id:"9",
        nombre: 'Erdinger Pikantus 500ml',
        precio: 970,
        imagen: 'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55120_default_big.jpeg',
        stock: 6, 
        descripcion: 'Erdinger Pikantus Para algunas personas, Erdinger Weissbier Pikantus cerveza bock oscuraes un manjar para disfrutar en los meses más fríos del año.',
        pais: 'Alemania',
        estilo: 'Weizenbock',
        porcentaje: 7.3,
        IBU: 10,
        category: 'importada' 
    }
]

export default productos;