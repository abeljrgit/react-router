import { Link, useParams } from "react-router-dom";
import products from "../dev-data/data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product: any = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/products">Back to Product</Link>
    </section>
  );
};

export default SingleProduct;
