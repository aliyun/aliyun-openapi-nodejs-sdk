
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-11';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  doClearAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('DoClearAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   * @param {String} Imei - imei. required.
   * @param {String} NewImei - newImei. optional.
   * @param {String} OpionType - opionType. required.
   * @param {String} MidChannelId - midChannelId. optional.
   */
  doIotChgBindOrUnBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    if (!hasOwnProperty(params, 'Imei')) {
      throw new TypeError('parameter "Imei" is required');
    }

    if (!hasOwnProperty(params, 'OpionType')) {
      throw new TypeError('parameter "OpionType" is required');
    }

    return this.request('DoIotChgBindOrUnBind', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Imei - imei. required.
   */
  doIotIsImeiExist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Imei')) {
      throw new TypeError('parameter "Imei" is required');
    }

    return this.request('DoIotIsImeiExist', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolId - poolId. required.
   * @param {Long} Amount - amount. required.
   */
  doIotPoolRecharge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolId')) {
      throw new TypeError('parameter "PoolId" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('DoIotPoolRecharge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Imei - imei. required.
   * @param {String} Comments - comments. optional.
   * @param {String} DeviceType - deviceType. optional.
   */
  doIotPostImei(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Imei')) {
      throw new TypeError('parameter "Imei" is required');
    }

    return this.request('DoIotPostImei', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   * @param {String} OfferIds - offerIds. required.
   * @param {String} OutId - outId. required.
   * @param {Long} Amount - amount. optional.
   * @param {String} EffCode - effCode. required.
   * @param {Integer} OrderNum - orderNum. optional.
   */
  doIotRecharge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    if (!hasOwnProperty(params, 'OfferIds')) {
      throw new TypeError('parameter "OfferIds" is required');
    }

    if (!hasOwnProperty(params, 'OutId')) {
      throw new TypeError('parameter "OutId" is required');
    }

    if (!hasOwnProperty(params, 'EffCode')) {
      throw new TypeError('parameter "EffCode" is required');
    }

    return this.request('DoIotRecharge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   * @param {String} ServiceType - serviceType. required.
   * @param {String} OperationType - operationType. required.
   */
  doIotServiceStatusControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    if (!hasOwnProperty(params, 'ServiceType')) {
      throw new TypeError('parameter "ServiceType" is required');
    }

    if (!hasOwnProperty(params, 'OperationType')) {
      throw new TypeError('parameter "OperationType" is required');
    }

    return this.request('DoIotServiceStatusControl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  doIotTransSilence(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('DoIotTransSilence', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   * @param {String} DeviceSn - deviceSn. required.
   * @param {String} OperationType - operationType. required.
   */
  doIotUpdateDeviceSn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    if (!hasOwnProperty(params, 'DeviceSn')) {
      throw new TypeError('parameter "DeviceSn" is required');
    }

    if (!hasOwnProperty(params, 'OperationType')) {
      throw new TypeError('parameter "OperationType" is required');
    }

    return this.request('DoIotUpdateDeviceSn', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   * @param {String} OptionType - optionType. required.
   */
  doIotUserStopResume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    if (!hasOwnProperty(params, 'OptionType')) {
      throw new TypeError('parameter "OptionType" is required');
    }

    return this.request('DoIotUserStopResume', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SignName - signName. required.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   * @param {String} TemplateParam - templateParam. required.
   */
  doSendIotSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'TemplateParam')) {
      throw new TypeError('parameter "TemplateParam" is required');
    }

    return this.request('DoSendIotSms', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} Msisdn - msisdn. optional.
   * @param {String} Imsi - imsi. optional.
   * @param {String} Operator - operator. required.
   * @param {String} Longitude - longitude. optional.
   * @param {String} Latitude - latitude. optional.
   * @param {String} SourcePrivateIpAddress - sourcePrivateIpAddress. required.
   * @param {String} SourcePublicIpAddress - sourcePublicIpAddress. optional.
   */
  qosGetParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Operator')) {
      throw new TypeError('parameter "Operator" is required');
    }

    if (!hasOwnProperty(params, 'SourcePrivateIpAddress')) {
      throw new TypeError('parameter "SourcePrivateIpAddress" is required');
    }

    return this.request('QosGetParam', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} QosId - qosId. required.
   */
  qosRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'QosId')) {
      throw new TypeError('parameter "QosId" is required');
    }

    return this.request('QosRelease', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} Msisdn - msisdn. optional.
   * @param {String} Imsi - imsi. optional.
   * @param {String} Operator - operator. required.
   * @param {String} Longitude - longitude. optional.
   * @param {String} Latitude - latitude. optional.
   * @param {Integer} ServiceMode - serviceMode. required.
   * @param {Integer} ServiceType - serviceType. required.
   * @param {String} SourcePrivateIpAddress - sourcePrivateIpAddress. required.
   * @param {String} SourcePublicIpAddress - sourcePublicIpAddress. required.
   * @param {Integer} SourcePort - sourcePort. optional.
   * @param {String} DestinationIpAddress - destinationIpAddress. required.
   * @param {Integer} DestinationPort - destinationPort. optional.
   * @param {Integer} Duration - duration. required.
   * @param {String} UrlResponseBody - urlResponseBody. required.
   * @param {Integer} UrlResponseStatusCode - urlResponseStatusCode. required.
   */
  qosSpeedup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Operator')) {
      throw new TypeError('parameter "Operator" is required');
    }

    if (!hasOwnProperty(params, 'ServiceMode')) {
      throw new TypeError('parameter "ServiceMode" is required');
    }

    if (!hasOwnProperty(params, 'ServiceType')) {
      throw new TypeError('parameter "ServiceType" is required');
    }

    if (!hasOwnProperty(params, 'SourcePrivateIpAddress')) {
      throw new TypeError('parameter "SourcePrivateIpAddress" is required');
    }

    if (!hasOwnProperty(params, 'SourcePublicIpAddress')) {
      throw new TypeError('parameter "SourcePublicIpAddress" is required');
    }

    if (!hasOwnProperty(params, 'DestinationIpAddress')) {
      throw new TypeError('parameter "DestinationIpAddress" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'UrlResponseBody')) {
      throw new TypeError('parameter "UrlResponseBody" is required');
    }

    if (!hasOwnProperty(params, 'UrlResponseStatusCode')) {
      throw new TypeError('parameter "UrlResponseStatusCode" is required');
    }

    return this.request('QosSpeedup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  queryCardFlowInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryCardFlowInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  queryCardInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryCardInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  queryCardStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryCardStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  queryGprsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryGprsStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  queryIotCardOfferDtl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryIotCardOfferDtl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Iccid - iccid. required.
   */
  queryPersonalInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryPersonalInfo', params, options);
  }

}

module.exports = Client;
