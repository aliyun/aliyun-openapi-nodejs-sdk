
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-12-30';
    super(config);
  }

  /**
   * @param {Boolean} Async - async. optional. default: true.
   * @param {String} JobId - jobId. required.
   */
  getAsyncJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    options.method = 'POST';
    return this.request('GetAsyncJobResult', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeAccountPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeAccountPage', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeBankCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeBankCard', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeBusinessCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeBusinessCard', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeBusinessLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeBusinessLicense', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {Integer} MinHeight - minHeight. required.
   * @param {Boolean} OutputProbability - outputProbability. required.
   */
  recognizeCharacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'MinHeight')) {
      throw new TypeError('parameter "MinHeight" is required');
    }

    if (!hasOwnProperty(params, 'OutputProbability')) {
      throw new TypeError('parameter "OutputProbability" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeCharacter', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeChinapassport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeChinapassport', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} Side - side. required.
   */
  recognizeDriverLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Side')) {
      throw new TypeError('parameter "Side" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeDriverLicense', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} Side - side. required.
   */
  recognizeDrivingLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Side')) {
      throw new TypeError('parameter "Side" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeDrivingLicense', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} Side - side. required.
   */
  recognizeIdentityCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Side')) {
      throw new TypeError('parameter "Side" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeIdentityCard', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeLicensePlate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeLicensePlate', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizePassportMRZ(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizePassportMRZ', params, options);
  }

  /**
   * @param {RepeatList} Tasks - tasks. required.
   */
  recognizeQrCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tasks')) {
      throw new TypeError('parameter "Tasks" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeQrCode', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeStamp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeStamp', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} OutputFormat - outputFormat. required.
   * @param {Boolean} UseFinanceModel - useFinanceModel. required.
   * @param {Boolean} AssureDirection - assureDirection. required.
   * @param {Boolean} HasLine - hasLine. required.
   * @param {Boolean} SkipDetection - skipDetection. required.
   */
  recognizeTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'OutputFormat')) {
      throw new TypeError('parameter "OutputFormat" is required');
    }

    if (!hasOwnProperty(params, 'UseFinanceModel')) {
      throw new TypeError('parameter "UseFinanceModel" is required');
    }

    if (!hasOwnProperty(params, 'AssureDirection')) {
      throw new TypeError('parameter "AssureDirection" is required');
    }

    if (!hasOwnProperty(params, 'HasLine')) {
      throw new TypeError('parameter "HasLine" is required');
    }

    if (!hasOwnProperty(params, 'SkipDetection')) {
      throw new TypeError('parameter "SkipDetection" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTable', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeTakeoutOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTakeoutOrder', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeTaxiInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTaxiInvoice', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeTrainTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTrainTicket', params, options);
  }

  /**
   * @param {String} FileURL - fileUrl. required.
   * @param {String} FileType - fileType. required.
   */
  recognizeVATInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileURL')) {
      throw new TypeError('parameter "FileURL" is required');
    }

    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeVATInvoice', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeVINCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeVINCode', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeVerificationcode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeVerificationcode', params, options);
  }

  /**
   * @param {String} FileURL - fileUrl. required.
   * @param {String} FileType - fileType. required.
   * @param {String} OutputType - outputType. required.
   * @param {Boolean} Async - async. optional. default: true.
   */
  trimDocument(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileURL')) {
      throw new TypeError('parameter "FileURL" is required');
    }

    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    if (!hasOwnProperty(params, 'OutputType')) {
      throw new TypeError('parameter "OutputType" is required');
    }

    options.method = 'POST';
    return this.request('TrimDocument', params, options);
  }

}

module.exports = Client;
