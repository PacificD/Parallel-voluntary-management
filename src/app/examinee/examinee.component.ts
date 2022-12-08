import { Component } from "@angular/core"
import { DialogService } from "ng-devui/modal"
import { HttpClient } from "@angular/common/http"
import { Result } from "../common/types"

import { originSource, SourceType } from "./mock-data"
@Component({
  selector: "app-examinee",
  templateUrl: "./examinee.component.html",
  styleUrls: ["./examinee.component.css"]
})
export class ExamineeComponent {
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 10)))
  dataTableOptions = {
    columns: [
      {
        field: "firstName",
        header: "姓名",
        fieldType: "text",
        fixedLeft: "0px"
      },
      {
        field: "lastName",
        header: "考生号",
        fieldType: "text"
      },
      {
        field: "gender",
        header: "专业绩号",
        fieldType: "text"
      },
      {
        field: "gender",
        header: "投档成绩",
        fieldType: "text"
      },
      {
        field: "gender",
        header: "是否服从调剂",
        fieldType: "text"
      },
      {
        field: "gender",
        header: "专业志愿1",
        fieldType: "text"
      },
      {
        field: "dob",
        header: "专业志愿2",
        fieldType: "date"
      },
      {
        field: "dob",
        header: "专业志愿3",
        fieldType: "date"
      },
      {
        field: "dob",
        header: "专业志愿4",
        fieldType: "date"
      },
      {
        field: "dob",
        header: "专业志愿5",
        fieldType: "date"
      },
      {
        field: "dob",
        header: "专业志愿6",
        fieldType: "date"
      }
    ]
  }
  constructor(private dialogService: DialogService, private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.post<Result>("student/getAllStudent", {
      pageNumber:1,
      pageSize:3
    }).subscribe(res=>{
      console.log(res.data.list[0])
    })
  }
}
