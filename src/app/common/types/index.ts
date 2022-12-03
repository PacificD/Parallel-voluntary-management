/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 21:26:35
 * @LastEditTime: 2022-11-29 21:30:28
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\types\index.ts
 */
export type Result = Partial<{
  code: number
  msg: string
  data: any
  error: string
  path: string
  status: number
}>
