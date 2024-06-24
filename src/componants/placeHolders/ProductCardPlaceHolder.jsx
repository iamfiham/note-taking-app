function ProductCardPlaceHolder() {
  return (
    <div className="flex h-[330px] flex-col gap-2 rounded-md border border-solid border-neutral-100 bg-white p-6 py-8 shadow-n1">
      <h4 className="mb-6 h-6 w-full animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></h4>
      <p className="animation-delay-50 h-4 w-4/5 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></p>
      <p className="h-4 w-full animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-150"></p>
      <p className="h-4 w-3/4 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-200"></p>
      <p className="h-4 w-5/6 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
      <div className="mt-auto flex items-center gap-3 border-0 border-t border-solid border-neutral-100 bg-200 pt-2">
        <p className="mr-auto h-4 w-2/4 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></p>
        <span className="aspect-square w-6 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></span>
        <span className="aspect-square w-6 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-200"></span>
      </div>
    </div>
  );
}

export default ProductCardPlaceHolder;
