import { useEffect, useState } from "react";
import { getCartItems } from "../../../utils/getCarrtItems";
const CartComponent = async () => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    setUserId(localUserId ? JSON.parse(localUserId) : "");
  }, []);
  console.log("here", userId);
  //   const cartItems = fetch("https://dummyjson.com/carts/user/5").then((res) =>
  //     res.json()
  //   );
  const items = await getCartItems(Number(userId));

  console.log("items", items);
  return (
    <div>{userId ? <div>{userId}</div> : <p>please login to view cart</p>}</div>
  );
};

export default CartComponent;
