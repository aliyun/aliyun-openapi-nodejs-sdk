
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-02-27';
    super(config);
  }

  /**
   */
  allMalwareNum(params = {}, options = {}) {
    return this.request('AllMalwareNum', params, options);
  }

  /**
   */
  currentDdosAttackNum(params = {}, options = {}) {
    return this.request('CurrentDdosAttackNum', params, options);
  }

  /**
   */
  todayAegisOnlineRate(params = {}, options = {}) {
    return this.request('TodayAegisOnlineRate', params, options);
  }

  /**
   */
  todayAllkbps(params = {}, options = {}) {
    return this.request('TodayAllkbps', params, options);
  }

  /**
   */
  todayAllpps(params = {}, options = {}) {
    return this.request('TodayAllpps', params, options);
  }

  /**
   */
  todayBackdoor(params = {}, options = {}) {
    return this.request('TodayBackdoor', params, options);
  }

  /**
   */
  todayCrackIntercept(params = {}, options = {}) {
    return this.request('TodayCrackIntercept', params, options);
  }

  /**
   */
  todayMalwareNum(params = {}, options = {}) {
    return this.request('TodayMalwareNum', params, options);
  }

  /**
   */
  todayqpsByRegion(params = {}, options = {}) {
    return this.request('TodayqpsByRegion', params, options);
  }

  /**
   */
  webAttackNum(params = {}, options = {}) {
    return this.request('WebAttackNum', params, options);
  }

}

module.exports = Client;
