import ShimmerButton from "~/registry/default/ui/shimmer-button"

export default function ShimmerButtonDemo() {
   return (
      <div className="z-10 flex min-h-64 items-center justify-center">
         <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
               Shimmer Button
            </span>
         </ShimmerButton>
      </div>
   )
}
