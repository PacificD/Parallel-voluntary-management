/*
 * @Author: Pacific_D
 * @Date: 2022-12-22 08:31:06
 * @LastEditTime: 2022-12-22 09:09:29
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\plan\dataTable.option.ts
 */
const dataTableOptions = {
  columns: [
    {
      field: "specialtyName",
      header: "专业名称",
      fieldType: "text",
      sortable: true
    },
    {
      field: "specialtyGroup",
      header: "专业组",
      fieldType: "text",
      sortable: true
    },
    {
      field: "specialtyNumber",
      header: "专业代码",
      fieldType: "text",
      sortable: true
    },
    {
      field: "recruitmentNumber",
      header: "招生数",
      fieldType: "text",
      sortable: true
    },
    {
      field: "academyName",
      header: "学院",
      fieldType: "text",
      sortable: true
    },
    {
      field: "address",
      header: "校区",
      fieldType: "text",
      sortable: true
    },
    {
      field: "physicalExaminationFirst",
      header: "physicalExaminationFirst",
      fieldType: "text",
      sortable: true
    },
    {
      field: "physicalExaminationFirst",
      header: "physicalExaminationSecond",
      fieldType: "text",
      sortable: true
    },
    {
      field: "comment",
      header: "描述",
      fieldType: "text",
      sortable: true
    }
  ]
}

export default dataTableOptions
