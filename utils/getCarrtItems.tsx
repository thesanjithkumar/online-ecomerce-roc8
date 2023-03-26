export const getCartItems = async (userId: number) => {
  if (typeof window !== "undefined") {
    // const userID = Number(localStorage.getItem("userId"));
    const response = await fetch(`https://dummyjson.com/carts/user/5`);
    const data = await response.json();
    console.log(data);
    return data;
  }
};
