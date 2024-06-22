import { cn } from '~/lib/utils'
import { Slider } from '~/registry/miami/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderRange({ className, ...props }: SliderProps) {
   return (
      <Slider
         defaultValue={[25, 75]}
         max={100}
         step={1}
         className={cn('w-[60%]', className)}
         {...props}
      />
   )
}
