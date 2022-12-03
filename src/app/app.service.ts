/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 21:49:15
 * @LastEditTime: 2022-12-03 10:46:15
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\app.service.ts
 */

import { Injectable } from "@angular/core"
import { encrypt } from "./common/utils"

@Injectable({
  providedIn: "root"
})
export class AppService {
  public isLogin = false

  public login() {
    const cacheString = encrypt(JSON.stringify(true))
    localStorage.setItem("mono", cacheString)
    this.isLogin = true
  }

  public logout() {
    localStorage.removeItem("mono")
    this.isLogin = false
  }
}
