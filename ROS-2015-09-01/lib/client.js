
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-09-01';
    super(config);
  }

  abandonStack(stackName, stackId, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}/abandon`;
    return this.delete(path, {}, headers, opts);
  }

  createStacks(body, headers = {}, opts = {}) {
    const path = `/stacks`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteStack(stackName, stackId, query, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}`;
    return this.delete(path, query, headers, opts);
  }

  describeEvents(stackName, stackId, query, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}/events`;
    return this.get(path, query, headers, opts);
  }

  describeRegions(headers = {}, opts = {}) {
    const path = `/regions`;
    return this.get(path, {}, headers, opts);
  }

  describeResourceDetail(stackName, stackId, resourceName, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}/resources/${resourceName}`;
    return this.get(path, {}, headers, opts);
  }

  describeResourceTypeDetail(typeName, headers = {}, opts = {}) {
    const path = `/resource_types/${typeName}`;
    return this.get(path, {}, headers, opts);
  }

  describeResourceTypeTemplate(typeName, headers = {}, opts = {}) {
    const path = `/resource_types/${typeName}/template`;
    return this.get(path, {}, headers, opts);
  }

  describeResourceTypes(query, headers = {}, opts = {}) {
    const path = `/resource_types`;
    return this.get(path, query, headers, opts);
  }

  describeResources(stackName, stackId, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}/resources`;
    return this.get(path, {}, headers, opts);
  }

  describeStackDetail(stackName, stackId, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}`;
    return this.get(path, {}, headers, opts);
  }

  describeStacks(query, headers = {}, opts = {}) {
    const path = `/stacks`;
    return this.get(path, query, headers, opts);
  }

  describeTemplate(stackName, stackId, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}/template`;
    return this.get(path, {}, headers, opts);
  }

  doActions(stackName, stackId, body, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}/actions`;
    return this.post(path, {}, body, headers, opts);
  }

  inquiryStack(body, headers = {}, opts = {}) {
    const path = `/stacks/inquiry`;
    return this.post(path, {}, body, headers, opts);
  }

  previewStack(body, headers = {}, opts = {}) {
    const path = `/stacks/preview`;
    return this.post(path, {}, body, headers, opts);
  }

  updateStack(stackName, stackId, body, headers = {}, opts = {}) {
    const path = `/stacks/${stackName}/${stackId}`;
    return this.put(path, {}, body, headers, opts);
  }

  validateTemplate(body, headers = {}, opts = {}) {
    const path = `/validate`;
    return this.post(path, {}, body, headers, opts);
  }

  waitConditions(query, body, headers = {}, opts = {}) {
    const path = `/waitcondition`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
