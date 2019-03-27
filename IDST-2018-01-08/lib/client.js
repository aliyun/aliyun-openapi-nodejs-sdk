
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-01-08';
    super(config);
  }

  describeRegions(body, headers = {}, opts = {}) {
    const path = `/console/region/describe`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceAddItem(body, headers = {}, opts = {}) {
    const path = `/console/instance/add-item`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceClear(body, headers = {}, opts = {}) {
    const path = `/console/instance/clear`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceDeleteItem(body, headers = {}, opts = {}) {
    const path = `/console/instance/delete-item`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceDetail(body, headers = {}, opts = {}) {
    const path = `/console/instance/detail`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceMeasure(body, headers = {}, opts = {}) {
    const path = `/console/instance/measure`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceQuery(body, headers = {}, opts = {}) {
    const path = `/console/instance/query`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceRemove(body, headers = {}, opts = {}) {
    const path = `/console/instance/remove`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceTrail(body, headers = {}, opts = {}) {
    const path = `/console/instance/trail`;
    return this.post(path, {}, body, headers, opts);
  }

  instanceUpdate(body, headers = {}, opts = {}) {
    const path = `/console/instance/update`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
