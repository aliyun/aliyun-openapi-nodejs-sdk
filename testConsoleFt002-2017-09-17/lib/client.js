
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-09-17';
    super(config);
  }

  addPerson(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/addPerson`;
    return this.post(path, query, body, headers, opts);
  }

  complexRoaApi(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/ComplexRoaApi/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

  complexRoaApi03(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/ComplexRoaApi/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

  complexRoaApi100(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/ComplexRoaApi/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

  roaAnonymousApi(body, headers = {}, opts = {}) {
    const path = `/RoaAnonymousApi`;
    return this.post(path, {}, body, headers, opts);
  }

  simpleRoaApi(dynamic, query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/SimpleRoaApi/${dynamic}`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
