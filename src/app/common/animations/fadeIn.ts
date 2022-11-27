/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 17:10:38
 * @LastEditTime: 2022-11-27 17:30:23
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\animations\fadeIn.ts
 */
import { animate, style, transition, trigger } from "@angular/animations"

type AnimationStyleOptions = Partial<
  {
    opacity: number
  } & Record<"transform" | "width" | "height" | "backgroundColor", string>
>

const fadeIn = (from?: AnimationStyleOptions, to?: AnimationStyleOptions, timing?: string) =>
  trigger("fadeIn", [
    transition(":enter", [
      style(
        from ?? {
          opacity: 0
        }
      ),
      animate(
        timing ?? "1.2s ease-out",
        style(
          to ?? {
            opacity: 1
          }
        )
      )
    ])
  ])

export default fadeIn
