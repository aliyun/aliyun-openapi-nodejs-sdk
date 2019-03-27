
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-08-25';
    super(config);
  }

  addFaces(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/addFaces`;
    return this.post(path, query, body, headers, opts);
  }

  addGroups(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/addGroupsOfPerson`;
    return this.post(path, query, body, headers, opts);
  }

  addPerson(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/addPerson`;
    return this.post(path, query, body, headers, opts);
  }

  deleteFaces(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/deleteFaces`;
    return this.post(path, query, body, headers, opts);
  }

  deleteGroups(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/deleteGroupsOfPerson`;
    return this.post(path, query, body, headers, opts);
  }

  deletePerson(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/deletePerson`;
    return this.post(path, query, body, headers, opts);
  }

  fileAsyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/file/asyncscan`;
    return this.post(path, query, body, headers, opts);
  }

  fileAsyncScanResults(query, body, headers = {}, opts = {}) {
    const path = `/green/file/results`;
    return this.post(path, query, body, headers, opts);
  }

  getFaces(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/getFaces`;
    return this.post(path, query, body, headers, opts);
  }

  getGroups(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/getGroups`;
    return this.post(path, query, body, headers, opts);
  }

  getPerson(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/getPerson`;
    return this.post(path, query, body, headers, opts);
  }

  getPersons(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/getPersons`;
    return this.post(path, query, body, headers, opts);
  }

  imageAsyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/image/asyncscan`;
    return this.post(path, query, body, headers, opts);
  }

  imageAsyncScanResults(query, body, headers = {}, opts = {}) {
    const path = `/green/image/results`;
    return this.post(path, query, body, headers, opts);
  }

  imageScanFeedback(query, body, headers = {}, opts = {}) {
    const path = `/green/image/feedback`;
    return this.post(path, query, body, headers, opts);
  }

  imageSyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/image/scan`;
    return this.post(path, query, body, headers, opts);
  }

  search(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/search`;
    return this.post(path, query, body, headers, opts);
  }

  setPerson(query, body, headers = {}, opts = {}) {
    const path = `/green/sface/setPerson`;
    return this.post(path, query, body, headers, opts);
  }

  textFeedback(query, body, headers = {}, opts = {}) {
    const path = `/green/text/feedback`;
    return this.post(path, query, body, headers, opts);
  }

  textScan(query, body, headers = {}, opts = {}) {
    const path = `/green/text/scan`;
    return this.post(path, query, body, headers, opts);
  }

  videoAsyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/video/asyncscan`;
    return this.post(path, query, body, headers, opts);
  }

  videoAsyncScanResults(query, body, headers = {}, opts = {}) {
    const path = `/green/video/results`;
    return this.post(path, query, body, headers, opts);
  }

  videoFeedback(query, body, headers = {}, opts = {}) {
    const path = `/green/video/feedback`;
    return this.post(path, query, body, headers, opts);
  }

  voiceAsyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/voice/asyncscan`;
    return this.post(path, query, body, headers, opts);
  }

  voiceAsyncScanResults(query, body, headers = {}, opts = {}) {
    const path = `/green/voice/results`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
