"use client"

import { useTheme } from "next-themes"
import * as React from "react"

import { useChartConfig } from "~/hooks/use-chart-config"
import type { getChartThemes } from "~/lib/chart-themes"
import { ny } from "~/lib/utils"
import { Skeleton } from "~/registry/miami/ui/skeleton"
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "~/registry/miami/ui/tooltip"

type Themes = ReturnType<typeof getChartThemes>

export function ChartsThemeSwitcher({
   themes,
   className,
}: { themes: Themes } & React.ComponentProps<"div">) {
   const { theme } = useTheme()
   const [mounted, setMounted] = React.useState(false)
   const { chartConfig, setChartConfig } = useChartConfig()
   const activeChartTheme = chartConfig?.theme || themes[0]

   React.useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) {
      return (
         <div
            className={ny(
               "flex items-center justify-center gap-0.5 py-4 lg:flex-col lg:justify-start lg:gap-1",
               className,
            )}
         >
            {themes.map((theme) => (
               <div
                  key={theme.id}
                  className="flex size-10 items-center justify-center rounded-lg border-2 border-transparent"
               >
                  <Skeleton className="size-6 rounded-sm" />
               </div>
            ))}
         </div>
      )
   }

   return (
      <>
         <div
            className={ny(
               "flex items-center justify-center gap-0.5 py-4 lg:flex-col lg:justify-start lg:gap-1",
               className,
            )}
         >
            {themes.map((chartTheme) => {
               const isActive = chartTheme.name === activeChartTheme.name
               const isDarkTheme = ["Midnight"].includes(chartTheme.name)
               const cssVars =
                  mounted && theme === "dark"
                     ? chartTheme.cssVars.dark
                     : chartTheme.cssVars.light
               return (
                  <Tooltip key={chartTheme.name}>
                     <TooltipTrigger asChild>
                        <button
                           onClick={() =>
                              setChartConfig({
                                 ...chartConfig,
                                 theme: chartTheme,
                              })
                           }
                           className={ny(
                              "group flex size-10 items-center justify-center rounded-lg border-2",
                              isActive
                                 ? "border-[--color-1]"
                                 : "border-transparent",
                              mounted && isDarkTheme && theme !== "dark"
                                 ? "invert-[1]"
                                 : "",
                           )}
                           style={
                              {
                                 ...cssVars,
                                 "--color-1": "hsl(var(--chart-1))",
                                 "--color-2": "hsl(var(--chart-2))",
                                 "--color-3": "hsl(var(--chart-3))",
                                 "--color-4": "hsl(var(--chart-4))",
                              } as React.CSSProperties
                           }
                        >
                           <div className="size-6 overflow-hidden rounded-sm">
                              <div
                                 className={ny(
                                    "grid size-12 -translate-x-1/4 -translate-y-1/4 grid-cols-2 overflow-hidden rounded-md transition-all ease-in-out group-hover:rotate-45",
                                    isActive
                                       ? "rotate-45 group-hover:rotate-0"
                                       : "rotate-0",
                                 )}
                              >
                                 <span className="flex size-6 bg-[--color-1]" />
                                 <span className="flex size-6 bg-[--color-2]" />
                                 <span className="flex size-6 bg-[--color-3]" />
                                 <span className="flex size-6 bg-[--color-4]" />
                                 <span className="sr-only">
                                    {chartTheme.name}
                                 </span>
                              </div>
                           </div>
                        </button>
                     </TooltipTrigger>
                     <TooltipContent
                        side="left"
                        className="bg-black text-white"
                     >
                        {chartTheme.name}
                     </TooltipContent>
                  </Tooltip>
               )
            })}
         </div>
         <style>
            {`
          .chart-wrapper,
          [data-chart] {
            ${Object.entries(activeChartTheme.cssVars.light)
               .map(([key, value]) => `${key}: ${value};`)
               .join("\n")}
          }

          .dark .chart-wrapper,
          .dark [data-chart] {
            ${Object.entries(activeChartTheme.cssVars.dark)
               .map(([key, value]) => `${key}: ${value};`)
               .join("\n")}
          }
        `}
         </style>
      </>
   )
}
