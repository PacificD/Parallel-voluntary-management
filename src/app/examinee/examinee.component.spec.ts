/*
 * @Author: Pacific_D
 * @Date: 2022-12-03 11:54:14
 * @LastEditTime: 2022-12-03 11:58:13
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\examinee\examinee.component.spec.ts
 */
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ExamineeComponent } from "./examinee.component"

describe("ExamineeComponent", () => {
  let component: ExamineeComponent
  let fixture: ComponentFixture<ExamineeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamineeComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ExamineeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
