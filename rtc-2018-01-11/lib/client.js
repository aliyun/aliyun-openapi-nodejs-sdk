
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-11';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   */
  createChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('CreateChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} UId - uId. required.
   * @param {String} Nonce - nonce. required.
   */
  createChannelToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'UId')) {
      throw new TypeError('parameter "UId" is required');
    }

    if (!hasOwnProperty(params, 'Nonce')) {
      throw new TypeError('parameter "Nonce" is required');
    }

    return this.request('CreateChannelToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceName - conferenceName. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} Type - type. optional.
   * @param {Integer} RemindNotice - remindNotice. optional.
   */
  createConference(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreateConference', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} Description - description. optional.
   * @param {String} AppType - appType. optional.
   * @param {RepeatList} ServiceAreas - serviceAreas. optional.
   * @param {String} BillType - billType. optional.
   */
  createRTCApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('CreateRTCApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   */
  createRTCChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('CreateRTCChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} MixMode - mixMode. required.
   * @param {Integer} ServiceMode - serviceMode. required.
   * @param {String} CallBack - callBack. required.
   * @param {Integer} MaxMixStreamCount - maxMixStreamCount. required.
   * @param {Integer} MediaConfig - mediaConfig. required.
   * @param {RepeatList} LayOut - layOut. required.
   * @param {RepeatList} RecordConfig - recordConfig. required.
   * @param {RepeatList} LiveConfig - liveConfig. required.
   */
  createTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'MixMode')) {
      throw new TypeError('parameter "MixMode" is required');
    }

    if (!hasOwnProperty(params, 'ServiceMode')) {
      throw new TypeError('parameter "ServiceMode" is required');
    }

    if (!hasOwnProperty(params, 'CallBack')) {
      throw new TypeError('parameter "CallBack" is required');
    }

    if (!hasOwnProperty(params, 'MaxMixStreamCount')) {
      throw new TypeError('parameter "MaxMixStreamCount" is required');
    }

    if (!hasOwnProperty(params, 'MediaConfig')) {
      throw new TypeError('parameter "MediaConfig" is required');
    }

    if (!hasOwnProperty(params, 'LayOut')) {
      throw new TypeError('parameter "LayOut" is required');
    }

    if (!hasOwnProperty(params, 'RecordConfig')) {
      throw new TypeError('parameter "RecordConfig" is required');
    }

    if (!hasOwnProperty(params, 'LiveConfig')) {
      throw new TypeError('parameter "LiveConfig" is required');
    }

    return this.request('CreateTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AppId - appId. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   */
  deleteChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('DeleteChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   */
  deleteConference(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    return this.request('DeleteConference', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   */
  deleteRTCChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('DeleteRTCChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {Long} TemplateId - templateId. required.
   */
  deleteTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  describeAppKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppKey', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  describeAppQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} Status - status. optional.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApps(params = {}, options = {}) {
    return this.request('DescribeApps', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeChannelParticipants(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('DescribeChannelParticipants', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   */
  describeConferenceAuthInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    return this.request('DescribeConferenceAuthInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} RecordId - recordId. required.
   */
  describeRealTimeRecordDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeRealTimeRecordDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeRealTimeRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRealTimeRecordList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} RecordId - recordId. required.
   */
  describeRecordDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeRecordDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} IdType - idType. optional.
   * @param {String} Id - id. optional.
   * @param {String} SortType - sortType. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {Long} PageNo - pageNo. required.
   * @param {Long} PageSize - pageSize. required.
   */
  describeRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRecordList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   */
  describeRtcChannelCntData(params = {}, options = {}) {
    return this.request('DescribeRtcChannelCntData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} TimePoint - timePoint. required.
   * @param {String} SortType - sortBy. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} UserId - clientUser. optional.
   * @param {String} ChannelId - channelId. optional.
   * @param {Long} PageNo - pageIndex. required.
   * @param {Long} PageSize - pageSize. required.
   */
  describeRtcChannelList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TimePoint')) {
      throw new TypeError('parameter "TimePoint" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRtcChannelList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TimePoint - timePoint. required.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   */
  describeRtcChannelMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TimePoint')) {
      throw new TypeError('parameter "TimePoint" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('DescribeRtcChannelMetric', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. optional.
   * @param {Long} PageNo - pageIndex. required.
   * @param {Long} PageSize - pageSize. required.
   * @param {String} TimePoint - timePoint. required.
   */
  describeRtcChannelUserList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'TimePoint')) {
      throw new TypeError('parameter "TimePoint" is required');
    }

    return this.request('DescribeRtcChannelUserList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DiamondDataId - diamondDataId. required.
   * @param {String} QueryValueType - queryValueType. required.
   * @param {String} QueryValue - queryValue. optional.
   */
  describeRtcDiamondValue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiamondDataId')) {
      throw new TypeError('parameter "DiamondDataId" is required');
    }

    if (!hasOwnProperty(params, 'QueryValueType')) {
      throw new TypeError('parameter "QueryValueType" is required');
    }

    return this.request('DescribeRtcDiamondValue', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   */
  describeRtcDurationData(params = {}, options = {}) {
    return this.request('DescribeRtcDurationData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   */
  describeRtcPeakChannelCntData(params = {}, options = {}) {
    return this.request('DescribeRtcPeakChannelCntData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   */
  describeRtcPeakUserCntData(params = {}, options = {}) {
    return this.request('DescribeRtcPeakUserCntData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} RecordId - recordId. required.
   */
  describeRtcRealTimeRecordDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeRtcRealTimeRecordDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeRtcRealTimeRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRtcRealTimeRecordList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} RecordId - recordId. required.
   */
  describeRtcRecordDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeRtcRecordDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} IdType - idType. optional.
   * @param {String} Id - id. optional.
   * @param {String} SortType - sortType. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {Long} PageNo - pageNo. required.
   * @param {Long} PageSize - pageSize. required.
   */
  describeRtcRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRtcRecordList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} SortType - sortType. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} DataType - dataType. optional.
   */
  describeRtcStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRtcStatis', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   */
  describeRtcUserCntData(params = {}, options = {}) {
    return this.request('DescribeRtcUserCntData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeRtcUserResourcePackage(params = {}, options = {}) {
    return this.request('DescribeRtcUserResourcePackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} SortType - sortType. optional.
   * @param {String} ServiceArea - serviceArea. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} DataType - dataType. optional.
   */
  describeStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeStatis', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  disableApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DisableApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  enableApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('EnableApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  getAllTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetAllTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} TaskId - taskId. required.
   */
  getMPUTaskParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetMPUTaskParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} TaskId - taskId. required.
   */
  getMPUTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetMPUTaskStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} TaskId - taskId. required.
   */
  getTaskParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetTaskParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {Long} TaskId - taskId. required.
   */
  getTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetTaskStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {Long} TemplateId - templateId. required.
   */
  getTemplateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetTemplateInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {RepeatList} ParticipantIds - participantIds. required.
   */
  kick(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    if (!hasOwnProperty(params, 'ParticipantIds')) {
      throw new TypeError('parameter "ParticipantIds" is required');
    }

    return this.request('Kick', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} AppName - appName. required.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {String} ConferenceName - conferenceName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} Type - type. optional.
   * @param {Integer} RemindNotice - remindNotice. optional.
   */
  modifyConference(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    return this.request('ModifyConference', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {RepeatList} ParticipantIds - participantIds. required.
   */
  muteAudio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    if (!hasOwnProperty(params, 'ParticipantIds')) {
      throw new TypeError('parameter "ParticipantIds" is required');
    }

    return this.request('MuteAudio', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {String} ParticipantId - participantId. required.
   */
  muteAudioAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    if (!hasOwnProperty(params, 'ParticipantId')) {
      throw new TypeError('parameter "ParticipantId" is required');
    }

    return this.request('MuteAudioAll', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {Boolean} Broadcast - broadcast. required.
   * @param {RepeatList} AllowGroups - allowGroups. optional.
   * @param {RepeatList} DenyGroups - denyGroups. optional.
   * @param {String} ContentType - contentType. required.
   * @param {String} Content - content. required.
   */
  rTCProxyMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'Broadcast')) {
      throw new TypeError('parameter "Broadcast" is required');
    }

    if (!hasOwnProperty(params, 'ContentType')) {
      throw new TypeError('parameter "ContentType" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('RTCProxyMessage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TraceId - traceId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} Event - event. required.
   * @param {String} ContentType - contentType. required.
   * @param {String} Content - content. required.
   */
  receiveNotify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Event')) {
      throw new TypeError('parameter "Event" is required');
    }

    if (!hasOwnProperty(params, 'ContentType')) {
      throw new TypeError('parameter "ContentType" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('ReceiveNotify', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {RepeatList} ParticipantIds - participantIds. required.
   */
  removeParticipants(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    if (!hasOwnProperty(params, 'ParticipantIds')) {
      throw new TypeError('parameter "ParticipantIds" is required');
    }

    return this.request('RemoveParticipants', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {RepeatList} TerminalIds - terminalIds. required.
   */
  removeTerminals(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'TerminalIds')) {
      throw new TypeError('parameter "TerminalIds" is required');
    }

    return this.request('RemoveTerminals', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  startApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('StartApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} TaskProfile - task_profile. optional.
   * @param {Integer} CropMode - crop_mode. optional.
   * @param {Integer} MediaEncode - media_encode. required.
   * @param {Integer} BackgroundColor - background_color. optional.
   * @param {RepeatList} SubSpecUsers - subSpecUsers. optional.
   * @param {RepeatList} LayoutIds - layoutIds. required.
   * @param {RepeatList} UserPanes - user_panes. optional.
   * @param {String} StreamURL - stream_url. required.
   */
  startMPUTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'MediaEncode')) {
      throw new TypeError('parameter "MediaEncode" is required');
    }

    if (!hasOwnProperty(params, 'LayoutIds')) {
      throw new TypeError('parameter "LayoutIds" is required');
    }

    if (!hasOwnProperty(params, 'StreamURL')) {
      throw new TypeError('parameter "StreamURL" is required');
    }

    return this.request('StartMPUTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {Long} TemplateId - templateId. required.
   * @param {String} IdempotentId - idempotentId. required.
   * @param {RepeatList} MixPanes - mixPanes. required.
   */
  startTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'IdempotentId')) {
      throw new TypeError('parameter "IdempotentId" is required');
    }

    if (!hasOwnProperty(params, 'MixPanes')) {
      throw new TypeError('parameter "MixPanes" is required');
    }

    return this.request('StartTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  stopApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('StopApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} TaskId - taskId. required.
   */
  stopMPUTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('StopMPUTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   */
  stopRTCApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('StopRTCApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {Long} TaskId - taskId. required.
   */
  stopTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('StopTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {RepeatList} ParticipantIds - participantIds. required.
   */
  unmuteAudio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    if (!hasOwnProperty(params, 'ParticipantIds')) {
      throw new TypeError('parameter "ParticipantIds" is required');
    }

    return this.request('UnmuteAudio', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ConferenceId - conferenceId. required.
   * @param {String} ParticipantId - participantId. required.
   */
  unmuteAudioAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ConferenceId')) {
      throw new TypeError('parameter "ConferenceId" is required');
    }

    if (!hasOwnProperty(params, 'ParticipantId')) {
      throw new TypeError('parameter "ParticipantId" is required');
    }

    return this.request('UnmuteAudioAll', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} Nonce - nonce. required.
   */
  updateChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'Nonce')) {
      throw new TypeError('parameter "Nonce" is required');
    }

    return this.request('UpdateChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} TaskId - taskId. required.
   * @param {Integer} CropMode - crop_mode. optional.
   * @param {Integer} BackgroundColor - background_color. optional.
   * @param {RepeatList} LayoutIds - layoutIds. required.
   * @param {RepeatList} UserPanes - user_panes. optional.
   */
  updateMPULayout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'LayoutIds')) {
      throw new TypeError('parameter "LayoutIds" is required');
    }

    return this.request('UpdateMPULayout', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   */
  updateRTCChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('UpdateRTCChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} TaskId - taskId. required.
   * @param {RepeatList} LayoutIds - layoutIds. required.
   * @param {RepeatList} UserPanes - user_panes. required.
   */
  updateTaskParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'LayoutIds')) {
      throw new TypeError('parameter "LayoutIds" is required');
    }

    if (!hasOwnProperty(params, 'UserPanes')) {
      throw new TypeError('parameter "UserPanes" is required');
    }

    return this.request('UpdateTaskParam', params, options);
  }

}

module.exports = Client;
