/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 20:55:51
 * @LastEditTime: 2022-12-03 15:50:31
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\guards\auth.guard.ts
 */
import { Injectable } from "@angular/core"
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router"
import { Observable } from "rxjs"
import { AppService } from "../app.service"
import { decrypt } from "../common/utils"

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private readonly appService: AppService, private readonly router: Router) {
    const cacheString = localStorage.getItem("mono"),
      isLogin = decrypt(cacheString ?? "null")
    if (cacheString && isLogin === "true") this.appService.isLogin = true
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cacheString = localStorage.getItem("mono"),
      decrptString = decrypt(cacheString ?? JSON.stringify(null)),
      isLogin = decrptString ?? false
    if (isLogin) {
      this.appService.isLogin = true
      return true
    }
    return this.router.parseUrl("/auth")
  }
}
