
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-20';
    super(config);
  }

  /**
   * @param {Integer} TemplateId - templateId. required.
   */
  deleteAlertTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteAlertTemplate', params, options);
  }

  /**
   */
  getProductGroupsAction(params = {}, options = {}) {
    return this.request('GetProductGroupsAction', params, options);
  }

  /**
   * @param {Long} TemplateId - templateId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAlertTemplate(params = {}, options = {}) {
    return this.request('ListAlertTemplate', params, options);
  }

  /**
   * @param {Integer} TemplateId - templateId. optional.
   * @param {String} TemplateName - name. optional.
   * @param {String} TemplateDescribe - templateDescribe. optional.
   * @param {String} SilenceTime - silenceTime. optional.
   * @param {String} EnableStartTime - enableStartTime. optional.
   * @param {String} EnableEndTime - enableEndTime. optional.
   * @param {String} NotifyLevel - notifyLevel. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} ApplyGroups - applyGroups. optional.
   * @param {String} AlarmTemplateItems - templates. optional.
   */
  putAlertTemplate(params = {}, options = {}) {
    return this.request('PutAlertTemplate', params, options);
  }

  /**
   * @param {String} TemplateId - templateId. required.
   * @param {String} GroupIds - groupIds. required.
   */
  updateTemplateApplyGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'GroupIds')) {
      throw new TypeError('parameter "GroupIds" is required');
    }

    return this.request('UpdateTemplateApplyGroups', params, options);
  }

}

module.exports = Client;
