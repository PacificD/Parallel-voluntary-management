/*
 * @Author: Pacific_D
 * @Date: 2022-12-03 11:02:55
 * @LastEditTime: 2022-12-03 11:25:36
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\utils\generate-captcha.util.ts
 */
import { randomColor, randomNum } from "./random.util"

type CaptchaOptions = Record<"id" | "canvasId" | "type" | "code", string> & {
  width: number
  height: number
  numArr: string[]
  letterArr: string[]
}

/**
 * @description: generate Catpcha
 * @return {*}
 */
const generateCaptcha = (
  options: CaptchaOptions,
  ctx: CanvasRenderingContext2D,
  codeLength: number
) => {
  ctx.textBaseline = "middle"

  ctx.fillStyle = randomColor(180, 240)
  ctx.fillRect(0, 0, options.width, options.height)

  let txtArr = []
  if (options.type === "blend") {
    // 判断验证码类型
    txtArr = options.numArr.concat(options.letterArr)
  } else if (options.type === "number") {
    txtArr = options.numArr
  } else {
    txtArr = options.letterArr
  }

  for (let i = 1; i <= codeLength; i++) {
    const txt = txtArr[randomNum(0, txtArr.length)]
    options.code += txt
    ctx.font = randomNum(options.height / 2, options.height) + "px SimHei" // 随机生成字体大小
    ctx.fillStyle = randomColor(50, 160) // 随机生成字体颜色
    ctx.shadowOffsetX = randomNum(-3, 3)
    ctx.shadowOffsetY = randomNum(-3, 3)
    ctx.shadowBlur = randomNum(-3, 3)
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
    const x = (options.width / (codeLength + 1)) * i
    const y = options.height / 2
    const deg = randomNum(-30, 30)
    // 设置旋转角度和坐标原点
    ctx.translate(x, y)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(txt, 0, 0)
    // 恢复旋转角度和坐标原点
    ctx.rotate((-deg * Math.PI) / 180)
    ctx.translate(-x, -y)
  }
  // 绘制干扰线
  for (let i = 0; i < 2; i++) {
    ctx.strokeStyle = randomColor(40, 180)
    ctx.beginPath()
    ctx.moveTo(randomNum(0, options.width), randomNum(0, options.height))
    ctx.lineTo(randomNum(0, options.width), randomNum(0, options.height))
    ctx.stroke()
  }
  // 绘制干扰点
  for (let i = 0; i < options.width / 2; i++) {
    ctx.fillStyle = randomColor(0, 255)
    ctx.beginPath()
    ctx.arc(randomNum(0, options.width), randomNum(0, options.height), 1, 0, 2 * Math.PI)
    ctx.fill()
  }
}

export { generateCaptcha, CaptchaOptions }
