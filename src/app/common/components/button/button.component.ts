/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 18:09:26
 * @LastEditTime: 2022-11-28 16:45:01
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\components\button\button.component.ts
 */
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent {
  @Input() content = "Button"
}
