/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 18:07:39
 * @LastEditTime: 2022-11-27 18:14:13
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\components\components.module.ts
 */
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ButtonComponent } from "./button/button.component"
import { InputFieldComponent } from "./input-field/input-field.component"

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ComponentsModule {}
