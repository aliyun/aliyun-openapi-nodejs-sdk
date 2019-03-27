
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-09-26';
    super(config);
  }

  adminCheckAdvertiserStatus(body, headers = {}, opts = {}) {
    const path = `/crm/advertiserinfo/status/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  adminGetAdvertiserList(headers = {}, opts = {}) {
    const path = `/crm/advertiserinfo/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  creatUnionAdvertiserInfo(body, headers = {}, opts = {}) {
    const path = `/union/advertiserinfo/`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdUnion(body, headers = {}, opts = {}) {
    const path = `/union/ssp_unioner/register/`;
    return this.post(path, {}, body, headers, opts);
  }

  createAdUnionSettingDock(body, headers = {}, opts = {}) {
    const path = `/union/setting/dock/`;
    return this.post(path, {}, body, headers, opts);
  }

  createCrmDmp(body, headers = {}, opts = {}) {
    const path = `/crm/dmp/`;
    return this.post(path, {}, body, headers, opts);
  }

  createCrowdByPacket(body, headers = {}, opts = {}) {
    const path = `/publisher/crowd/createbypacket`;
    return this.post(path, {}, body, headers, opts);
  }

  createDmpCrowd(body, headers = {}, opts = {}) {
    const path = `/publisher/dmp/`;
    return this.post(path, {}, body, headers, opts);
  }

  createFeedBackInfo(body, headers = {}, opts = {}) {
    const path = `/feedback/`;
    return this.post(path, {}, body, headers, opts);
  }

  createOrientationContent(body, headers = {}, opts = {}) {
    const path = `/crm/media_context/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisher(body, headers = {}, opts = {}) {
    const path = `/publisher/ssp_user/register/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherAdvertiser(body, headers = {}, opts = {}) {
    const path = `/publisher/advertiser/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherAgency(body, headers = {}, opts = {}) {
    const path = `/publisher/agency/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherCampaign(body, headers = {}, opts = {}) {
    const path = `/publisher/campaign/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherChannel(body, headers = {}, opts = {}) {
    const path = `/publisher/channel/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherCreative(body, headers = {}, opts = {}) {
    const path = `/publisher/creative/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherMedia(body, headers = {}, opts = {}) {
    const path = `/publisher/media/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherOrder(body, headers = {}, opts = {}) {
    const path = `/publisher/order/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherPage(body, headers = {}, opts = {}) {
    const path = `/publisher/page/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherSlot(body, headers = {}, opts = {}) {
    const path = `/publisher/slot/`;
    return this.post(path, {}, body, headers, opts);
  }

  createPublisherTemplate(body, headers = {}, opts = {}) {
    const path = `/publisher/template/`;
    return this.post(path, {}, body, headers, opts);
  }

  createSspSize(body, headers = {}, opts = {}) {
    const path = `/publisher/dictionary/create_size/`;
    return this.post(path, {}, body, headers, opts);
  }

  crmAdUnionVerifyById(body, headers = {}, opts = {}) {
    const path = `/crm/ssp_unioner/verify/${id}/`;
    return this.post(path, {}, body, headers, opts);
  }

  crmAdminCreativeVerifyById(body, headers = {}, opts = {}) {
    const path = `/admin/creative/verify/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  crmAdunionCreativeVerifyById(body, headers = {}, opts = {}) {
    const path = `/crm/creative/verify/${id}/`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteCrmDmp(headers = {}, opts = {}) {
    const path = `/crm/dmp/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteDmpCrowd(headers = {}, opts = {}) {
    const path = `/publisher/dmp/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteOrientationContent(headers = {}, opts = {}) {
    const path = `/crm/media_context/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherAdvertiserById(headers = {}, opts = {}) {
    const path = `/publisher/advertiser/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherAgencyById(headers = {}, opts = {}) {
    const path = `/publisher/agency/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherCampaignById(headers = {}, opts = {}) {
    const path = `/publisher/campaign/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherChannelById(headers = {}, opts = {}) {
    const path = `/publisher/channel/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherCreativeById(headers = {}, opts = {}) {
    const path = `/publisher/creative/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherMediaById(headers = {}, opts = {}) {
    const path = `/publisher/media/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherOrderById(headers = {}, opts = {}) {
    const path = `/publisher/order/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherPageById(headers = {}, opts = {}) {
    const path = `/publisher/page/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherSlotById(headers = {}, opts = {}) {
    const path = `/publisher/slot/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deletePublisherTemplateById(headers = {}, opts = {}) {
    const path = `/publisher/template/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  deleteSspSizeById(headers = {}, opts = {}) {
    const path = `/publisher/dictionary/remove_size/${id}/`;
    return this.delete(path, {}, headers, opts);
  }

  feedBackSelfCheck(body, headers = {}, opts = {}) {
    const path = `/feedback/query/selfcheck/`;
    return this.post(path, {}, body, headers, opts);
  }

  getAdUnionBalance(headers = {}, opts = {}) {
    const path = `/union/ssp_unioner/balance/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionChannelList(headers = {}, opts = {}) {
    const path = `/union/dictionary/channel_list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionConsumeList(headers = {}, opts = {}) {
    const path = `/union/consume/list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionCreativeById(headers = {}, opts = {}) {
    const path = `/union/cerative/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionCreativeList(headers = {}, opts = {}) {
    const path = `/union/creative/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionFinanceList(headers = {}, opts = {}) {
    const path = `/union/finance/list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionMediaHourStatement(headers = {}, opts = {}) {
    const path = `/union/statement/media_hour_statement/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionMediaHourStatementSum(headers = {}, opts = {}) {
    const path = `/union/statement/media_hour_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionMediaList(headers = {}, opts = {}) {
    const path = `/union/dictionary/media_list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionMediaStatementDetail(headers = {}, opts = {}) {
    const path = `/union/statement/media_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionMediaStatementSum(headers = {}, opts = {}) {
    const path = `/union/statement/media_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionPageList(headers = {}, opts = {}) {
    const path = `/union/dictionary/page_list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionSettingDock(headers = {}, opts = {}) {
    const path = `/union/setting/dock/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionSettingRule(headers = {}, opts = {}) {
    const path = `/union/setting/rule/`;
    return this.get(path, {}, headers, opts);
  }

  getAdUnionSlotList(headers = {}, opts = {}) {
    const path = `/union/dictionary/slot_list/`;
    return this.get(path, {}, headers, opts);
  }

  getAdminDictionaryArea(headers = {}, opts = {}) {
    const path = `/admin/dictionary/get_area/`;
    return this.get(path, {}, headers, opts);
  }

  getAdminDictionaryCategory(headers = {}, opts = {}) {
    const path = `/admin/dictionary/get_category/`;
    return this.get(path, {}, headers, opts);
  }

  getAdminDictionaryPosType(headers = {}, opts = {}) {
    const path = `/admin/dictionary/get_pos_type/`;
    return this.get(path, {}, headers, opts);
  }

  getAdminDictionarySize(headers = {}, opts = {}) {
    const path = `/admin/dictionary/get_size/`;
    return this.get(path, {}, headers, opts);
  }

  getAllMediaInfo(headers = {}, opts = {}) {
    const path = `/publisher/media/query/allInfo/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdSlotHourStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/ad_slot_hour_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdSlotHourStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/ad_slot_hour_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdSlotStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/ad_slot_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdSlotStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/ad_slot_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdminCreativeById(headers = {}, opts = {}) {
    const path = `/admin/creative/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdminCreativeList(headers = {}, opts = {}) {
    const path = `/admin/creative/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdunionCreativeById(headers = {}, opts = {}) {
    const path = `/crm/creative/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmAdunionCreativeList(headers = {}, opts = {}) {
    const path = `/crm/creative/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmCampaignList(headers = {}, opts = {}) {
    const path = `/crm/dictionary/campaign_list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmChannelList(headers = {}, opts = {}) {
    const path = `/crm/dictionary/channel_list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmConsumeAction(body, headers = {}, opts = {}) {
    const path = `/crm/consume/action/`;
    return this.post(path, {}, body, headers, opts);
  }

  getCrmConsumeList(headers = {}, opts = {}) {
    const path = `/crm/consume/list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmCreativeHourStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/creative_hour_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmCreativeHourStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/creative_hour_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmDirectCreativeStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/direct_creative_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmDmp(headers = {}, opts = {}) {
    const path = `/crm/dmp/list/query/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmFinanceConsumeStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/finance_consume_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmFinanceConsumeStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/finance_consume_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmFinanceIncomeStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/finance_income_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmFinanceIncomeStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/finance_income_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmIncomeList(headers = {}, opts = {}) {
    const path = `/crm/income/list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmMediaHourStatement(headers = {}, opts = {}) {
    const path = `/crm/statement/media_hour_statement/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmMediaHourStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/direct_creative_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmMediaHourStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/media_hour_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmMediaList(headers = {}, opts = {}) {
    const path = `/crm/dictionary/media_list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmMediaStatementDetail(headers = {}, opts = {}) {
    const path = `/crm/statement/media_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmMediaStatementSum(headers = {}, opts = {}) {
    const path = `/crm/statement/media_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmPageList(headers = {}, opts = {}) {
    const path = `/crm/dictionary/page_list/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmSettingConsumeSum(headers = {}, opts = {}) {
    const path = `/crm/setting/consume/sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmSettingIncomeSum(headers = {}, opts = {}) {
    const path = `/crm/setting/income/sum/`;
    return this.get(path, {}, headers, opts);
  }

  getCrmSlotList(headers = {}, opts = {}) {
    const path = `/crm/dictionary/slot_list/`;
    return this.get(path, {}, headers, opts);
  }

  getDmpCrowdList(headers = {}, opts = {}) {
    const path = `/publisher/dmp/list/query/`;
    return this.get(path, {}, headers, opts);
  }

  getFeedBackById(headers = {}, opts = {}) {
    const path = `/feedback/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getFeedBackInfoList(headers = {}, opts = {}) {
    const path = `/feedback/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getOrientationById(headers = {}, opts = {}) {
    const path = `/crm/media_context/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getOrientationContentList(headers = {}, opts = {}) {
    const path = `/crm/media_context/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getOrientationList(headers = {}, opts = {}) {
    const path = `/publisher/orient/context/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdCrowdStatementDetail(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_crowd_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdCrowdStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_crowd_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdCustomerStatementDetail(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_customer_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdCustomerStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_customer_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdSlotHourStatementDetail(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_slot_hour_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdSlotHourStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_slot_hour_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdSlotStatementDetail(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_slot_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdSlotStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/ad_slot_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdvertiserById(headers = {}, opts = {}) {
    const path = `/publisher/advertiser/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAdvertiserList(headers = {}, opts = {}) {
    const path = `/publisher/advertiser/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAgencyById(headers = {}, opts = {}) {
    const path = `/publisher/agency/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherAgencyList(headers = {}, opts = {}) {
    const path = `/publisher/agency/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCampaignById(headers = {}, opts = {}) {
    const path = `/publisher/campaign/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCampaignList(headers = {}, opts = {}) {
    const path = `/publisher/campaign/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCampaignListByOrder(headers = {}, opts = {}) {
    const path = `/publisher/campaign/order/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCampaignListTimeById(headers = {}, opts = {}) {
    const path = `/publisher/slot/campaign_list_time/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCampaignOrder(headers = {}, opts = {}) {
    const path = `/publisher/campaign/update/orderCampaign/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCampaignSoldOutTime(headers = {}, opts = {}) {
    const path = `/publisher/campaign/sold/out/time/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherChannelById(headers = {}, opts = {}) {
    const path = `/publisher/channel/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherChannelList(headers = {}, opts = {}) {
    const path = `/publisher/channel/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherConsumeList(headers = {}, opts = {}) {
    const path = `/publisher/finance_detail/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCreativeById(headers = {}, opts = {}) {
    const path = `/publisher/creative/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCreativeHourStatementDetail(headers = {}, opts = {}) {
    const path = `/publisher/statement/creative_hour_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCreativeHourStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/creative_hour_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCreativeList(headers = {}, opts = {}) {
    const path = `/publisher/creative/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCreativeStatementDetail(headers = {}, opts = {}) {
    const path = `/publisher/statement/creative_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherCreativeStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/creative_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherDictIndustry(headers = {}, opts = {}) {
    const path = `/publisher/dictionary/get_industry/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherDictionarySize(headers = {}, opts = {}) {
    const path = `/publisher/dictionary/get_size/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherFinanceIncomeStatementDetal(headers = {}, opts = {}) {
    const path = `/publisher/statement/finance_income_statement_detail/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherFinanceIncomeStatementSum(headers = {}, opts = {}) {
    const path = `/publisher/statement/finance_income_statement_sum/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherMediaById(headers = {}, opts = {}) {
    const path = `/publisher/media/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherMediaList(headers = {}, opts = {}) {
    const path = `/publisher/media/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherOrderById(headers = {}, opts = {}) {
    const path = `/publisher/order/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherOrderList(headers = {}, opts = {}) {
    const path = `/publisher/order/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherPageById(headers = {}, opts = {}) {
    const path = `/publisher/page/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherPageList(headers = {}, opts = {}) {
    const path = `/publisher/page/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherSetting(headers = {}, opts = {}) {
    const path = `/publisher/setting/statistics/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherSlotById(headers = {}, opts = {}) {
    const path = `/publisher/slot/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherSlotList(headers = {}, opts = {}) {
    const path = `/publisher/slot/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherSspUserBalance(headers = {}, opts = {}) {
    const path = `/publisher/ssp_user/balance/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherTemplateById(headers = {}, opts = {}) {
    const path = `/publisher/template/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getPublisherTemplateList(headers = {}, opts = {}) {
    const path = `/publisher/template/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  getSspConfig(headers = {}, opts = {}) {
    const path = `/ssp/config/query/`;
    return this.get(path, {}, headers, opts);
  }

  getUnionAdvertiserInfo(headers = {}, opts = {}) {
    const path = `/union/advertiserinfo/${id}/`;
    return this.get(path, {}, headers, opts);
  }

  getUnionAdvertiserList(headers = {}, opts = {}) {
    const path = `/union/advertiserinfo/query/list/`;
    return this.get(path, {}, headers, opts);
  }

  importAdUnionCreative(body, headers = {}, opts = {}) {
    const path = `/union/creative/import/`;
    return this.post(path, {}, body, headers, opts);
  }

  importImage(body, headers = {}, opts = {}) {
    const path = `/publisher/file/upload/image/`;
    return this.post(path, {}, body, headers, opts);
  }

  importVideo(body, headers = {}, opts = {}) {
    const path = `/publisher/file/upload/video/`;
    return this.post(path, {}, body, headers, opts);
  }

  insertCrmAdxRuleInfo(body, headers = {}, opts = {}) {
    const path = `/crm/adx/insert/adxInfo`;
    return this.post(path, {}, body, headers, opts);
  }

  pauseAdCreativeById(body, headers = {}, opts = {}) {
    const path = `/publisher/creative/pause/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  pauseAdSlotById(body, headers = {}, opts = {}) {
    const path = `/publisher/slot/pause/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  pausePublisherCampaign(body, headers = {}, opts = {}) {
    const path = `/publisher/campaign/pause/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  queryCrmAdxRuleInfo(headers = {}, opts = {}) {
    const path = `/crm/adx/query/list`;
    return this.get(path, {}, headers, opts);
  }

  startAdCreativeById(body, headers = {}, opts = {}) {
    const path = `/publisher/creative/startup/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  startAdSlotById(body, headers = {}, opts = {}) {
    const path = `/publisher/slot/startup/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  startPublisherCampaign(body, headers = {}, opts = {}) {
    const path = `/publisher/campaign/startup/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  unionAdvertiserStatus(body, headers = {}, opts = {}) {
    const path = `/union/advertiserinfo/status/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  unionCreativesUpload(body, headers = {}, opts = {}) {
    const path = `/union/creative/upload/`;
    return this.post(path, {}, body, headers, opts);
  }

  updateAdUnionSettingDock(body, headers = {}, opts = {}) {
    const path = `/union/setting/dock/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateCreateAdUnionSettingDock(body, headers = {}, opts = {}) {
    const path = `/union/setting/rule/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateCrmAdxRuleInfo(iD, body, headers = {}, opts = {}) {
    const path = `/crm/adx/update/adxInfo/${iD}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateCrmAdxRuleStatus(iD, sTATUS, body, headers = {}, opts = {}) {
    const path = `/crm/adx/update/status/${iD}/${sTATUS}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateCrmDmp(body, headers = {}, opts = {}) {
    const path = `/crm/dmp/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateDmpCrowd(body, headers = {}, opts = {}) {
    const path = `/publisher/dmp/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateFeedBackById(body, headers = {}, opts = {}) {
    const path = `/feedback/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateOrientationContent(body, headers = {}, opts = {}) {
    const path = `/crm/media_context/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherAdvertiserById(body, headers = {}, opts = {}) {
    const path = `/publisher/advertiser/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherAgencyById(body, headers = {}, opts = {}) {
    const path = `/publisher/agency/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherCampaignById(body, headers = {}, opts = {}) {
    const path = `/publisher/campaign/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherChannelById(body, headers = {}, opts = {}) {
    const path = `/publisher/channel/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherCreativeById(body, headers = {}, opts = {}) {
    const path = `/publisher/creative/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherMediaById(body, headers = {}, opts = {}) {
    const path = `/publisher/media/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherOrderById(body, headers = {}, opts = {}) {
    const path = `/publisher/order/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherPageById(body, headers = {}, opts = {}) {
    const path = `/publisher/page/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherSlotById(body, headers = {}, opts = {}) {
    const path = `/publisher/slot/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePublisherTemplateById(body, headers = {}, opts = {}) {
    const path = `/publisher/template/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateSspSizeById(body, headers = {}, opts = {}) {
    const path = `/publisher/dictionary/update_size/${id}/`;
    return this.put(path, {}, body, headers, opts);
  }

  updateSubscript(body, headers = {}, opts = {}) {
    const path = `/ssp/config/subscript/`;
    return this.put(path, {}, body, headers, opts);
  }

}

module.exports = Client;
