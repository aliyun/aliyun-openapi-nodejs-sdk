
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
   * @param {String} AppName - appName. optional.
   * @param {String} AppType - appType. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {RepeatList} ServiceAreas - serviceAreas. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreateApp', params, options);
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

}

module.exports = Client;
