type Product = {
    id: number;
    title: string;
    images: string[];
    price: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    }
}