/*
 * @Author: Pacific_D
 * @Date: 2022-11-27 18:13:49
 * @LastEditTime: 2022-11-27 18:14:09
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\components\input-field\input-field.component.spec.ts
 */
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { InputFieldComponent } from "./input-field.component"

describe("InputFieldComponent", () => {
  let component: InputFieldComponent
  let fixture: ComponentFixture<InputFieldComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFieldComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InputFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
