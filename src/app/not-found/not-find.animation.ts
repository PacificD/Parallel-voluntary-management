import { transition, style, animate, trigger } from "@angular/animations"

const triggerFun = (scale: string, time: string, name: string) => {
  const tran = transition(":enter", [
    style({
      transform: "scale(" + scale + ")"
    }),
    animate(
      time,
      style({
        transform: "translateX(-1800px) scale(" + scale + ")"
      })
    )
  ])
  return trigger(name, [tran])
}
const aniOne = triggerFun("0.3", "16s 300ms", "aniOne")
const aniTwo = triggerFun("0.4", "17s 3500ms", "aniTwo")
const aniThree = triggerFun("0.6", "18s 5000ms", "aniThree")
const aniFour = triggerFun("0.6", "15s 6000ms", "aniFour")
const aniFive = triggerFun("0.75", "14s 1500ms", "aniFive")
const aniSix = triggerFun("0.5", "13s 5500ms", "aniSix")

export { aniOne, aniTwo, aniThree, aniFour, aniFive, aniSix }
