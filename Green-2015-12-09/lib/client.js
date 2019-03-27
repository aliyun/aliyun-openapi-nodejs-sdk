
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-12-09';
    super(config);
  }

  imageDetection(body, headers = {}, opts = {}) {
    const path = `/image/detection`;
    return this.post(path, {}, body, headers, opts);
  }

  imageFeedback(taskid, body, headers = {}, opts = {}) {
    const path = `/image/feedback/${taskid}`;
    return this.post(path, {}, body, headers, opts);
  }

  imageResult(taskid, headers = {}, opts = {}) {
    const path = `/image/result/${taskid}`;
    return this.get(path, {}, headers, opts);
  }

  textKeywordFilter(body, headers = {}, opts = {}) {
    const path = `/text/keyword_filter`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
