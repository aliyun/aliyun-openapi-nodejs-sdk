
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-19';
    super(config);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} grantUserId - grantUserId. optional.
   * @param {String} grantUserName - grantUserName. optional.
   * @param {String} grantUserType - grantUserType. required.
   * @param {String} description - description. optional.
   */
  addUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'grantUserType')) {
      throw new TypeError('parameter "grantUserType" is required');
    }

    return this.request('AddUser', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} host - host. required.
   * @param {Integer} port - port. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   * @param {String} dbType - dbType. required.
   * @param {String} instanceNetworkType - instanceNetworkType. required.
   * @param {String} description - description. optional.
   * @param {String} userName - userName. required.
   * @param {String} password - password. required.
   * @param {Boolean} savePassword - savePassword. optional.
   * @param {String} initDBName - initDBName. optional.
   */
  addUserInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'host')) {
      throw new TypeError('parameter "host" is required');
    }

    if (!hasOwnProperty(params, 'port')) {
      throw new TypeError('parameter "port" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbType')) {
      throw new TypeError('parameter "dbType" is required');
    }

    if (!hasOwnProperty(params, 'instanceNetworkType')) {
      throw new TypeError('parameter "instanceNetworkType" is required');
    }

    if (!hasOwnProperty(params, 'userName')) {
      throw new TypeError('parameter "userName" is required');
    }

    if (!hasOwnProperty(params, 'password')) {
      throw new TypeError('parameter "password" is required');
    }

    return this.request('AddUserInstance', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  completeOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} charset - charset. required.
   * @param {String} collation - collation. required.
   */
  createDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'charset')) {
      throw new TypeError('parameter "charset" is required');
    }

    if (!hasOwnProperty(params, 'collation')) {
      throw new TypeError('parameter "collation" is required');
    }

    return this.request('CreateDatabase', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} dbName - dbName. required.
   * @param {String} sqlTitle - sqlTitle. required.
   * @param {String} sqlScope - sqlScope. required.
   * @param {String} sql - sql. required.
   * @param {String} connectStr - connectStr. required.
   * @param {String} dbType - dbType. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  createUserSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'sqlTitle')) {
      throw new TypeError('parameter "sqlTitle" is required');
    }

    if (!hasOwnProperty(params, 'sqlScope')) {
      throw new TypeError('parameter "sqlScope" is required');
    }

    if (!hasOwnProperty(params, 'sql')) {
      throw new TypeError('parameter "sql" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'dbType')) {
      throw new TypeError('parameter "dbType" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('CreateUserSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  deleteUserInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('DeleteUserInstance', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {Long} id - id. required.
   * @param {String} instanceType - instanceType. required.
   */
  deleteUserSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('DeleteUserSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   */
  describeDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    return this.request('DescribeDatabase', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  describeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} tbName - tbName. required.
   */
  describeTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'tbName')) {
      throw new TypeError('parameter "tbName" is required');
    }

    return this.request('DescribeTable', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {Long} id - id. required.
   */
  describeUserSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    return this.request('DescribeUserSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   */
  dropDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    return this.request('DropDatabase', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} tbName - tbName. required.
   */
  dropTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'tbName')) {
      throw new TypeError('parameter "tbName" is required');
    }

    return this.request('DropTable', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {Long} id - id. required.
   * @param {String} dbName - dbName. required.
   * @param {String} sqlTitle - sqlTitle. required.
   * @param {String} sqlScope - sqlScope. required.
   * @param {String} sql - sql. required.
   * @param {String} connectStr - connectStr. required.
   * @param {String} dbType - dbType. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  editUserSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'sqlTitle')) {
      throw new TypeError('parameter "sqlTitle" is required');
    }

    if (!hasOwnProperty(params, 'sqlScope')) {
      throw new TypeError('parameter "sqlScope" is required');
    }

    if (!hasOwnProperty(params, 'sql')) {
      throw new TypeError('parameter "sql" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'dbType')) {
      throw new TypeError('parameter "dbType" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('EditUserSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} sql - sql. required.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   */
  executeSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'sql')) {
      throw new TypeError('parameter "sql" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('ExecuteSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbType - dbType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} sql - sql. required.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   */
  executeSQLHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbType')) {
      throw new TypeError('parameter "dbType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'sql')) {
      throw new TypeError('parameter "sql" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('ExecuteSQLHistory', params, options);
  }

  /**
   * @param {Integer} page - page. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getAuditInstanceList(params = {}, options = {}) {
    return this.request('GetAuditInstanceList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} accountFilter - accountFilter. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   */
  getAuditOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'accountFilter')) {
      throw new TypeError('parameter "accountFilter" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetAuditOverview', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsAllDbList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsAllDbList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsDeadlockTuning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsDeadlockTuning', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} sqlText - sqlText. required.
   */
  getCdsExplainOneSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'sqlText')) {
      throw new TypeError('parameter "sqlText" is required');
    }

    return this.request('GetCdsExplainOneSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   */
  getCdsGeneralInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetCdsGeneralInfo', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsMasterslaveTuning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsMasterslaveTuning', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {String} indexes - indexes. required.
   */
  getCdsPerformanceHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    if (!hasOwnProperty(params, 'indexes')) {
      throw new TypeError('parameter "indexes" is required');
    }

    return this.request('GetCdsPerformanceHistory', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsRealTimeAnalyzeResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsRealTimeAnalyzeResult', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsResourceTuning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsResourceTuning', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} messageId - messageId. required.
   */
  getCdsSQLTuningResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'messageId')) {
      throw new TypeError('parameter "messageId" is required');
    }

    return this.request('GetCdsSQLTuningResult', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsSessionTuning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsSessionTuning', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Boolean} setDb - setDb. required.
   * @param {String} page - page. required.
   * @param {String} rows - rows. required.
   * @param {String} sort - sort. optional.
   * @param {String} order - order. optional.
   */
  getCdsSlowSqlTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    if (!hasOwnProperty(params, 'setDb')) {
      throw new TypeError('parameter "setDb" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'rows')) {
      throw new TypeError('parameter "rows" is required');
    }

    return this.request('GetCdsSlowSqlTop', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Boolean} setDb - setDb. required.
   * @param {String} dbName - dbName. optional.
   */
  getCdsSlowSqlTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    if (!hasOwnProperty(params, 'setDb')) {
      throw new TypeError('parameter "setDb" is required');
    }

    return this.request('GetCdsSlowSqlTrend', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsSqlTuning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsSqlTuning', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} moduleName - moduleName. required.
   * @param {String} dbName - dbName. required.
   * @param {String} sqlText - sqlText. required.
   */
  getCdsStartTuning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'moduleName')) {
      throw new TypeError('parameter "moduleName" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'sqlText')) {
      throw new TypeError('parameter "sqlText" is required');
    }

    return this.request('GetCdsStartTuning', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} timeUnit - timeUnit. required.
   */
  getCdsStorageHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'timeUnit')) {
      throw new TypeError('parameter "timeUnit" is required');
    }

    return this.request('GetCdsStorageHistory', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {Boolean} isLogic - isLogic. optional.
   * @param {String} sort - sort. optional.
   * @param {String} order - order. optional.
   */
  getCdsStorageTopNResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsStorageTopNResult', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsStorageVacancy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsStorageVacancy', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCdsTrxSnapshotResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCdsTrxSnapshotResult', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getCharsetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetCharsetList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} charset - charset. required.
   */
  getCollationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'charset')) {
      throw new TypeError('parameter "charset" is required');
    }

    return this.request('GetCollationList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} grantUserId - grantUserId. optional.
   * @param {String} grantUserName - grantUserName. optional.
   * @param {String} grantUserType - grantUserType. required.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} pattern - pattern. optional.
   */
  getGrantedInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'grantUserType')) {
      throw new TypeError('parameter "grantUserType" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('GetGrantedInstances', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  getInstanceBaseInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetInstanceBaseInfo', params, options);
  }

  /**
   * @param {String} connectStr - connectStr. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} page - pageNum. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getInstanceLoginLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetInstanceLoginLogs', params, options);
  }

  /**
   * @param {String} connectStr - connectStr. required.
   * @param {String} opType - opTypeStr. optional.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} page - pageNum. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getInstanceOpLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetInstanceOpLogs', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} connectStr - connectStr. optional.
   */
  getInstancePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetInstancePerformance', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} instances - instances. required.
   */
  getInstancesStat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'instances')) {
      throw new TypeError('parameter "instances" is required');
    }

    return this.request('GetInstancesStat', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} processStatus - processStatus. required.
   */
  getProcessList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'processStatus')) {
      throw new TypeError('parameter "processStatus" is required');
    }

    return this.request('GetProcessList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} connectStr - connectStr. optional.
   */
  getRDSResourceUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetRDSResourceUsage', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  getRememberAccountList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GetRememberAccountList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} accountFilter - accountFilter. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   */
  getTopLoginInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'accountFilter')) {
      throw new TypeError('parameter "accountFilter" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetTopLoginInstance', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} accountFilter - accountFilter. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   */
  getTopLoginUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'accountFilter')) {
      throw new TypeError('parameter "accountFilter" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetTopLoginUser', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} accountFilter - accountFilter. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   */
  getTopOperationInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'accountFilter')) {
      throw new TypeError('parameter "accountFilter" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetTopOperationInstance', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} accountFilter - accountFilter. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   */
  getTopOperationUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'accountFilter')) {
      throw new TypeError('parameter "accountFilter" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetTopOperationUser', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - ownerId. required.
   * @param {String} userId - userId. optional.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} auditUserId - auditUserId. optional.
   * @param {String} auditUserName - auditUserName. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} page - pageNum. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getUserAccountLoginLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'auditUserName')) {
      throw new TypeError('parameter "auditUserName" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetUserAccountLoginLogs', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - ownerId. required.
   * @param {String} userId - userId. optional.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} auditUserId - auditUserId. optional.
   * @param {String} auditUserName - auditUserName. required.
   * @param {String} opType - opTypeStr. optional.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} page - pageNum. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getUserAccountOpLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'auditUserName')) {
      throw new TypeError('parameter "auditUserName" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetUserAccountOpLogs', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - ownerId. required.
   * @param {String} userId - userId. optional.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {Integer} page - page. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getUserAuditInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    return this.request('GetUserAuditInstanceList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} regionId - regionId. required.
   */
  getUserECSList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'regionId')) {
      throw new TypeError('parameter "regionId" is required');
    }

    return this.request('GetUserECSList', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {Integer} page - page. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getUserGrantableInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    return this.request('GetUserGrantableInstances', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - ownerId. required.
   * @param {String} userId - userId. optional.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} page - pageNum. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getUserInstanceLoginLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetUserInstanceLoginLogs', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - ownerId. required.
   * @param {String} userId - userId. optional.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} opType - opTypeStr. optional.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} page - pageNum. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  getUserInstanceOpLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('GetUserInstanceOpLogs', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} pattern - pattern. optional.
   * @param {String} instanceType - instanceType. optional.
   */
  getUserInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('GetUserInstances', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} connectStr - connectStr. required.
   * @param {String} sqlScope - sqlScope. optional.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   */
  getUserSQLs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('GetUserSQLs', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} pattern - pattern. optional.
   */
  getUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('GetUsers', params, options);
  }

  /**
   * @param {String} instanceType - instanceType. required.
   * @param {String} instanceId - instanceId. required.
   * @param {Integer} instancePort - instancePort. required.
   * @param {String} instanceRegionId - regionId. required.
   * @param {String} vpcId - vpcId. required.
   * @param {String} instanceStr - instanceStr. optional.
   * @param {String} innerIp - innerIp. optional.
   * @param {String} platForm - platForm. optional.
   */
  getVPCInstanceAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    if (!hasOwnProperty(params, 'instancePort')) {
      throw new TypeError('parameter "instancePort" is required');
    }

    if (!hasOwnProperty(params, 'instanceRegionId')) {
      throw new TypeError('parameter "instanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'vpcId')) {
      throw new TypeError('parameter "vpcId" is required');
    }

    return this.request('GetVPCInstanceAccess', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} grantUserId - grantUserId. optional.
   * @param {String} grantUserName - grantUserName. optional.
   * @param {String} grantUserType - grantUserType. required.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  grantInstanceForUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'grantUserType')) {
      throw new TypeError('parameter "grantUserType" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('GrantInstanceForUser', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} grantUserId - grantUserId. optional.
   * @param {String} grantUserName - grantUserName. optional.
   * @param {String} grantUserType - grantUserType. required.
   * @param {String} grantState - grantState. required.
   */
  grantProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'grantUserType')) {
      throw new TypeError('parameter "grantUserType" is required');
    }

    if (!hasOwnProperty(params, 'grantState')) {
      throw new TypeError('parameter "grantState" is required');
    }

    return this.request('GrantProduct', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} processId - processId. required.
   */
  killProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'processId')) {
      throw new TypeError('parameter "processId" is required');
    }

    return this.request('KillProcess', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   * @param {Boolean} quick - quick. required.
   * @param {String} userName - userName. optional.
   * @param {String} password - password. optional.
   * @param {Boolean} savePassword - savePassword. optional.
   * @param {String} initDBName - initDBName. optional.
   */
  loginInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'quick')) {
      throw new TypeError('parameter "quick" is required');
    }

    return this.request('LoginInstance', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} charset - charset. required.
   * @param {String} collation - collation. required.
   */
  modifyDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'charset')) {
      throw new TypeError('parameter "charset" is required');
    }

    if (!hasOwnProperty(params, 'collation')) {
      throw new TypeError('parameter "collation" is required');
    }

    return this.request('ModifyDatabase', params, options);
  }

  /**
   * @param {String} configType - configType. required.
   * @param {String} featureId - featureId. required.
   * @param {String} permission - permission. required.
   */
  modifyGlobalFeatureConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'configType')) {
      throw new TypeError('parameter "configType" is required');
    }

    if (!hasOwnProperty(params, 'featureId')) {
      throw new TypeError('parameter "featureId" is required');
    }

    if (!hasOwnProperty(params, 'permission')) {
      throw new TypeError('parameter "permission" is required');
    }

    return this.request('ModifyGlobalFeatureConfig', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   * @param {String} description - description. optional.
   * @param {String} userName - userName. optional.
   * @param {String} password - password. optional.
   * @param {Boolean} savePassword - savePassword. optional.
   * @param {String} initDBName - initDBName. optional.
   */
  modifyUserInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('ModifyUserInstance', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} tbName - tbName. required.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   */
  queryTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'tbName')) {
      throw new TypeError('parameter "tbName" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('QueryTable', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refundOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundOrderCallback', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} tbName - tbName. required.
   * @param {String} newTbName - newTbName. required.
   */
  renameTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'tbName')) {
      throw new TypeError('parameter "tbName" is required');
    }

    if (!hasOwnProperty(params, 'newTbName')) {
      throw new TypeError('parameter "newTbName" is required');
    }

    return this.request('RenameTable', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} instanceType - instanceType. required.
   * @param {String} loginToken - loginToken. required.
   * @param {Long} id - id. required.
   * @param {String} sqlTitle - sqlTitle. required.
   */
  renameUserSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    if (!hasOwnProperty(params, 'sqlTitle')) {
      throw new TypeError('parameter "sqlTitle" is required');
    }

    return this.request('RenameUserSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} grantUserId - grantUserId. optional.
   * @param {String} grantUserName - grantUserName. optional.
   * @param {String} grantUserType - grantUserType. required.
   * @param {String} connectStr - connectStr. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} hostInstanceId - hostInstanceId. optional.
   */
  revokeInstanceForUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'grantUserType')) {
      throw new TypeError('parameter "grantUserType" is required');
    }

    if (!hasOwnProperty(params, 'connectStr')) {
      throw new TypeError('parameter "connectStr" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('RevokeInstanceForUser', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   */
  showDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('ShowDatabases', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {Integer} page - page. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} pattern - pattern. optional.
   */
  showTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'page')) {
      throw new TypeError('parameter "page" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('ShowTables', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} sqlText - sqlText. required.
   * @param {String} dbType - dbType. required.
   * @param {String} instanceType - instanceType. required.
   */
  splitSQL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'sqlText')) {
      throw new TypeError('parameter "sqlText" is required');
    }

    if (!hasOwnProperty(params, 'dbType')) {
      throw new TypeError('parameter "dbType" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('SplitSQL', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} loginToken - loginToken. required.
   * @param {String} instanceType - instanceType. required.
   * @param {String} dbName - dbName. required.
   * @param {String} tbName - tbName. required.
   */
  truncateTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'loginToken')) {
      throw new TypeError('parameter "loginToken" is required');
    }

    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    if (!hasOwnProperty(params, 'dbName')) {
      throw new TypeError('parameter "dbName" is required');
    }

    if (!hasOwnProperty(params, 'tbName')) {
      throw new TypeError('parameter "tbName" is required');
    }

    return this.request('TruncateTable', params, options);
  }

  /**
   * @param {String} deviceId - deviceId. required.
   * @param {String} userId - userId. required.
   * @param {String} parentId - parentId. optional.
   * @param {Boolean} subUser - subUser. optional.
   * @param {String} ramUsers - ramUsers. required.
   */
  updateRamUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'deviceId')) {
      throw new TypeError('parameter "deviceId" is required');
    }

    if (!hasOwnProperty(params, 'userId')) {
      throw new TypeError('parameter "userId" is required');
    }

    if (!hasOwnProperty(params, 'ramUsers')) {
      throw new TypeError('parameter "ramUsers" is required');
    }

    return this.request('UpdateRamUsers', params, options);
  }

}

module.exports = Client;
