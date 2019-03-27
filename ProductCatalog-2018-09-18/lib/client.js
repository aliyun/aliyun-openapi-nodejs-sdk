
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-09-18';
    super(config);
  }

  getApi(productId, versionId, apiId, query, headers = {}, opts = {}) {
    const path = `/products/v1/public/${productId}/versions/${versionId}/apis/${apiId}`;
    return this.get(path, query, headers, opts);
  }

  getProduct(productId, query, headers = {}, opts = {}) {
    const path = `/products/v1/public/${productId}/`;
    return this.get(path, query, headers, opts);
  }

  listApis(productId, versionId, query, headers = {}, opts = {}) {
    const path = `/products/v1/public/${productId}/versions/${versionId}/apis/`;
    return this.get(path, query, headers, opts);
  }

  listProducts(query, headers = {}, opts = {}) {
    const path = `/products/v1/public/`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
