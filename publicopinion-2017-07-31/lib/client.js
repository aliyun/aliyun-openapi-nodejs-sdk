
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-31';
    super(config);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} SiteTypeId - siteTypeIds. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} DailyAlarmLimit - dailyAlarmLimit. required.
   * @param {Integer} TriggerAmount - triggerAmount. optional.
   * @param {Integer} LinkRatioAmount - linkRatioAmount. optional.
   * @param {RepeatList} Email - emails. optional.
   * @param {RepeatList} Telephone - telephones. optional.
   * @param {String} KeywordRule - keywordRule. required.
   * @param {RepeatList} EmotionType - emotionTypes. required.
   * @param {Integer} StatsCyle - statsCyle. required.
   */
  createAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'SiteTypeId')) {
      throw new TypeError('parameter "SiteTypeId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'DailyAlarmLimit')) {
      throw new TypeError('parameter "DailyAlarmLimit" is required');
    }

    if (!hasOwnProperty(params, 'KeywordRule')) {
      throw new TypeError('parameter "KeywordRule" is required');
    }

    if (!hasOwnProperty(params, 'EmotionType')) {
      throw new TypeError('parameter "EmotionType" is required');
    }

    if (!hasOwnProperty(params, 'StatsCyle')) {
      throw new TypeError('parameter "StatsCyle" is required');
    }

    options.method = 'POST';
    return this.request('CreateAlarm', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} SiteTypeId - siteTypeIds. required.
   * @param {RepeatList} TitleRule - titleRule. optional.
   * @param {RepeatList} ContentRule - contentRule. optional.
   * @param {String} UrlRule - urlRule. optional.
   * @param {String} AuthorRule - authorRule. optional.
   * @param {Boolean} IsToDustbin - isToDustbin. optional. default: false.
   * @param {Boolean} IsRegex - isRegex. optional. default: true.
   */
  createFilterRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'SiteTypeId')) {
      throw new TypeError('parameter "SiteTypeId" is required');
    }

    options.method = 'POST';
    return this.request('CreateFilterRule', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} SiteTypeId - siteTypeIds. required.
   * @param {RepeatList} Keyword - keywords. required.
   */
  createKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'SiteTypeId')) {
      throw new TypeError('parameter "SiteTypeId" is required');
    }

    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    options.method = 'POST';
    return this.request('CreateKeyword', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Desc - desc. required.
   */
  createTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Desc')) {
      throw new TypeError('parameter "Desc" is required');
    }

    options.method = 'POST';
    return this.request('CreateTopic', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} Id - ids. required.
   */
  deleteAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('DeleteAlarm', params, options);
  }

  /**
   * @param {RepeatList} EventId - eventIds. required.
   * @param {Long} TopicId - topicId. required.
   */
  deleteEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteEvents', params, options);
  }

  /**
   * @param {RepeatList} Id - ids. required.
   */
  deleteFilterRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('DeleteFilterRules', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('DeleteKeyword', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} Id - ids. required.
   */
  deleteOpinions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('DeleteOpinions', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('DeleteTopic', params, options);
  }

  /**
   * @param {RepeatList} Id - ids. required.
   */
  disableFilterRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('DisableFilterRules', params, options);
  }

  /**
   * @param {RepeatList} Id - ids. required.
   */
  enableFilterRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('EnableFilterRules', params, options);
  }

  /**
   * @param {RepeatList} EventId - eventIds. required.
   * @param {Long} TopicId - topicId. required.
   */
  followEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    options.method = 'POST';
    return this.request('FollowEvents', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} Id - id. required.
   */
  getAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetAlarm', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} SiteTypeId - siteTypeId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  getAreaReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetAreaReport', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} SiteTypeId - siteTypeId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  getEmotionReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetEmotionReport', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventAreaReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventAreaReport', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventContext(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventContext', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventEmotionReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventEmotionReport', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventEntity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventEntity', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   * @param {String} ReferEntity - referEntity. required.
   */
  getEventEntityEmotion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'ReferEntity')) {
      throw new TypeError('parameter "ReferEntity" is required');
    }

    return this.request('GetEventEntityEmotion', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   * @param {String} ReferEntity - referEntity. required.
   */
  getEventEntityViewpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'ReferEntity')) {
      throw new TypeError('parameter "ReferEntity" is required');
    }

    return this.request('GetEventEntityViewpoint', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventHotWordReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventHotWordReport', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventIntro(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventIntro', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventNetizenCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventNetizenCount', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventSiteReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventSiteReport', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   */
  getEventTrendReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetEventTrendReport', params, options);
  }

  /**
   * @param {Long} Id - filterId. optional.
   */
  getFilterRule(params = {}, options = {}) {
    return this.request('GetFilterRule', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} SiteTypeId - siteTypeId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  getHotWordReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetHotWordReport', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {Long} TopicId - topicId. required.
   */
  getKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('GetKeyword', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} Id - id. required.
   */
  getOpinion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetOpinion', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} SiteTypeId - siteTypeId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  getSiteReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetSiteReport', params, options);
  }

  /**
   */
  getSystemSiteTypes(params = {}, options = {}) {
    return this.request('GetSystemSiteTypes', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  getTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetTopic', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} SiteTypeId - siteTypeId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  getTrendReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetTrendReport', params, options);
  }

  /**
   * @param {String} WeiboId - weiboId. required.
   */
  getWeiboSpread(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WeiboId')) {
      throw new TypeError('parameter "WeiboId" is required');
    }

    return this.request('GetWeiboSpread', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Integer} ToPage - toPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  queryAlarms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('QueryAlarms', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   * @param {String} UserId - userId. optional.
   */
  queryEventLeaderOpinions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('QueryEventLeaderOpinions', params, options);
  }

  /**
   * @param {String} EventId - eventId. required.
   * @param {String} TimeType - timeType. required.
   * @param {String} TopType - topType. required.
   */
  queryEventOpinionLeaders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'TimeType')) {
      throw new TypeError('parameter "TimeType" is required');
    }

    if (!hasOwnProperty(params, 'TopType')) {
      throw new TypeError('parameter "TopType" is required');
    }

    return this.request('QueryEventOpinionLeaders', params, options);
  }

  /**
   * @param {String} OrderName - orderName. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} SearchKeyword - searchKeyword. optional.
   * @param {String} EventId - eventId. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryEventOpinions(params = {}, options = {}) {
    return this.request('QueryEventOpinions', params, options);
  }

  /**
   * @param {String} OrderByName - orderByName. optional.
   * @param {String} OrderByType - orderByType. optional.
   * @param {RepeatList} EmotionType - emotionTypes. optional.
   * @param {String} IsAttention - isAttention. optional.
   * @param {String} SearchKeyword - searchKeyword. optional.
   * @param {Long} TopicId - topicId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} PageIndex - pageIndex. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryEvents', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. optional.
   * @param {Integer} ToPage - toPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} OrderField - orderField. optional. default: UPDATETIME.
   * @param {String} OrderSort - orderSort. optional. default: DESC.
   */
  queryFilterRules(params = {}, options = {}) {
    return this.request('QueryFilterRules', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. optional.
   * @param {Integer} ToPage - toPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} OrderField - orderField. optional. default: UPDATETIME.
   * @param {String} OrderSort - orderSort. optional. default: DESC.
   */
  queryKeywords(params = {}, options = {}) {
    return this.request('QueryKeywords', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {String} UserId - userId. optional.
   */
  queryTopicLeaderOpinions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('QueryTopicLeaderOpinions', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {String} TimeType - timeType. required.
   * @param {String} TopType - topType. required.
   */
  queryTopicOpinionLeaders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'TimeType')) {
      throw new TypeError('parameter "TimeType" is required');
    }

    if (!hasOwnProperty(params, 'TopType')) {
      throw new TypeError('parameter "TopType" is required');
    }

    return this.request('QueryTopicOpinionLeaders', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {String} TimeType - timeType. required.
   * @param {String} TopType - topType. required.
   */
  queryTopicWeixinLeaders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'TimeType')) {
      throw new TypeError('parameter "TimeType" is required');
    }

    if (!hasOwnProperty(params, 'TopType')) {
      throw new TypeError('parameter "TopType" is required');
    }

    return this.request('QueryTopicWeixinLeaders', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {Integer} ToPage - toPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  queryTopics(params = {}, options = {}) {
    return this.request('QueryTopics', params, options);
  }

  /**
   * @param {String} Title - title. optional.
   * @param {String} Content - content. optional.
   * @param {String} Author - author. optional.
   * @param {String} Status - status. optional. default: VALID.
   * @param {String} Area - area. optional.
   * @param {String} SiteName - siteName. optional.
   * @param {Long} SiteTypeId - siteTypeId. optional.
   * @param {Long} KeywordId - keywordId. optional.
   * @param {Long} TopicId - topicId. required.
   * @param {String} EmotionType - emotionType. optional.
   * @param {Long} CreatedAtBegin - createdAtBegin. optional.
   * @param {Long} CreatedAtEnd - createdAtEnd. optional.
   * @param {Long} PubTimeBegin - pubTimeBegin. optional.
   * @param {Long} PubTimeEnd - pubTimeEnd. optional.
   * @param {String} ClusterFlag - clusterFlag. optional. default: Y.
   * @param {String} FilterFlag - filterFlag. optional. default: N.
   * @param {String} OrderByField - orderByField. optional. default: pub_time.
   * @param {String} OrderByType - orderByType. optional. default: DESC.
   * @param {Integer} ToPage - toPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  searchOpinions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('SearchOpinions', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {Long} Id - id. required.
   * @param {String} OrderByField - orderByField. optional. default: pub_time.
   * @param {String} OrderByType - orderByType. optional. default: DESC.
   * @param {Integer} ToPage - toPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  searchSimilarOpinions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SearchSimilarOpinions', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} Id - ids. required.
   * @param {String} EmotionType - emotionType. required.
   */
  setOpinionEmotion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'EmotionType')) {
      throw new TypeError('parameter "EmotionType" is required');
    }

    options.method = 'POST';
    return this.request('SetOpinionEmotion', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} Id - ids. required.
   * @param {String} Status - status. required.
   */
  setOpinionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    options.method = 'POST';
    return this.request('SetOpinionStatus', params, options);
  }

  /**
   * @param {RepeatList} EventId - eventIds. required.
   * @param {Long} TopicId - topicId. required.
   */
  unFollowEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    options.method = 'POST';
    return this.request('UnFollowEvents', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} SiteTypeId - siteTypeIds. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} DailyAlarmLimit - dailyAlarmLimit. required.
   * @param {Integer} TriggerAmount - triggerAmount. optional.
   * @param {Integer} LinkRatioAmount - linkRatioAmount. optional.
   * @param {RepeatList} Email - emails. optional.
   * @param {RepeatList} Telephone - telephones. optional.
   * @param {String} KeywordRule - keywordRule. required.
   * @param {RepeatList} EmotionType - emotionTypes. required.
   * @param {Integer} StatsCyle - statsCyle. required.
   */
  updateAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'SiteTypeId')) {
      throw new TypeError('parameter "SiteTypeId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'DailyAlarmLimit')) {
      throw new TypeError('parameter "DailyAlarmLimit" is required');
    }

    if (!hasOwnProperty(params, 'KeywordRule')) {
      throw new TypeError('parameter "KeywordRule" is required');
    }

    if (!hasOwnProperty(params, 'EmotionType')) {
      throw new TypeError('parameter "EmotionType" is required');
    }

    if (!hasOwnProperty(params, 'StatsCyle')) {
      throw new TypeError('parameter "StatsCyle" is required');
    }

    options.method = 'POST';
    return this.request('UpdateAlarm', params, options);
  }

  /**
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} Id - ids. required.
   * @param {String} Status - status. required.
   */
  updateAlarmStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    options.method = 'POST';
    return this.request('UpdateAlarmStatus', params, options);
  }

  /**
   * @param {Long} Id - filterId. required.
   * @param {String} Name - name. required.
   * @param {Long} TopicId - topicId. required.
   * @param {RepeatList} SiteTypeId - siteTypeIds. required.
   * @param {RepeatList} TitleRule - titleRule. optional.
   * @param {RepeatList} ContentRule - contentRule. optional.
   * @param {String} UrlRule - urlRule. optional.
   * @param {String} AuthorRule - authorRule. optional.
   * @param {Boolean} IsToDustbin - isToDustbin. optional.
   * @param {Boolean} IsRegex - isRegex. optional.
   */
  updateFilterRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'SiteTypeId')) {
      throw new TypeError('parameter "SiteTypeId" is required');
    }

    options.method = 'POST';
    return this.request('UpdateFilterRule', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Long} Id - id. required.
   * @param {RepeatList} SiteTypeId - siteTypeIds. required.
   * @param {RepeatList} Keyword - keywords. required.
   * @param {Long} TopicId - topicId. required.
   */
  updateKeywordContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'SiteTypeId')) {
      throw new TypeError('parameter "SiteTypeId" is required');
    }

    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    options.method = 'POST';
    return this.request('UpdateKeywordContent', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Status - status. required.
   */
  updateKeywordStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    options.method = 'POST';
    return this.request('UpdateKeywordStatus', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} Desc - desc. required.
   */
  updateTopicContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Desc')) {
      throw new TypeError('parameter "Desc" is required');
    }

    options.method = 'POST';
    return this.request('UpdateTopicContent', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Status - status. required.
   */
  updateTopicStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    options.method = 'POST';
    return this.request('UpdateTopicStatus', params, options);
  }

  /**
   * @param {String} Word - word. required.
   */
  wordSuggest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Word')) {
      throw new TypeError('parameter "Word" is required');
    }

    return this.request('WordSuggest', params, options);
  }

  /**
   * @param {String} GraphName - graphName. required.
   * @param {String} Query - query. required.
   * @param {String} EndPoint - endPoint. optional.
   */
  zJPoliceBiggraphService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GraphName')) {
      throw new TypeError('parameter "GraphName" is required');
    }

    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    return this.request('ZJPoliceBiggraphService', params, options);
  }

  /**
   * @param {Integer} Offset - offset. required.
   * @param {Integer} Max - max. required.
   * @param {String} Query - query. required.
   * @param {String} SortField - sortField. optional.
   * @param {String} SortOrder - sortOrder. optional.
   * @param {String} filter - filter. optional.
   * @param {RepeatList} FetchFields - fetchFields. optional.
   * @param {String} AppName - appName. required.
   */
  zJPoliceOpensearchService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Max')) {
      throw new TypeError('parameter "Max" is required');
    }

    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('ZJPoliceOpensearchService', params, options);
  }

}

module.exports = Client;
