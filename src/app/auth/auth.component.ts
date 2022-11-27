/*
 * @Author: Pacific_D
 * @Date: 2022-11-25 15:46:09
 * @LastEditTime: 2022-11-27 22:23:22
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\auth\auth.component.ts
 */
import { Component, OnInit } from "@angular/core"
import { DValidateRules, FormLayout } from "ng-devui/form"
import { of } from "rxjs"
import { delay, map } from "rxjs/operators"
import { AnimationOptions } from "ngx-lottie"
import fadeIn from "../common/animations/fadeIn"
import { fadeInLeft, fadeInRight } from "./auth.animation"

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
  animations: [fadeInLeft, fadeInRight, fadeIn()]
})
export class AuthComponent {
  options: AnimationOptions = {
    path: "/assets/course.json"
  }

  layoutDirection: FormLayout = FormLayout.Vertical
  msgs: Array<any> = []

  existUsernames = ["123", "123456", "DevUI"]

  formData = {
    userName: "",
    password: "",
    confirmPassword: ""
  }

  formRules: { [key: string]: DValidateRules } = {
    rule: { message: "The form verification failed, please check.", messageShowType: "text" },
    usernameRules: {
      validators: [
        { required: true },
        { minlength: 3 },
        { maxlength: 128 },
        {
          pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
          message: "The user name cannot contain characters except uppercase and lowercase letters."
        }
      ],
      asyncValidators: [{ sameName: this.checkName.bind(this), message: "Duplicate name." }]
    },
    passwordRules: {
      validators: [
        { required: true },
        { minlength: 6 },
        { maxlength: 15 },
        { pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/ }
      ],
      message: "Enter a password that contains 6 to 15 digits and letters."
    },
    confirmPasswordRules: [
      { required: true },
      {
        sameToPassWord: this.sameToPassWord.bind(this),
        message: "Ensure that the two passwords are the same."
      },
      { minlength: 6 },
      { maxlength: 15 },
      {
        pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
        message: "The password must contain only letters and digits."
      }
    ]
  }

  maxUsers(num: any) {
    return (val: any) => {
      return !val || val.length <= num
    }
  }
  submitForm({ valid, directive }: any) {
    // do something for submitting
    if (valid) {
      console.log(this.formData)
      of(this.formData)
        .pipe(
          map(val => "success"),
          delay(500)
        )
        .subscribe(res => {
          if (res === "success") {
            this.showToast("success", "Success", "Registration succeeded.")
          }
        })
    } else {
      this.showToast("error", "Error", "Check whether all validation items pass.")
    }
  }

  checkName(value: any) {
    let res = true
    if (this.existUsernames.indexOf(value) !== -1) {
      res = false
    }
    return of(res).pipe(delay(500))
  }

  sameToPassWord(value: any) {
    return value === this.formData.password
  }

  showToast(type: any, title: string, msg: string) {
    this.msgs = [{ severity: type, summary: title, detail: msg }]
  }
}
