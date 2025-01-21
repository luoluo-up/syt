export interface ResponseData {
  code: number;
  message: string;
}

// 代表已有的医院数据的ts类型
export interface Hospital {
  _id: string;
  name: string;
  address: string;
  phone: string;
  level: string;
  introduce: string;
  img: string;
  hostype: string;
  districtCode: string;
  district: string;
  hoscode: string;
}

// 获取已有医院接口返回的数据类型
export interface Result {
  pageNo: string;
  pageSize: string;
  total: number;
  list: Hospital[];
}

export interface HospitalResponseData extends ResponseData {
  result: Result;
}

//代表医院等级或者地区数据ts类型
export interface HospitalLevelAndRegion {
  _id: string;
  name: string;
  value: string;
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];

//获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData {
  result: HospitalLevelAndRegionArr;
}
export interface HospitalSearchResponseData extends ResponseData {
  result: Hospital[];
}
