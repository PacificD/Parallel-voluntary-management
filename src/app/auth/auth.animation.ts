/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 17:30:51
 * @LastEditTime: 2022-11-28 22:58:32
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\auth\auth.animation.ts
 */
import { transition, style, animate, trigger } from "@angular/animations"

const enterLeftTransition = transition(":enter", [
    style({
      opacity: 0,
      transform: "translateX(-10%)"
    }),
    animate(
      "1s ease-in",
      style({
        opacity: 1,
        transform: "translateX(0)"
      })
    )
  ]),
  enterRightTransition = transition(":enter", [
    style({
      opacity: 0,
      transform: "translateX(10%)"
    }),
    animate(
      "1.2s ease-in",
      style({
        opacity: 1,
        transform: "translateX(0)"
      })
    )
  ]),
  enterBottomTransition = transition(":enter", [
    style({
      opacity: 0,
      transform: "translateY(20%)"
    }),
    animate(
      "1s ease-in",
      style({
        opacity: 1,
        transform: "translateY(0)"
      })
    )
  ])

const fadeInLeft = trigger("fadeInLeft", [enterLeftTransition]),
  fadeInRight = trigger("fadeInRight", [enterRightTransition]),
  fadeInBottom = trigger("fadeInBottom", [enterBottomTransition])

export { fadeInLeft, fadeInRight, fadeInBottom }
