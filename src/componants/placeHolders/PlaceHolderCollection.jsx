import ProductCardPlaceHolder from './ProductCardPlaceHolder';

function PlaceHolderCollection() {
  return (
    <div className='w-full gap-6 grid grid-cols-4'>
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
      <ProductCardPlaceHolder />
    </div>
  );
}

export default PlaceHolderCollection;
