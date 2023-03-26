import Image from "next/image";
import s from "./product.module.css";
import Link from "next/link";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={`${s.productCard} dark:bg-white mx-auto my-3 rounded-lg`}>
        <Image
          fill
          src={product.images[0]}
          alt={product.title}
          className={`${s.prodImage} !relative mx-auto`}
        />
        <div className={`${s.prodDescriptionSection}`}>
          <h1 className={`${s.prodTitle} my-2`}>{product.title}</h1>
          <p className={`${s.prodDescription} my-2`}>{product.description}</p>
          <p className={`${s.prodRatingRate} my-2`}>
            {product.rating.rate} &#11088;
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
