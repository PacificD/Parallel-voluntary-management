/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 22:10:32
 * @LastEditTime: 2022-12-19 15:40:05
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\system\system.component.ts
 */
import { Component } from "@angular/core"
import { Router } from "@angular/router"

type MenuItem = Record<"name" | "path" | "icon", string>

const menu = new Map<number, MenuItem>([
  [
    0,
    {
      name: "考生数据",
      path: "examinee",
      icon: "icon-base-info"
    }
  ],
  [
    1,
    {
      name: "招生计划",
      path: "plan",
      icon: "icon-classroom-approve"
    }
  ],
  [
    2,
    {
      name: "模拟录取",
      path: "simulation",
      icon: "icon-merge-request2"
    }
  ],
  [
    3,
    {
      name: "数据分析",
      path: "analysis",
      icon: "icon-line-chart"
    }
  ]
])

@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.css"]
})
export class SystemComponent {
  constructor(private readonly router: Router) {}

  activatedItem = 0
  menu = menu
  menuItems = Array.from(this.menu.values()).map(item => item.name)

  setActivate(idx: number) {
    this.activatedItem = idx
    const target = "/system/" + this.menu.get(idx)?.path
    this.router.navigate([target])
  }
}
