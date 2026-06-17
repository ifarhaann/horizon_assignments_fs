import { useState } from "react";
import cartImg from "./assets/shopping-cart.png";
import ProductList from "./components/ProductList";
import Button from "./components/Button";
function App() {
  const products = [
    {
      name: "iphone 12 pro",
      price: 21000,
      category: "Electronic",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fHww",
    },
    {
      name: "T-shirt for men",
      price: 150,
      category: "Cloths",
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dC1zaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Sony LED Tv",
      price: 34000,
      category: "Electronic",
      image:
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHR2fGVufDB8fDB8fHww",
    },
    {
      name: "Washing machine",
      price: 6000,
      category: "Electrical",
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  const [view, setView] = useState(false);
  const [cart, setCart] = useState([]);
  function cartHandle(name) {
    setCart([...cart, name]);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center gap-5">
        <div className="flex justify-between items-center px-20 py-3 bg-gray-900 w-full">
          <div className="font-bold text-3xl text-cyan-100">Shop now</div>
          <div className="flex gap-10 text-white items-center">
            <span>Home</span>
            <span>Products</span>
            <div className="p-2 rounded-full bg-white  relative ">
              <img className="object-cover w-6" src={cartImg} alt="" />
              <span className="bg-orange-400 absolute -top-2 -right-4 p-0.5 px-2 rounded-full">
                {cart.length}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
           <Button
          label="Change View"
          color="gray"
          onClick={() => {
            setView(!view);
          }}
        />
        {cart.length > 0 && (
          <Button label="Clear cart" color="red" onClick={clearCart} />
        )}
        {cart.length==0 && <p className="text-gray-400 text-sm">Cart is empty</p> }
        </div>
        <ProductList products={products} view={view} cart={cartHandle} />
      </div>
    </>
  );
}

export default App;
