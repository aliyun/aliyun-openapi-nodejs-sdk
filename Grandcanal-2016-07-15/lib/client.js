
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-15';
    super(config);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   * @param {String} Name - name. required.
   */
  countActivityInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CountActivityInstance', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} WorkflowTypeName - workflowTypeName. optional.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  countWorkflowInstance(params = {}, options = {}) {
    return this.request('CountWorkflowInstance', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} ActivityTypeName - name. required.
   * @param {String} ActivityTypeVersion - version. required.
   * @param {String} Description - description. optional.
   * @param {Long} DefaultTimeout - defaultTimeout. optional.
   * @param {Integer} TimeoutPolicy - timeoutPolicy. optional.
   * @param {Long} DefaultHeartbeatTimeout - defaultHeartbeatTimeout. optional.
   * @param {Integer} Priority - priority. optional.
   */
  createActivityType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeName')) {
      throw new TypeError('parameter "ActivityTypeName" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeVersion')) {
      throw new TypeError('parameter "ActivityTypeVersion" is required');
    }

    return this.request('CreateActivityType', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Description - description. optional.
   * @param {Integer} RetentionPeriod - retentionPeriod. optional.
   */
  createDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CreateDomain', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   * @param {String} Description - description. optional.
   * @param {Long} DefaultWorkflowTimeout - defaultWorkflowTimeout. optional.
   * @param {Long} DefaultPriority - defaultPriority. optional.
   * @param {Long} DefaultDeciderTimeout - defaultDeciderTimeout. optional.
   */
  createWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    return this.request('CreateWorkflowType', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} ActivityTypeName - name. required.
   * @param {String} ActivityTypeVersion - version. required.
   */
  deleteActivityType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeName')) {
      throw new TypeError('parameter "ActivityTypeName" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeVersion')) {
      throw new TypeError('parameter "ActivityTypeVersion" is required');
    }

    return this.request('DeleteActivityType', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   */
  deleteWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    return this.request('DeleteWorkflowType', params, options);
  }

  /**
   * @param {String} ActivityId - activityId. optional.
   */
  describeActivityInstance(params = {}, options = {}) {
    return this.request('DescribeActivityInstance', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} ActivityTypeName - name. required.
   * @param {String} ActivityTypeVersion - version. required.
   */
  describeActivityType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeName')) {
      throw new TypeError('parameter "ActivityTypeName" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeVersion')) {
      throw new TypeError('parameter "ActivityTypeVersion" is required');
    }

    return this.request('DescribeActivityType', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  describeDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomain', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   */
  describeWorkflowInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('DescribeWorkflowInstance', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   */
  describeWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    return this.request('DescribeWorkflowType', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} ActivityTypeName - name. required.
   * @param {String} ActivityTypeVersion - version. required.
   */
  enableActivityType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeName')) {
      throw new TypeError('parameter "ActivityTypeName" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeVersion')) {
      throw new TypeError('parameter "ActivityTypeVersion" is required');
    }

    return this.request('EnableActivityType', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  enableDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('EnableDomain', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   */
  enableWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    return this.request('EnableWorkflowType', params, options);
  }

  /**
   * @param {String} NextPageToken - nextPageToken. required.
   */
  listActivityHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NextPageToken')) {
      throw new TypeError('parameter "NextPageToken" is required');
    }

    return this.request('ListActivityHistory', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listActivityType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('ListActivityType', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   * @param {String} ActivityId - activityId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAvailableActivityHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('ListAvailableActivityHistory', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDomains(params = {}, options = {}) {
    return this.request('ListDomains', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listWorkflowTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('ListWorkflowTypes', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} ActivityTypeName - name. required.
   * @param {String} ActivityTypeVersion - version. required.
   * @param {String} Description - description. optional.
   * @param {Long} DefaultTimeout - defaultTimeout. optional.
   * @param {Integer} TimeoutPolicy - timeoutPolicy. optional.
   * @param {Long} DefaultHeartbeatTimeout - defaultHeartbeatTimeout. optional.
   * @param {Integer} Priority - priority. optional.
   */
  modifyActivityType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeName')) {
      throw new TypeError('parameter "ActivityTypeName" is required');
    }

    if (!hasOwnProperty(params, 'ActivityTypeVersion')) {
      throw new TypeError('parameter "ActivityTypeVersion" is required');
    }

    return this.request('ModifyActivityType', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Description - description. optional.
   * @param {Integer} RetentionPeriod - retentionPeriod. optional.
   */
  modifyDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ModifyDomain', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   * @param {String} Description - description. optional.
   * @param {Long} DefaultWorkflowTimeout - defaultWorkflowTimeout. optional.
   * @param {Long} DefaultPriority - defaultPriority. optional.
   * @param {Long} DefaultDeciderTimeout - defaultDeciderTimeout. optional.
   */
  modifyWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    return this.request('ModifyWorkflowType', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Queue - queue. required.
   * @param {String} Identity - identity. optional.
   */
  pollForActivityTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Queue')) {
      throw new TypeError('parameter "Queue" is required');
    }

    return this.request('PollForActivityTask', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Queue - queue. required.
   * @param {String} Identity - identity. optional.
   */
  pollForBatchActivityTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Queue')) {
      throw new TypeError('parameter "Queue" is required');
    }

    return this.request('PollForBatchActivityTask', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Queue - queue. required.
   * @param {String} Identity - identity. optional.
   */
  pollForBatchWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Queue')) {
      throw new TypeError('parameter "Queue" is required');
    }

    return this.request('PollForBatchWorkflow', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Queue - queue. required.
   * @param {String} Identity - identity. optional.
   */
  pollForWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Queue')) {
      throw new TypeError('parameter "Queue" is required');
    }

    return this.request('PollForWorkflow', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Queue - queue. required.
   * @param {String} Identity - identity. optional.
   */
  pollForWorkflowTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Queue')) {
      throw new TypeError('parameter "Queue" is required');
    }

    return this.request('PollForWorkflowTask', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   * @param {String} ActivityId - activityId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryActivityInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('QueryActivityInstances', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} WorkflowTypeName - workflowTypeName. optional.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryWorkflowInstances(params = {}, options = {}) {
    return this.request('QueryWorkflowInstances', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryWorkflowTrace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('QueryWorkflowTrace', params, options);
  }

  /**
   * @param {String} TaskToken - taskToken. required.
   */
  receiveHeartbeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskToken')) {
      throw new TypeError('parameter "TaskToken" is required');
    }

    return this.request('ReceiveHeartbeat', params, options);
  }

  /**
   * @param {String} TaskToken - taskToken. required.
   * @param {String} Result - result. optional.
   * @param {String} Error - error. optional.
   * @param {String} ActivityState - activityState. required.
   * @param {String} Identity - identity. optional.
   */
  respondActivityTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskToken')) {
      throw new TypeError('parameter "TaskToken" is required');
    }

    if (!hasOwnProperty(params, 'ActivityState')) {
      throw new TypeError('parameter "ActivityState" is required');
    }

    return this.request('RespondActivityTask', params, options);
  }

  /**
   * @param {String} TaskToken - taskToken. required.
   * @param {String} Identity - identity. optional.
   * @param {RepeatList} TaskAttribute - tasks. optional.
   */
  respondWorkflowTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskToken')) {
      throw new TypeError('parameter "TaskToken" is required');
    }

    return this.request('RespondWorkflowTask', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   */
  resumeWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('ResumeWorkflow', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   */
  rollbackWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('RollbackWorkflow', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   * @param {String} SignalName - signalName. required.
   * @param {String} Input - input. optional.
   */
  signalWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    if (!hasOwnProperty(params, 'SignalName')) {
      throw new TypeError('parameter "SignalName" is required');
    }

    return this.request('SignalWorkflow', params, options);
  }

  /**
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} ParentId - parentId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} Tag1 - tag1. optional.
   * @param {String} Tag2 - tag2. optional.
   * @param {String} Tag3 - tag3. optional.
   * @param {String} Input - input. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {Integer} Priority - priority. optional.
   * @param {Integer} DeciderTimeout - deciderTimeout. optional.
   * @param {String} TaskQueue - taskQueue. optional.
   */
  startWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('StartWorkflow', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   */
  suspendWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('SuspendWorkflow', params, options);
  }

  /**
   * @param {String} WorkflowId - workflowId. required.
   */
  terminateWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('TerminateWorkflow', params, options);
  }

}

module.exports = Client;
