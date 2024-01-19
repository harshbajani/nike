import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, customer4, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1000+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250000+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Legend Essential 2",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike MD Runner 2",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "New Balance 247 Sport",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.3,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended."
    },
    {
        imgURL: customer2,
        customerName: 'Jenny Cyrus',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer."
    },
    {
        imgURL: customer3,
        customerName: 'Ken Miles',
        rating: 4.1,
        feedback: "I have appreciated the comfortable, smart casual shoes, true-to-size fitting, and quality customer service."
    },
    {
        imgURL: customer4,
        customerName: 'Lisa Bing',
        rating: 4.5,
        feedback: "They are very comfortable! I really like the soft feel of the sole and the stability of the shoes for the heel and ankle."
    },
    
];


export const footerLinks = [
    {
        title: "About Nike",
        links: [
            { name: "News", link: "https://about.nike.com/en/newsroom" },
            { name: "Carriers", link: "https://jobs.nike.com/" },
            { name: "Investors", link: "https://investors.nike.com/Home/default.aspx" },
            { name: "Sustainibility", link: "https://www.nike.com/in/sustainability" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Order Status", link: "https://www.nike.com/orders/details/" },
            { name: "Delivery", link: "https://www.nike.com/in/help/a/shipping-delivery-gs" },
            { name: "Returns", link: "https://www.nike.com/in/help/a/returns-policy-gs" },
            { name: "Payment Option", link: "https://www.nike.com/in/help/a/payment-options-gs" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "https://www.nike.com/in/en/help/ask/r/nike" },
            { name: "000 800 919 0566" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link:"https://www.facebook.com/nike"},
    { src: twitter, alt: "twitter logo", link:"https://twitter.com/Nike" },
    { src: instagram, alt: "instagram logo", link:"https://www.instagram.com/nike/" },
];