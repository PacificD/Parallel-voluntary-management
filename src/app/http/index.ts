/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 16:45:47
 * @LastEditTime: 2022-11-29 17:24:32
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\http\index.ts
 */
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { RequestInterceptor } from "./request.interceptor"

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
]
