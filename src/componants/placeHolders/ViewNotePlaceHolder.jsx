function ViewNotePlaceHolder() {
  return (
    <div className="mx-auto flex max-w-[740px] flex-col gap-2 rounded-md">
      <p className="animation-delay-50 h-4 w-2/5 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></p>
      <p className="mb-8 h-4 w-1/2 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-150"></p>
      <h4 className="h-10 w-full animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></h4>
      <h4 className="mb-8 h-10 w-9/12 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200"></h4>
      <p className="h-5 w-10/12 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-200"></p>
      <p className="h-5 w-11/12 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
      <p className="h-5 w-9/12 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
      <p className="mb-4 h-5 w-6/12 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
      <p className="h-5 w-11/12 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
      <p className="h-5 w-full animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
      <p className="h-5 w-2/6 animate-skeleton rounded bg-neutral-100 bg-skeletonGradiant bg-200 animation-delay-300"></p>
    </div>
  );
}

export default ViewNotePlaceHolder;
