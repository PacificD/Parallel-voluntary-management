/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 16:29:46
 * @LastEditTime: 2022-11-29 21:39:59
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\http\request.interceptor.ts
 */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../secrets"

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customReq = req.clone({
      headers: req.headers.set("Content-Type", "application/json"),
      url: BASE_URL + `/${req.url}`,
      body: JSON.stringify(req.body)
    })
    return next.handle(customReq)
  }
}
