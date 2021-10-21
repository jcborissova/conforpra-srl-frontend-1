import PaginatedView from '../components/PaginatedView';
import ProductSection from '../components/ProductSection';
import { useEffect, useState } from 'react';
import client from '../providers/api';

const ListSearchProducts = () => {
  const [filterObj, setFilterObj] = useState([]);
  const [update, setUpdate] = useState(false);

  function updateProducts() {
    setUpdate(true);
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await client.get(`/api/products`);
        products(response.data.products);
        setUpdate(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [update]);

  function products(allProducts) {
    setFilterObj(
      allProducts.filter(function (e) {
        return e.status === 'visible';
      }),
    );
  }

  return (
    <div>
      <div className="py-5">
        {filterObj.length ? (
          <PaginatedView
            items={filterObj}
            renderItem={(product) => (
              <ProductSection
                render={updateProducts}
                product={product}
                controls
                archived
              />
            )}
          />
        ) : (
          <div className="flex items-center justify-center">
            <h2>No hay productos activos</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListSearchProducts;
