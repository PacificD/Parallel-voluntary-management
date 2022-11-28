/*
 * @Author: Pacific_D
 * @Date: 2022-11-26 15:59:05
 * @LastEditTime: 2022-11-28 22:44:42
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\not-found\not-found.component.ts
 */
import { Component } from "@angular/core"
import fadeIn from "../common/animations/fadeIn"
import { aniOne, aniTwo, aniThree, aniFour, aniFive, aniSix } from "./not-find.animation"
@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
  animations: [fadeIn(), aniOne, aniTwo, aniThree, aniFour, aniFive, aniSix]
})
export class NotFoundComponent {}
