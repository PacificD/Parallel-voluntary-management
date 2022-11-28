/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 15:46:09
 * @LastEditTime: 2022-11-28 22:34:34
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\auth\auth.component.ts
 */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { DValidateRules, FormLayout } from "ng-devui/form"
import { of } from "rxjs"
import { delay, map } from "rxjs/operators"
import { AnimationOptions } from "ngx-lottie"
import fadeIn from "../common/animations/fadeIn"
import { fadeInLeft, fadeInRight } from "./auth.animation"
import { Message } from "ng-devui"
import { getAllLetter, randomColor, randomNum } from "../common/utils"

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
  animations: [fadeInLeft, fadeInRight, fadeIn()]
})
export class AuthComponent implements AfterViewInit {
  animationOptions: AnimationOptions = {
    path: "/assets/course.json"
  }
  randomNum = randomNum
  randomColor = randomColor
  getAllLetter = getAllLetter

  // captcha
  ctx: any
  codeLength = 4 // 设置验证码长度
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @ViewChild("verifyCanvas") verifyCanvas: ElementRef

  options: Record<"id" | "canvasId" | "type" | "code", string> & {
    width: number
    height: number
    numArr: string[]
    letterArr: string[]
  } = {
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

  // 生成验证码
  refresh(e?: MouseEvent) {
    if (e) e.stopPropagation()
    this.options.code = ""
    this.ctx.textBaseline = "middle"

    this.ctx.fillStyle = this.randomColor(180, 240)
    this.ctx.fillRect(0, 0, this.options.width, this.options.height)

    let txtArr = []
    if (this.options.type === "blend") {
      // 判断验证码类型
      txtArr = this.options.numArr.concat(this.options.letterArr)
    } else if (this.options.type === "number") {
      txtArr = this.options.numArr
    } else {
      txtArr = this.options.letterArr
    }

    for (let i = 1; i <= this.codeLength; i++) {
      const txt = txtArr[this.randomNum(0, txtArr.length)]
      this.options.code += txt
      this.ctx.font = this.randomNum(this.options.height / 2, this.options.height) + "px SimHei" // 随机生成字体大小
      this.ctx.fillStyle = this.randomColor(50, 160) // 随机生成字体颜色
      this.ctx.shadowOffsetX = this.randomNum(-3, 3)
      this.ctx.shadowOffsetY = this.randomNum(-3, 3)
      this.ctx.shadowBlur = this.randomNum(-3, 3)
      this.ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
      const x = (this.options.width / (this.codeLength + 1)) * i
      const y = this.options.height / 2
      const deg = this.randomNum(-30, 30)
      // 设置旋转角度和坐标原点
      this.ctx.translate(x, y)
      this.ctx.rotate((deg * Math.PI) / 180)
      this.ctx.fillText(txt, 0, 0)
      // 恢复旋转角度和坐标原点
      this.ctx.rotate((-deg * Math.PI) / 180)
      this.ctx.translate(-x, -y)
    }
    // 绘制干扰线
    for (let i = 0; i < 2; i++) {
      this.ctx.strokeStyle = this.randomColor(40, 180)
      this.ctx.beginPath()
      this.ctx.moveTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height))
      this.ctx.lineTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height))
      this.ctx.stroke()
    }
    // 绘制干扰点
    for (let i = 0; i < this.options.width / 2; i++) {
      this.ctx.fillStyle = this.randomColor(0, 255)
      this.ctx.beginPath()
      this.ctx.arc(
        this.randomNum(0, this.options.width),
        this.randomNum(0, this.options.height),
        1,
        0,
        2 * Math.PI
      )
      this.ctx.fill()
    }
  }

  // 验证验证码
  validate(code: string) {
    const code1 = code.toLowerCase()
    const v_code = this.options.code.toLowerCase()
    if (code1 === v_code) {
      return true
    } else {
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

  submitForm({ valid, directive }: any) {
    // do something for submitting
    if (valid) {
      of(this.formData)
        .pipe(
          map(val => "success"),
          delay(500)
        )
        .subscribe(res => {
          if (res === "success") {
            this.showToast("success", "Success", "Login succeeded.")
          }
        })
    } else {
      this.showToast("error", "Error", "Check whether all validation items pass.")
    }
  }
}
