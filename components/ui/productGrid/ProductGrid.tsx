import ProductCard from "../product/ProductCard";
import s from "./productGrid.module.css";

interface Props {
  prodList: Product[];
}

const ProductGrid = ({ prodList }: Props) => {
  return (
    <div className={`${s.productFlex}`}>
      {prodList.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductGrid;
