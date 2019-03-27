
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-12-08';
    super(config);
  }

  checkLogout(body, headers = {}, opts = {}) {
    const path = `/apsara/logout`;
    return this.post(path, {}, body, headers, opts);
  }

  checkUser(body, headers = {}, opts = {}) {
    const path = `/apsara/auth`;
    return this.post(path, {}, body, headers, opts);
  }

  getClassType(body, headers = {}, opts = {}) {
    const path = `/apsara/classtype`;
    return this.post(path, {}, body, headers, opts);
  }

  getStudentType(body, headers = {}, opts = {}) {
    const path = `/apsara/studenttype`;
    return this.post(path, {}, body, headers, opts);
  }

  liveInfoUpdate(body, headers = {}, opts = {}) {
    const path = `/apsara/liveinfo/update`;
    return this.post(path, {}, body, headers, opts);
  }

  liveOpt(body, headers = {}, opts = {}) {
    const path = `/apsara/live`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
