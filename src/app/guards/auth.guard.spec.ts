/*
 * @Author: Pacific_D
 * @Date: 2022-11-29 20:55:51
 * @LastEditTime: 2022-11-29 21:57:26
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\guards\auth.guard.spec.ts
 */
import { TestBed } from "@angular/core/testing"

import { AuthGuard } from "./auth.guard"

describe("AuthGuard", () => {
  let guard: AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(AuthGuard)
  })

  it("should be created", () => {
    expect(guard).toBeTruthy()
  })
})
