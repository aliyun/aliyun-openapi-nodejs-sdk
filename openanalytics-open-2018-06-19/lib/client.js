
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-19';
    super(config);
  }

  /**
   * @param {String} RegionID - regionID. required.
   * @param {String} AccountName - userName. required.
   * @param {String} Password - password. optional.
   * @param {Boolean} IsShort - userNameIsShort. optional.
   * @param {Boolean} EnableKMS - enableKMS. optional.
   */
  addAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('AddAccount', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} VpcID - vpcID. required.
   * @param {String} Vswitch - vSwitch. required.
   * @param {String} Zone - zone. required.
   */
  addEndPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'VpcID')) {
      throw new TypeError('parameter "VpcID" is required');
    }

    if (!hasOwnProperty(params, 'Vswitch')) {
      throw new TypeError('parameter "Vswitch" is required');
    }

    if (!hasOwnProperty(params, 'Zone')) {
      throw new TypeError('parameter "Zone" is required');
    }

    return this.request('AddEndPoint', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  consoleLogger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('ConsoleLogger', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  deleteAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('DeleteAccount', params, options);
  }

  /**
   */
  describeRegionList(params = {}, options = {}) {
    return this.request('DescribeRegionList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  detectTableInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('DetectTableInfo', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  executeDDL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('ExecuteDDL', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  executeSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('ExecuteSQL', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  generateSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GenerateSchema', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  generateTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GenerateTable', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  getAllowIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GetAllowIP', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  getConsolePermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GetConsolePermission', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  getEndPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GetEndPoint', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  getEndPointByDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GetEndPointByDomain', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  getRegionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('GetRegionStatus', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   * @param {Boolean} UseRandomPassword - useRandomPassword. required.
   * @param {String} InitPassword - initPassword. optional.
   * @param {Boolean} EnableKMS - useKms. optional.
   */
  initializeRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    if (!hasOwnProperty(params, 'UseRandomPassword')) {
      throw new TypeError('parameter "UseRandomPassword" is required');
    }

    return this.request('InitializeRegion', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  openMetaDataService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('OpenMetaDataService', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryAccountList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryAccountList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryAuthorizationRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryAuthorizationRole', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryBucketList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryBucketList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryColumnList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryColumnList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryConsoleExecuteHistoryList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryConsoleExecuteHistoryList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryDataSourceDef(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryDataSourceDef', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryDirectoryList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryDirectoryList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryDiscountList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryDiscountList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryEndPointList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryEndPointList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryExecute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryExecute', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryMetaDataService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryMetaDataService', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  querySchemaList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QuerySchemaList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryServiceAccountList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryServiceAccountList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryTableList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryTableList', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  queryTableStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('QueryTableStatus', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  removeEndPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('RemoveEndPoint', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   * @param {Boolean} UseRandomPassword - useRandomPassword. required.
   * @param {String} InitPassword - initPassword. optional.
   * @param {Boolean} EnableKMS - useKms. optional.
   */
  resetMainPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    if (!hasOwnProperty(params, 'UseRandomPassword')) {
      throw new TypeError('parameter "UseRandomPassword" is required');
    }

    return this.request('ResetMainPassword', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  setAllowIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('SetAllowIP', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   */
  unSubscribeRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    return this.request('UnSubscribeRegion', params, options);
  }

  /**
   * @param {String} RegionID - regionID. required.
   * @param {String} AccountName - userName. required.
   * @param {Boolean} IsShort - userNameIsShort. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} EnableKMS - enableKMS. optional.
   */
  updateAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionID')) {
      throw new TypeError('parameter "RegionID" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('UpdateAccountPassword', params, options);
  }

}

module.exports = Client;
