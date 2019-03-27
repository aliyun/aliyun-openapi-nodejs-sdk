
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-09-19';
    super(config);
  }

  complexRoaApi03(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/ComplexRoaApi03/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

  complexRoaApi04(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/ComplexRoaApi004/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

  complexRoaApi05(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/ComplexRoaApi/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
