
import ProductCard from './ProductCard';

function ProductList(props) {
    
  return (
    <div className="flex gap-3 flex-wrap items-center justify-center">
          {props.products.map((p, i) => {
            return (
              <ProductCard 
                key={i}
                name={p.name}
                price={p.price}
                category={p.category}
                image={p.image}
                view={props.view}
                cart = {props.cart}
              />
            );
          })}
        </div>
  )
}

export default ProductList