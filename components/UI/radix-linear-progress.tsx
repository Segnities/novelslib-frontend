'use client';

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

const RadixLinearProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className="relative h-[7px] w-full overflow-hidden rounded-[3px] bg-gray-200 dark:bg-gray-800"
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[#1a90ff] dark:bg-[#308fe8] transition-all rounded-[3px]"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
RadixLinearProgress.displayName = ProgressPrimitive.Root.displayName

export default RadixLinearProgress;