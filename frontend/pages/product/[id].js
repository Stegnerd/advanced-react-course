// notice the square bracket file name. that is specific to next js
// use this template that matches the template /product/id

import SingleProduct from '../../components/SingleProduct';

// id comes into the component because it matches the file name of the template
export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
