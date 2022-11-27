/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 18:13:49
 * @LastEditTime: 2022-11-27 18:15:46
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\components\input-field\input-field.component.ts
 */
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.css"]
})
export class InputFieldComponent {
  @Input() placeholder = ""
}
