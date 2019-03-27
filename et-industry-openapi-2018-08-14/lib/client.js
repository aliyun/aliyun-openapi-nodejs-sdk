
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-14';
    super(config);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {String} PartCodeOf3DModel - partCodeOf3DModel. optional.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcAssociatePart3DModelPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcAssociatePart3DModelPart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {String} PointCode - pointCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcAssociatePartPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'PointCode')) {
      throw new TypeError('parameter "PointCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcAssociatePartPoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} UrlOf3DModel - urlOf3DModel. optional.
   * @param {String} Uid - aliyunPk. required.
   */
  dvcCreateDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcCreateDevice', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} FactoryCode - factoryCode. required.
   * @param {String} LineCode - lineCode. required.
   * @param {String} DeviceInstanceName - deviceInstanceName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcCreateDeviceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryCode')) {
      throw new TypeError('parameter "FactoryCode" is required');
    }

    if (!hasOwnProperty(params, 'LineCode')) {
      throw new TypeError('parameter "LineCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceName')) {
      throw new TypeError('parameter "DeviceInstanceName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcCreateDeviceInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} FactoryName - factoryName. required.
   * @param {Float} Longitude - longitude. optional.
   * @param {Float} Latitude - latitude. optional.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcCreateFactory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryName')) {
      throw new TypeError('parameter "FactoryName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcCreateFactory', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} FactoryCode - factoryCode. required.
   * @param {String} LineName - lineName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcCreateLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryCode')) {
      throw new TypeError('parameter "FactoryCode" is required');
    }

    if (!hasOwnProperty(params, 'LineName')) {
      throw new TypeError('parameter "LineName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcCreateLine', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartName - partName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcCreatePart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartName')) {
      throw new TypeError('parameter "PartName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcCreatePart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PointName - pointName. required.
   * @param {String} PointValueType - pointValueType. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcCreatePoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PointName')) {
      throw new TypeError('parameter "PointName" is required');
    }

    if (!hasOwnProperty(params, 'PointValueType')) {
      throw new TypeError('parameter "PointValueType" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcCreatePoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeleteDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeleteDevice', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCode - deviceInstanceCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeleteDeviceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCode')) {
      throw new TypeError('parameter "DeviceInstanceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeleteDeviceInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} FactoryCode - factoryCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeleteFactory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryCode')) {
      throw new TypeError('parameter "FactoryCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeleteFactory', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} LineCode - lineCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeleteLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'LineCode')) {
      throw new TypeError('parameter "LineCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeleteLine', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeletePart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeletePart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {String} PartCodeOf3DModel - partCodeOf3DModel. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeletePart3DModelPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCodeOf3DModel')) {
      throw new TypeError('parameter "PartCodeOf3DModel" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeletePart3DModelPart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {String} PointCode - pointCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeletePartPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'PointCode')) {
      throw new TypeError('parameter "PointCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeletePartPoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PointCode - pointCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcDeletePoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PointCode')) {
      throw new TypeError('parameter "PointCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcDeletePoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcGetDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcGetDevice', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCode - deviceInstanceCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcGetDeviceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCode')) {
      throw new TypeError('parameter "DeviceInstanceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcGetDeviceInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} FactoryCode - factoryCode. required.
   * @param {Float} Longitude - longitude. optional.
   * @param {Float} Latitude - latitude. optional.
   * @param {Float} Uid - aliyunPk. required.
   */
  dvcGetFactoryDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryCode')) {
      throw new TypeError('parameter "FactoryCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcGetFactoryDetail', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} FactoryCode - factoryCode. required.
   * @param {String} LineCode - lineCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcGetLineDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryCode')) {
      throw new TypeError('parameter "FactoryCode" is required');
    }

    if (!hasOwnProperty(params, 'LineCode')) {
      throw new TypeError('parameter "LineCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcGetLineDetail', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcGetPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcGetPart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PointCode - pointCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcGetPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PointCode')) {
      throw new TypeError('parameter "PointCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcGetPoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListAssociatePartPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListAssociatePartPoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} Page - page. optional. default: 1.
   * @param {String} Rows - rows. optional. default: 1000.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListDevice', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} Page - page. optional. default: 1.
   * @param {String} Rows - rows. optional. default: 1000.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListDeviceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListDeviceInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCodeParam - deviceInstanceCodeParam. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListDeviceInstanceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCodeParam')) {
      throw new TypeError('parameter "DeviceInstanceCodeParam" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListDeviceInstanceDetail', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} Page - page. optional. default: 1.
   * @param {String} Rows - rows. optional. default: 1000.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListFactory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListFactory', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} Page - page. optional. default: 1.
   * @param {String} Rows - rows. optional. default: 1000.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListFactoryDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListFactoryDetail', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} Page - page. optional. default: 1.
   * @param {String} Rows - rows. optional. default: 1000.
   * @param {String} FactoryCode - factoryCode. optional.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListLine', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {Integer} Page - page. optional. default: 1.
   * @param {Integer} Rows - rows. optional. default: 1000.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListPart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {Integer} Page - page. optional. default: 1.
   * @param {Integer} Rows - rows. optional. default: 1000.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListPoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCode - deviceInstanceCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListPointInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCode')) {
      throw new TypeError('parameter "DeviceInstanceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListPointInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCode - deviceInstanceCode. required.
   * @param {String} PartCodeOf3DModel - partCodeOf3DModel. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcListPointInstanceBy3DPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCode')) {
      throw new TypeError('parameter "DeviceInstanceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCodeOf3DModel')) {
      throw new TypeError('parameter "PartCodeOf3DModel" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListPointInstanceBy3DPart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCode - deviceInstanceCode. required.
   * @param {String} Uid - aliyunPk. required.
   */
  dvcListWarningByDeviceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCode')) {
      throw new TypeError('parameter "DeviceInstanceCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcListWarningByDeviceInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} UrlOf3DModel - urlOf3DModel. optional.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdateDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdateDevice', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceInstanceCode - deviceInstanceCode. required.
   * @param {String} DeviceInstanceName - deviceInstanceName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdateDeviceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceCode')) {
      throw new TypeError('parameter "DeviceInstanceCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInstanceName')) {
      throw new TypeError('parameter "DeviceInstanceName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdateDeviceInstance', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} FactoryCode - factoryCode. required.
   * @param {String} FactoryName - factoryName. required.
   * @param {Float} Longitude - longitude. optional.
   * @param {Float} Latitude - latitude. optional.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdateFactory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryCode')) {
      throw new TypeError('parameter "FactoryCode" is required');
    }

    if (!hasOwnProperty(params, 'FactoryName')) {
      throw new TypeError('parameter "FactoryName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdateFactory', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} LineCode - lineCode. required.
   * @param {String} LineName - lineName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdateLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'LineCode')) {
      throw new TypeError('parameter "LineCode" is required');
    }

    if (!hasOwnProperty(params, 'LineName')) {
      throw new TypeError('parameter "LineName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdateLine', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {String} PartName - partName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdatePart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'PartName')) {
      throw new TypeError('parameter "PartName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdatePart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PartCode - partCode. required.
   * @param {String} PartCodeOf3DModel - partCodeOf3DModel. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdatePart3DModelPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCode')) {
      throw new TypeError('parameter "PartCode" is required');
    }

    if (!hasOwnProperty(params, 'PartCodeOf3DModel')) {
      throw new TypeError('parameter "PartCodeOf3DModel" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdatePart3DModelPart', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. required.
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} PointCode - pointCode. required.
   * @param {String} PointName - pointName. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUpdatePoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'PointCode')) {
      throw new TypeError('parameter "PointCode" is required');
    }

    if (!hasOwnProperty(params, 'PointName')) {
      throw new TypeError('parameter "PointName" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUpdatePoint', params, options);
  }

  /**
   * @param {String} CompanyCode - companyCode. optional.
   * @param {String} Content - content. required.
   */
  dvcUploadContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('DvcUploadContent', params, options);
  }

  /**
   * @param {String} DeviceCode - deviceCode. required.
   * @param {String} OssFullPath - ossFullPath. required.
   * @param {String} CompanyCode - companyCode. required.
   * @param {Long} Uid - aliyunPk. required.
   */
  dvcUploadPointBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceCode')) {
      throw new TypeError('parameter "DeviceCode" is required');
    }

    if (!hasOwnProperty(params, 'OssFullPath')) {
      throw new TypeError('parameter "OssFullPath" is required');
    }

    if (!hasOwnProperty(params, 'CompanyCode')) {
      throw new TypeError('parameter "CompanyCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DvcUploadPointBatch', params, options);
  }

}

module.exports = Client;
