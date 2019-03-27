
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-25';
    super(config);
  }

  /**
   * @param {String} FileKey - fileKey. required.
   * @param {String} Filename - filename. required.
   * @param {Long} UserId - userId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  attachment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileKey')) {
      throw new TypeError('parameter "FileKey" is required');
    }

    if (!hasOwnProperty(params, 'Filename')) {
      throw new TypeError('parameter "Filename" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('Attachment', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} SuggestionId - suggestionId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  attachmentList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SuggestionId')) {
      throw new TypeError('parameter "SuggestionId" is required');
    }

    return this.request('AttachmentList', params, options);
  }

  /**
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  checkAccountResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    options.method = 'POST';
    return this.request('CheckAccountResource', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} SuggestionId - suggestionId. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  commentList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SuggestionId')) {
      throw new TypeError('parameter "SuggestionId" is required');
    }

    return this.request('CommentList', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} CommentId - commentId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  deleteComment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'CommentId')) {
      throw new TypeError('parameter "CommentId" is required');
    }

    return this.request('DeleteComment', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} SuggestionId - suggestionId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  deleteSuggestion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'SuggestionId')) {
      throw new TypeError('parameter "SuggestionId" is required');
    }

    return this.request('DeleteSuggestion', params, options);
  }

  /**
   * @param {String} RequestId - requestId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  describeEnv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    return this.request('DescribeEnv', params, options);
  }

  /**
   * @param {Long} callerUid - callerUid. required.
   * @param {String} RequestId - requestId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  env(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    return this.request('Env', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  findUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('FindUser', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} DocumentId - documentId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} Level - level. optional.
   * @param {Integer} Visibility - visibility. optional.
   * @param {Boolean} Comment - comment. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  getDocSuggestions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DocumentId')) {
      throw new TypeError('parameter "DocumentId" is required');
    }

    return this.request('GetDocSuggestions', params, options);
  }

  /**
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  logicalDeleteAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    options.method = 'POST';
    return this.request('LogicalDeleteAccount', params, options);
  }

  /**
   * @param {Integer} Status - status. optional.
   * @param {Integer} OrderBy - orderBy. optional.
   * @param {Integer} Source - source. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} UserId - userId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  mine(params = {}, options = {}) {
    return this.request('Mine', params, options);
  }

  /**
   * @param {String} Description - content. required.
   * @param {Long} UserId - userId. required.
   * @param {Long} CommentId - commentId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  modifyComment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'CommentId')) {
      throw new TypeError('parameter "CommentId" is required');
    }

    return this.request('ModifyComment', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  mvpConnect(params = {}, options = {}) {
    return this.request('MvpConnect', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  mvpInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('MvpInfo', params, options);
  }

  /**
   * @param {String} Description - content. required.
   * @param {Long} UserId - userId. required.
   * @param {Long} SuggestionId - suggestionId. required.
   * @param {String} AttachmentIds - attachmentIds. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  newComment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'SuggestionId')) {
      throw new TypeError('parameter "SuggestionId" is required');
    }

    return this.request('NewComment', params, options);
  }

  /**
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  physicalDeleteAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    options.method = 'POST';
    return this.request('PhysicalDeleteAccount', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Name - name. required.
   * @param {String} AccountName - accountName. required.
   * @param {Integer} Type - type. required.
   * @param {Integer} SubType - subType. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  register(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('Register', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {Long} ByUserId - byUserId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Integer} OrderBy - orderBy. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  search(params = {}, options = {}) {
    return this.request('Search', params, options);
  }

  /**
   * @param {String} Keyword - keyword. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  searchTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('SearchTag', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  stats(params = {}, options = {}) {
    return this.request('Stats', params, options);
  }

  /**
   * @param {Long} SuggestionId - suggestionId. optional.
   * @param {String} Title - title. required.
   * @param {String} Description - content. required.
   * @param {String} Tags - tags. required.
   * @param {Integer} Client - client. required.
   * @param {String} AttachmentIds - attachmentIds. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} DeviceInfo - deviceInfo. optional.
   * @param {Integer} Visibility - visibility. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  submit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    if (!hasOwnProperty(params, 'Client')) {
      throw new TypeError('parameter "Client" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('Submit', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} UserName - userName. required.
   * @param {String} UserAccountName - userAccountName. required.
   * @param {String} UserAvatar - userAvatar. optional.
   * @param {String} Title - title. required.
   * @param {String} FeedbackContent - feedbackContent. required.
   * @param {Integer} Category - category. required.
   * @param {String} Link - link. required.
   * @param {Integer} Score - score. optional.
   * @param {String} Tags - tags. required.
   * @param {Integer} Visibility - visibility. required.
   * @param {Long} DocumentId - documentId. required.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  submitDocSuggestion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'UserAccountName')) {
      throw new TypeError('parameter "UserAccountName" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'FeedbackContent')) {
      throw new TypeError('parameter "FeedbackContent" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'Link')) {
      throw new TypeError('parameter "Link" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'DocumentId')) {
      throw new TypeError('parameter "DocumentId" is required');
    }

    return this.request('SubmitDocSuggestion', params, options);
  }

  /**
   * @param {Long} SuggestionId - id. required.
   * @param {Long} UserId - userId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  suggestion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SuggestionId')) {
      throw new TypeError('parameter "SuggestionId" is required');
    }

    return this.request('Suggestion', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  tagTree(params = {}, options = {}) {
    return this.request('TagTree', params, options);
  }

}

module.exports = Client;
