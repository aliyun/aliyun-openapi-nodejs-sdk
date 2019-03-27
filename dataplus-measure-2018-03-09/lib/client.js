
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-09';
    super(config);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} AliyunPk - aliyunPk. required.
   */
  allRegionInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    return this.request('AllRegionInstances', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. required.
   * @param {String} ComponentCode - componentCode. required.
   */
  canComponentCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    if (!hasOwnProperty(params, 'ComponentCode')) {
      throw new TypeError('parameter "ComponentCode" is required');
    }

    return this.request('CanComponentCall', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. required.
   */
  canUseService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    return this.request('CanUseService', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} AliyunPK - aliyunPK. required.
   */
  canUseServiceByAliyunPK(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'AliyunPK')) {
      throw new TypeError('parameter "AliyunPK" is required');
    }

    return this.request('CanUseServiceByAliyunPK', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. required.
   * @param {String} SpecCode - specCode. required.
   */
  canUseSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    if (!hasOwnProperty(params, 'SpecCode')) {
      throw new TypeError('parameter "SpecCode" is required');
    }

    return this.request('CanUseSpec', params, options);
  }

  /**
   * @param {String} ServiceCode - service_code. required.
   * @param {String} OrgCode - org_code. required.
   */
  dpsCanUseService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    return this.request('DpsCanUseService', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. required.
   * @param {String} ComponentCode - componentCode. required.
   */
  getMeasureQuantity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    if (!hasOwnProperty(params, 'ComponentCode')) {
      throw new TypeError('parameter "ComponentCode" is required');
    }

    return this.request('GetMeasureQuantity', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. required.
   * @param {String} ComponentCodes - componentCodes. required.
   * @param {String} Dates - dates. optional.
   */
  getMeasureQuantityByDate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    if (!hasOwnProperty(params, 'ComponentCodes')) {
      throw new TypeError('parameter "ComponentCodes" is required');
    }

    return this.request('GetMeasureQuantityByDate', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} AliyunPk - aliyunPk. required.
   */
  instance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    return this.request('Instance', params, options);
  }

  /**
   * @param {String} MeasureObject - measureObjectString. required.
   */
  postMeasure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MeasureObject')) {
      throw new TypeError('parameter "MeasureObject" is required');
    }

    options.method = 'POST';
    return this.request('PostMeasure', params, options);
  }

  /**
   * @param {String} MeasureObject - measureObjectString. required.
   */
  postMeasureFlag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MeasureObject')) {
      throw new TypeError('parameter "MeasureObject" is required');
    }

    options.method = 'POST';
    return this.request('PostMeasureFlag', params, options);
  }

  /**
   * @param {String} MeasureObject - measureObjectString. required.
   */
  preMeasure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MeasureObject')) {
      throw new TypeError('parameter "MeasureObject" is required');
    }

    options.method = 'POST';
    return this.request('PreMeasure', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. required.
   * @param {String} ComponentCode - componentCode. required.
   */
  quantityReset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'OrgCode')) {
      throw new TypeError('parameter "OrgCode" is required');
    }

    if (!hasOwnProperty(params, 'ComponentCode')) {
      throw new TypeError('parameter "ComponentCode" is required');
    }

    return this.request('QuantityReset', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   */
  queryAllSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('QueryAllSpec', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. optional.
   * @param {String} AliyunPk - aliyunPK. optional.
   */
  queryAllUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('QueryAllUrl', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   */
  queryBuyUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('QueryBuyUrl', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. optional.
   * @param {String} AliyunPk - aliyunPK. optional.
   */
  queryInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('QueryInstance', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. optional.
   * @param {String} AliyunPk - aliyunPK. optional.
   */
  queryRenewUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('QueryRenewUrl', params, options);
  }

  /**
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} OrgCode - orgCode. optional.
   * @param {String} AliyunPk - aliyunPK. optional.
   */
  queryUpgradeUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('QueryUpgradeUrl', params, options);
  }

}

module.exports = Client;
