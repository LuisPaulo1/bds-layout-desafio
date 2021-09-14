import ProductCard from 'components/ProductCard';
import Search from 'components/Search';

const Catalog = () => {
  return (
    <div className="container-catalog container my-4">
      <Search />
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Catalog;