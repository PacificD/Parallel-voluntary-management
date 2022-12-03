/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 15:46:09
 * @LastEditTime: 2022-12-03 12:15:40
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\auth\auth.component.ts
 */
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core"
import { DValidateRules, FormLayout } from "ng-devui/form"
import { AnimationOptions } from "ngx-lottie"
import fadeIn from "../common/animations/fadeIn"
import { fadeInBottom, fadeInLeft, fadeInRight } from "./auth.animation"
import { LoadingService, Message } from "ng-devui"
import { CaptchaOptions, generateCaptcha, getAllLetter } from "../common/utils"
import { HttpClient } from "@angular/common/http"
import { Result } from "../common/types"
import { AppService } from "../app.service"
import { Router } from "@angular/router"

type SubmitFormParams = {
  valid: boolean
  directive: unknown
}
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
  animations: [fadeInLeft, fadeInRight, fadeInBottom, fadeIn()]
})
export class AuthComponent implements AfterViewInit {
  constructor(
    private readonly http: HttpClient,
    private readonly appService: AppService,
    private readonly router: Router,
    private readonly loadingService: LoadingService
  ) {}

  animationOptions: AnimationOptions = {
    path: "/assets/course.json"
  }
  getAllLetter = getAllLetter

  // captcha
  ctx?: CanvasRenderingContext2D
  codeLength = 4 // 验证码长度

  @ViewChild("verifyCanvas") verifyCanvas?: ElementRef

  options: CaptchaOptions = {
    // 默认options参数值
    id: "v_container", // 容器Id
    canvasId: "verifyCanvas", // canvas的ID
    width: 100, // 默认canvas宽度
    height: 40, // 默认canvas高度
    type: "blend", // 图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
    code: "",
    numArr: [],
    letterArr: []
  }

  ngAfterViewInit() {
    this.ctx = this.verifyCanvas?.nativeElement.getContext("2d")
    this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",")
    this.options.letterArr = this.getAllLetter()
    this.refresh()
  }

  /**
   * @description: genearte new captcha
   * @param {MouseEvent} e?
   * @return {null}
   */
  refresh(e?: MouseEvent) {
    if (e) e.stopPropagation()
    this.options.code = ""
    generateCaptcha(this.options, this.ctx!, this.codeLength)
  }

  /**
   * @description: validate captcha
   * @param {string} code
   * @return {boolean}
   */
  validate(code: string) {
    const code1 = code.toLowerCase()
    const v_code = this.options.code.toLowerCase()
    if (code1 === v_code) return true
    else {
      this.refresh()
      return false
    }
  }

  // form
  formData = {
    userName: "",
    password: "",
    code: ""
  }
  layoutDirection: FormLayout = FormLayout.Vertical
  msgs: Array<Message> = []
  showToast(type: Message["severity"], title: string, msg: string) {
    this.msgs = [{ severity: type, summary: title, detail: msg }]
  }

  formRules: { [key: string]: DValidateRules } = {
    rule: { message: "The form verification failed, please check.", messageShowType: "text" },
    usernameRules: {
      validators: [
        { required: true },
        { minlength: 3 },
        { maxlength: 16 },
        {
          pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
          message: "The username cannot contain characters except uppercase and lowercase letters."
        }
      ]
    },
    passwordRules: {
      validators: [
        { required: true },
        { minlength: 6 },
        { maxlength: 16 },
        { pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/ }
      ],
      message: "Enter a password that contains 6 to 16 digits and letters."
    }
  }

  /**
   * @description: Login
   * @param {SubmitFormParams} defaultParams
   * @return {null}
   */
  submitForm({ valid }: SubmitFormParams) {
    if (!this.formData.userName || !this.formData.password) return
    if (!this.validate(this.formData.code)) {
      this.showToast("error", "Fail", "验证码错误！")
      this.formData.code = ""
      return
    }
    // submitting
    if (valid) {
      const loading = this.loadingService.open()
      const loginParams = {
        username: this.formData.userName,
        password: this.formData.password
      }
      this.http.post<Result>("user/login", loginParams).subscribe(res => {
        loading.loadingInstance.close()
        switch (res["code"]) {
          case 52002:
            this.showToast("error", "Error", "用户名或密码错误！")
            break
          case 200:
            this.showToast("success", "Success", "登陆成功！")
            this.appService.login()
            this.router.navigate(["/system/examinee"])
            break
          default:
            this.showToast("error", "Error", "Internal server error!")
            break
        }
      })
    } else this.showToast("error", "Error", "Check whether all validation items pass.")
  }
}
