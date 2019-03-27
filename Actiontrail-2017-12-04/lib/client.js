
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-04';
    super(config);
  }

  /**
   * @param {String} Pk - Pk. optional.
   * @param {String} Bid - Bid. optional.
   * @param {String} Hid - Hid. optional.
   * @param {String} Country - Country. optional.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   */
  checkResource(params = {}, options = {}) {
    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   * @param {String} OssBucketName - OssBucketName. optional.
   * @param {String} OssKeyPrefix - OssKeyPrefix. optional.
   * @param {String} RoleName - RoleName. optional.
   * @param {String} SlsProjectArn - SlsProjectArn. optional.
   * @param {String} SlsWriteRoleArn - SlsWriteRoleArn. optional.
   * @param {String} EventRW - EventRW. optional.
   */
  createTrail(params = {}, options = {}) {
    return this.request('CreateTrail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   */
  deleteTrail(params = {}, options = {}) {
    return this.request('DeleteTrail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Boolean} IncludeShadowTrails - IncludeShadowTrails. optional.
   * @param {String} NameList - NameList. optional.
   */
  describeTrails(params = {}, options = {}) {
    return this.request('DescribeTrails', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} Type - Type. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   * @param {String} Status - Status. optional.
   * @param {String} BucketName - BucketName. optional.
   * @param {String} KeyPrefix - KeyPrefix. optional.
   * @param {String} IsLogging - IsLogging. optional.
   * @param {String} LatestDeliveryError - LatestDeliveryError. optional.
   * @param {String} LatestDeliveryTime - LatestDeliveryTime. optional.
   * @param {String} StartLoggingTime - StartLoggingTime. optional.
   * @param {String} StopLoggingTime - StopLoggingTime. optional.
   */
  echo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('Echo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   */
  getTrailStatus(params = {}, options = {}) {
    return this.request('GetTrailStatus', params, options);
  }

  /**
   * @param {String} Format - Format. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  help(params = {}, options = {}) {
    return this.request('Help', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Event - Event. optional.
   * @param {String} Request - Request. optional.
   * @param {String} EventType - EventType. optional.
   * @param {String} ServiceName - ServiceName. optional.
   * @param {String} EventName - EventName. optional.
   * @param {String} User - User. optional.
   * @param {String} ResourceType - ResourceType. optional.
   * @param {String} ResourceName - ResourceName. optional.
   * @param {String} EventRW - EventRW. optional.
   * @param {String} EventAccessKeyId - EventAccessKeyId. optional.
   * @param {String} NextToken - NextToken. optional.
   * @param {String} MaxResults - MaxResults. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   */
  lookupEvents(params = {}, options = {}) {
    return this.request('LookupEvents', params, options);
  }

  /**
   * @param {String} Pk - Pk. optional.
   * @param {String} Bid - Bid. optional.
   * @param {String} Hid - Hid. optional.
   * @param {String} Country - Country. optional.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   */
  startLogging(params = {}, options = {}) {
    return this.request('StartLogging', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   */
  stopLogging(params = {}, options = {}) {
    return this.request('StopLogging', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. optional.
   * @param {String} OssBucketName - OssBucketName. optional.
   * @param {String} OssKeyPrefix - OssKeyPrefix. optional.
   * @param {String} RoleName - RoleName. optional.
   * @param {String} SlsProjectArn - SlsProjectArn. optional.
   * @param {String} SlsWriteRoleArn - SlsWriteRoleArn. optional.
   * @param {String} EventRW - EventRW. optional.
   */
  updateTrail(params = {}, options = {}) {
    return this.request('UpdateTrail', params, options);
  }

}

module.exports = Client;
