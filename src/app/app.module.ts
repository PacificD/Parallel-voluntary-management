/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 11:14:06
 * @LastEditTime: 2022-11-27 22:33:34
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

export const playerFactory: LottiePlayerFactoryOrLoader = () => player
@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevUIModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
