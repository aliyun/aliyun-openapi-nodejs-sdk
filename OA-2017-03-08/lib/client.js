
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-03-08';
    super(config);
  }

  addDictCreativeSizes(body, headers = {}, opts = {}) {
    const path = `/dict/creativesize`;
    return this.post(path, {}, body, headers, opts);
  }

  checkAdCreative(body, headers = {}, opts = {}) {
    const path = `/adcreative/dsp/check/`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdCreative(body, headers = {}, opts = {}) {
    const path = `/adcreative`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdCrowdAndOneId(body, headers = {}, opts = {}) {
    const path = `/adcrowd/dsp/crowd/`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdDefaultCreative(body, headers = {}, opts = {}) {
    const path = `/default_creative`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdGroup(body, headers = {}, opts = {}) {
    const path = `/adgroup`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdGroupKeywords(body, headers = {}, opts = {}) {
    const path = `/adgroup/keyword/insert/parent/${id}`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdMedia(body, headers = {}, opts = {}) {
    const path = `/mediainfo`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdMediaSite(body, headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdMediaSiteCptPlan(body, headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/create/schedule/`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdPlan(body, headers = {}, opts = {}) {
    const path = `/adplan`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdvertiser(body, headers = {}, opts = {}) {
    const path = `/advertiser/`;
    return this.post(path, {}, body, headers, opts);
  }

  createDipGroup(body, headers = {}, opts = {}) {
    const path = `/otgroup/`;
    return this.post(path, {}, body, headers, opts);
  }

  createFeedBack(body, headers = {}, opts = {}) {
    const path = `/feedback/`;
    return this.post(path, {}, body, headers, opts);
  }

  createGdDmpMacanalysis(body, headers = {}, opts = {}) {
    const path = `/dmp/gd/dmplables/macanalysis/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPctrItem(body, headers = {}, opts = {}) {
    const path = `/pcxr/item/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPcxrAction(body, headers = {}, opts = {}) {
    const path = `/pcxr/action/`;
    return this.post(path, {}, body, headers, opts);
  }

  createStyleTmplate(body, headers = {}, opts = {}) {
    const path = `/style/template/`;
    return this.post(path, {}, body, headers, opts);
  }

  createYmOtGroup(body, headers = {}, opts = {}) {
    const path = `/otgroup/ym/createcrowd/`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteAdCreative(id, headers = {}, opts = {}) {
    const path = `/adcreative/${id}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdDefaultCreative(headers = {}, opts = {}) {
    const path = `/default_creative/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdGroup(id, headers = {}, opts = {}) {
    const path = `/adgroup/${id}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdGroupKeywords(headers = {}, opts = {}) {
    const path = `/adgroup/keyword/delete/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdMedia(headers = {}, opts = {}) {
    const path = `/mediainfo/${id}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdMediaSite(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdMediaSiteCptPlan(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/schedule/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAdPlan(id, headers = {}, opts = {}) {
    const path = `/adplan/${id}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteDictCreativeSize(iD, headers = {}, opts = {}) {
    const path = `/dict/creativesize/${iD}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteOtGroupById(headers = {}, opts = {}) {
    const path = `/otgroup/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteStyleTemplate(headers = {}, opts = {}) {
    const path = `/style/template/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteYmOtGroup(headers = {}, opts = {}) {
    const path = `/otgroup/ym/deletecrowd/`;
    return this.delete(path, {}, headers, opts);
  }

  feedBackSelfCheck(id, body, headers = {}, opts = {}) {
    const path = `/feedback/query/selfcheck/`;
    return this.put(path, {}, body, headers, opts);
  }

  feedBackUploadImage(body, headers = {}, opts = {}) {
    const path = `/feedback/file/upload/image/`;
    return this.post(path, {}, body, headers, opts);
  }

  getAdChectCreativeCount(headers = {}, opts = {}) {
    const path = `/adcreative/dsp/need_check_count/`;
    return this.get(path, {}, headers, opts);
  }

  getAdChectCreativeList(query, headers = {}, opts = {}) {
    const path = `/adcreative/check/list/`;
    return this.get(path, query, headers, opts);
  }

  getAdChectCreativeQueryList(query, headers = {}, opts = {}) {
    const path = `/adcreative/check/querylist/`;
    return this.get(path, query, headers, opts);
  }

  getAdCreative(headers = {}, opts = {}) {
    const path = `/adcreative/${id}`;
    return this.get(path, {}, headers, opts);
  }

  getAdCreativeList(query, headers = {}, opts = {}) {
    const path = `/adcreative/adv/query/`;
    return this.get(path, query, headers, opts);
  }

  getAdDefaultCreativeList(query, headers = {}, opts = {}) {
    const path = `/default_creative/dsp/list/`;
    return this.get(path, query, headers, opts);
  }

  getAdGroup(id, headers = {}, opts = {}) {
    const path = `/adgroup/query/${id}`;
    return this.get(path, {}, headers, opts);
  }

  getAdGroupKeywordsList(headers = {}, opts = {}) {
    const path = `/adgroup/query/keywords/list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdGroupList(headers = {}, opts = {}) {
    const path = `/adgroup/adv/query/`;
    return this.get(path, {}, headers, opts);
  }

  getAdJs(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/js/${id}`;
    return this.get(path, {}, headers, opts);
  }

  getAdMedia(headers = {}, opts = {}) {
    const path = `/mediainfo/one/query/`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaCount(headers = {}, opts = {}) {
    const path = `/mediainfo/dsp/count/`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaList(headers = {}, opts = {}) {
    const path = `/mediainfo/dsp/query/`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaSite(iD, headers = {}, opts = {}) {
    const path = `/getmediaadsite/${iD}`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaSiteCptPlan(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/schedule/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaSiteCptPlanList(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/schedule/pid/${pid}/`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaSiteCptPlanTime(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/schedule/plan/time/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getAdMediaSiteList(headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/media_id/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getAdPlan(id, headers = {}, opts = {}) {
    const path = `/adplan/query/${id}`;
    return this.get(path, {}, headers, opts);
  }

  getAdPlanList(query, headers = {}, opts = {}) {
    const path = `/adplan/adv/query`;
    return this.get(path, query, headers, opts);
  }

  getAdvConfig(headers = {}, opts = {}) {
    const path = `/advertiser/config/`;
    return this.get(path, {}, headers, opts);
  }

  getAdvResources(headers = {}, opts = {}) {
    const path = `/advertiser/config/resources`;
    return this.get(path, {}, headers, opts);
  }

  getAdvStatement(headers = {}, opts = {}) {
    const path = `/advstatement/query/${statement_name}/${start_time}/${end_time}`;
    return this.get(path, {}, headers, opts);
  }

  getAdvThreeMonthPlan(headers = {}, opts = {}) {
    const path = `/advstatement/adv_three_month_plan/`;
    return this.get(path, {}, headers, opts);
  }

  getAdvertiserQuery(headers = {}, opts = {}) {
    const path = `/advertiser/query/amount`;
    return this.get(path, {}, headers, opts);
  }

  getAdxLabelList(headers = {}, opts = {}) {
    const path = `/adx/getList/`;
    return this.get(path, {}, headers, opts);
  }

  getComputePv(headers = {}, opts = {}) {
    const path = `/compute/pv/`;
    return this.get(path, {}, headers, opts);
  }

  getDic(headers = {}, opts = {}) {
    const path = `/dict/query/${name}/`;
    return this.get(path, {}, headers, opts);
  }

  getDspAccountDetail(headers = {}, opts = {}) {
    const path = `/dspaccount/detail/`;
    return this.get(path, {}, headers, opts);
  }

  getDspConfig(headers = {}, opts = {}) {
    const path = `/base/config/`;
    return this.get(path, {}, headers, opts);
  }

  getDspCountInfo(headers = {}, opts = {}) {
    const path = `/dspaccount/info/`;
    return this.get(path, {}, headers, opts);
  }

  getDspHostRegion(headers = {}, opts = {}) {
    const path = `/base/host/info/`;
    return this.get(path, {}, headers, opts);
  }

  getDspMediaStatementDetail(headers = {}, opts = {}) {
    const path = `/statistics/media/query/${start_time}/${end_time}`;
    return this.get(path, {}, headers, opts);
  }

  getDspResources(headers = {}, opts = {}) {
    const path = `/base/config/resources`;
    return this.get(path, {}, headers, opts);
  }

  getDspStatement(headers = {}, opts = {}) {
    const path = `/dspstatement/query/${statement_name}/${start_time}/${end_time}`;
    return this.get(path, {}, headers, opts);
  }

  getFeedBackById(headers = {}, opts = {}) {
    const path = `/feedback/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getFeedBackList(headers = {}, opts = {}) {
    const path = `/feedback/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getForeignCity(headers = {}, opts = {}) {
    const path = `/dict_foreign_city/queryList/`;
    return this.get(path, {}, headers, opts);
  }

  getGdDmpAreaPois(id, headers = {}, opts = {}) {
    const path = `/dmp/gd/dataindex/area/pois/`;
    return this.get(path, {}, headers, opts);
  }

  getGdDmpAsynMacAnysis(headers = {}, opts = {}) {
    const path = `/dmp/gd/dmpcube/asynMacAnalysis/`;
    return this.get(path, {}, headers, opts);
  }

  getGdDmpCheckStatus(headers = {}, opts = {}) {
    const path = `/dmp/gd/dmpcube/checkAnalysisStatus/`;
    return this.get(path, {}, headers, opts);
  }

  getGdDmpDeviceManage(headers = {}, opts = {}) {
    const path = `/dmp/gd/dmpcube/devicemanage/`;
    return this.get(path, {}, headers, opts);
  }

  getGdOtGroupList(mail, headers = {}, opts = {}) {
    const path = `/dmp/gd/crowd/list/${mail}/`;
    return this.get(path, {}, headers, opts);
  }

  getOtGroup(headers = {}, opts = {}) {
    const path = `/advertiser/queryot/`;
    return this.get(path, {}, headers, opts);
  }

  getOtGroupById(headers = {}, opts = {}) {
    const path = `/otgroup/query/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getOtGroupList(headers = {}, opts = {}) {
    const path = `/otgroup/list/query/`;
    return this.get(path, {}, headers, opts);
  }

  getPlanListByPid(headers = {}, opts = {}) {
    const path = `/adgroup/check/plantime`;
    return this.get(path, {}, headers, opts);
  }

  getPosType(headers = {}, opts = {}) {
    const path = `/compute/mediasite/type/`;
    return this.get(path, {}, headers, opts);
  }

  getSizeFromMediaSite(headers = {}, opts = {}) {
    const path = `/compute/mediasite/size/`;
    return this.get(path, {}, headers, opts);
  }

  getStatisticsCreativeArea(headers = {}, opts = {}) {
    const path = `/statistics/creative_area/`;
    return this.get(path, {}, headers, opts);
  }

  getStatisticsCreativeMediaSite(headers = {}, opts = {}) {
    const path = `/statistics/creative_mediasite/`;
    return this.get(path, {}, headers, opts);
  }

  getStatisticsRealTimeCreativeArea(headers = {}, opts = {}) {
    const path = `/statistics/real_time/creative_area/`;
    return this.get(path, {}, headers, opts);
  }

  getStatisticsRealTimeCreativeMediaSite(headers = {}, opts = {}) {
    const path = `/statistics/real_time/creative_mediasite/`;
    return this.get(path, {}, headers, opts);
  }

  getStyleTemplate(headers = {}, opts = {}) {
    const path = `/style/template/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getStyleTemplateList(headers = {}, opts = {}) {
    const path = `/style/template/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getYMOtGroupList(headers = {}, opts = {}) {
    const path = `/otgroup/ym/query_list/`;
    return this.get(path, {}, headers, opts);
  }

  getYmPortalUrl(headers = {}, opts = {}) {
    const path = `/otgroup/ym/url/`;
    return this.get(path, {}, headers, opts);
  }

  jiaHeCheckStatus(headers = {}, opts = {}) {
    const path = `/jiahe/dmp/idmapping/checkStatus`;
    return this.get(path, {}, headers, opts);
  }

  jiaHeExtractThreeGroup(body, headers = {}, opts = {}) {
    const path = `/jiahe/dmp/idmapping/extractThreeGroup`;
    return this.post(path, {}, body, headers, opts);
  }

  jiaHeExtractTwoGroup(body, headers = {}, opts = {}) {
    const path = `/jiahe/dmp/idmapping/extractTwoGroup`;
    return this.post(path, {}, body, headers, opts);
  }

  jiaHeOssUploadToOdps(body, headers = {}, opts = {}) {
    const path = `/jiahe/dmp/oss/odps`;
    return this.post(path, {}, body, headers, opts);
  }

  jiaHeSug(headers = {}, opts = {}) {
    const path = `/jiahe/dmp/idmapping/sug`;
    return this.get(path, {}, headers, opts);
  }

  loginGdOtGroup(mail, headers = {}, opts = {}) {
    const path = `/dmp/gd/crowd/login/${mail}/`;
    return this.get(path, {}, headers, opts);
  }

  oppoOfflineTaskStatus(headers = {}, opts = {}) {
    const path = `/oppo/dmp/poi/taskstatus/`;
    return this.get(path, {}, headers, opts);
  }

  oppoOfflineTaskSubmit(body, headers = {}, opts = {}) {
    const path = `/oppo/dmp/poi/tasksubmit/`;
    return this.post(path, {}, body, headers, opts);
  }

  oppoOnlineAnalysis(body, headers = {}, opts = {}) {
    const path = `/oppo/dmp/online/analysis/`;
    return this.post(path, {}, body, headers, opts);
  }

  oppoReplacementSubmission(body, headers = {}, opts = {}) {
    const path = `/oppo/dmp/replacement/tasksubmit/`;
    return this.post(path, {}, body, headers, opts);
  }

  oppoReplacementTaskStatus(headers = {}, opts = {}) {
    const path = `/oppo/dmp/replacement/taskstatus/`;
    return this.get(path, {}, headers, opts);
  }

  oppoUserGroupTaskStatus(headers = {}, opts = {}) {
    const path = `/oppo/dmp/usergroup/taskstatus/`;
    return this.get(path, {}, headers, opts);
  }

  oppoUserGroupTaskSubmission(body, headers = {}, opts = {}) {
    const path = `/oppo/dmp/usergroup/tasksubmit/`;
    return this.post(path, {}, body, headers, opts);
  }

  oppoUserportraiTaskstatus(headers = {}, opts = {}) {
    const path = `/oppo/dmp/userportrait/taskstatus/`;
    return this.get(path, {}, headers, opts);
  }

  oppoUserportraiTasksubmit(body, headers = {}, opts = {}) {
    const path = `/oppo/dmp/userportrait/tasksubmit/`;
    return this.post(path, {}, body, headers, opts);
  }

  pauseAdCreative(body, headers = {}, opts = {}) {
    const path = `/adcreative/pause/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  pauseAdGroup(body, headers = {}, opts = {}) {
    const path = `/adgroup/pause/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  pauseAdPlan(body, headers = {}, opts = {}) {
    const path = `/adplan/pause/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  queryJiaHeLBS(query, headers = {}, opts = {}) {
    const path = `/jiahe/dmp/idmapping/lbs`;
    return this.get(path, query, headers, opts);
  }

  rechargeForAdv(body, headers = {}, opts = {}) {
    const path = `/account/recharge/`;
    return this.post(path, {}, body, headers, opts);
  }

  refundForAdv(body, headers = {}, opts = {}) {
    const path = `/account/refund/`;
    return this.post(path, {}, body, headers, opts);
  }

  startAdCreative(body, headers = {}, opts = {}) {
    const path = `/adcreative/start/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  startAdGroup(body, headers = {}, opts = {}) {
    const path = `/adgroup/start/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  startAdPlan(body, headers = {}, opts = {}) {
    const path = `/adplan/start/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdCreative(id, body, headers = {}, opts = {}) {
    const path = `/adcreative/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdDefaultCreative(body, headers = {}, opts = {}) {
    const path = `/default_creative/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdGroup(body, headers = {}, opts = {}) {
    const path = `/adgroup/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdGroupKeywords(body, headers = {}, opts = {}) {
    const path = `/adgroup/keyword/insert/parent/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdMedia(body, headers = {}, opts = {}) {
    const path = `/mediainfo/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdMediaSite(body, headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdMediaSiteCptPlan(body, headers = {}, opts = {}) {
    const path = `/mediaadsiteinfo/schedule/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAdPlan(id, body, headers = {}, opts = {}) {
    const path = `/adplan/${id}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateDictCreativeSize(iD, body, headers = {}, opts = {}) {
    const path = `/dict/creativesize/${iD}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateDspAccountInfo(body, headers = {}, opts = {}) {
    const path = `/dspaccount/recharge/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateDspConfigAdx(body, headers = {}, opts = {}) {
    const path = `/base/config/adx/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateFeedBackById(id, body, headers = {}, opts = {}) {
    const path = `/feedback/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateIdMapping(headers = {}, opts = {}) {
    const path = `/adx/getList/`;
    return this.get(path, {}, headers, opts);
  }

  updateOdps(body, headers = {}, opts = {}) {
    const path = `/base/config/uploadodps/`;
    return this.post(path, {}, body, headers, opts);
  }

  updateOtGroupById(body, headers = {}, opts = {}) {
    const path = `/otgroup/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateStyleTmplate(body, headers = {}, opts = {}) {
    const path = `/style/template/`;
    return this.put(path, {}, body, headers, opts);
  }

  uploadCommonImage(body, headers = {}, opts = {}) {
    const path = `/upload/common/image/`;
    return this.post(path, {}, body, headers, opts);
  }

  uploadImage(body, headers = {}, opts = {}) {
    const path = `/upload/image`;
    return this.post(path, {}, body, headers, opts);
  }

  uploadVideo(body, headers = {}, opts = {}) {
    const path = `/upload/video/`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
