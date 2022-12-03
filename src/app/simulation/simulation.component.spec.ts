/*
 * @Author: Pacific_D
 * @Date: 2022-12-03 11:54:57
 * @LastEditTime: 2022-12-03 11:58:18
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\simulation\simulation.component.spec.ts
 */
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { SimulationComponent } from "./simulation.component"

describe("SimulationComponent", () => {
  let component: SimulationComponent
  let fixture: ComponentFixture<SimulationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulationComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
