
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-28';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {Long} ParentApgroupId - parentApgroupId. required.
   * @param {String} Description - description. optional.
   */
  addApgroupConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ParentApgroupId')) {
      throw new TypeError('parameter "ParentApgroupId" is required');
    }

    return this.request('AddApgroupConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Mac - mac. required.
   * @param {String} SerialNo - serialNo. required.
   * @param {Long} ApgroupId - apgroupId. required.
   */
  aliyunRegisterApAsset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mac')) {
      throw new TypeError('parameter "Mac" is required');
    }

    if (!hasOwnProperty(params, 'SerialNo')) {
      throw new TypeError('parameter "SerialNo" is required');
    }

    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    return this.request('AliyunRegisterApAsset', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. required.
   * @param {String} ApAssetIds - apAssetIds. required.
   */
  apgroupBatchAddAp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApAssetIds')) {
      throw new TypeError('parameter "ApAssetIds" is required');
    }

    return this.request('ApgroupBatchAddAp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ApAssetIds - apAssetIds. required.
   */
  apgroupBatchDeleteAp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApAssetIds')) {
      throw new TypeError('parameter "ApAssetIds" is required');
    }

    return this.request('ApgroupBatchDeleteAp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {String} Name - name. required.
   * @param {String} Dids - dids. required.
   */
  areaCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Dids')) {
      throw new TypeError('parameter "Dids" is required');
    }

    return this.request('AreaCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Long} Aid - aid. required.
   */
  areaDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Aid')) {
      throw new TypeError('parameter "Aid" is required');
    }

    return this.request('AreaDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Long} Aid - aid. required.
   */
  areaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Aid')) {
      throw new TypeError('parameter "Aid" is required');
    }

    return this.request('AreaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   */
  areaShowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('AreaShowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Long} Aid - aid. required.
   * @param {String} Name - name. optional.
   * @param {String} Dids - dids. optional.
   */
  areaUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Aid')) {
      throw new TypeError('parameter "Aid" is required');
    }

    return this.request('AreaUpdate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  batchChangeGroupApName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('BatchChangeGroupApName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  batchRegisterApAsset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('BatchRegisterApAsset', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  batchSaveApPosition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('BatchSaveApPosition', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} BusinessAddress - baddress. required.
   * @param {String} BusinessCity - bcity. required.
   * @param {String} BusinessManager - bmanager. required.
   * @param {String} BusinessName - bname. required.
   * @param {String} BusinessProvince - bprovince. required.
   * @param {Integer} BusinessSubtype - bsubtype. required.
   * @param {String} BusinessTel - btel. required.
   * @param {Integer} BusinessTopType - btoptype. required.
   * @param {Integer} BusinessType - btype. required.
   * @param {String} Combo - combo. required.
   * @param {Integer} Warn - warn. optional.
   * @param {String} WarnEmail - warnEmail. optional.
   */
  businessCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessAddress')) {
      throw new TypeError('parameter "BusinessAddress" is required');
    }

    if (!hasOwnProperty(params, 'BusinessCity')) {
      throw new TypeError('parameter "BusinessCity" is required');
    }

    if (!hasOwnProperty(params, 'BusinessManager')) {
      throw new TypeError('parameter "BusinessManager" is required');
    }

    if (!hasOwnProperty(params, 'BusinessName')) {
      throw new TypeError('parameter "BusinessName" is required');
    }

    if (!hasOwnProperty(params, 'BusinessProvince')) {
      throw new TypeError('parameter "BusinessProvince" is required');
    }

    if (!hasOwnProperty(params, 'BusinessSubtype')) {
      throw new TypeError('parameter "BusinessSubtype" is required');
    }

    if (!hasOwnProperty(params, 'BusinessTel')) {
      throw new TypeError('parameter "BusinessTel" is required');
    }

    if (!hasOwnProperty(params, 'BusinessTopType')) {
      throw new TypeError('parameter "BusinessTopType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'Combo')) {
      throw new TypeError('parameter "Combo" is required');
    }

    return this.request('BusinessCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  businessInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('BusinessInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   */
  businessShowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('BusinessShowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {String} BusinessProvince - bprovince. optional.
   * @param {String} BusinessCity - bcity. optional.
   * @param {String} BusinessAddress - baddress. optional.
   * @param {String} BusinessManager - bmanager. optional.
   * @param {Integer} Warn - warn. optional.
   * @param {String} WarnEmail - warnEmail. optional.
   */
  businessUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('BusinessUpdate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TraceId - traceId. required.
   * @param {String} SpMsg - spMsg. required.
   */
  ceaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'SpMsg')) {
      throw new TypeError('parameter "SpMsg" is required');
    }

    return this.request('CeaseInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  checkRootPermission(params = {}, options = {}) {
    return this.request('CheckRootPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  checkUmengDataAnalysisPermission(params = {}, options = {}) {
    return this.request('CheckUmengDataAnalysisPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} ApList - apList. required.
   * @param {Boolean} AutoRenew - autoRenew. required.
   * @param {Integer} Months - months. required.
   * @param {Integer} OffsetDays - offsetDays. optional.
   */
  configAutoRenew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApList')) {
      throw new TypeError('parameter "ApList" is required');
    }

    if (!hasOwnProperty(params, 'AutoRenew')) {
      throw new TypeError('parameter "AutoRenew" is required');
    }

    if (!hasOwnProperty(params, 'Months')) {
      throw new TypeError('parameter "Months" is required');
    }

    return this.request('ConfigAutoRenew', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} ApList - apList. required.
   * @param {Integer} TimeCycleNum - timeCycleNum. required.
   */
  createRenewOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApList')) {
      throw new TypeError('parameter "ApList" is required');
    }

    if (!hasOwnProperty(params, 'TimeCycleNum')) {
      throw new TypeError('parameter "TimeCycleNum" is required');
    }

    return this.request('CreateRenewOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Uid - uid. required.
   * @param {Integer} PermissionType - permissionType. required.
   * @param {String} PagePermission - pagePermission. required.
   * @param {RepeatList} BusinessIds - businessIds. required.
   * @param {RepeatList} ShopIds - shopIds. optional.
   * @param {RepeatList} ShopGroupIds - shopGroupIds. optional.
   */
  createSubAccountPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'PermissionType')) {
      throw new TypeError('parameter "PermissionType" is required');
    }

    if (!hasOwnProperty(params, 'PagePermission')) {
      throw new TypeError('parameter "PagePermission" is required');
    }

    if (!hasOwnProperty(params, 'BusinessIds')) {
      throw new TypeError('parameter "BusinessIds" is required');
    }

    return this.request('CreateSubAccountPermission', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} PagePermission - pagePermission. required.
   * @param {RepeatList} BusinessIds - businessIds. required.
   * @param {RepeatList} ShopIds - shopIds. required.
   * @param {RepeatList} ShopGroupIds - shopGroupIds. optional.
   */
  createSubAccountPermissionFds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'PagePermission')) {
      throw new TypeError('parameter "PagePermission" is required');
    }

    if (!hasOwnProperty(params, 'BusinessIds')) {
      throw new TypeError('parameter "BusinessIds" is required');
    }

    if (!hasOwnProperty(params, 'ShopIds')) {
      throw new TypeError('parameter "ShopIds" is required');
    }

    return this.request('CreateSubAccountPermissionFds', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Integer} Type - type. required.
   * @param {Integer} Subtype - subtype. optional.
   * @param {String} Manager - manager. required.
   * @param {String} Phone - phone. required.
   * @param {Integer} Province - province. required.
   * @param {Integer} City - city. required.
   * @param {String} Address - address. required.
   */
  createUBusiness(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Manager')) {
      throw new TypeError('parameter "Manager" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    return this.request('CreateUBusiness', params, options);
  }

  /**
   * @param {Long} Sid - sid. required.
   * @param {String} Name - name. required.
   * @param {Integer} Type - type. required.
   * @param {String} DNum - dNum. required.
   * @param {String} Position - position. optional.
   */
  createUDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'DNum')) {
      throw new TypeError('parameter "DNum" is required');
    }

    return this.request('CreateUDevice', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {Integer} Area - area. required.
   * @param {String} Manager - manager. required.
   * @param {String} Phone - phone. required.
   * @param {Integer} Region - region. required.
   * @param {Integer} Province - province. required.
   * @param {Integer} City - city. required.
   * @param {Integer} District - district. required.
   * @param {String} Address - address. required.
   * @param {String} OpenTime - openTime. required.
   * @param {Integer} Filter - filter. required.
   * @param {String} Longitude - longitude. required.
   * @param {String} Latitude - latitude. required.
   * @param {String} MapId - mapId. optional.
   * @param {String} Brand - brand. optional.
   * @param {String} Remark - remark. optional.
   */
  createUShop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Area')) {
      throw new TypeError('parameter "Area" is required');
    }

    if (!hasOwnProperty(params, 'Manager')) {
      throw new TypeError('parameter "Manager" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'District')) {
      throw new TypeError('parameter "District" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    if (!hasOwnProperty(params, 'OpenTime')) {
      throw new TypeError('parameter "OpenTime" is required');
    }

    if (!hasOwnProperty(params, 'Filter')) {
      throw new TypeError('parameter "Filter" is required');
    }

    if (!hasOwnProperty(params, 'Longitude')) {
      throw new TypeError('parameter "Longitude" is required');
    }

    if (!hasOwnProperty(params, 'Latitude')) {
      throw new TypeError('parameter "Latitude" is required');
    }

    return this.request('CreateUShop', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} Shopids - shopids. required.
   */
  createUShopGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Shopids')) {
      throw new TypeError('parameter "Shopids" is required');
    }

    return this.request('CreateUShopGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} MapId - mapId. required.
   * @param {Long} ApAssetId - apAssetId. required.
   */
  delApPosition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MapId')) {
      throw new TypeError('parameter "MapId" is required');
    }

    if (!hasOwnProperty(params, 'ApAssetId')) {
      throw new TypeError('parameter "ApAssetId" is required');
    }

    return this.request('DelApPosition', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  delPageConfigTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DelPageConfigTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  delPortalTemp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DelPortalTemp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  delSubAccountPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DelSubAccountPermission', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  delSubAccountPermissionFds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DelSubAccountPermissionFds', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  delUmengPagePermission4Root(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DelUmengPagePermission4Root', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {Integer} InstantlyEffective - instantlyEffective. optional.
   */
  deleteApRadioSsidConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteApRadioSsidConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  deleteApgroupConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteApgroupConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {Long} ApgroupId - apgroupId. required.
   */
  deleteApgroupSsidConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    return this.request('DeleteApgroupSsidConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} MapId - mapId. required.
   */
  deletePositionMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MapId')) {
      throw new TypeError('parameter "MapId" is required');
    }

    return this.request('DeletePositionMap', params, options);
  }

  /**
   * @param {Long} Sid - sid. required.
   * @param {Long} Did - did. required.
   * @param {String} DNum - dNum. required.
   */
  deleteUDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Did')) {
      throw new TypeError('parameter "Did" is required');
    }

    if (!hasOwnProperty(params, 'DNum')) {
      throw new TypeError('parameter "DNum" is required');
    }

    return this.request('DeleteUDevice', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Sid - sid. required.
   */
  deleteUShop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('DeleteUShop', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Gid - gid. required.
   */
  deleteUShopGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    return this.request('DeleteUShopGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Sn - sn. required.
   * @param {Integer} DeviceType - deviceType. required.
   */
  deviceBatchCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sn')) {
      throw new TypeError('parameter "Sn" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    return this.request('DeviceBatchCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {String} DeviceName - dname. required.
   * @param {Integer} DeviceType - dtype. required.
   * @param {String} DeviceNum - dnum. required.
   * @param {String} DevicePosition - dposition. optional.
   */
  deviceCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceNum')) {
      throw new TypeError('parameter "DeviceNum" is required');
    }

    return this.request('DeviceCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Did - did. optional.
   * @param {String} Mac - mac. optional.
   */
  deviceDelete(params = {}, options = {}) {
    return this.request('DeviceDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   * @param {Integer} DeviceType - dtype. optional.
   * @param {String} Dirc - dirc. optional.
   */
  deviceShowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('DeviceShowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Did - did. required.
   * @param {String} DeviceName - dname. optional.
   * @param {String} DevicePosition - dposition. optional.
   */
  deviceUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Did')) {
      throw new TypeError('parameter "Did" is required');
    }

    return this.request('DeviceUpdate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UploadData - uploadData. required.
   */
  excelToJson(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadData')) {
      throw new TypeError('parameter "UploadData" is required');
    }

    return this.request('ExcelToJson', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  findAp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('FindAp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  frequencyAnalyse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('FrequencyAnalyse', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getAccountConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetAccountConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getAddApsProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetAddApsProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {RepeatList} Gids - gids. optional.
   */
  getAllActiveShopByGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('GetAllActiveShopByGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getAllApModel(params = {}, options = {}) {
    return this.request('GetAllApModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApDetailedConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApDetailedConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApDetailedStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApDetailedStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} BindId - bindId. required.
   * @param {Integer} ConfigType - configType. required.
   */
  getApPortalBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BindId')) {
      throw new TypeError('parameter "BindId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigType')) {
      throw new TypeError('parameter "ConfigType" is required');
    }

    return this.request('GetApPortalBind', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {Long} Start - start. optional.
   * @param {Long} End - end. optional.
   */
  getApRunHistoryTimeSer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApRunHistoryTimeSer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   */
  getApStaMiscAgg(params = {}, options = {}) {
    return this.request('GetApStaMiscAgg', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   */
  getApTop(params = {}, options = {}) {
    return this.request('GetApTop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApgroupConfigProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApgroupConfigProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApgroupDetailedConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApgroupDetailedConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApgroupPortalConfigProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApgroupPortalConfigProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApgroupScanConfigSaveProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApgroupScanConfigSaveProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getApgroupSsidConfigProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApgroupSsidConfigProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getBatchSaveApAssetProgress(params = {}, options = {}) {
    return this.request('GetBatchSaveApAssetProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   */
  getBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    return this.request('GetBid', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Uid - uid. required.
   */
  getBids4Uid4Root(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetBids4Uid4Root', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getBindAp4Umeng(params = {}, options = {}) {
    return this.request('GetBindAp4Umeng', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  getBusinessTrafficReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetBusinessTrafficReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   * @param {Integer} Page - page. optional.
   * @param {Integer} Per - per. optional.
   * @param {Integer} ClassType - classType. optional.
   * @param {String} GsType - gsType. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} Bid - bid. required.
   */
  getCrowdList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('GetCrowdList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   */
  getDailyStatistic(params = {}, options = {}) {
    return this.request('GetDailyStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Mac - mac. required.
   */
  getDeviceInfoByMac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mac')) {
      throw new TypeError('parameter "Mac" is required');
    }

    return this.request('GetDeviceInfoByMac', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getGroupApChangeNameTemplate(params = {}, options = {}) {
    return this.request('GetGroupApChangeNameTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getGroupApRadioConfigProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetGroupApRadioConfigProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getGroupApRadioConfigTemplate(params = {}, options = {}) {
    return this.request('GetGroupApRadioConfigTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getGroupApRadioOnoffProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetGroupApRadioOnoffProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getGroupApRepairProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetGroupApRepairProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ShopId - shopId. required.
   */
  getInstanceByShop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ShopId')) {
      throw new TypeError('parameter "ShopId" is required');
    }

    return this.request('GetInstanceByShop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. required.
   */
  getLatestApStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    return this.request('GetLatestApStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. required.
   */
  getLatestStaStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    return this.request('GetLatestStaStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} MapId - mapId. required.
   */
  getMapUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MapId')) {
      throw new TypeError('parameter "MapId" is required');
    }

    return this.request('GetMapUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   * @param {Long} CompanyId - companyId. optional.
   * @param {Long} Start - start. optional.
   * @param {Long} End - end. optional.
   * @param {Long} ZoomStart - zoomStart. optional.
   * @param {Long} ZoomEnd - zoomEnd. optional.
   */
  getOnlineApTimeSer(params = {}, options = {}) {
    return this.request('GetOnlineApTimeSer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   * @param {Long} CompanyId - companyId. optional.
   * @param {Long} Start - start. optional.
   * @param {Long} End - end. optional.
   * @param {Long} ZoomStart - zoomStart. optional.
   * @param {Long} ZoomEnd - zoomEnd. optional.
   */
  getOnlineStaTimeSer(params = {}, options = {}) {
    return this.request('GetOnlineStaTimeSer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} DirType - dirType. required.
   */
  getOssServerSign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DirType')) {
      throw new TypeError('parameter "DirType" is required');
    }

    return this.request('GetOssServerSign', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getPageConfigTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetPageConfigTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getPageProperties(params = {}, options = {}) {
    return this.request('GetPageProperties', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} UniqueId - uniqueId. optional.
   */
  getPortalTempDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetPortalTempDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getProbeDataSubscriberConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetProbeDataSubscriberConfig', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Sid - sid. optional.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Long} Gid - gid. optional.
   */
  getProfileBase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetProfileBase', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Sid - sid. optional.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {String} FilterInterest - filterInterest. optional.
   * @param {Long} Gid - gid. optional.
   */
  getProfileInternet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetProfileInternet', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getRadioRunHistoryTimeSer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetRadioRunHistoryTimeSer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} MacList - macList. required.
   */
  getScanMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MacList')) {
      throw new TypeError('parameter "MacList" is required');
    }

    return this.request('GetScanMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   * @param {Long} CompanyId - companyId. optional.
   * @param {Long} Start - start. optional.
   * @param {Long} End - end. optional.
   * @param {Long} ZoomStart - zoomStart. optional.
   * @param {Long} ZoomEnd - zoomEnd. optional.
   */
  getScanProbeTimeSer(params = {}, options = {}) {
    return this.request('GetScanProbeTimeSer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getSendCommandByMacProgress(params = {}, options = {}) {
    return this.request('GetSendCommandByMacProgress', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Gid - gid. required.
   * @param {String} ShopName - shopName. optional.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  getShopGroupDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('GetShopGroupDetails', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Gid - gid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  getShopGroupTrafficReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetShopGroupTrafficReport', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Sid - sid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  getShopTopVillage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetShopTopVillage', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Sid - sid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  getShopTrafficReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetShopTrafficReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} QueryId - queryId. required.
   * @param {Integer} QueryType - queryType. required.
   */
  getSidsAndGids4Bid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QueryId')) {
      throw new TypeError('parameter "QueryId" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('GetSidsAndGids4Bid', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getStaDetailedStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetStaDetailedStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getStaRunHistoryTimeSer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetStaRunHistoryTimeSer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. optional.
   */
  getStaTop(params = {}, options = {}) {
    return this.request('GetStaTop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getSubAccountPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetSubAccountPermission', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  getSubAccountPermissionFds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetSubAccountPermissionFds', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getSubAccountStatus(params = {}, options = {}) {
    return this.request('GetSubAccountStatus', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   */
  getUBusiness(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('GetUBusiness', params, options);
  }

  /**
   * @param {Long} Sid - sid. required.
   */
  getUShop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('GetUShop', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Gid - gid. required.
   */
  getUShopGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    return this.request('GetUShopGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getUmengPagePermission4Root(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetUmengPagePermission4Root', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getUpgradeAPGroupProgress(params = {}, options = {}) {
    return this.request('GetUpgradeAPGroupProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getUpgradeAPProgress(params = {}, options = {}) {
    return this.request('GetUpgradeAPProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  getUpgradeImg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetUpgradeImg', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. optional.
   */
  getUserUmengPagePermission(params = {}, options = {}) {
    return this.request('GetUserUmengPagePermission', params, options);
  }

  /**
   */
  getUserUmengPagePermissionFds(params = {}, options = {}) {
    return this.request('GetUserUmengPagePermissionFds', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  groupDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('GroupDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  groupIntime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('GroupIntime', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  groupOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('GroupOverview', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  groupTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('GroupTrend', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  headquartersOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('HeadquartersOverview', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  headquartersRanking(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('HeadquartersRanking', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  headquartersToolsCoincide(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('HeadquartersToolsCoincide', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  headquartersToolsContrast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('HeadquartersToolsContrast', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  headquartersToolsO2O(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('HeadquartersToolsO2O', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  headquartersTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('HeadquartersTrend', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} data - data. required.
   */
  innerCheckOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('InnerCheckOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} data - data. required.
   */
  innerProduceCloudWF(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('InnerProduceCloudWF', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} data - data. required.
   */
  innerRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('InnerRefund', params, options);
  }

  /**
   */
  isDataServicePayUser(params = {}, options = {}) {
    return this.request('IsDataServicePayUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  kickAndClearPMKcache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('KickAndClearPMKcache', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  kickSta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('KickSta', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {String} SearchEmail - searchEmail. optional.
   */
  listAccountConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListAccountConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchSerialNo - searchSerialNo. optional.
   * @param {String} SearchModel - searchModel. optional.
   * @param {String} SearchName - searchName. optional.
   */
  listApAsset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApAsset', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {Long} ApgroupId - apgroupId. required.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchName - searchName. optional.
   * @param {String} SearchModel - searchModel. optional.
   */
  listApAssetCanBeAdded(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    return this.request('ListApAssetCanBeAdded', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApAssetId - apAssetId. required.
   */
  listApDetailInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApAssetId')) {
      throw new TypeError('parameter "ApAssetId" is required');
    }

    return this.request('ListApDetailInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} MapId - mapId. required.
   */
  listApPosition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MapId')) {
      throw new TypeError('parameter "MapId" is required');
    }

    return this.request('ListApPosition', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} TotalItem - totalItem. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {String} SearchName - searchName. optional.
   * @param {String} SearchApgroupName - searchApgroupName. optional.
   * @param {Integer} MapType - mapType. optional.
   */
  listApPositionMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApPositionMap', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  listApPositionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('ListApPositionStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchName - searchName. optional.
   * @param {String} SearchApgroupName - searchApgroupName. optional.
   * @param {Integer} SearchChannelEquals - searchChannelEquals. optional.
   * @param {Integer} SearchApStatus - searchApStatus. optional.
   * @param {Integer} SearchDisabled - searchDisabled. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listApRadioStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApRadioStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchIp - searchIp. optional.
   * @param {String} SearchProtocal - searchProtocal. optional.
   * @param {String} SearchSsid - searchSsid. optional.
   * @param {String} SearchUsername - searchUsername. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listApStaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApStaStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchName - searchName. optional.
   * @param {String} SearchApModelName - searchApModelName. optional.
   * @param {String} SearchGroupName - searchGroupName. optional.
   * @param {String} SearchWanIp - searchWanIp. optional.
   * @param {Long} SearchSwVersion - searchSwVersion. optional.
   * @param {Integer} SearchBssEquals - searchBssEquals. optional.
   * @param {Integer} SearchStatus - searchStatus. optional.
   * @param {String} SearchCompanyName - searchCompanyName. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listApStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchName - searchName. optional.
   * @param {String} SearchApModelName - searchApModelName. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listApUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApUpgrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {String} SearchName - searchName. optional.
   * @param {String} SearchCompany - searchCompany. optional.
   */
  listApgroupConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListApgroupConfig', params, options);
  }

  /**
   */
  listAvailableUDevice(params = {}, options = {}) {
    return this.request('ListAvailableUDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchName - searchName. optional.
   * @param {Integer} SearchScan - searchScan. optional.
   * @param {String} SearchModel - searchModel. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. optional.
   * @param {String} OrderDir - orderDir. optional.
   */
  listBriefApConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    return this.request('ListBriefApConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FuzzySearch - fuzzySearch. optional.
   * @param {Integer} Limit - limit. required.
   * @param {Long} AncestorApgroupId - ancestorApgroupId. required.
   */
  listBriefConfigByAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    if (!hasOwnProperty(params, 'AncestorApgroupId')) {
      throw new TypeError('parameter "AncestorApgroupId" is required');
    }

    return this.request('ListBriefConfigByAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchName - searchName. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listBusinessDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListBusinessDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listBusinesses(params = {}, options = {}) {
    return this.request('ListBusinesses', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ActionName - actionName. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {String} SearchName - searchName. optional.
   */
  listConfigByAction(params = {}, options = {}) {
    return this.request('ListConfigByAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {Long} ApgroupId - apgroupId. required.
   * @param {Integer} ColCnt - colCnt. required.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchName - searchName. optional.
   */
  listGroupApBriefConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    if (!hasOwnProperty(params, 'ColCnt')) {
      throw new TypeError('parameter "ColCnt" is required');
    }

    return this.request('ListGroupApBriefConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchTempName - searchTempName. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   */
  listPageConfigTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    return this.request('ListPageConfigTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchTempName - searchTempName. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listPortalTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListPortalTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {String} SearchUserMac - searchUserMac. optional.
   * @param {String} SearchSensorName - searchSensorName. optional.
   * @param {String} SearchSensorMac - searchSensorMac. optional.
   */
  listProbeinfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListProbeinfo', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {RepeatList} Gids - gids. optional.
   */
  listShopByGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('ListShopByGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} SearchApName - searchApName. optional.
   * @param {String} SearchSsid - searchSsid. optional.
   * @param {String} SearchUsername - searchUsername. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listStaOnoffLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListStaOnoffLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   * @param {String} SearchMac - searchMac. optional.
   * @param {String} SearchIp - searchIp. optional.
   * @param {String} SearchProtocal - searchProtocal. optional.
   * @param {String} SearchSsid - searchSsid. optional.
   * @param {String} SearchUsername - searchUsername. optional.
   * @param {String} SearchApName - searchApName. optional.
   * @param {String} SearchGroupName - searchGroupName. optional.
   * @param {Integer} SearchStatus - searchStatus. optional.
   * @param {String} SearchDescription - searchDescription. optional.
   */
  listStaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListStaStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {Long} SearchUid - searchUid. optional.
   */
  listSubAccountPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    return this.request('ListSubAccountPermission', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  listSubAccountPermissionFds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('ListSubAccountPermissionFds', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} State - state. optional.
   */
  listUBusiness(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('ListUBusiness', params, options);
  }

  /**
   * @param {Long} Sid - sid. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  listUDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('ListUDevice', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Gid - gid. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {String} Name - name. optional.
   */
  listUShop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('ListUShop', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  listUShopGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('ListUShopGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SearchEmail - searchEmail. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   * @param {String} OrderCol - orderCol. required.
   * @param {String} OrderDir - orderDir. required.
   */
  listUmengPagePermission4Root(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    if (!hasOwnProperty(params, 'OrderCol')) {
      throw new TypeError('parameter "OrderCol" is required');
    }

    if (!hasOwnProperty(params, 'OrderDir')) {
      throw new TypeError('parameter "OrderDir" is required');
    }

    return this.request('ListUmengPagePermission4Root', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} Length - length. required.
   */
  listUpgradeImg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    return this.request('ListUpgradeImg', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} PagePermission - pagePermission. required.
   * @param {RepeatList} BusinessIds - businessIds. required.
   * @param {RepeatList} ShopIds - shopIds. optional.
   * @param {RepeatList} ShopGroupIds - shopGroupIds. optional.
   */
  modifySubAccountPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PagePermission')) {
      throw new TypeError('parameter "PagePermission" is required');
    }

    if (!hasOwnProperty(params, 'BusinessIds')) {
      throw new TypeError('parameter "BusinessIds" is required');
    }

    return this.request('ModifySubAccountPermission', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Long} Uid - uid. required.
   * @param {String} PagePermission - pagePermission. required.
   * @param {RepeatList} BusinessIds - businessIds. required.
   * @param {RepeatList} ShopIds - shopIds. required.
   * @param {RepeatList} ShopGroupIds - shopGroupIds. optional.
   */
  modifySubAccountPermissionFds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'PagePermission')) {
      throw new TypeError('parameter "PagePermission" is required');
    }

    if (!hasOwnProperty(params, 'BusinessIds')) {
      throw new TypeError('parameter "BusinessIds" is required');
    }

    if (!hasOwnProperty(params, 'ShopIds')) {
      throw new TypeError('parameter "ShopIds" is required');
    }

    return this.request('ModifySubAccountPermissionFds', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  oemFlowrateAnalyse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('OemFlowrateAnalyse', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  oemFlowrateIntelligent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('OemFlowrateIntelligent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  oemFlowrateMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('OemFlowrateMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemFlowrateOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemFlowrateOverview', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemFlowrateRanking(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemFlowrateRanking', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  oemHeatLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('OemHeatLine', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  oemHeatMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('OemHeatMap', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  oemHeatSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('OemHeatSetting', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemMarketingCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemMarketingCustomer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemMarketingPotential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemMarketingPotential', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemMarketingSettingData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemMarketingSettingData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemSitingContrast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemSitingContrast', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   */
  oemSitingSelction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OemSitingSelction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. required.
   * @param {Integer} Disabled - disabled. required.
   */
  onoffGroupApRadio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    if (!hasOwnProperty(params, 'Disabled')) {
      throw new TypeError('parameter "Disabled" is required');
    }

    return this.request('OnoffGroupApRadio', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  peripheryAnalyse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('PeripheryAnalyse', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TraceId - traceId. required.
   * @param {String} ProduceParameter - produceParameter. required.
   */
  produceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'ProduceParameter')) {
      throw new TypeError('parameter "ProduceParameter" is required');
    }

    return this.request('ProduceInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   * @param {Integer} DataType - dataType. optional.
   * @param {String} BeginDate - beginDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  profileBase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ProfileBase', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   * @param {Integer} DataType - dataType. optional.
   * @param {String} BeginDate - beginDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  profileConsume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ProfileConsume', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   * @param {Integer} DataType - dataType. optional.
   * @param {String} BeginDate - beginDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  profileDistrict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ProfileDistrict', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {Long} Idtype - idType. required.
   * @param {String} BeginMonth - beginMonth. required.
   * @param {String} EndMonth - endMonth. required.
   */
  profileHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'Idtype')) {
      throw new TypeError('parameter "Idtype" is required');
    }

    if (!hasOwnProperty(params, 'BeginMonth')) {
      throw new TypeError('parameter "BeginMonth" is required');
    }

    if (!hasOwnProperty(params, 'EndMonth')) {
      throw new TypeError('parameter "EndMonth" is required');
    }

    return this.request('ProfileHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {Long} Idtype - idType. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   */
  profileHistoryList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'Idtype')) {
      throw new TypeError('parameter "Idtype" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('ProfileHistoryList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   * @param {Integer} DataType - dataType. optional.
   * @param {String} BeginDate - beginDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  profileMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ProfileMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {Long} Idtype - idType. required.
   * @param {String} Tag - tag. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} AreaNumber - areaNumber. optional.
   * @param {Integer} AppType - appType. optional.
   */
  profileTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'Idtype')) {
      throw new TypeError('parameter "Idtype" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ProfileTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   * @param {Integer} DataType - dataType. optional.
   * @param {String} BeginDate - beginDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  profileTrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ProfileTrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  putOssFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('PutOssFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} ApList - apList. required.
   * @param {Integer} TimeCycleNum - timeCycleNum. required.
   */
  queryRenewPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApList')) {
      throw new TypeError('parameter "ApList" is required');
    }

    if (!hasOwnProperty(params, 'TimeCycleNum')) {
      throw new TypeError('parameter "TimeCycleNum" is required');
    }

    return this.request('QueryRenewPrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  repairAp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('RepairAp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  repairGroupAp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('RepairGroupAp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  reportDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ReportDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  reportHour(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ReportHour', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  reportMinute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ReportMinute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   */
  reportRealtime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    return this.request('ReportRealtime', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  reportZoneDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ReportZoneDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  reportZoneHour(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ReportZoneHour', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   * @param {String} BeginDate - beginDate. required.
   * @param {String} EndDate - endDate. required.
   */
  reportZoneMinute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    if (!hasOwnProperty(params, 'BeginDate')) {
      throw new TypeError('parameter "BeginDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ReportZoneMinute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Agsid - agsid. required.
   */
  reportZoneRealtime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Agsid')) {
      throw new TypeError('parameter "Agsid" is required');
    }

    return this.request('ReportZoneRealtime', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  resetAp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ResetAp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  resetApConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ResetApConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TraceId - traceId. required.
   * @param {String} SpMsg - spMsg. required.
   */
  resumeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'SpMsg')) {
      throw new TypeError('parameter "SpMsg" is required');
    }

    return this.request('ResumeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  saveAccountConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('SaveAccountConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {Integer} EchoInt - echoInt. required.
   * @param {String} Country - country. required.
   * @param {String} Dai - dai. optional.
   * @param {String} LogIp - logIp. optional.
   * @param {Integer} LogLevel - logLevel. optional.
   * @param {String} Description - description. optional.
   * @param {Long} ApAssetId - apAssetId. required.
   * @param {String} Mac - mac. optional.
   * @param {Integer} Scan - scan. required.
   */
  saveApConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'EchoInt')) {
      throw new TypeError('parameter "EchoInt" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'ApAssetId')) {
      throw new TypeError('parameter "ApAssetId" is required');
    }

    if (!hasOwnProperty(params, 'Scan')) {
      throw new TypeError('parameter "Scan" is required');
    }

    return this.request('SaveApConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  saveApMapInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('SaveApMapInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Boolean} PortalStatus - portalStatus. required.
   * @param {String} PortalUrl - portalUrl. required.
   * @param {String} AuthKey - authKey. optional.
   * @param {String} AuthSecret - authSecret. optional.
   * @param {String} WebAuthUrl - webAuthUrl. optional.
   * @param {String} Whitelist - whitelist. optional.
   * @param {String} CheckUrl - checkUrl. optional.
   * @param {Integer} Network - network. optional.
   * @param {Long} ApConfigId - apConfigId. required.
   */
  saveApPortalConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PortalStatus')) {
      throw new TypeError('parameter "PortalStatus" is required');
    }

    if (!hasOwnProperty(params, 'PortalUrl')) {
      throw new TypeError('parameter "PortalUrl" is required');
    }

    if (!hasOwnProperty(params, 'ApConfigId')) {
      throw new TypeError('parameter "ApConfigId" is required');
    }

    return this.request('SaveApPortalConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Hwmode - hwmode. required.
   * @param {String} Htmode - htmode. required.
   * @param {Integer} Channel - channel. required.
   * @param {Integer} Txpower - txpower. required.
   * @param {Integer} BeaconInt - beaconInt. required.
   * @param {Integer} Rts - rts. required.
   * @param {Integer} Frag - frag. required.
   * @param {Integer} Shortgi - shortgi. required.
   * @param {Integer} Probereq - probereq. required.
   * @param {Integer} Noscan - noscan. required.
   * @param {Integer} Minrate - minrate. required.
   * @param {Integer} BcastRate - bcastRate. required.
   * @param {Integer} McastRate - mcastRate. optional.
   * @param {Integer} Uapsd - uapsd. required.
   * @param {Integer} Disabled - disabled. required.
   * @param {Integer} RadioIndex - radioIndex. required.
   * @param {String} RequireMode - requireMode. optional.
   * @param {String} Mac - mac. optional.
   * @param {Integer} InstantlyEffective - instantlyEffective. optional.
   */
  saveApRadioConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Hwmode')) {
      throw new TypeError('parameter "Hwmode" is required');
    }

    if (!hasOwnProperty(params, 'Htmode')) {
      throw new TypeError('parameter "Htmode" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'Txpower')) {
      throw new TypeError('parameter "Txpower" is required');
    }

    if (!hasOwnProperty(params, 'BeaconInt')) {
      throw new TypeError('parameter "BeaconInt" is required');
    }

    if (!hasOwnProperty(params, 'Rts')) {
      throw new TypeError('parameter "Rts" is required');
    }

    if (!hasOwnProperty(params, 'Frag')) {
      throw new TypeError('parameter "Frag" is required');
    }

    if (!hasOwnProperty(params, 'Shortgi')) {
      throw new TypeError('parameter "Shortgi" is required');
    }

    if (!hasOwnProperty(params, 'Probereq')) {
      throw new TypeError('parameter "Probereq" is required');
    }

    if (!hasOwnProperty(params, 'Noscan')) {
      throw new TypeError('parameter "Noscan" is required');
    }

    if (!hasOwnProperty(params, 'Minrate')) {
      throw new TypeError('parameter "Minrate" is required');
    }

    if (!hasOwnProperty(params, 'BcastRate')) {
      throw new TypeError('parameter "BcastRate" is required');
    }

    if (!hasOwnProperty(params, 'Uapsd')) {
      throw new TypeError('parameter "Uapsd" is required');
    }

    if (!hasOwnProperty(params, 'Disabled')) {
      throw new TypeError('parameter "Disabled" is required');
    }

    if (!hasOwnProperty(params, 'RadioIndex')) {
      throw new TypeError('parameter "RadioIndex" is required');
    }

    return this.request('SaveApRadioConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Ssid - ssid. required.
   * @param {Long} ApAssetId - apAssetId. required.
   * @param {String} EncKey - encKey. optional.
   * @param {Integer} SsidLb - ssidLb. required.
   * @param {Integer} DisassocWeakRssi - disassocWeakRssi. required.
   * @param {Integer} IgnoreWeakProbe - ignoreWeakProbe. required.
   * @param {String} Encryption - encryption. required.
   * @param {Integer} Disabled - disabled. required.
   * @param {Integer} Maxassoc - maxassoc. required.
   * @param {Integer} Hidden - hidden. required.
   * @param {Integer} ShortPreamble - shortPreamble. required.
   * @param {Integer} DisassocLowAck - disassocLowAck. required.
   * @param {Integer} Isolate - isolate. required.
   * @param {Integer} Wmm - wmm. required.
   * @param {Integer} AuthCache - authCache. required.
   * @param {Integer} MaxInactivity - maxInactivity. required.
   * @param {Integer} Ieee80211w - ieee80211w. required.
   * @param {Integer} DynamicVlan - dynamicVlan. required.
   * @param {Integer} VlanDhcp - vlanDhcp. required.
   * @param {Integer} MulticastForward - multicastForward. required.
   * @param {Integer} Cir - cir. optional.
   * @param {Integer} Network - network. required.
   * @param {String} Mac - mac. required.
   * @param {Integer} RadioIndex - radioIndex. required.
   * @param {Integer} InstantlyEffective - instantlyEffective. optional.
   * @param {String} AuthServer - authServer. optional.
   * @param {Integer} AuthPort - authPort. optional.
   * @param {String} AuthSecret - authSecret. optional.
   * @param {String} AcctServer - acctServer. optional.
   * @param {Integer} AcctPort - acctPort. optional.
   * @param {String} AcctSecret - acctSecret. optional.
   * @param {String} SecondaryAuthServer - secondaryAuthServer. optional.
   * @param {Integer} SecondaryAuthPort - secondaryAuthPort. optional.
   * @param {String} SecondaryAuthSecret - secondaryAuthSecret. optional.
   * @param {String} SecondaryAcctServer - secondaryAcctServer. optional.
   * @param {Integer} SecondaryAcctPort - secondaryAcctPort. optional.
   * @param {String} SecondaryAcctSecret - secondaryAcctSecret. optional.
   * @param {String} Nasid - nasid. optional.
   * @param {String} Ownip - ownip. optional.
   * @param {String} DaeClient - daeClient. optional.
   * @param {Integer} DaePort - daePort. optional.
   * @param {String} DaeSecret - daeSecret. optional.
   */
  saveApRadioSsidConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ssid')) {
      throw new TypeError('parameter "Ssid" is required');
    }

    if (!hasOwnProperty(params, 'ApAssetId')) {
      throw new TypeError('parameter "ApAssetId" is required');
    }

    if (!hasOwnProperty(params, 'SsidLb')) {
      throw new TypeError('parameter "SsidLb" is required');
    }

    if (!hasOwnProperty(params, 'DisassocWeakRssi')) {
      throw new TypeError('parameter "DisassocWeakRssi" is required');
    }

    if (!hasOwnProperty(params, 'IgnoreWeakProbe')) {
      throw new TypeError('parameter "IgnoreWeakProbe" is required');
    }

    if (!hasOwnProperty(params, 'Encryption')) {
      throw new TypeError('parameter "Encryption" is required');
    }

    if (!hasOwnProperty(params, 'Disabled')) {
      throw new TypeError('parameter "Disabled" is required');
    }

    if (!hasOwnProperty(params, 'Maxassoc')) {
      throw new TypeError('parameter "Maxassoc" is required');
    }

    if (!hasOwnProperty(params, 'Hidden')) {
      throw new TypeError('parameter "Hidden" is required');
    }

    if (!hasOwnProperty(params, 'ShortPreamble')) {
      throw new TypeError('parameter "ShortPreamble" is required');
    }

    if (!hasOwnProperty(params, 'DisassocLowAck')) {
      throw new TypeError('parameter "DisassocLowAck" is required');
    }

    if (!hasOwnProperty(params, 'Isolate')) {
      throw new TypeError('parameter "Isolate" is required');
    }

    if (!hasOwnProperty(params, 'Wmm')) {
      throw new TypeError('parameter "Wmm" is required');
    }

    if (!hasOwnProperty(params, 'AuthCache')) {
      throw new TypeError('parameter "AuthCache" is required');
    }

    if (!hasOwnProperty(params, 'MaxInactivity')) {
      throw new TypeError('parameter "MaxInactivity" is required');
    }

    if (!hasOwnProperty(params, 'Ieee80211w')) {
      throw new TypeError('parameter "Ieee80211w" is required');
    }

    if (!hasOwnProperty(params, 'DynamicVlan')) {
      throw new TypeError('parameter "DynamicVlan" is required');
    }

    if (!hasOwnProperty(params, 'VlanDhcp')) {
      throw new TypeError('parameter "VlanDhcp" is required');
    }

    if (!hasOwnProperty(params, 'MulticastForward')) {
      throw new TypeError('parameter "MulticastForward" is required');
    }

    if (!hasOwnProperty(params, 'Network')) {
      throw new TypeError('parameter "Network" is required');
    }

    if (!hasOwnProperty(params, 'Mac')) {
      throw new TypeError('parameter "Mac" is required');
    }

    if (!hasOwnProperty(params, 'RadioIndex')) {
      throw new TypeError('parameter "RadioIndex" is required');
    }

    return this.request('SaveApRadioSsidConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApConfigId - apConfigId. required.
   * @param {String} JsonData - jsonData. optional.
   */
  saveApScanConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApConfigId')) {
      throw new TypeError('parameter "ApConfigId" is required');
    }

    return this.request('SaveApScanConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {Integer} EchoInt - echoInt. required.
   * @param {String} Country - country. required.
   * @param {String} Dai - dai. optional.
   * @param {String} LogIp - logIp. optional.
   * @param {Integer} LogLevel - logLevel. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} Scan - scan. optional.
   */
  saveApgroupConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'EchoInt')) {
      throw new TypeError('parameter "EchoInt" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    return this.request('SaveApgroupConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApgroupId - apgroupId. required.
   * @param {String} JsonData - jsonData. optional.
   */
  saveApgroupScanConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApgroupId')) {
      throw new TypeError('parameter "ApgroupId" is required');
    }

    return this.request('SaveApgroupScanConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  saveApgroupSsidConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('SaveApgroupSsidConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  saveGroupApRadioConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('SaveGroupApRadioConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} TempName - tempName. required.
   * @param {String} TempDesc - tempDesc. required.
   * @param {Integer} TempType - tempType. required.
   * @param {String} TempPermission - tempPermission. required.
   */
  savePageConfigTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TempName')) {
      throw new TypeError('parameter "TempName" is required');
    }

    if (!hasOwnProperty(params, 'TempDesc')) {
      throw new TypeError('parameter "TempDesc" is required');
    }

    if (!hasOwnProperty(params, 'TempType')) {
      throw new TypeError('parameter "TempType" is required');
    }

    if (!hasOwnProperty(params, 'TempPermission')) {
      throw new TypeError('parameter "TempPermission" is required');
    }

    return this.request('SavePageConfigTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonData - jsonData. required.
   */
  savePortalConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    return this.request('SavePortalConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} TempName - tempName. required.
   * @param {Long} OssFileId - ossFileId. optional.
   * @param {String} TextAlign - textAlign. required.
   * @param {String} TextColor - textColor. required.
   * @param {String} TextContent - textContent. optional.
   */
  savePortalTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TempName')) {
      throw new TypeError('parameter "TempName" is required');
    }

    if (!hasOwnProperty(params, 'TextAlign')) {
      throw new TypeError('parameter "TextAlign" is required');
    }

    if (!hasOwnProperty(params, 'TextColor')) {
      throw new TypeError('parameter "TextColor" is required');
    }

    return this.request('SavePortalTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} ApiUrl - apiUrl. required.
   * @param {String} ParamGenScript - paramGenScript. required.
   * @param {Integer} Type - type. required.
   * @param {String} HttpMethod - httpMethod. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {RepeatList} ResourceIds - resourceIds. optional.
   */
  saveProbeDataSubscriber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiUrl')) {
      throw new TypeError('parameter "ApiUrl" is required');
    }

    if (!hasOwnProperty(params, 'ParamGenScript')) {
      throw new TypeError('parameter "ParamGenScript" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'HttpMethod')) {
      throw new TypeError('parameter "HttpMethod" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('SaveProbeDataSubscriber', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Description - description. optional.
   */
  saveStaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SaveStaStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {Long} PagePermission - pagePermission. required.
   * @param {String} GsPermission - gsPermission. optional.
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} Bid - bid. optional.
   */
  saveUmengPagePermission4Root(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PagePermission')) {
      throw new TypeError('parameter "PagePermission" is required');
    }

    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    return this.request('SaveUmengPagePermission4Root', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} MacList - macList. required.
   * @param {String} Command - command. required.
   */
  sendCommandByMac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MacList')) {
      throw new TypeError('parameter "MacList" is required');
    }

    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    return this.request('SendCommandByMac', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Operation - operation. required.
   * @param {RepeatList} MacList - macList. required.
   */
  setScanMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    if (!hasOwnProperty(params, 'MacList')) {
      throw new TypeError('parameter "MacList" is required');
    }

    return this.request('SetScanMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApModelId - apModelId. required.
   * @param {String} ImgAddr - imgAddr. required.
   * @param {String} ImgVersion - imgVersion. required.
   * @param {String} Comment - comment. required.
   */
  setUpgradeImgByModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApModelId')) {
      throw new TypeError('parameter "ApModelId" is required');
    }

    if (!hasOwnProperty(params, 'ImgAddr')) {
      throw new TypeError('parameter "ImgAddr" is required');
    }

    if (!hasOwnProperty(params, 'ImgVersion')) {
      throw new TypeError('parameter "ImgVersion" is required');
    }

    if (!hasOwnProperty(params, 'Comment')) {
      throw new TypeError('parameter "Comment" is required');
    }

    return this.request('SetUpgradeImgByModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  shopActionCustome(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ShopActionCustome', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  shopActionReturning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ShopActionReturning', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  shopCamera(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ShopCamera', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {String} ShopName - sname. required.
   * @param {Integer} ShopTopType - stoptype. required.
   * @param {Integer} ShopType - stype. required.
   * @param {Integer} ShopSubtype - ssubtype. optional.
   * @param {Integer} ShopArea - sarea. required.
   * @param {String} ShopManager - smanager. required.
   * @param {String} ShopTel - stel. required.
   * @param {String} ShopProvince - sprovince. required.
   * @param {String} ShopCity - scity. required.
   * @param {String} ShopAddress - saddress. required.
   * @param {String} ShopBusinessHours - sbusinessHours. required.
   * @param {String} ShopCoordinate - scoordinate. required.
   * @param {String} ShopBrand - sbrand. optional.
   * @param {String} ShopRemarks - sremarks. optional.
   * @param {Integer} Warn - warn. optional.
   * @param {String} WarnEmail - warnEmail. optional.
   * @param {String} WarnpHone - warnPhone. optional.
   * @param {Integer} ShopCloseWarn - closeWarn. optional.
   */
  shopCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'ShopName')) {
      throw new TypeError('parameter "ShopName" is required');
    }

    if (!hasOwnProperty(params, 'ShopTopType')) {
      throw new TypeError('parameter "ShopTopType" is required');
    }

    if (!hasOwnProperty(params, 'ShopType')) {
      throw new TypeError('parameter "ShopType" is required');
    }

    if (!hasOwnProperty(params, 'ShopArea')) {
      throw new TypeError('parameter "ShopArea" is required');
    }

    if (!hasOwnProperty(params, 'ShopManager')) {
      throw new TypeError('parameter "ShopManager" is required');
    }

    if (!hasOwnProperty(params, 'ShopTel')) {
      throw new TypeError('parameter "ShopTel" is required');
    }

    if (!hasOwnProperty(params, 'ShopProvince')) {
      throw new TypeError('parameter "ShopProvince" is required');
    }

    if (!hasOwnProperty(params, 'ShopCity')) {
      throw new TypeError('parameter "ShopCity" is required');
    }

    if (!hasOwnProperty(params, 'ShopAddress')) {
      throw new TypeError('parameter "ShopAddress" is required');
    }

    if (!hasOwnProperty(params, 'ShopBusinessHours')) {
      throw new TypeError('parameter "ShopBusinessHours" is required');
    }

    if (!hasOwnProperty(params, 'ShopCoordinate')) {
      throw new TypeError('parameter "ShopCoordinate" is required');
    }

    return this.request('ShopCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {String} Name - name. required.
   * @param {String} Stime - stime. required.
   * @param {String} Etime - etime. required.
   */
  shopCreatemarketing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Stime')) {
      throw new TypeError('parameter "Stime" is required');
    }

    if (!hasOwnProperty(params, 'Etime')) {
      throw new TypeError('parameter "Etime" is required');
    }

    return this.request('ShopCreatemarketing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Integer} Warn - warn. optional.
   * @param {String} WarnEmail - warnEmail. optional.
   * @param {String} WarnPhone - warnPhone. optional.
   * @param {Integer} CloseWarn - closeWarn. optional.
   */
  shopDataAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('ShopDataAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   */
  shopDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('ShopDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Long} Id - id. required.
   */
  shopDeletemarketing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ShopDeletemarketing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   */
  shopGetfiltermac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('ShopGetfiltermac', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   */
  shopGetredress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('ShopGetredress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} ShopIds - shopids. required.
   * @param {String} Description - description. optional.
   */
  shopGroupCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ShopIds')) {
      throw new TypeError('parameter "ShopIds" is required');
    }

    return this.request('ShopGroupCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gid - gid. required.
   */
  shopGroupDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    return this.request('ShopGroupDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gid - gid. required.
   */
  shopGroupInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    return this.request('ShopGroupInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   */
  shopGroupShowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('ShopGroupShowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gid - gid. required.
   * @param {String} Name - name. optional.
   * @param {String} ShopIds - shopids. optional.
   * @param {String} Description - description. optional.
   */
  shopGroupUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    return this.request('ShopGroupUpdate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   */
  shopInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('ShopInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {String} Name - name. optional.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   */
  shopMarketingList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('ShopMarketingList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  shopOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('ShopOverview', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {String} Mac - mac. required.
   */
  shopSetfiltermac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Mac')) {
      throw new TypeError('parameter "Mac" is required');
    }

    return this.request('ShopSetfiltermac', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {Integer} State - state. required.
   * @param {Integer} Filterstate - filterstate. required.
   * @param {Integer} Maxstoptime - maxstoptime. required.
   * @param {Integer} Minstoptime - minstoptime. required.
   * @param {Integer} Clerk - clerk. required.
   * @param {Integer} Filterclose - filterclose. required.
   * @param {Integer} Crowdfixed - crowdfixed. required.
   * @param {String} Holiday - holiday. required.
   * @param {String} Hnum - hnum. required.
   * @param {String} Workday - workday. required.
   * @param {String} Wnum - wnum. required.
   */
  shopSetredress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Filterstate')) {
      throw new TypeError('parameter "Filterstate" is required');
    }

    if (!hasOwnProperty(params, 'Maxstoptime')) {
      throw new TypeError('parameter "Maxstoptime" is required');
    }

    if (!hasOwnProperty(params, 'Minstoptime')) {
      throw new TypeError('parameter "Minstoptime" is required');
    }

    if (!hasOwnProperty(params, 'Clerk')) {
      throw new TypeError('parameter "Clerk" is required');
    }

    if (!hasOwnProperty(params, 'Filterclose')) {
      throw new TypeError('parameter "Filterclose" is required');
    }

    if (!hasOwnProperty(params, 'Crowdfixed')) {
      throw new TypeError('parameter "Crowdfixed" is required');
    }

    if (!hasOwnProperty(params, 'Holiday')) {
      throw new TypeError('parameter "Holiday" is required');
    }

    if (!hasOwnProperty(params, 'Hnum')) {
      throw new TypeError('parameter "Hnum" is required');
    }

    if (!hasOwnProperty(params, 'Workday')) {
      throw new TypeError('parameter "Workday" is required');
    }

    if (!hasOwnProperty(params, 'Wnum')) {
      throw new TypeError('parameter "Wnum" is required');
    }

    return this.request('ShopSetredress', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   * @param {Long} Gid - gid. optional.
   * @param {String} Address - address. optional.
   * @param {String} Dirc - dirc. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} ShopStatus - shopStatus. optional.
   */
  shopShowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('ShopShowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Sid - sid. required.
   * @param {String} ShopName - sname. optional.
   * @param {Integer} ShopTopType - stoptype. optional.
   * @param {Integer} ShopType - stype. optional.
   * @param {Integer} ShopSubtype - ssubtype. optional.
   * @param {Integer} ShopArea - sarea. optional.
   * @param {String} ShopManager - smanager. optional.
   * @param {String} ShopTel - stel. optional.
   * @param {String} ShopProvince - sprovince. optional.
   * @param {String} ShopCity - scity. optional.
   * @param {String} ShopAddress - saddress. optional.
   * @param {String} ShopBusinessHours - sbusinessHours. optional.
   * @param {String} ShopCoordinate - scoordinate. optional.
   * @param {String} ShopBrand - sbrand. optional.
   * @param {String} ShopRemarks - sremarks. optional.
   * @param {Integer} Warn - warn. optional.
   * @param {String} WarnEmail - warnEmail. optional.
   * @param {String} WarnpHone - warnPhone. optional.
   * @param {Integer} ShopCloseWarn - closeWarn. optional.
   */
  shopUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('ShopUpdate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} ObjectName - objectName. required.
   * @param {Integer} ChunkIndex - chunkIndex. optional.
   * @param {Integer} ChunkCnt - chunkCnt. optional.
   * @param {String} UploadId - uploadId. optional.
   */
  upLoadMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'ObjectName')) {
      throw new TypeError('parameter "ObjectName" is required');
    }

    return this.request('UpLoadMap', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Manager - manager. required.
   * @param {Integer} Province - province. required.
   * @param {Integer} City - city. required.
   * @param {String} Address - address. required.
   */
  updateUBusiness(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Manager')) {
      throw new TypeError('parameter "Manager" is required');
    }

    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    return this.request('UpdateUBusiness', params, options);
  }

  /**
   * @param {Long} Did - did. required.
   * @param {Long} Sid - sid. required.
   * @param {String} Name - name. required.
   * @param {String} Position - position. optional.
   */
  updateUDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Did')) {
      throw new TypeError('parameter "Did" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateUDevice', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Sid - sid. required.
   * @param {String} Name - name. optional.
   * @param {Integer} Area - area. optional.
   * @param {String} Manager - manager. optional.
   * @param {String} Phone - phone. optional.
   * @param {Integer} Region - region. optional.
   * @param {Integer} Province - province. optional.
   * @param {Integer} City - city. optional.
   * @param {Integer} District - district. optional.
   * @param {String} Address - address. optional.
   * @param {String} OpenTime - openTime. optional.
   * @param {Integer} Filter - filter. optional.
   * @param {String} Longitude - longitude. optional.
   * @param {String} Latitude - latitude. optional.
   * @param {String} MapId - mapId. optional.
   */
  updateUShop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('UpdateUShop', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} Gid - gid. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} ShopIds - shopIds. required.
   */
  updateUShopGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'ShopIds')) {
      throw new TypeError('parameter "ShopIds" is required');
    }

    return this.request('UpdateUShopGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} Ids - ids. required.
   */
  upgradeAP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('UpgradeAP', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} Ids - ids. required.
   */
  upgradeAPGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('UpgradeAPGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Gsid - gsid. required.
   */
  userAnalyse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Gsid')) {
      throw new TypeError('parameter "Gsid" is required');
    }

    return this.request('UserAnalyse', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} UploadFile - uploadfile. required.
   */
  userDataCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'UploadFile')) {
      throw new TypeError('parameter "UploadFile" is required');
    }

    return this.request('UserDataCreate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {Long} Iid - iid. required.
   */
  userDataDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Iid')) {
      throw new TypeError('parameter "Iid" is required');
    }

    return this.request('UserDataDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {Long} Iid - iid. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Page - page. required.
   * @param {Integer} Per - per. required.
   */
  userDataShowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Per')) {
      throw new TypeError('parameter "Per" is required');
    }

    return this.request('UserDataShowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Bid - bid. required.
   * @param {Long} Iid - iid. required.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} UploadFile - uploadfile. optional.
   */
  userDataUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Iid')) {
      throw new TypeError('parameter "Iid" is required');
    }

    return this.request('UserDataUpdate', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TraceId - traceId. required.
   * @param {String} SpMsg - spMsg. required.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'SpMsg')) {
      throw new TypeError('parameter "SpMsg" is required');
    }

    return this.request('releaseInstance', params, options);
  }

}

module.exports = Client;
