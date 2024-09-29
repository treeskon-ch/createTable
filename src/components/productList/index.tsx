import SearchForm from "../utils/searchForm";
import ProductTable from "./productTable";

const ProductList = () => {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <SearchForm title="รายการสินค้า"/>
        <ProductTable />
      </div>
    </>
  );
};

export default ProductList;
