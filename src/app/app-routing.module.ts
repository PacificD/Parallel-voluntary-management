/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 11:14:06
 * @LastEditTime: 2022-11-26 16:01:19
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\app-routing.module.ts
 */
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { AuthComponent } from "./auth/auth.component"
import { NotFoundComponent } from "./not-found/not-found.component"

const routes: Routes = [
  { path: "", title: "app", component: AppComponent },
  { path: "auth", title: "Sign in page", component: AuthComponent },
  { path: "**", title: "Page not found", component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
