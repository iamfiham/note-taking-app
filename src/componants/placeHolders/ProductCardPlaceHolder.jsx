function ProductCardPlaceHolder() {
  return (
    <div className='border border-solid p-6 bg-white h-[300px]  border-neutral-100 flex flex-col gap-[6px] rounded-md '>
      <h4 className='bg-skeletonGradiant bg-neutral-100 h-5 rounded bg-200 animate-skeleton'></h4>
      <h4 className='bg-neutral-100 bg-skeletonGradiant h-5 mb-6 w-5/6 rounded bg-200 animate-skeleton'></h4>
      <p className='animate-skeleton bg-neutral-100 bg-skeletonGradiant h-3 w-4/5  rounded  bg-200'></p>
      <p className='animate-skeleton bg-neutral-100 bg-skeletonGradiant h-3 w-full rounded  bg-200'></p>
      <p className='animate-skeleton bg-neutral-100 bg-skeletonGradiant h-3 w-3/4 rounded  bg-200'></p>
      <p className='animate-skeleton bg-neutral-100 bg-skeletonGradiant h-3 w-2/3 rounded  bg-200'></p>
      <p className='animate-skeleton bg-neutral-100 bg-skeletonGradiant h-3 w-4/5 rounded bg-200'></p>
      <p className='animate-skeleton bg-neutral-100 bg-skeletonGradiant h-3 w-3/4 rounded bg-200'></p>
      <div className='flex gap-3  border-solid bg-200 border-neutral-100 pt-2 border-0 border-t items-center  mt-auto'>
        <p className='animate-skeleton bg-200 bg-neutral-100 bg-skeletonGradiant h-3 flex-1 mr-2  rounded '></p>
        <span className='w-5 aspect-square animate-skeleton bg-neutral-100 bg-skeletonGradiant bg-200 rounded'></span>
        <span className='w-5 aspect-square bg-200 animate-skeleton bg-neutral-100 bg-skeletonGradiant rounded'></span>
      </div>
    </div>
  );
}

export default ProductCardPlaceHolder;
