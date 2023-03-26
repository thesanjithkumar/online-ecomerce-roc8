import product from "@/components/ui/product";
import { useEffect, useState } from "react";
import Image from "next/image";
import s from "@/styles/cartPage/cart.module.css";
interface Props {
  cartItems: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountPrice: number;
  }[];
  cartId: number;
}

export default function Cart({ cartItems, cartId }: Props) {
  // let cartItems: Product[] = [];
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    setUserId(localUserId ? JSON.parse(localUserId) : "");
  }, []);
  const addItem = (e: any, cartId: number, quant: number, itemId: number) => {
    console.log(cartId, quant);
    fetch(`https://dummyjson.com/carts/${cartId}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        merge: true,
        products: [
          {
            id: itemId,
            quantity: quant + 1,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  const removItem = (e: any, Id: number) => {
    fetch(`https://dummyjson.com/carts/${Id - 1}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <div>
      {userId ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`${s.productCard} dark:bg-white mx-auto my-3 rounded-lg`}
            >
              <div className={`${s.prodSection}`}>
                <div className={`${s.prodTitle} my-2`}>
                  <h1>{item.title}</h1>
                </div>
                <div className={`${s.prodQuantPrice}`}>
                  <p className={`${s.prodDescription} my-2`}>
                    Total Price: {item.total}
                  </p>
                  <p className={`${s.prodDescription} my-2`}>
                    Quantity: {item.quantity}
                  </p>
                  <div className={`${s.quantButtonDiv}`}>
                    <button className={`${s.quantButton}`}>-</button>
                    <button
                      className={`${s.quantButton}`}
                      onClick={(e) =>
                        addItem(e, cartId, item.quantity, item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>please login to view cart</p>
      )}
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(`https://dummyjson.com/carts/user/15`);
  const data = await response.json();
  console.log(data.carts[0].products);
  return {
    props: {
      cartItems: data.carts[0].products,
      cartId: data.carts[0].id,
      test: "test",
    },
  };
}
