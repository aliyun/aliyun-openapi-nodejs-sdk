
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-03-08';
    super(config);
  }

  notifyByAliPay(body, headers = {}, opts = {}) {
    const path = `/notify/alipay/`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
