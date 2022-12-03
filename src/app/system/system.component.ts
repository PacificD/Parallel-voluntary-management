/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 22:10:32
 * @LastEditTime: 2022-12-03 12:14:11
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\system\system.component.ts
 */
import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.css"]
})
export class SystemComponent {
  constructor(private readonly router: Router) {}

  activatedItem = 0
  menu = new Map([
    ["考生数据", "examinee"],
    ["模拟录取", "simulation"],
    ["数据分析", "analysis"]
  ])
  menuItems = Array.from(this.menu.keys())

  setActivate(idx: number) {
    this.activatedItem = idx
    const target = "/system/" + this.menu.get(this.menuItems[idx])
    this.router.navigate([target])
  }
}
