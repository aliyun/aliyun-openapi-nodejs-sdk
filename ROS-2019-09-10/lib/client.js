
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-09-10';
    super(config);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} CancelType - CancelType. optional.
   */
  cancelUpdateStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CancelUpdateStack', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {RepeatList} RecreatingResources - RecreatingResources. optional.
   * @param {String} RegionId - RegionId. required.
   */
  continueCreateStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ContinueCreateStack', params, options);
  }

  /**
   * @param {String} StackId - StackId. optional.
   * @param {String} ChannelId - ChannelId. optional.
   * @param {RepeatList} Parameters - Parameters. optional.
   * @param {String} StackPolicyURL - StackPolicyURL. optional.
   * @param {String} StackPolicyBody - StackPolicyBody. optional.
   * @param {String} StackName - StackName. optional.
   * @param {Boolean} UsePreviousParameters - UsePreviousParameters. optional.
   * @param {String} ChangeSetType - ChangeSetType. optional.
   * @param {String} Description - Description. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {String} ClientToken - ClientToken. optional.
   * @param {String} TemplateURL - TemplateURL. optional.
   * @param {String} StackPolicyDuringUpdateURL - StackPolicyDuringUpdateURL. optional.
   * @param {String} TemplateBody - TemplateBody. optional.
   * @param {String} UpdateAllowPolicy - UpdateAllowPolicy. optional.
   * @param {Long} TimeoutInMinutes - TimeoutInMinutes. optional.
   * @param {String} ActivityId - ActivityId. optional.
   * @param {String} OrderSource - OrderSource. optional.
   * @param {Boolean} DisableRollback - DisableRollback. optional.
   * @param {String} ChangeSetName - ChangeSetName. required.
   * @param {String} StackPolicyDuringUpdateBody - StackPolicyDuringUpdateBody. optional.
   * @param {RepeatList} NotificationURLs - NotificationURLs. optional.
   */
  createChangeSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChangeSetName')) {
      throw new TypeError('parameter "ChangeSetName" is required');
    }

    return this.request('CreateChangeSet', params, options);
  }

  /**
   * @param {Boolean} DisableRollback - DisableRollback. optional.
   * @param {String} ChannelId - ChannelId. optional.
   * @param {String} TemplateBody - TemplateBody. optional.
   * @param {RepeatList} Parameters - Parameters. optional.
   * @param {String} StackPolicyURL - StackPolicyURL. optional.
   * @param {Long} TimeoutInMinutes - TimeoutInMinutes. required.
   * @param {String} StackPolicyBody - StackPolicyBody. optional.
   * @param {String} StackName - StackName. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} ActivityId - ActivityId. optional.
   * @param {String} OrderSource - OrderSource. optional.
   * @param {String} ClientToken - ClientToken. optional.
   * @param {String} TemplateURL - TemplateURL. optional.
   * @param {RepeatList} NotificationURLs - NotificationURLs. optional.
   */
  createStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TimeoutInMinutes')) {
      throw new TypeError('parameter "TimeoutInMinutes" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateStack', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {String} ChangeSetId - ChangeSetId. required.
   */
  deleteChangeSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChangeSetId')) {
      throw new TypeError('parameter "ChangeSetId" is required');
    }

    return this.request('DeleteChangeSet', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {Boolean} RetainAllResources - RetainAllResources. optional.
   * @param {String} RegionId - RegionId. required.
   */
  deleteStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteStack', params, options);
  }

  /**
   * @param {String} AcceptLanguage - AcceptLanguage. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {String} ChangeSetId - ChangeSetId. required.
   */
  executeChangeSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChangeSetId')) {
      throw new TypeError('parameter "ChangeSetId" is required');
    }

    return this.request('ExecuteChangeSet', params, options);
  }

  /**
   * @param {Boolean} ShowTemplate - ShowTemplate. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {String} ChangeSetId - ChangeSetId. required.
   */
  getChangeSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChangeSetId')) {
      throw new TypeError('parameter "ChangeSetId" is required');
    }

    return this.request('GetChangeSet', params, options);
  }

  /**
   * @param {String} ResourceType - ResourceType. required.
   */
  getResourceType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('GetResourceType', params, options);
  }

  /**
   * @param {String} ResourceType - ResourceType. required.
   */
  getResourceTypeTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('GetResourceTypeTemplate', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} ClientToken - ClientToken. optional.
   */
  getStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetStack', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} RegionId - RegionId. required.
   */
  getStackPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetStackPolicy', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} ClientToken - ClientToken. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {Boolean} ShowResourceAttributes - ShowResourceAttributes. optional.
   * @param {String} LogicalResourceId - LogicalResourceId. required.
   */
  getStackResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogicalResourceId')) {
      throw new TypeError('parameter "LogicalResourceId" is required');
    }

    return this.request('GetStackResource', params, options);
  }

  /**
   * @param {String} StackId - StackId. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {String} ChangeSetId - ChangeSetId. optional.
   */
  getTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetTemplate', params, options);
  }

  /**
   * @param {String} TemplateURL - TemplateURL. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {RepeatList} Parameters - Parameters. optional.
   * @param {String} TemplateBody - TemplateBody. optional.
   * @param {String} ClientToken - ClientToken. optional.
   */
  getTemplateEstimateCost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetTemplateEstimateCost', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {RepeatList} Status - Status. optional.
   * @param {RepeatList} ChangeSetName - ChangeSetName. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {Long} PageNumber - PageNumber. optional.
   * @param {RepeatList} ExecutionStatus - ExecutionStatus. optional.
   */
  listChangeSets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListChangeSets', params, options);
  }

  /**
   */
  listResourceTypes(params = {}, options = {}) {
    return this.request('ListResourceTypes', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {RepeatList} Status - Status. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {RepeatList} ResourceType - ResourceType. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {Long} PageNumber - PageNumber. optional.
   * @param {RepeatList} LogicalResourceId - LogicalResourceId. optional.
   */
  listStackEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListStackEvents', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} RegionId - RegionId. required.
   */
  listStackResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListStackResources', params, options);
  }

  /**
   * @param {RepeatList} Status - Status. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {String} ParentStackId - ParentStackId. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {RepeatList} StackName - StackName. optional.
   * @param {Long} PageNumber - PageNumber. optional.
   * @param {Boolean} ShowNestedStack - ShowNestedStack. optional.
   */
  listStacks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListStacks', params, options);
  }

  /**
   * @param {Boolean} DisableRollback - DisableRollback. optional.
   * @param {Long} TimeoutInMinutes - TimeoutInMinutes. required.
   * @param {RepeatList} Parameters - Parameters. optional.
   * @param {String} TemplateBody - TemplateBody. optional.
   * @param {String} StackPolicyURL - StackPolicyURL. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {String} StackPolicyBody - StackPolicyBody. optional.
   * @param {String} StackName - StackName. required.
   * @param {String} ClientToken - ClientToken. optional.
   * @param {String} TemplateURL - TemplateURL. optional.
   */
  previewStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TimeoutInMinutes')) {
      throw new TypeError('parameter "TimeoutInMinutes" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    return this.request('PreviewStack', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} StackPolicyBody - StackPolicyBody. optional.
   * @param {String} StackPolicyURL - StackPolicyURL. optional.
   */
  setStackPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SetStackPolicy', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} Status - Status. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} UniqueId - UniqueId. required.
   * @param {String} ClientToken - ClientToken. optional.
   * @param {String} Data - Data. optional.
   * @param {String} LogicalResourceId - LogicalResourceId. required.
   */
  signalResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    if (!hasOwnProperty(params, 'LogicalResourceId')) {
      throw new TypeError('parameter "LogicalResourceId" is required');
    }

    return this.request('SignalResource', params, options);
  }

  /**
   * @param {String} StackId - StackId. required.
   * @param {String} ClientToken - ClientToken. optional.
   * @param {String} StackPolicyDuringUpdateBody - StackPolicyDuringUpdateBody. optional.
   * @param {Long} TimeoutInMinutes - TimeoutInMinutes. optional.
   * @param {String} TemplateBody - TemplateBody. optional.
   * @param {RepeatList} Parameters - Parameters. optional.
   * @param {String} StackPolicyURL - StackPolicyURL. optional.
   * @param {String} UpdateAllowPolicy - UpdateAllowPolicy. optional.
   * @param {String} StackPolicyDuringUpdateURL - StackPolicyDuringUpdateURL. optional.
   * @param {String} StackPolicyBody - StackPolicyBody. optional.
   * @param {Boolean} UsePreviousParameters - UsePreviousParameters. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {Boolean} DisableRollback - DisableRollback. optional.
   * @param {Boolean} EnableRecover - EnableRecover. optional.
   * @param {String} TemplateURL - TemplateURL. optional.
   */
  updateStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StackId')) {
      throw new TypeError('parameter "StackId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UpdateStack', params, options);
  }

  /**
   * @param {String} TemplateURL - TemplateURL. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} TemplateBody - TemplateBody. optional.
   */
  validateTemplate(params = {}, options = {}) {
    return this.request('ValidateTemplate', params, options);
  }

}

module.exports = Client;
