/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 11:14:06
 * @LastEditTime: 2022-12-03 14:37:53
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\app-routing.module.ts
 */
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AnalysisComponent } from "./analysis/analysis.component"
import { AuthComponent } from "./auth/auth.component"
import { ExamineeComponent } from "./examinee/examinee.component"
import { AuthGuard } from "./guards/auth.guard"
import { NotFoundComponent } from "./not-found/not-found.component"
import { SimulationComponent } from "./simulation/simulation.component"
import { SystemComponent } from "./system/system.component"

const routes: Routes = [
  {
    path: "",
    title: "app",
    redirectTo: "/system/examinee",
    pathMatch: "full"
  },
  {
    path: "system",
    title: "Parallel voluntary management system",
    canActivate: [AuthGuard],
    component: SystemComponent,
    children: [
      {
        path: "examinee",
        title: "考生数据 - 志愿管理系统",
        component: ExamineeComponent
      },
      {
        path: "simulation",
        title: "模拟录取 - 志愿管理系统",
        component: SimulationComponent
      },
      {
        path: "analysis",
        title: "数据分析 - 志愿管理系统",
        component: AnalysisComponent
      }
    ]
  },
  { path: "auth", title: "Sign in page", component: AuthComponent },
  { path: "**", title: "Page not found", component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
