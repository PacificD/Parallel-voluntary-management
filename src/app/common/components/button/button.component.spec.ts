/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 18:09:26
 * @LastEditTime: 2022-11-27 18:14:00
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\components\button\button.component.spec.ts
 */
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonComponent } from "./button.component"

describe("ButtonComponent", () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
