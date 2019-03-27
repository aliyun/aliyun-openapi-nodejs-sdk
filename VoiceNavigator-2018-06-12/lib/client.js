
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-12';
    super(config);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - additionalContext. optional.
   */
  authorized(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('Authorized', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} NavigationScriptIds - navigationScriptIds. optional.
   */
  batchDeleteNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BatchDeleteNavigationScripts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} NavigationScriptIds - navigationScriptIds. optional.
   * @param {String} TargetCategoryId - targetCategoryId. required.
   */
  batchMoveNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetCategoryId')) {
      throw new TypeError('parameter "TargetCategoryId" is required');
    }

    return this.request('BatchMoveNavigationScripts', params, options);
  }

  /**
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - initialContext. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  beginDialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BeginDialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} Number - number. optional.
   */
  collectedNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('CollectedNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} ParentId - parentId. optional.
   */
  createCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateCategory', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Long} Concurrency - concurrency. required.
   * @param {String} ChatbotInstanceId - chatbotInstanceId. optional.
   * @param {String} NluServiceType - nluServiceType. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Concurrency')) {
      throw new TypeError('parameter "Concurrency" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Answer - answer. required.
   * @param {Boolean} Interruptible - interruptible. optional.
   */
  createKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'Answer')) {
      throw new TypeError('parameter "Answer" is required');
    }

    return this.request('CreateKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Prompt - prompt. optional.
   * @param {Boolean} Interruptible - interruptible. optional.
   * @param {String} RedirectionType - redirectionType. required.
   * @param {String} RedirectionTarget - redirectionTarget. optional.
   */
  createRedirection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'RedirectionType')) {
      throw new TypeError('parameter "RedirectionType" is required');
    }

    return this.request('CreateRedirection', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - additionalContext. optional.
   */
  debugAuthorized(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('DebugAuthorized', params, options);
  }

  /**
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - initialContext. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  debugBeginDialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DebugBeginDialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} Number - number. optional.
   */
  debugCollectedNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('DebugCollectedNumber', params, options);
  }

  /**
   * @param {String} ConversationId - conversationId. required.
   * @param {String} AdditionalContext - additionalContext. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Utterance - utterance. required.
   */
  debugDialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    return this.request('DebugDialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   */
  deleteCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('DeleteCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   */
  deleteNavigationScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    return this.request('DeleteNavigationScript', params, options);
  }

  /**
   */
  describeAccountStatus(params = {}, options = {}) {
    return this.request('DescribeAccountStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeCategoryTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeCategoryTree', params, options);
  }

  /**
   */
  describeConcurrencyLimit(params = {}, options = {}) {
    return this.request('DescribeConcurrencyLimit', params, options);
  }

  /**
   */
  describeDashboard(params = {}, options = {}) {
    return this.request('DescribeDashboard', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   */
  describeKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    return this.request('DescribeKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeNavigationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeNavigationConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TimeUnit - timeUnit. required.
   */
  describePerformanceIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeUnit')) {
      throw new TypeError('parameter "TimeUnit" is required');
    }

    return this.request('DescribePerformanceIndex', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   */
  describeRedirection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    return this.request('DescribeRedirection', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} Utterance - utterance. required.
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {String} AdditionalContext - additionalContext. optional.
   */
  dialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    return this.request('Dialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  disableInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DisableInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  duplicateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DuplicateInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  enableInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('EnableInstance', params, options);
  }

  /**
   */
  listAvailableInstances(params = {}, options = {}) {
    return this.request('ListAvailableInstances', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ParentId - parentId. optional.
   */
  listCategories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListCategories', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   */
  listConversationDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('ListConversationDetails', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listConversations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListConversations', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListInstances', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListNavigationScripts', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} InstanceId - instanceId. required.
   */
  listPublishHistories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListPublishHistories', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} Enabled - enabled. required.
   * @param {String} Prompt - prompt. required.
   * @param {Boolean} EnableNegativeFeedback - enableNegativeFeedback. required.
   * @param {RepeatList} NegativeFeedbackUtterances - negativeFeedbackUtterances. required.
   * @param {String} NegativeFeedbackPrompt - negativeFeedbackPrompt. required.
   * @param {String} NegativeFeedbackAction - negativeFeedbackAction. required.
   * @param {String} NegativeFeedbackActionParams - negativeFeedbackActionParams. optional.
   */
  modifyAskingBackConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Enabled')) {
      throw new TypeError('parameter "Enabled" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'EnableNegativeFeedback')) {
      throw new TypeError('parameter "EnableNegativeFeedback" is required');
    }

    if (!hasOwnProperty(params, 'NegativeFeedbackUtterances')) {
      throw new TypeError('parameter "NegativeFeedbackUtterances" is required');
    }

    if (!hasOwnProperty(params, 'NegativeFeedbackPrompt')) {
      throw new TypeError('parameter "NegativeFeedbackPrompt" is required');
    }

    if (!hasOwnProperty(params, 'NegativeFeedbackAction')) {
      throw new TypeError('parameter "NegativeFeedbackAction" is required');
    }

    return this.request('ModifyAskingBackConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} Name - name. required.
   */
  modifyCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Utterances - utterances. required.
   * @param {String} Prompt - prompt. required.
   * @param {String} FinalAction - finalAction. required.
   * @param {String} FinalActionParams - finalActionParams. optional.
   */
  modifyComplainingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterances')) {
      throw new TypeError('parameter "Utterances" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'FinalAction')) {
      throw new TypeError('parameter "FinalAction" is required');
    }

    return this.request('ModifyComplainingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GreetingWords - greetingWords. required.
   */
  modifyGreetingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GreetingWords')) {
      throw new TypeError('parameter "GreetingWords" is required');
    }

    return this.request('ModifyGreetingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Description - description. optional.
   * @param {Long} Concurrency - concurrency. required.
   * @param {String} ChatbotInstanceId - chatbotInstanceId. optional.
   */
  modifyInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Concurrency')) {
      throw new TypeError('parameter "Concurrency" is required');
    }

    return this.request('ModifyInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Answer - answer. required.
   * @param {Boolean} Interruptible - interruptible. optional.
   */
  modifyKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'Answer')) {
      throw new TypeError('parameter "Answer" is required');
    }

    return this.request('ModifyKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Json} GreetingConfig - greetingConfig. required.
   * @param {Json} AskingBackConfig - askingBackConfig. required.
   * @param {Json} RepeatingConfig - repeatingConfig. required.
   * @param {Json} UnrecognizingConfig - unrecognizingConfig. required.
   * @param {Json} ComplainingConfig - complainingConfig. required.
   * @param {Json} SilenceTimeoutConfig - silenceTimeoutConfig. required.
   */
  modifyNavigationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GreetingConfig')) {
      throw new TypeError('parameter "GreetingConfig" is required');
    }

    if (!hasOwnProperty(params, 'AskingBackConfig')) {
      throw new TypeError('parameter "AskingBackConfig" is required');
    }

    if (!hasOwnProperty(params, 'RepeatingConfig')) {
      throw new TypeError('parameter "RepeatingConfig" is required');
    }

    if (!hasOwnProperty(params, 'UnrecognizingConfig')) {
      throw new TypeError('parameter "UnrecognizingConfig" is required');
    }

    if (!hasOwnProperty(params, 'ComplainingConfig')) {
      throw new TypeError('parameter "ComplainingConfig" is required');
    }

    if (!hasOwnProperty(params, 'SilenceTimeoutConfig')) {
      throw new TypeError('parameter "SilenceTimeoutConfig" is required');
    }

    return this.request('ModifyNavigationConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Prompt - prompt. optional.
   * @param {Boolean} Interruptible - interruptible. optional.
   * @param {String} RedirectionType - redirectionType. required.
   * @param {String} RedirectionTarget - redirectionTarget. optional.
   */
  modifyRedirection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'RedirectionType')) {
      throw new TypeError('parameter "RedirectionType" is required');
    }

    return this.request('ModifyRedirection', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Utterances - utterances. required.
   */
  modifyRepeatingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterances')) {
      throw new TypeError('parameter "Utterances" is required');
    }

    return this.request('ModifyRepeatingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Prompt - prompt. required.
   * @param {Long} Timeout - timeout. required.
   * @param {Integer} Threshold - threshold. required.
   * @param {String} FinalPrompt - finalPrompt. required.
   * @param {String} FinalAction - finalAction. required.
   * @param {String} FinalActionParams - finalActionParams. optional.
   */
  modifySilenceTimeoutConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'Timeout')) {
      throw new TypeError('parameter "Timeout" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'FinalPrompt')) {
      throw new TypeError('parameter "FinalPrompt" is required');
    }

    if (!hasOwnProperty(params, 'FinalAction')) {
      throw new TypeError('parameter "FinalAction" is required');
    }

    return this.request('ModifySilenceTimeoutConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Prompt - prompt. required.
   * @param {Integer} Threshold - threshold. required.
   * @param {String} FinalPrompt - finalPrompt. required.
   * @param {String} FinalAction - finalAction. required.
   * @param {String} FinalActionParams - finalActionParams. optional.
   */
  modifyUnrecognizingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'FinalPrompt')) {
      throw new TypeError('parameter "FinalPrompt" is required');
    }

    if (!hasOwnProperty(params, 'FinalAction')) {
      throw new TypeError('parameter "FinalAction" is required');
    }

    return this.request('ModifyUnrecognizingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TargetParentId - targetParentId. optional.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} TargetPreviousSiblingId - targetPreviousSiblingId. optional.
   */
  moveCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('MoveCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   * @param {String} TargetCategoryId - targetCategoryId. required.
   */
  moveNavigationScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    if (!hasOwnProperty(params, 'TargetCategoryId')) {
      throw new TypeError('parameter "TargetCategoryId" is required');
    }

    return this.request('MoveNavigationScript', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  publishInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('PublishInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {Long} BeginTimeLeftRange - beginTimeLeftRange. optional.
   * @param {Long} BeginTimeRightRange - beginTimeRightRange. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryConversations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryConversations', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. optional.
   * @param {String} Type - type. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryNavigationScripts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TargetVersion - targetVersion. required.
   */
  rollbackInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    return this.request('RollbackInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - initialContext. optional.
   */
  silenceTimeout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('SilenceTimeout', params, options);
  }

}

module.exports = Client;
