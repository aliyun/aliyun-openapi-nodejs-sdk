
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-01';
    super(config);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  batchCreateYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('BatchCreateYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  billBatchUseYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('BillBatchUseYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  confirmYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('ConfirmYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  createYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('CreateYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  createYouhuiTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('CreateYouhuiTemplate', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  deleteYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('DeleteYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  freezeYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('FreezeYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getYouhuiList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetYouhuiList', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {Long} Param - param. required.
   */
  getYouhuiTemplateById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('GetYouhuiTemplateById', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getYouhuiTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetYouhuiTemplateList', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  hasAvailableYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('HasAvailableYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  queryAvailableYouhuiList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('QueryAvailableYouhuiList', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryYouhuiJourPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryYouhuiJourPage', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  refundYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('RefundYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  unfreezeYouhui(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('UnfreezeYouhui', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  updateYouhuiTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('UpdateYouhuiTemplate', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} IdempotentToken - idempotentToken. optional.
   * @param {String} Param - param. required.
   */
  updateYouhuiTemplateStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('UpdateYouhuiTemplateStatus', params, options);
  }

}

module.exports = Client;
