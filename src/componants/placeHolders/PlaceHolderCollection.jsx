import ProductCardPlaceHolder from './ProductCardPlaceHolder';

function PlaceHolderCollection() {
  return (
    <div className='w-full gap-6 grid max-[500px]:grid-cols-1  min-[500px]:grid-cols-2  md:grid-cols-3 xl:grid-cols-4'>
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
    </div>
  );
}

export default PlaceHolderCollection;
