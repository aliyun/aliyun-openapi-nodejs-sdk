
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-21';
    super(config);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} Iv - iv. optional.
   * @param {RepeatList} DataList - dataList. required.
   */
  batchEncrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'DataList')) {
      throw new TypeError('parameter "DataList" is required');
    }

    options.method = 'POST';
    return this.request('BatchEncrypt', params, options);
  }

  /**
   * @param {String} KeyType - keyType. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {Integer} KeyCount - keyCount. required.
   * @param {String} ZmkProfileId - zmkProfileId. optional.
   * @param {RepeatList} KeyProfileIdList - keyProfileIdList. optional.
   */
  batchGenerateSymKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'KeyCount')) {
      throw new TypeError('parameter "KeyCount" is required');
    }

    options.method = 'POST';
    return this.request('BatchGenerateSymKey', params, options);
  }

  /**
   * @param {String} KeyType - keyType. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {Integer} KeyCount - keyCount. required.
   * @param {String} PubKeyProfileId - pubKeyProfileId. required.
   * @param {RepeatList} KeyProfileIdList - keyProfileIdList. optional.
   */
  batchGenerateSymKeyByPubEnc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'KeyCount')) {
      throw new TypeError('parameter "KeyCount" is required');
    }

    if (!hasOwnProperty(params, 'PubKeyProfileId')) {
      throw new TypeError('parameter "PubKeyProfileId" is required');
    }

    options.method = 'POST';
    return this.request('BatchGenerateSymKeyByPubEnc', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} Iv - iv. optional.
   * @param {String} Data - data. required.
   */
  decrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('Decrypt', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Data - data. required.
   */
  decryptAsym(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('DecryptAsym', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   */
  deleteSessionZmk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteSessionZmk', params, options);
  }

  /**
   * @param {String} Mechanism - mechanism. required.
   * @param {String} Data - data. required.
   */
  digest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('Digest', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} SrcKeyType - srcKeyType. required.
   * @param {String} SrcKeyProfileId - srcKeyProfileId. required.
   * @param {String} SubKeyType - subKeyType. required.
   * @param {Integer} DisperseAlgModel - disperseAlgModel. required.
   * @param {String} Iv - iv. optional.
   * @param {Integer} DisperseSeries - disperseSeries. required.
   * @param {String} DisperseFactor - disperseFactor. required.
   */
  disperseKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'SrcKeyType')) {
      throw new TypeError('parameter "SrcKeyType" is required');
    }

    if (!hasOwnProperty(params, 'SrcKeyProfileId')) {
      throw new TypeError('parameter "SrcKeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'SubKeyType')) {
      throw new TypeError('parameter "SubKeyType" is required');
    }

    if (!hasOwnProperty(params, 'DisperseAlgModel')) {
      throw new TypeError('parameter "DisperseAlgModel" is required');
    }

    if (!hasOwnProperty(params, 'DisperseSeries')) {
      throw new TypeError('parameter "DisperseSeries" is required');
    }

    if (!hasOwnProperty(params, 'DisperseFactor')) {
      throw new TypeError('parameter "DisperseFactor" is required');
    }

    options.method = 'POST';
    return this.request('DisperseKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} Iv - iv. optional.
   * @param {String} Data - data. required.
   */
  encrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('Encrypt', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Data - data. required.
   */
  encryptAsym(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('EncryptAsym', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} Iv - iv. optional.
   * @param {Integer} Dir - dir. required.
   * @param {String} Addr - addr. required.
   * @param {String} FramePayload - framePayload. required.
   * @param {Long} Fcnt - fcnt. required.
   */
  encryptForLoRa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'Dir')) {
      throw new TypeError('parameter "Dir" is required');
    }

    if (!hasOwnProperty(params, 'Addr')) {
      throw new TypeError('parameter "Addr" is required');
    }

    if (!hasOwnProperty(params, 'FramePayload')) {
      throw new TypeError('parameter "FramePayload" is required');
    }

    if (!hasOwnProperty(params, 'Fcnt')) {
      throw new TypeError('parameter "Fcnt" is required');
    }

    options.method = 'POST';
    return this.request('EncryptForLoRa', params, options);
  }

  /**
   * @param {String} Mechanism - mechanism. required.
   * @param {String} KeyProfileId - keyProfileId. optional.
   * @param {Integer} CurveFlag - curveFlag. optional.
   * @param {Integer} Exponent - exponent. optional.
   */
  generateAsymKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    options.method = 'POST';
    return this.request('GenerateAsymKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {Integer} AlgType - algType. required.
   * @param {Integer} ValueType - valueType. required.
   * @param {Integer} PadFlag - padFlag. required.
   * @param {String} Message - message. required.
   * @param {String} Iv - iv. required.
   */
  generateMac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'AlgType')) {
      throw new TypeError('parameter "AlgType" is required');
    }

    if (!hasOwnProperty(params, 'ValueType')) {
      throw new TypeError('parameter "ValueType" is required');
    }

    if (!hasOwnProperty(params, 'PadFlag')) {
      throw new TypeError('parameter "PadFlag" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    if (!hasOwnProperty(params, 'Iv')) {
      throw new TypeError('parameter "Iv" is required');
    }

    options.method = 'POST';
    return this.request('GenerateMac', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. optional.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} PubKeyProfileId - pubKeyProfileId. required.
   */
  generateSessionZmk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'PubKeyProfileId')) {
      throw new TypeError('parameter "PubKeyProfileId" is required');
    }

    options.method = 'POST';
    return this.request('GenerateSessionZmk', params, options);
  }

  /**
   * @param {String} KeyType - keyType. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} ZmkProfileId - zmkProfileId. optional.
   * @param {String} KeyProfileId - keyProfileId. optional.
   */
  generateSymKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    options.method = 'POST';
    return this.request('GenerateSymKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. optional.
   * @param {String} Mechanism - mechanism. required.
   * @param {Integer} CurveFlag - curveFlag. optional.
   * @param {String} PublicKey - publicKey. required.
   */
  importPublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'PublicKey')) {
      throw new TypeError('parameter "PublicKey" is required');
    }

    options.method = 'POST';
    return this.request('ImportPublicKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Mechanism - mechanism. optional.
   * @param {Integer} PadFlag - padFlag. optional.
   * @param {Integer} EncodeFlag - encodeFlag. optional.
   * @param {String} Data - data. required.
   */
  sign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('Sign', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} KeyType - keyType. required.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} Seed - seed. required.
   * @param {String} Hmac - hmac. required.
   */
  verifyHmac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    if (!hasOwnProperty(params, 'Seed')) {
      throw new TypeError('parameter "Seed" is required');
    }

    if (!hasOwnProperty(params, 'Hmac')) {
      throw new TypeError('parameter "Hmac" is required');
    }

    options.method = 'POST';
    return this.request('VerifyHmac', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {Integer} AlgType - algType. required.
   * @param {Integer} ValueType - valueType. required.
   * @param {Integer} PadFlag - padFlag. required.
   * @param {String} Message - message. required.
   * @param {String} Iv - iv. required.
   * @param {String} MacValue - macValue. required.
   */
  verifyMac(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'AlgType')) {
      throw new TypeError('parameter "AlgType" is required');
    }

    if (!hasOwnProperty(params, 'ValueType')) {
      throw new TypeError('parameter "ValueType" is required');
    }

    if (!hasOwnProperty(params, 'PadFlag')) {
      throw new TypeError('parameter "PadFlag" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    if (!hasOwnProperty(params, 'Iv')) {
      throw new TypeError('parameter "Iv" is required');
    }

    if (!hasOwnProperty(params, 'MacValue')) {
      throw new TypeError('parameter "MacValue" is required');
    }

    options.method = 'POST';
    return this.request('VerifyMac', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} Mechanism - mechanism. optional.
   * @param {Integer} PadFlag - padFlag. optional.
   * @param {Integer} EncodeFlag - encodeFlag. optional.
   * @param {String} Data - data. required.
   * @param {String} SignatureData - signatureData. required.
   */
  verifySign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'SignatureData')) {
      throw new TypeError('parameter "SignatureData" is required');
    }

    options.method = 'POST';
    return this.request('VerifySign', params, options);
  }

}

module.exports = Client;
