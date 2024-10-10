const Product = require('../models/product');
const cloudinary = require('../utils/cloudinary');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Настройка хранилища multer с Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        format: async (req, file) => 'jpg', // поддерживает промисы
        public_id: (req, file) => file.originalname,
    },
});

const upload = multer({ storage: storage });

// Получение всех продуктов
const fetchProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Получение отдельного продукта по ID
const fetchProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ product: product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Создание нового продукта
const newProduct = async (req, res) => {
    const { name, description, price, category, size, color, imageUrl } = req.body;
    try {
        let image;

        // Проверяем, есть ли загруженный файл
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            image = result.secure_url; // URL изображения из Cloudinary
        } else if (imageUrl) {
            image = imageUrl; // Используем URL, если он предоставлен
        } else {
            return res.status(400).json({ message: 'You must upload an image or provide a URL' });
        }

        const product = await Product.create({
            name,
            description,
            price,
            image, // Сохраняем URL изображения
            category,
            size,
            color,
            user: req.user ? req.user._id : null, // ID пользователя, если он аутентифицирован
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Обновление существующего продукта
const updateProduct = async (req, res) => {
    const { name, description, price, category, size, color, imageUrl } = req.body;
    const productId = req.params.id;

    try {
        let updatedData = {
            name,
            description,
            price,
            category,
            size,
            color,
        };

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            updatedData.image = result.secure_url; // Обновляем URL изображения, если загружен новый файл
        } else if (imageUrl) {
            updatedData.image = imageUrl; // Используем новый URL, если он предоставлен
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Удаление продукта
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        
        res.json({ message: 'Product removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { fetchProducts, fetchProduct, newProduct, updateProduct, deleteProduct, upload };

























































// const Product = require('../models/product');
// const cloudinary = require('../utils/cloudinary');
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// // Set up multer storage with Cloudinary
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'products',
//         format: async (req, file) => 'jpg', // supports promises as well
//         public_id: (req, file) => file.originalname,
//     },
// });

// const upload = multer({ storage: storage });

// const fetchProducts = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// const fetchProduct = async (req, res) => {
//     const productId = req.params.id;
//     try {
//         const product = await Product.findById(productId);
//         if (!product) return res.status(404).json({ message: 'product not faunded' });
//         res.json({ product: product });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// const newProduct = async (req, res) => {
//     const { name, description, price, category, size, color, imageUrl} = req.body;
//     try {
//         const result = await cloudinary.uploader.upload(req.file.path);
//         const product = await Product.create({
//             name: name,
//             description: description,
//             price: price,
//             image: result.secure_url, // Store the Cloudinary URL
//             category: category,
//             size: size,
//             color: color,
//             user: req.user._id // Assuming you have user authentication
//         });
//         res.status(201).json(product);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// const updateProduct = async (req, res) => {
//     const { name, description, price, category, size, color } = req.body;
//     const productId = req.params.id;
//     try {
//         let updatedData = {
//             name: name,
//             description: description,
//             price: price,
//             category: category,
//             size: size,
//             color: color,
//         };

//         if (req.file) {
//             const result = await cloudinary.uploader.upload(req.file.path);
//             updatedData.image = result.secure_url; // Update the image URL if a new file is uploaded
//         }

//         const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
//         res.status(200).json(updatedProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// const deleteProduct = async (req, res) => {
//     const productId = req.params.id;
//     try {
//         await Product.findByIdAndDelete(productId);
//         res.json({ message: 'Product deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// module.exports = { fetchProducts, fetchProduct, newProduct, updateProduct, deleteProduct, upload };






















































// const Product= require('../models/product');
// const cloudinary = require('../utils/cloudinary');
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const fetchProducts=async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
// ///////////////////////////////////////////////////
// const fetchProduct = async  (req, res) => {
//     const productId = req.params.id
//     const product = await Product.findById(productId)
//     console.log(product)
//     res.json({product:product});

// }
// /////////////////////////////////////////////////////////////
// const newProduct = async (req, res) => {
    
//        const name = req.body.name;
    
//          const description = req.body.description;
   
//          const price = req.body.price;
  
//          const image = req.body.image;
    
//        const category = req.body.category;
     
    

//     try {
//         const product = await Product.create({
//             name: name,
//             description:description,
//             price: price,
//             image:image, // Здесь будет храниться путь к изображению
//             category: category,
//         });

//         res.status(201).json(product);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// }
// ///////////////////////////////////////////////////////////////
// const updateProduct= async (req, res) => {
   
//        name = req.body.name;
  
//         description = req.body.description;
   
//         price = req.body.price;
   
//         image = req.body.image;
  
//       category = req.body.category;
   
//     const productId = req.params.id 
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(productId,{
//             name: name,
//             description: description,
//             price: price,
//             image: image,
//             category: category
//         }
              
//         )
//         res.status(200).json(updatedProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// }

// ///////////////////////////////////////////////////////////////////////////////
// const deleteProduct = async (req, res) => {
//     const productId = req.params.id 
//     try {
//         await Product.findByIdAndDelete(productId)
//         res.json({ message: 'Product deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }


// module.exports = {fetchProducts,fetchProduct, newProduct, updateProduct, deleteProduct};
