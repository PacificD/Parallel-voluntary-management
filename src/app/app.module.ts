/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 11:14:06
 * @LastEditTime: 2022-12-22 08:29:24
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\app.module.ts
 */
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { LottieModule } from "ngx-lottie"
import player from "lottie-web"
import { LottiePlayerFactoryOrLoader } from "ngx-lottie/lib/symbols"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AuthComponent } from "./auth/auth.component"
import { ComponentsModule } from "./common/components/components.module"
import { DevUIModule } from "ng-devui"
import { DataTableModule } from "ng-devui/data-table"
import { HttpClientModule } from "@angular/common/http"
import { httpInterceptorProviders } from "./http"
import { SystemComponent } from "./system/system.component"
import { ExamineeComponent } from "./examinee/examinee.component"
import { PlanComponent } from "./plan/plan.component"

export const playerFactory: LottiePlayerFactoryOrLoader = () => player
@NgModule({
  declarations: [AppComponent, AuthComponent, SystemComponent, ExamineeComponent, PlanComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevUIModule,
    FormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    ComponentsModule,
    DataTableModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
