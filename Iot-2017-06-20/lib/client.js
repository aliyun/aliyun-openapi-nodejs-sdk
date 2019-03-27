
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-06-20';
    super(config);
  }

  applyDeviceWithNames(productKey, query, body, headers = {}, opts = {}) {
    const path = `/applyDeviceWithNames/${productKey}`;
    return this.post(path, query, body, headers, opts);
  }

  batchGetDeviceState(productKey, query, headers = {}, opts = {}) {
    const path = `/batchGetDeviceState/${productKey}`;
    return this.get(path, query, headers, opts);
  }

  createProduct(name, query, body, headers = {}, opts = {}) {
    const path = `/createProduct/${name}`;
    return this.post(path, query, body, headers, opts);
  }

  getCats(rootId, query, headers = {}, opts = {}) {
    const path = `/getCats/${rootId}`;
    return this.get(path, query, headers, opts);
  }

  getDeviceShadow(deviceName, productKey, query, headers = {}, opts = {}) {
    const path = `/getDeviceShadow/${productKey}/${deviceName}`;
    return this.get(path, query, headers, opts);
  }

  pub(productKey, query, body, headers = {}, opts = {}) {
    const path = `/pub/${productKey}`;
    return this.post(path, query, body, headers, opts);
  }

  pubBroadcast(productKey, query, body, headers = {}, opts = {}) {
    const path = `/pubBroadcast/${productKey}`;
    return this.post(path, query, body, headers, opts);
  }

  queryApplyStatus(applyId, query, headers = {}, opts = {}) {
    const path = `/queryApplyStatus/${applyId}`;
    return this.get(path, query, headers, opts);
  }

  queryDevice(productKey, query, headers = {}, opts = {}) {
    const path = `/queryDevice/${productKey}`;
    return this.get(path, query, headers, opts);
  }

  queryDeviceByName(deviceName, productKey, query, headers = {}, opts = {}) {
    const path = `/queryDeviceByName/${deviceName}/${productKey}`;
    return this.get(path, query, headers, opts);
  }

  queryPageByApplyId(applyId, query, headers = {}, opts = {}) {
    const path = `/queryPageByApplyId/${applyId}`;
    return this.get(path, query, headers, opts);
  }

  registDevice(productKey, query, body, headers = {}, opts = {}) {
    const path = `/registDevice/${productKey}`;
    return this.post(path, query, body, headers, opts);
  }

  updateDeviceShadow(deviceName, productKey, query, body, headers = {}, opts = {}) {
    const path = `/updateDeviceShadow/${productKey}/${deviceName}`;
    return this.post(path, query, body, headers, opts);
  }

  updateProduct(productKey, query, body, headers = {}, opts = {}) {
    const path = `/updateProduct/${productKey}`;
    return this.put(path, query, body, headers, opts);
  }

}

module.exports = Client;
