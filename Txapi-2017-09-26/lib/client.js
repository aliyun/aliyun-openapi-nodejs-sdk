
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-26';
    super(config);
  }

  /**
   * @param {String} FunctionName - functionName. required.
   * @param {String} JarPath - jarPath. required.
   * @param {String} Description - description. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  addFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'JarPath')) {
      throw new TypeError('parameter "JarPath" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('AddFunction', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} Content - content. required.
   * @param {String} ResourceType - resourceType. required.
   */
  addResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('AddResource', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} Content - content. required.
   */
  addSigma(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('AddSigma', params, options);
  }

  /**
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateVersion - templateVersion. required.
   * @param {String} Content - content. required.
   * @param {String} JarPath - jarPath. required.
   * @param {String} MainClass - mainClass. required.
   * @param {String} Description - description. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  addTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateVersion')) {
      throw new TypeError('parameter "TemplateVersion" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'JarPath')) {
      throw new TypeError('parameter "JarPath" is required');
    }

    if (!hasOwnProperty(params, 'MainClass')) {
      throw new TypeError('parameter "MainClass" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('AddTemplate', params, options);
  }

  /**
   * @param {String} FunctionName - functionName. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  deleteFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('DeleteFunction', params, options);
  }

  /**
   * @param {Long} ResourceId - resourceId. required.
   * @param {Long} Bid - bid. required.
   * @param {String} ResourceType - resourceType. required.
   */
  deleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DeleteResource', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   * @param {Long} Bid - bid. required.
   */
  deleteSigma(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('DeleteSigma', params, options);
  }

  /**
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateVersion - templateVersion. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  deleteTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateVersion')) {
      throw new TypeError('parameter "TemplateVersion" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('DeleteTemplate', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   */
  executeSigma(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    return this.request('ExecuteSigma', params, options);
  }

  /**
   * @param {String} Bids - bids. required.
   */
  getActiveBids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bids')) {
      throw new TypeError('parameter "Bids" is required');
    }

    return this.request('GetActiveBids', params, options);
  }

  /**
   */
  getAvailableNamespace(params = {}, options = {}) {
    return this.request('GetAvailableNamespace', params, options);
  }

  /**
   * @param {String} Namespace - namespace. required.
   */
  getAvailableProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    return this.request('GetAvailableProject', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   * @param {Long} Size - size. required.
   */
  getExceptionHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    return this.request('GetExceptionHistory', params, options);
  }

  /**
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  getFunctionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('GetFunctionList', params, options);
  }

  /**
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  getProjectMetaConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('GetProjectMetaConfig', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {Long} ResourceId - resourceId. required.
   */
  getResourceById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('GetResourceById', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} ResourceType - resourceType. required.
   */
  getResourceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('GetResourceList', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   */
  getResourcesBySigmaId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    return this.request('GetResourcesBySigmaId', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   */
  getSigmaGroupAndName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    return this.request('GetSigmaGroupAndName', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   */
  getSigmaGroupNameContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    return this.request('GetSigmaGroupNameContent', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   */
  getSigmaId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('GetSigmaId', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   */
  getSigmaIdNameList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('GetSigmaIdNameList', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   * @param {Long} Bid - bid. required.
   */
  getSigmaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('GetSigmaStatus', params, options);
  }

  /**
   * @param {Long} ResourceId - resourceId. required.
   */
  getSigmasByResourceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('GetSigmasByResourceId', params, options);
  }

  /**
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateVersion - templateVersion. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  getSigmasDependsOnTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateVersion')) {
      throw new TypeError('parameter "TemplateVersion" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('GetSigmasDependsOnTemplate', params, options);
  }

  /**
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  getTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('GetTemplateList', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Table - table. required.
   */
  isNameExistsInTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Table')) {
      throw new TypeError('parameter "Table" is required');
    }

    return this.request('IsNameExistsInTable', params, options);
  }

  /**
   * @param {String} ResourceType - resourceType. required.
   * @param {String} Content - content. required.
   */
  isResourceValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('IsResourceValid', params, options);
  }

  /**
   * @param {Long} SigmaId - sigmaId. required.
   */
  stopSigma(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    return this.request('StopSigma', params, options);
  }

  /**
   * @param {String} FunctionName - functionName. required.
   * @param {String} JarPath - jarPath. required.
   * @param {String} Description - description. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  updateFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'JarPath')) {
      throw new TypeError('parameter "JarPath" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('UpdateFunction', params, options);
  }

  /**
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   * @param {String} Config - config. required.
   */
  updateProjectMetaConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('UpdateProjectMetaConfig', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} Content - content. required.
   * @param {String} ResourceType - resourceType. required.
   */
  updateResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('UpdateResource', params, options);
  }

  /**
   * @param {Long} Bid - bid. required.
   * @param {String} Name - name. required.
   * @param {String} Content - content. required.
   * @param {Long} SigmaId - sigmaId. required.
   */
  updateSigma(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'SigmaId')) {
      throw new TypeError('parameter "SigmaId" is required');
    }

    return this.request('UpdateSigma', params, options);
  }

  /**
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateVersion - templateVersion. required.
   * @param {String} Content - content. required.
   * @param {String} JarPath - jarPath. required.
   * @param {String} MainClass - mainClass. required.
   * @param {String} Description - description. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Project - project. required.
   */
  updateTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateVersion')) {
      throw new TypeError('parameter "TemplateVersion" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'JarPath')) {
      throw new TypeError('parameter "JarPath" is required');
    }

    if (!hasOwnProperty(params, 'MainClass')) {
      throw new TypeError('parameter "MainClass" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('UpdateTemplate', params, options);
  }

}

module.exports = Client;
