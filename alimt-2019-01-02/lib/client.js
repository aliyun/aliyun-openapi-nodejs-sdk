
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2019-01-02';
    super(config);
  }

  translateECommerce(body, headers = {}, opts = {}) {
    const path = `/api/translate/web/ecommerce`;
    return this.post(path, {}, body, headers, opts);
  }

  translateGeneral(body, headers = {}, opts = {}) {
    const path = `/api/translate/web/general`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
