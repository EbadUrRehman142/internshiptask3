import React from 'react';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
    // Static data for testing
    const staticProducts = [
        {
            "_id": "1",
            "name": " HP Pavilion 15 Laptop ",
            "description": "A sleek and lightweight laptop featuring a 15.6-inch Full HD display, Intel Core i5 processor, 8GB RAM, and 256GB SSD storage. Ideal for work, study, and entertainment.",
            "price": 749.99,
            "image": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07961306.png?impolicy=Png_Res"
        },
        {
            "_id": "2",
            "name": "Logitech G502 Hero Gaming Mouse",
            "description": "A high-performance gaming mouse with a customizable weight system, 11 programmable buttons, and a HERO 25K sensor for precise tracking. Perfect for both casual and professional gamers.",
            "price": 49.99,
            "image": "https://resource.logitech.com/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png"
        },
        {
            "_id": "3",
            "name": "Samsung 27 Curved Monitor",
            "description": "Immerse yourself in stunning visuals with this 27-inch curved monitor featuring a 1080p resolution, 144Hz refresh rate, and AMD FreeSync technology. Great for gaming, video editing, and productivity tasks.",
            "price": 229.99,
            "image": "https://images.samsung.com/is/image/samsung/p6pim/africa_en/lc27t550fdrxen/gallery/africa-en-c27t55-lc27t550fdrxen-532382509?$650_519_PNG$"
        },
        {
            "_id": "4",
            "name": "Corsair K70 RGB Mechanical Gaming Keyboard",
            "description": "An ultra-durable mechanical gaming keyboard with Cherry MX Red switches, customizable RGB backlighting, and a detachable wrist rest.",
            "price": 129.99,
            "image": "https://thegamesmen.pk/wp-content/uploads/2022/11/Corsair-K70-RGB-MK.2-Mechanical-Gaming-Keyboard-1.webp"
        },
        {
            "_id": "5",
            "name": "WD My Passport 2TB External Hard Drive",
            "description": "Store your files securely with this portable 2TB external hard drive. It offers fast USB 3.0 transfer speeds, automatic backup software, and password protection.",
            "price": 79.99,
            "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/products/portable/my-passport-ultra/gallery/silver/1tb/my-passport-ultra-1tb-WDBC3C0010BSL-WESN-front-12mm-silver.png.thumb.1280.1280.png"
        },
        {
            "_id": "6",
            "name": "Power Bank",
            "description": "Keep your devices charged on the go with this powerful 20100mAh portable charger. It features two high-speed USB ports, enough to charge a smartphone up to seven times.",
            "price": 39.99,
            "image": "https://jsaux.com/cdn/shop/files/20000mah-65W-pd-portable-charger.png?v=1697683844&width=1024"
        },
        {
            "_id": "7",
            "name": "Razer Kraken X Gaming Headset",
            "description": "Experience immersive sound with this lightweight gaming headset featuring 7.1 surround sound, noise-cancelling microphone, and memory foam ear cushions for long gaming sessions.",
            "price": 59.99,
            "image": "https://assets.razerzone.com/eeimages/support/products/1531/krakenxmain.png"
        },
        {
            "_id": "8",
            "name": "Dell USB-C Mobile Adapter",
            "description": "This versatile USB-C adapter allows you to connect your laptop to various devices, including HDMI, VGA, Ethernet, and USB-A. A compact and travel-friendly solution for connectivity on the go.",
            "price": 89.99,
            "image": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/adapters/dell-usb-c-to-2-5-gbps/media-gallery/adapters-dell-usb-c-2-5gbps-sa224-bk-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500"
        },
        {
            "_id": "9",
            "name": "Kingston 32GB DDR4 RAM",
            "description": "Boost your computer's performance with this 32GB DDR4 RAM module, delivering fast speeds and reliable performance for gaming, multitasking, and heavy workloads.",
            "price": 129.99,
            "image": "https://cdn11.bigcommerce.com/s-xdygvn/images/stencil/590x590/products/9009/24525/815101-B21__64747.1672940522.png?c=2"
        },
        {
            "_id": "10",
            "name": "Microsoft Surface Arc Mouse",
            "description": "A stylish and ultra-portable Bluetooth mouse with a unique curved design that snaps flat for easy storage. Ideal for use with Surface devices and other Windows laptops.",
            "price": 69.99,
            "image": "https://news.microsoft.com/wp-content/uploads/prod/sites/243/2017/05/TQ_Gray-59088c08d2edf.png"
        }
    ];

    return (
        <div className="product-list">
            {staticProducts.length > 0 ? (
                staticProducts.map(product => (
                    <Product key={product._id} product={product} onAddToCart={onAddToCart} />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductList;
