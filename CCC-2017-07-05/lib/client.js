
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-05';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} PhoneNumber - phoneNumbers. required.
   * @param {String} Usage - usage. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   */
  addBulkPhoneNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'Usage')) {
      throw new TypeError('parameter "Usage" is required');
    }

    return this.request('AddBulkPhoneNumbers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} Number - number. required.
   */
  addNumberToSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('AddNumberToSkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} Usage - usage. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   */
  addPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'Usage')) {
      throw new TypeError('parameter "Usage" is required');
    }

    return this.request('AddPhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {RepeatList} JobsJson - jobsJson. required.
   */
  assignJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'JobsJson')) {
      throw new TypeError('parameter "JobsJson" is required');
    }

    return this.request('AssignJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} UserRamId - userRamIds. required.
   * @param {RepeatList} RoleId - roleIds. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  assignUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserRamId')) {
      throw new TypeError('parameter "UserRamId" is required');
    }

    return this.request('AssignUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TelA - telA. required.
   * @param {String} TelB - telB. required.
   */
  callOnlinePrivacyNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TelA')) {
      throw new TypeError('parameter "TelA" is required');
    }

    if (!hasOwnProperty(params, 'TelB')) {
      throw new TypeError('parameter "TelB" is required');
    }

    return this.request('CallOnlinePrivacyNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   * @param {RepeatList} JobReferenceId - jobReferenceIds. optional.
   */
  cancelJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('CancelJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} JobGroupId - groupId. required.
   * @param {RepeatList} JobId - jobIds. optional.
   */
  cancelPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('CancelPredictiveJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   * @param {String} Canvas - canvas. required.
   * @param {String} Content - content. required.
   */
  commitContactFlowVersionModification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    if (!hasOwnProperty(params, 'Canvas')) {
      throw new TypeError('parameter "Canvas" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('CommitContactFlowVersionModification', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {String} JobFilePath - jobFilePath. optional.
   * @param {Boolean} Submitted - submitted. required.
   */
  createBatchJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Submitted')) {
      throw new TypeError('parameter "Submitted" is required');
    }

    return this.request('CreateBatchJobs', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. required.
   */
  createCCCPostOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('CreateCCCPostOrder', params, options);
  }

  /**
   * @param {String} InstanceName - instanceName. required.
   * @param {String} InstanceDescription - instanceDescription. optional.
   * @param {Integer} MaxConcurrentConversation - maxConcurrentConversation. required.
   * @param {String} CallCenterInstanceId - callCenterInstanceId. optional.
   */
  createCabInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'MaxConcurrentConversation')) {
      throw new TypeError('parameter "MaxConcurrentConversation" is required');
    }

    return this.request('CreateCabInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. required.
   * @param {String} Canvas - canvas. required.
   * @param {String} Content - content. required.
   */
  createContactFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Canvas')) {
      throw new TypeError('parameter "Canvas" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('CreateContactFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Integer} StorageMaxDays - storageMaxDays. required.
   * @param {Integer} StorageMaxSize - storageMaxSize. required.
   * @param {String} DirectoryId - directoryId. optional.
   * @param {RepeatList} AdminRamId - adminRamIds. optional.
   * @param {RepeatList} PhoneNumber - phoneNumbers. required.
   * @param {RepeatList} UserObject - userObjects. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxDays')) {
      throw new TypeError('parameter "StorageMaxDays" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxSize')) {
      throw new TypeError('parameter "StorageMaxSize" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   */
  createJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateJobGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   * @param {String} OssFileName - ossFileName. required.
   * @param {String} OssFilePath - ossFilePath. required.
   * @param {String} UploadResult - uploadResult. required.
   */
  createMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OssFileName')) {
      throw new TypeError('parameter "OssFileName" is required');
    }

    if (!hasOwnProperty(params, 'OssFilePath')) {
      throw new TypeError('parameter "OssFilePath" is required');
    }

    if (!hasOwnProperty(params, 'UploadResult')) {
      throw new TypeError('parameter "UploadResult" is required');
    }

    return this.request('CreateMedia', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} StrategyJson - strategyJson. required.
   * @param {RepeatList} JobsJson - jobsJson. required.
   */
  createPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyJson')) {
      throw new TypeError('parameter "StrategyJson" is required');
    }

    if (!hasOwnProperty(params, 'JobsJson')) {
      throw new TypeError('parameter "JobsJson" is required');
    }

    return this.request('CreatePredictiveJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {String} Type - type. optional.
   * @param {RepeatList} SurveysJson - surveysJson. optional.
   */
  createScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateScenario', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} Variables - variables. optional.
   */
  createScenarioFromTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('CreateScenarioFromTemplate', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Description - description. optional.
   * @param {RepeatList} OutboundPhoneNumberId - outboundPhoneNumberIds. optional.
   * @param {RepeatList} UserId - userIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  createSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateSkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FlowJson - flowJson. optional.
   * @param {String} Corpora - corpora. optional.
   * @param {String} SpeechOptimizationParam - speechOptimizationParam. optional.
   * @param {String} GlobalQuestions - globalQuestions. optional.
   * @param {String} Role - role. optional.
   * @param {Integer} Round - round. optional.
   */
  createSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateSurvey', params, options);
  }

  /**
   * @param {String} DisplayName - displayName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} LoginName - loginName. required.
   * @param {String} Phone - phone. optional.
   * @param {String} Email - email. required.
   * @param {String} PrivateOutboundNumberId - privateOutboundNumberId. optional.
   * @param {RepeatList} RoleId - roleIds. required.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  createUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'LoginName')) {
      throw new TypeError('parameter "LoginName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('CreateUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
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
   * @param {String} JobGroupId - jobGroupId. required.
   */
  deleteJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DeleteJobGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   */
  deleteMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   */
  deleteSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    return this.request('DeleteSkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} SurveyId - surveyId. required.
   */
  deleteSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('DeleteSurvey', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   * @param {String} CallType - callType. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} Utterance - utterance. required.
   * @param {String} ActionKey - action. optional.
   * @param {String} ActionParams - actionParams. optional.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   */
  dialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'CallType')) {
      throw new TypeError('parameter "CallType" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    return this.request('Dialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  downloadOriginalStatisticsReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DownloadOriginalStatisticsReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FileName - fileName. required.
   * @param {String} Channel - channel. optional.
   */
  downloadRecording(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('DownloadRecording', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  downloadUnreachableContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DownloadUnreachableContacts', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} PublicKey - publicKey. optional.
   * @param {RepeatList} PlainText - plainTexts. required.
   */
  encrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlainText')) {
      throw new TypeError('parameter "PlainText" is required');
    }

    return this.request('Encrypt', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Criteria - criteria. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  findUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Criteria')) {
      throw new TypeError('parameter "Criteria" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AgentId - agentId. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  generateAgentStatisticReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GenerateAgentStatisticReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   * @param {String} UserId - userId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getAgentData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetAgentData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Dn - dn. optional.
   * @param {String} AgentId - agentId. optional.
   */
  getAgentState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetAgentState', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IntervalType - intervalType. required.
   * @param {Integer} Year - year. required.
   * @param {Integer} Month - month. required.
   * @param {Integer} Day - day. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getCallMeasureSummaryReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntervalType')) {
      throw new TypeError('parameter "IntervalType" is required');
    }

    if (!hasOwnProperty(params, 'Year')) {
      throw new TypeError('parameter "Year" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('GetCallMeasureSummaryReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} ObjectId - objectId. optional.
   * @param {String} ObjectType - objectType. required.
   */
  getConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ObjectType')) {
      throw new TypeError('parameter "ObjectType" is required');
    }

    return this.request('GetConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OutboundTaskId - outboundTaskId. required.
   */
  getContactIdentifyByOutBoundTaskId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OutboundTaskId')) {
      throw new TypeError('parameter "OutboundTaskId" is required');
    }

    return this.request('GetContactIdentifyByOutBoundTaskId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ContactId - contactId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getConversationDetailByContactId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetConversationDetailByContactId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TaskId - taskId. required.
   */
  getConversationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetConversationList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceState', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getInstanceSummaryReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetInstanceSummaryReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Interval - interval. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getInstanceSummaryReportByInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetInstanceSummaryReportByInterval', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getInstanceSummaryReportSinceMidnight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceSummaryReportSinceMidnight', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobId - jobId. required.
   */
  getJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetJob', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FileName - fileName. required.
   */
  getJobDataUploadParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('GetJobDataUploadParams', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  getJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('GetJobGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {Integer} Status - status. optional.
   * @param {Boolean} QueryAll - queryAll. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'QueryAll')) {
      throw new TypeError('parameter "QueryAll" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetJobList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   */
  getJobStatusByCallId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    return this.request('GetJobStatusByCallId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  getJobTemplateDownloadParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('GetJobTemplateDownloadParams', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Number - number. required.
   */
  getNumberRegionInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('GetNumberRegionInfo', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobId - jobId. required.
   */
  getPredictiveJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetPredictiveJob', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  getScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('GetScenario', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ServiceType - serviceType. required.
   */
  getServiceExtensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceType')) {
      throw new TypeError('parameter "ServiceType" is required');
    }

    return this.request('GetServiceExtensions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Scenario - scenarios. required.
   */
  getSmsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Scenario')) {
      throw new TypeError('parameter "Scenario" is required');
    }

    return this.request('GetSmsConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} SurveyId - surveyId. required.
   */
  getSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('GetSurvey', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobId - jobId. required.
   */
  getTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetTaskList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  getUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Acid - acid. required.
   */
  launchAppraise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Acid')) {
      throw new TypeError('parameter "Acid" is required');
    }

    return this.request('LaunchAppraise', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Acid - acid. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {Integer} ContactType - contactType. required.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   */
  launchShortMessageAppraise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Acid')) {
      throw new TypeError('parameter "Acid" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    return this.request('LaunchShortMessageAppraise', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} RamId - ramId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} Event - event. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listAgentEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RamId')) {
      throw new TypeError('parameter "RamId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListAgentEvents', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} AgentIds - agents. optional.
   * @param {String} State - state. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentStates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListAgentStates', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} AgentIds - agents. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentSummaryReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListAgentSummaryReports', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} AgentIds - agents. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentSummaryReportsByInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListAgentSummaryReportsByInterval', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} AgentIds - agents. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentSummaryReportsSinceMidnight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListAgentSummaryReportsSinceMidnight', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} Title - title. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listBasicStatisticsReportSubItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListBasicStatisticsReportSubItems', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} Criteria - criteria. optional.
   * @param {String} ContactType - contactType. optional.
   * @param {String} ContactDisposition - contactDisposition. optional.
   * @param {Boolean} WithRecording - withRecording. optional.
   * @param {String} ContactId - contactId. optional.
   * @param {String} OrderBy - orderBy. optional. default: ASC.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listCallDetailRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListCallDetailRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IntervalType - intervalType. required.
   */
  listCallMeasureSummaryReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntervalType')) {
      throw new TypeError('parameter "IntervalType" is required');
    }

    return this.request('ListCallMeasureSummaryReports', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} ConfigItem - configItems. optional.
   */
  listConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  listContactFlows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListContactFlows', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactId - contactId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listIvrTrackingDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListIvrTrackingDetail', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listJobGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListJobGroups', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} TimeAlignment - timeAlignment. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListJobStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} JobStatus - jobStatus. optional.
   * @param {String} JobFailureReason - jobFailureReason. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listJobsByGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListJobsByGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listMedias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListMedias', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  listOutboundPhoneNumberOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListOutboundPhoneNumberOfUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} OutboundOnly - outboundOnly. required.
   */
  listPhoneNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OutboundOnly')) {
      throw new TypeError('parameter "OutboundOnly" is required');
    }

    return this.request('ListPhoneNumbers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - groupId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} TimeAlignment - timeAlignment. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listPredictiveJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListPredictiveJobStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} ContactId - contactId. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} AgentName - agentName. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listPrivacyNumberCallDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListPrivacyNumberCallDetails', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listPrivilegesOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListPrivilegesOfUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  listRealTimeAgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListRealTimeAgent', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Criteria - criteria. optional.
   */
  listRecentCallRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecentCallRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConnectId - connectId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} StopTime - stopTime. required.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRecordingOfDualTrack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'StopTime')) {
      throw new TypeError('parameter "StopTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecordingOfDualTrack', params, options);
  }

  /**
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} Criteria - criteria. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRecordings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecordings', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactId - contactId. required.
   */
  listRecordingsByContactId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('ListRecordingsByContactId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  listRoles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListRoles', params, options);
  }

  /**
   */
  listScenarioTemplates(params = {}, options = {}) {
    return this.request('ListScenarioTemplates', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listScenarios(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListScenarios', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupIds - skillGroups. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSkillGroupStates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListSkillGroupStates', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupIds - skillGroups. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSkillGroupSummaryReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListSkillGroupSummaryReports', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupIds - skillGroups. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSkillGroupSummaryReportsByInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListSkillGroupSummaryReportsByInterval', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroups - skillGroups. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSkillGroupSummaryReportsSinceMidnight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListSkillGroupSummaryReportsSinceMidnight', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  listSkillGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListSkillGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  listSkillGroupsOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListSkillGroupsOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  listSurveys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ListSurveys', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUnreachableContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUnreachableContacts', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUsers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUsersOfSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUsersOfSkillGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   * @param {String} OssFileName - ossFileName. required.
   * @param {String} OssFilePath - ossFilePath. required.
   * @param {String} UploadResult - uploadResult. required.
   */
  modifyMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OssFileName')) {
      throw new TypeError('parameter "OssFileName" is required');
    }

    if (!hasOwnProperty(params, 'OssFilePath')) {
      throw new TypeError('parameter "OssFilePath" is required');
    }

    if (!hasOwnProperty(params, 'UploadResult')) {
      throw new TypeError('parameter "UploadResult" is required');
    }

    return this.request('ModifyMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} AccessPoint - accessPoint. required.
   * @param {String} Topic - topic. required.
   * @param {RepeatList} Subscriptions - subscriptions. required.
   */
  modifyNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'AccessPoint')) {
      throw new TypeError('parameter "AccessPoint" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Subscriptions')) {
      throw new TypeError('parameter "Subscriptions" is required');
    }

    return this.request('ModifyNotificationConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   * @param {String} Usage - usage. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   */
  modifyPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    if (!hasOwnProperty(params, 'Usage')) {
      throw new TypeError('parameter "Usage" is required');
    }

    return this.request('ModifyPhoneNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   * @param {String} ContactId - contactId. required.
   */
  modifyPrivacyNumberCallDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('ModifyPrivacyNumberCallDetail', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Variables - variables. optional.
   */
  modifyScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ModifyScenario', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} Description - description. optional.
   * @param {RepeatList} OutboundPhoneNumberId - outboundPhoneNumberIds. optional.
   * @param {RepeatList} UserId - userIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   * @param {Boolean} AllowPrivateOutboundNumber - allowPrivateOutboundNumber. optional.
   */
  modifySkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    return this.request('ModifySkillGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} RoleId - roleIds. required.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  modifySkillGroupOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('ModifySkillGroupOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SurveyId - surveyId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} FlowId - flowId. optional.
   * @param {String} FlowJson - flowJson. optional.
   * @param {String} Corpora - corpora. optional.
   * @param {String} SpeechOptimizationParam - speechOptimizationParam. optional.
   * @param {String} GlobalQuestions - globalQuestions. optional.
   * @param {String} Role - role. optional.
   * @param {Integer} Round - round. optional.
   */
  modifySurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ModifySurvey', params, options);
  }

  /**
   * @param {String} DisplayName - displayName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Phone - phone. required.
   * @param {String} Email - email. required.
   * @param {String} PrivateOutboundNumberId - privateOutboundNumberId. optional.
   * @param {RepeatList} RoleId - roleIds. required.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  modifyUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('ModifyUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CalleeNumber - calleeNumber. required.
   * @param {RepeatList} CandidateNumber - candidateNumbers. required.
   */
  pickLocalNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeNumber')) {
      throw new TypeError('parameter "CalleeNumber" is required');
    }

    if (!hasOwnProperty(params, 'CandidateNumber')) {
      throw new TypeError('parameter "CandidateNumber" is required');
    }

    return this.request('PickLocalNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CalleeNumber - calleeNumber. required.
   * @param {RepeatList} CandidateNumber - candidateNumbers. required.
   * @param {Integer} Count - count. required.
   */
  pickOutboundNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeNumber')) {
      throw new TypeError('parameter "CalleeNumber" is required');
    }

    if (!hasOwnProperty(params, 'CandidateNumber')) {
      throw new TypeError('parameter "CandidateNumber" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('PickOutboundNumbers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CalleeNumber - calleeNumber. required.
   * @param {RepeatList} ServiceTag - serviceTags. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. required.
   * @param {Integer} Count - count. required.
   * @param {RepeatList} PrioritizedCallerArea - prioritizedCallerAreas. optional.
   */
  pickOutboundNumbersByTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeNumber')) {
      throw new TypeError('parameter "CalleeNumber" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('PickOutboundNumbersByTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   */
  preCreateMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PreCreateMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   */
  preModifyMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PreModifyMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   */
  publishContactFlowVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    return this.request('PublishContactFlowVersion', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} SurveyId - surveyId. required.
   */
  publishSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('PublishSurvey', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactId - contactId. required.
   * @param {Boolean} MockResponse - mockResponse. optional.
   */
  queryRedialIndicator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('QueryRedialIndicator', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  refreshToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefreshToken', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} Number - number. required.
   */
  removeNumberFromSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('RemoveNumberFromSkillGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   */
  removePhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    return this.request('RemovePhoneNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} UserId - userIds. required.
   */
  removeUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('RemoveUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {RepeatList} UserId - userIds. required.
   */
  removeUsersFromSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('RemoveUsersFromSkillGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  requestLoginInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RequestLoginInfo', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   * @param {RepeatList} JobReferenceId - jobReferenceIds. optional.
   */
  resumeJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('ResumeJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   * @param {Long} ConfigId - configId. required.
   * @param {String} TemplateParam - templateParam. optional.
   */
  sendPredefinedShortMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('SendPredefinedShortMessage', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Callee - callee. required.
   * @param {String} ContractFlowId - contractFlowId. required.
   */
  simpleDial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Callee')) {
      throw new TypeError('parameter "Callee" is required');
    }

    if (!hasOwnProperty(params, 'ContractFlowId')) {
      throw new TypeError('parameter "ContractFlowId" is required');
    }

    return this.request('SimpleDial', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} WorkflowId - workflowId. optional.
   * @param {String} CallCenterNumber - callCenterNumber. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Callee - callee. required.
   */
  startBack2BackCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Callee')) {
      throw new TypeError('parameter "Callee" is required');
    }

    return this.request('StartBack2BackCall', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {String} JobJson - jobJson. required.
   * @param {Boolean} SelfHostedCallCenter - selfHostedCallCenter. optional.
   */
  startJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'JobJson')) {
      throw new TypeError('parameter "JobJson" is required');
    }

    return this.request('StartJob', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  submitBatchJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('SubmitBatchJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   * @param {RepeatList} JobReferenceId - jobReferenceIds. optional.
   */
  suspendJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('SuspendJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Caller - caller. optional.
   * @param {String} CalleeAgent - calleeAgent. required.
   * @param {String} CalleeCustomer - calleeCustomer. required.
   */
  twoPartiesCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeAgent')) {
      throw new TypeError('parameter "CalleeAgent" is required');
    }

    if (!hasOwnProperty(params, 'CalleeCustomer')) {
      throw new TypeError('parameter "CalleeCustomer" is required');
    }

    return this.request('TwoPartiesCall', params, options);
  }

}

module.exports = Client;
