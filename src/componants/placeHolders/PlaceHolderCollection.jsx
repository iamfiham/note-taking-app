import ProductCardPlaceHolder from "./ProductCardPlaceHolder";

function PlaceHolderCollection() {
  return (
    <div className="grid w-full gap-8 max-[500px]:grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3">
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
    </div>
  );
}

export default PlaceHolderCollection;
