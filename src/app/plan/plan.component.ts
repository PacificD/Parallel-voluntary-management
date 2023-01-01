/*
 * @Author: Pacific_D
 * @Date: 2022-12-19 15:40:22
 * @LastEditTime: 2022-12-24 16:48:20
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\plan\plan.component.ts
 */
import { HttpClient } from "@angular/common/http"
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core"
import { FileUploader, IFileOptions, IUploadOptions } from "ng-devui/upload"
import { DataTableComponent } from "ng-devui"
import { Result } from "../common/types"
import dataTableOptions from "./dataTable.option"

interface IRecruitmentPlan {
  academyName: string
  address: string
  comment: string | null
  foreignLanguage: string
  id: number
  physicalExaminationFirst: number | null
  physicalExaminationSecond: number | null
  recruitmentNumber: number
  specialtyGroup: number
  specialtyName: string
  specialtyNumber: number
}

@Component({
  selector: "app-plan",
  templateUrl: "./plan.component.html",
  styleUrls: ["./plan.component.css"]
})
export class PlanComponent implements AfterViewInit {
  constructor(private readonly http: HttpClient, private cdr: ChangeDetectorRef) {
    this.UPLOADED = "上传成功"
    this.CANCELUPLOAD = "取消上传"
  }

  @ViewChild("tableInstance") tableInstance?: DataTableComponent
  showLoading = false
  total = 40
  pages = 1
  pageSize = 20
  nextPage = 1
  complete = false

  tableWidthConfig = [
    {
      field: "#",
      width: "64px"
    }
  ]
  dataTableOptions = dataTableOptions
  recruitmentPlans: Array<IRecruitmentPlan> = []

  loadMore(event: any) {
    if (this.nextPage > this.pages) {
      return
    }
    this.showLoading = true
    this.http
      .post<Result>("recruitment/getAllRecruitmentPlans", {
        pageNumber: this.nextPage,
        pageSize: this.pageSize
      })
      .subscribe(res => {
        this.recruitmentPlans.push(...res.data.list)
        this.showLoading = false
        this.cdr.detectChanges()
        ++this.nextPage
      })

    this.complete = this.nextPage > this.pages
    console.log(`load more`, this.nextPage, this.complete)
  }

  ngAfterViewInit() {
    this.http
      .post<Result>("recruitment/getAllRecruitmentPlans", {
        pageNumber: this.nextPage,
        pageSize: this.pageSize
      })
      .subscribe(res => {
        console.log(res.data)
        this.total = res.data.total
        this.recruitmentPlans = res.data.list
        this.pages = res.data.pages
        ++this.nextPage
      })
  }

  message: Array<Record<string, unknown>> = []
  uploadedFiles: Array<Record<string, unknown>> = []
  fileUploaders: Array<FileUploader> = []
  isDropOver = false
  uploadOptions: IUploadOptions = {
    uri: "/upload",
    maximumSize: 50,
    checkSameName: true
  }
  fileOptions: IFileOptions = {
    multiple: true
  }
  UPLOADED: string
  CANCELUPLOAD: string
  ALLOW_FILE_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

  dynamicUploadOptionsFn(file: any, options: any) {
    const uploadOptions = options
    // if (file.type !== this.ALLOW_FILE_TYPE) {
    //   throw "只允许上传xlsx文件"
    // }
    return uploadOptions
  }
  onSuccess(event: any) {
    console.log(event)
  }
  onError(event: any) {
    console.log(event)
  }
  fileDrop(files: any) {
    this.isDropOver = false
    console.log(files)
  }
  fileOver(event: any) {
    this.isDropOver = event
    console.log(event)
  }
  fileSelect(files: any) {
    console.log(files)
  }
  alertMsg(event: any) {
    this.message = event
  }
  deleteFile(currFile: any) {
    this.fileUploaders = this.fileUploaders.filter(fileUploader => {
      return currFile !== fileUploader
    })
  }
}
