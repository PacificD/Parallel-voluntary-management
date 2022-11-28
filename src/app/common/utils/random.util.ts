/*
 * @Author: Pacific_D
 * @Date: 2022-11-28 22:23:41
 * @LastEditTime: 2022-11-28 22:25:56
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\utils\random.util.ts
 */
// 生成一个随机数
const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// 生成一个随机色
const randomColor = (min: number, max: number) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return "rgb(" + r + "," + g + "," + b + ")"
}

export { randomColor, randomNum }
