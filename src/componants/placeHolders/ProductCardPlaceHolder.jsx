import './ProductCardPlaceHolder.scss';

function ProductCardPlaceHolder() {
  return (
    <div className='card-placeholder'>
      <div className='imgph skeletonAnimation'></div>
      <div className='textph1 skeletonAnimation'></div>
      <div className='textph2 skeletonAnimation '></div>
      <div className='textph3 skeletonAnimation '></div>
      <div className='divph'>
        <div className='leftph'>
          <div className='skeletonAnimation'></div>
          <div className='skeletonAnimation'></div>
        </div>
        <div className='rightph skeletonAnimation'></div>
      </div>
    </div>
  );
}

export default ProductCardPlaceHolder;
