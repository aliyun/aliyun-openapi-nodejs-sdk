
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-01';
    super(config);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Amount - amount. required.
   */
  clearCreditBalance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('ClearCreditBalance', params, options);
  }

  /**
   * @param {String} FirstName - firstName. required.
   * @param {String} LastName - lastName. required.
   * @param {String} Email - email. required.
   * @param {String} City - city. required.
   * @param {String} Province - province. required.
   * @param {String} Postcode - postcode. required.
   * @param {String} Country - country. required.
   * @param {String} Company - company. optional.
   * @param {Boolean} TermCheck - termCheck. optional.
   */
  createAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirstName')) {
      throw new TypeError('parameter "FirstName" is required');
    }

    if (!hasOwnProperty(params, 'LastName')) {
      throw new TypeError('parameter "LastName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'Postcode')) {
      throw new TypeError('parameter "Postcode" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    return this.request('CreateAccount', params, options);
  }

  /**
   */
  createAdminAccount(params = {}, options = {}) {
    return this.request('CreateAdminAccount', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} CallbackUrl - callbackUrl. required.
   */
  createSsoLoginUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CallbackUrl')) {
      throw new TypeError('parameter "CallbackUrl" is required');
    }

    return this.request('CreateSsoLoginUrl', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} ExpireTime - expireTime. optional.
   */
  createTempAccessKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CreateTempAccessKey', params, options);
  }

  /**
   * @param {Integer} ProductId - productId. optional.
   * @param {Integer} FaqId - faqId. optional.
   * @param {String} Title - title. optional.
   * @param {String} TicketContent - ticketContent. required.
   * @param {String} Confidentiality - confidentiality. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} SmsAlertTime - smsAlertTime. optional.
   * @param {String} Email - email. optional.
   * @param {String} AttachmentUrls - attachmentUrls. optional.
   */
  createTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TicketContent')) {
      throw new TypeError('parameter "TicketContent" is required');
    }

    return this.request('CreateTicket', params, options);
  }

  /**
   * @param {String} TicketId - ticketId. required.
   * @param {String} TicketContent - ticketContent. optional.
   * @param {String} Confidentiality - confidentiality. optional.
   * @param {String} AttachmentUrls - attachmentUrls. optional.
   */
  createTicketReply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    return this.request('CreateTicketReply', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  getAccountInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetAccountInfo', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  getAdminAccountInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetAdminAccountInfo', params, options);
  }

  /**
   * @param {String} AttachmentId - attachmentId. required.
   */
  getAttachmentTempUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AttachmentId')) {
      throw new TypeError('parameter "AttachmentId" is required');
    }

    return this.request('GetAttachmentTempUrl', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  getCreditLimitInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetCreditLimitInfo', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  getHostingStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetHostingStatus', params, options);
  }

  /**
   * @param {String} TicketId - ticketId. required.
   */
  getTicketReplies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    return this.request('GetTicketReplies', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} CreditLimit - creditLimit. required.
   * @param {Integer} WarningThreshold - warningThreshold. optional.
   * @param {String} WarningThresholdAmount - warningThresholdAmount. optional.
   */
  initializeCreditLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CreditLimit')) {
      throw new TypeError('parameter "CreditLimit" is required');
    }

    return this.request('InitializeCreditLimit', params, options);
  }

  /**
   * @param {Integer} MaxItems - maxItems. optional.
   * @param {String} Marker - marker. optional.
   */
  queryAccounts(params = {}, options = {}) {
    return this.request('QueryAccounts', params, options);
  }

  /**
   */
  queryAdminAccounts(params = {}, options = {}) {
    return this.request('QueryAdminAccounts', params, options);
  }

  /**
   * @param {String} bizDate - bizDate. required.
   * @param {Integer} pageNumber - pageNumber. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryEndUserDailyPAYG(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizDate')) {
      throw new TypeError('parameter "bizDate" is required');
    }

    return this.request('QueryEndUserDailyPAYG', params, options);
  }

  /**
   * @param {String} bizDate - bizDate. required.
   * @param {Integer} pageNumber - pageNumber. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryEndUserDailySubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizDate')) {
      throw new TypeError('parameter "bizDate" is required');
    }

    return this.request('QueryEndUserDailySubscription', params, options);
  }

  /**
   * @param {String} bizDate - bizDate. required.
   * @param {Integer} pageNumber - pageNumber. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryEndUserMonthSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizDate')) {
      throw new TypeError('parameter "bizDate" is required');
    }

    return this.request('QueryEndUserMonthSummary', params, options);
  }

  /**
   * @param {String} bizDate - bizDate. required.
   * @param {Integer} pageNumber - pageNumber. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryResellerDailyPAYG(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizDate')) {
      throw new TypeError('parameter "bizDate" is required');
    }

    return this.request('QueryResellerDailyPAYG', params, options);
  }

  /**
   * @param {String} bizDate - bizDate. required.
   * @param {Integer} pageNumber - pageNumber. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryResellerDailySubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizDate')) {
      throw new TypeError('parameter "bizDate" is required');
    }

    return this.request('QueryResellerDailySubscription', params, options);
  }

  /**
   * @param {String} bizDate - bizDate. required.
   */
  queryResellerMonthSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizDate')) {
      throw new TypeError('parameter "bizDate" is required');
    }

    return this.request('QueryResellerMonthSummary', params, options);
  }

  /**
   * @param {String} Lang - lang. required.
   * @param {Integer} ProductId - productId. required.
   */
  queryTicketProductFaqs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Lang')) {
      throw new TypeError('parameter "Lang" is required');
    }

    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('QueryTicketProductFaqs', params, options);
  }

  /**
   * @param {String} Lang - lang. required.
   * @param {String} ProductIdList - productIdList. optional.
   */
  queryTicketProducts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Lang')) {
      throw new TypeError('parameter "Lang" is required');
    }

    return this.request('QueryTicketProducts', params, options);
  }

  /**
   * @param {String} TicketIdList - ticketIdList. optional.
   * @param {String} ProductIdList - productIdList. optional.
   * @param {String} CreatedFrom - createdFrom. optional.
   * @param {String} CreatedTo - createdTo. optional.
   * @param {String} TicketStatus - ticketStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageFrom - pageFrom. optional.
   */
  queryTickets(params = {}, options = {}) {
    return this.request('QueryTickets', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Operation - operation. required.
   */
  setAccountStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('SetAccountStatus', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Operation - operation. required.
   */
  setAdminAccountStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('SetAdminAccountStatus', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} CreditLimit - creditLimit. required.
   */
  setCreditLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CreditLimit')) {
      throw new TypeError('parameter "CreditLimit" is required');
    }

    return this.request('SetCreditLimit', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Status - status. required.
   */
  setHostingStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetHostingStatus', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {Integer} WarningThreshold - warningThreshold. optional.
   * @param {String} WarningThresholdAmount - warningThresholdAmount. optional.
   */
  setWarningThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('SetWarningThreshold', params, options);
  }

}

module.exports = Client;
