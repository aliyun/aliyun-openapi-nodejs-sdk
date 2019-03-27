
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-04-08';
    super(config);
  }

  /**
   * @param {String} PK - aliyunPk. required.
   * @param {String} BidType - bidType. optional.
   * @param {String} Phone - phone. required.
   * @param {String} Name - name. required.
   * @param {String} LicenseType - certType. required.
   * @param {String} LicenseNumber - certNumber. required.
   * @param {Boolean} IsEnterprise - isEnterprise. required.
   */
  addIdentityCertifiedForBidUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'LicenseType')) {
      throw new TypeError('parameter "LicenseType" is required');
    }

    if (!hasOwnProperty(params, 'LicenseNumber')) {
      throw new TypeError('parameter "LicenseNumber" is required');
    }

    if (!hasOwnProperty(params, 'IsEnterprise')) {
      throw new TypeError('parameter "IsEnterprise" is required');
    }

    return this.request('AddIdentityCertifiedForBidUser', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   */
  addIdentityCertifiedLabel(params = {}, options = {}) {
    return this.request('AddIdentityCertifiedLabel', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   * @param {String} LabelName - labelName. optional.
   * @param {String} LabelSeries - labelSeries. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Organization - organization. optional.
   * @param {String} EndTime - endTime. optional.
   */
  addLabel(params = {}, options = {}) {
    return this.request('AddLabel', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   * @param {String} Label - label. optional.
   * @param {String} LabelSeries - labelSeries. optional.
   * @param {String} EndTime - endTime. optional.
   */
  addLabelForBid(params = {}, options = {}) {
    return this.request('AddLabelForBid', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. required.
   * @param {String} email - email. optional.
   * @param {String} phone - phone. optional.
   * @param {String} trueName - trueName. optional.
   * @param {String} certType - certType. optional.
   * @param {String} certNumber - certNumber. optional.
   */
  addOrUpdateBidUserInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('AddOrUpdateBidUserInfo', params, options);
  }

  /**
   * @param {RepeatList} PkList - pkList. required.
   */
  batchGetAliyunIdByAliyunPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PkList')) {
      throw new TypeError('parameter "PkList" is required');
    }

    return this.request('BatchGetAliyunIdByAliyunPk', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   * @param {String} LabelName - labelName. optional.
   * @param {String} LabelSeries - labelSeries. optional.
   */
  checkLabel(params = {}, options = {}) {
    return this.request('CheckLabel', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   * @param {String} Label - label. optional.
   * @param {String} LabelSeries - labelSeries. optional.
   */
  checkLabelForBid(params = {}, options = {}) {
    return this.request('CheckLabelForBid', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   * @param {String} LabelName - labelName. optional.
   * @param {String} LabelSeries - labelSeries. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Organization - organization. optional.
   */
  deleteLabel(params = {}, options = {}) {
    return this.request('DeleteLabel', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   * @param {String} Label - label. optional.
   * @param {String} LabelSeries - labelSeries. optional.
   */
  deleteLabelForBid(params = {}, options = {}) {
    return this.request('DeleteLabelForBid', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   */
  findServiceManager(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('FindServiceManager', params, options);
  }

  /**
   * @param {String} AliyunId - aliyunId. required.
   */
  getAliyunPkByAliyunId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    return this.request('GetAliyunPkByAliyunId', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. required.
   * @param {String} BidType - bidType. optional.
   * @param {String} phone - phone. optional.
   */
  modifyPhoneForBidUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('ModifyPhoneForBidUser', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. required.
   * @param {String} BidType - bidType. optional.
   */
  queryBidUserCertifiedInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('QueryBidUserCertifiedInfo', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. required.
   */
  queryBidUserInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('QueryBidUserInfo', params, options);
  }

  /**
   * @param {String} LabelSeries - labelSeries. optional.
   */
  queryCustomerLabel(params = {}, options = {}) {
    return this.request('QueryCustomerLabel', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. required.
   * @param {String} BidType - bidType. optional.
   */
  removeIdentityCertifiedForBidUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('RemoveIdentityCertifiedForBidUser', params, options);
  }

  /**
   * @param {String} PK - aliyunPk. optional.
   */
  removeIdentityCertifiedLabel(params = {}, options = {}) {
    return this.request('RemoveIdentityCertifiedLabel', params, options);
  }

}

module.exports = Client;
