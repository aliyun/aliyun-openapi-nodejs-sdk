
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-11';
    super(config);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Token - token. required.
   * @param {Integer} ClusterId - clusterId. required.
   */
  allocateResourceSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('AllocateResourceSpace', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} JobTemplateId - jobTemplateId. required.
   * @param {String} Cluster - cluster. required.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Integer} TimeToLive - timeToLive. optional.
   * @param {String} ClusterName - clusterName. optional.
   */
  createAndStartJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'JobTemplateId')) {
      throw new TypeError('parameter "JobTemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    return this.request('CreateAndStartJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} WorkflowTemplateId - workflowTemplateId. required.
   * @param {String} SchedStartTime - schedStartTime. optional.
   * @param {String} NoticeTypes - noticeTypes. optional.
   */
  createAndStartWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTemplateId')) {
      throw new TypeError('parameter "WorkflowTemplateId" is required');
    }

    return this.request('CreateAndStartWorkflow', params, options);
  }

  /**
   * @param {String} ContactType - contactType. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} DingTalkWebHook - dingTalkWebHook. optional.
   */
  createContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('CreateContact', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} JobTemplateId - jobTemplateId. required.
   * @param {String} Cluster - cluster. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Integer} TimeToLive - timeToLive. optional.
   * @param {String} ClusterName - clusterName. optional.
   */
  createJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'JobTemplateId')) {
      throw new TypeError('parameter "JobTemplateId" is required');
    }

    return this.request('CreateJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} JobType - jobType. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} Content - content. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Integer} TimeToLive - timeToLive. optional.
   * @param {String} ClusterName - clusterName. optional.
   */
  createJobTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'JobType')) {
      throw new TypeError('parameter "JobType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateJobTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Token - token. required.
   * @param {Integer} ClusterId - clusterId. required.
   */
  createResourceOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CreateResourceOwner', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Token - token. required.
   * @param {Integer} ClusterId - clusterId. required.
   */
  createResourceSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CreateResourceSpace', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} Content - content. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {Integer} Ttl - ttl. optional.
   */
  createSessionTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateSessionTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Content - content. optional.
   * @param {String} SessionId - sessionId. required.
   * @param {String} Type - statementType. required.
   */
  createStatementTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SessionId')) {
      throw new TypeError('parameter "SessionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateStatementTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} WorkflowTemplateId - workflowTemplateId. required.
   * @param {String} SchedStartTime - schedStartTime. optional.
   * @param {String} NoticeTypes - noticeTypes. optional.
   */
  createWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTemplateId')) {
      throw new TypeError('parameter "WorkflowTemplateId" is required');
    }

    return this.request('CreateWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {String} Cluster - cluster. required.
   * @param {String} Graph - graph. optional.
   * @param {Boolean} IsScheduled - scheduled. optional.
   * @param {String} SchedCron - schedCron. optional.
   * @param {String} SchedStartTime - schedStartTime. optional.
   * @param {String} SchedEndTime - schedEndTime. optional.
   * @param {String} NoticeTypes - noticeTypes. optional.
   * @param {String} ClusterName - clusterName. optional.
   */
  createWorkflowTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    return this.request('CreateWorkflowTemplate', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteContact', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  deleteJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  deleteJobTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteJobTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Token - token. required.
   * @param {Long} Uid - uid. required.
   */
  deleteResourceOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DeleteResourceOwner', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Token - token. required.
   * @param {Long} Uid - uid. required.
   */
  deleteResourceSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DeleteResourceSpace', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Resources - resources. required.
   */
  deleteResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Resources')) {
      throw new TypeError('parameter "Resources" is required');
    }

    return this.request('DeleteResources', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  deleteSessionTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteSessionTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  deleteStatementTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteStatementTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  deleteWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  deleteWorkflowTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteWorkflowTemplate', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  getContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetContact', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getJobContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetJobContent', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getJobLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetJobLog', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getJobTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetJobTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Name - name. required.
   */
  getResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('GetResource', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Name - name. required.
   */
  getResourceDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('GetResourceDownloadUrl', params, options);
  }

  /**
   * @param {String} Region - region. required.
   */
  getResourceSpaceCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('GetResourceSpaceCertificate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  getSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetSession', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  getSessionLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetSessionLog', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getSessionTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetSessionTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  getStatement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetStatement', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getStatementTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetStatementTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  getWorkflowTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetWorkflowTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} ClusterType - clusterType. required.
   */
  listClusters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    return this.request('ListClusters', params, options);
  }

  /**
   * @param {String} ContactType - contactType. required.
   */
  listContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('ListContacts', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} JobType - jobType. optional.
   */
  listJobTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListJobTemplates', params, options);
  }

  /**
   */
  listJobTypes(params = {}, options = {}) {
    return this.request('ListJobTypes', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} JobTemplateId - jobTemplateId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'JobTemplateId')) {
      throw new TypeError('parameter "JobTemplateId" is required');
    }

    return this.request('ListJobs', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Prefix - prefix. optional.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxKeys - maxKeys. optional.
   */
  listResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListResources', params, options);
  }

  /**
   * @param {String} Region - region. required.
   */
  listSessionTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListSessionTemplates', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listSessions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListSessions', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} SessionId - sessionId. optional.
   */
  listStatementTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListStatementTemplates', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} WorkflowId - workflowId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listWorkflowJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('ListWorkflowJobs', params, options);
  }

  /**
   * @param {String} Region - region. required.
   */
  listWorkflowTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListWorkflowTemplates', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} WorkflowTemplateId - workflowTemplateId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listWorkflows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTemplateId')) {
      throw new TypeError('parameter "WorkflowTemplateId" is required');
    }

    return this.request('ListWorkflows', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  pauseWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('PauseWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Token - token. required.
   * @param {Integer} ClusterId - clusterId. required.
   */
  releaseResourceSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ReleaseResourceSpace', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  restartSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('RestartSession', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  resumeWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ResumeWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  retryWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('RetryWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  startJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StartJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  startSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('StartSession', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  startStatement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('StartStatement', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  startWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StartWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  statJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('StatJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   */
  statResourceSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('StatResourceSpace', params, options);
  }

  /**
   * @param {String} Region - region. required.
   */
  statSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('StatSummary', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  statWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('StatWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  stopJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  stopSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('StopSession', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} TemplateId - templateId. required.
   */
  stopStatement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('StopStatement', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   */
  stopWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopWorkflow', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Description - description. optional.
   * @param {String} DingTalkWebHook - dingTalkWebHook. optional.
   * @param {String} Name - name. optional.
   */
  updateContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateContact', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   * @param {String} Cluster - cluster. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Integer} TimeToLive - timeToLive. optional.
   */
  updateJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {String} Content - content. optional.
   * @param {Integer} TimeToLive - timeToLive. optional.
   * @param {String} ClusterName - clusterName. optional.
   */
  updateJobTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateJobTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} Content - content. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {Integer} Ttl - ttl. optional.
   */
  updateSessionTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateSessionTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Content - content. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} Type - statementType. optional.
   */
  updateStatementTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateStatementTemplate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   * @param {String} SchedStartTime - schedStartTime. optional.
   * @param {String} NoticeTypes - noticeTypes. optional.
   */
  updateWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateWorkflow', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} Graph - graph. optional.
   * @param {Boolean} IsScheduled - Scheduled. optional.
   * @param {String} SchedCron - schedCron. optional.
   * @param {String} SchedStartTime - schedStartTime. optional.
   * @param {String} SchedEndTime - schedEndTime. optional.
   * @param {String} NoticeTypes - noticeTypes. optional.
   * @param {String} ClusterName - clusterName. optional.
   */
  updateWorkflowTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateWorkflowTemplate', params, options);
  }

}

module.exports = Client;
