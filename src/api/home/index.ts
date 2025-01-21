// 首页模块接口
import request from "@/utils/request";
import type {
  HospitalResponseData,
  HospitalLevelAndRegionResponseData,
  HospitalSearchResponseData,
} from "./type";
// 通过枚举管理首页模块的接口地址

enum API {
  //   获取已有的医院数据接口地址
  HOSPITAL_URL = "/home/hoslist/",
  // 获取医院等级与地区接口
  HOSPITALLEVELANDREGION_URL = "/home/hoslevelandregion/",
  // 根据关键字搜索医院接口
  HOSPITALSEARCH_URL = "/home/hossearch/",
}

// 获取医院数据
export const reqHospital = (
  page: number,
  limit: number,
  hostype = "",
  districtCode = ""
) =>
  request.get<any, HospitalResponseData>(
    API.HOSPITAL_URL +
      `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}` // 拼接参数
  );
// 获取医院等级与地区
export const reqHospitalLevelAndRegion = (dictCode: string) =>
  request.get<any, HospitalLevelAndRegionResponseData>(
    API.HOSPITALLEVELANDREGION_URL + dictCode
  );
// 根据关键字搜索医院
export const reqHospitalSearch = (hosname: string) =>
  request.get<any, HospitalSearchResponseData>(
    API.HOSPITALSEARCH_URL + hosname
  );
