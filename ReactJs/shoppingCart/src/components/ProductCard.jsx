import Button from "./Button";

function ProductCard(props) {
  
  return (
    <div className="flex">
      {props.view ? (
        <div className="bg-gray-800 p-6 text-white rounded flex justify-between gap-10">
          <div>
            <h2 className="font-bold">
              {props.name === "" ? "Unknown Product" : props.name}
            </h2>
            <p className="text-gray-400">
              {props.price === "" ||
              props.price === null ||
              props.price === undefined
                ? 0
                : props.price}{" "}
              ₹
            </p>
          </div>
          <Button label='Add' onClick={()=>{
             props.cart(props.name)
          }}
          color='green'/> 
        </div>
      ) : (
        <div className="bg-gray-800 p-6 text-white rounded flex flex-col gap-8 w-60">
          <img
            className="rounded h-28 object-cover"
            src={props.image}
            alt="product"
          />
          <div>
            <h2 className="font-bold">
              {props.name === "" ? "Unknown Product" : props.name}
            </h2>
            <p className="">
              {props.price === "" ||
              props.price === null ||
              props.price === undefined
                ? 0
                : props.price}{" "}
              ₹
            </p>
            <p className="text-gray-400">
              {props.category === "" ||
              props.category === null ||
              props.category === undefined
                ? "Uncategorized"
                : props.category}
            </p>
          </div>
          <Button label='Add to cart' onClick={()=>{
            props.cart(props.name)
          }}
          color= 'orange'/>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
