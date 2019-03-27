
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-21';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Code - code. required.
   * @param {Boolean} IsAccepted - isAccepted. optional.
   */
  acceptInvitation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('AcceptInvitation', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DomainCode - domainCode. required.
   */
  checkConsortiumDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    return this.request('CheckConsortiumDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DomainCode - domainCode. optional. default: canyouguessme.
   * @param {String} Domain - domain. optional. default: canyouguessme.
   */
  checkOrganizationDomain(params = {}, options = {}) {
    return this.request('CheckOrganizationDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {RepeatList} Organization - organizations. required.
   */
  confirmConsortiumMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    return this.request('ConfirmConsortiumMember', params, options);
  }

  /**
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OssBucket - ossBucket. required.
   * @param {String} OssUrl - ossUrl. required.
   * @param {String} EndorsePolicy - endorsePolicy. optional.
   * @param {String} Location - location. optional.
   */
  createChaincode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    if (!hasOwnProperty(params, 'OssBucket')) {
      throw new TypeError('parameter "OssBucket" is required');
    }

    if (!hasOwnProperty(params, 'OssUrl')) {
      throw new TypeError('parameter "OssUrl" is required');
    }

    return this.request('CreateChaincode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {RepeatList} Organization - organizations. required.
   * @param {String} ChannelName - channelName. required.
   */
  createChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    if (!hasOwnProperty(params, 'ChannelName')) {
      throw new TypeError('parameter "ChannelName" is required');
    }

    return this.request('CreateChannel', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ChannelId - channelId. required.
   * @param {RepeatList} Organization - organizations. required.
   */
  createChannelMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    return this.request('CreateChannelMember', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Location - location. required.
   * @param {String} OrdererType - ordererType. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Name - name. required.
   * @param {String} Domain - code. required.
   * @param {String} Description - description. optional.
   * @param {String} ChannelPolicy - channelPolicy. required.
   * @param {String} SpecName - specName. required.
   * @param {Integer} OrderersCount - orderersCount. optional.
   * @param {Integer} PeersCount - peersCount. optional.
   * @param {RepeatList} Organization - organizations. optional.
   */
  createConsortium(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Location')) {
      throw new TypeError('parameter "Location" is required');
    }

    if (!hasOwnProperty(params, 'OrdererType')) {
      throw new TypeError('parameter "OrdererType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ChannelPolicy')) {
      throw new TypeError('parameter "ChannelPolicy" is required');
    }

    if (!hasOwnProperty(params, 'SpecName')) {
      throw new TypeError('parameter "SpecName" is required');
    }

    return this.request('CreateConsortium', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {RepeatList} Organization - organizations. required.
   * @param {String} Code - code. optional.
   */
  createConsortiumMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    return this.request('CreateConsortiumMember', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} OrdererType - ordererType. required.
   * @param {String} ConsortiumName - consortiumName. required.
   * @param {String} OrdererDomain - ordererCode. required.
   * @param {String} Description - description. optional.
   * @param {String} Location - location. required.
   * @param {String} ChannelPolicy - channelPolicy. required.
   * @param {String} SpecName - specName. required.
   * @param {Integer} OrderersCount - orderersCount. optional.
   * @param {Integer} PeersCount - peersCount. optional.
   * @param {RepeatList} Organization - organizations. required.
   */
  createEcosphere(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrdererType')) {
      throw new TypeError('parameter "OrdererType" is required');
    }

    if (!hasOwnProperty(params, 'ConsortiumName')) {
      throw new TypeError('parameter "ConsortiumName" is required');
    }

    if (!hasOwnProperty(params, 'OrdererDomain')) {
      throw new TypeError('parameter "OrdererDomain" is required');
    }

    if (!hasOwnProperty(params, 'Location')) {
      throw new TypeError('parameter "Location" is required');
    }

    if (!hasOwnProperty(params, 'ChannelPolicy')) {
      throw new TypeError('parameter "ChannelPolicy" is required');
    }

    if (!hasOwnProperty(params, 'SpecName')) {
      throw new TypeError('parameter "SpecName" is required');
    }

    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    return this.request('CreateEcosphere', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Name - name. required.
   * @param {String} Location - location. required.
   * @param {String} Domain - code. required.
   * @param {String} Description - description. optional.
   * @param {String} SpecName - specName. required.
   */
  createOrganization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Location')) {
      throw new TypeError('parameter "Location" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SpecName')) {
      throw new TypeError('parameter "SpecName" is required');
    }

    return this.request('CreateOrganization', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Username - username. required.
   * @param {String} Password - password. optional.
   */
  createOrganizationUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'Username')) {
      throw new TypeError('parameter "Username" is required');
    }

    return this.request('CreateOrganizationUser', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ChaincodeId - chaincodeId. optional.
   */
  deleteChaincode(params = {}, options = {}) {
    return this.request('DeleteChaincode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Location - location. optional.
   */
  describeCandidateOrganizations(params = {}, options = {}) {
    return this.request('DescribeCandidateOrganizations', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   */
  describeChaincodeUploadPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeChaincodeUploadPolicy', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ChannelId - channelId. required.
   */
  describeChannelMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('DescribeChannelMembers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Location - location. optional.
   */
  describeConsortiumAdminStatus(params = {}, options = {}) {
    return this.request('DescribeConsortiumAdminStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  describeConsortiumChaincodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeConsortiumChaincodes', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  describeConsortiumChannels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeConsortiumChannels', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeConsortiumConfig(params = {}, options = {}) {
    return this.request('DescribeConsortiumConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  describeConsortiumDeletable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeConsortiumDeletable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  describeConsortiumMemberApproval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeConsortiumMemberApproval', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  describeConsortiumMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeConsortiumMembers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  describeConsortiumOrderers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeConsortiumOrderers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeConsortiumSpecs(params = {}, options = {}) {
    return this.request('DescribeConsortiumSpecs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. optional.
   * @param {String} Location - location. optional.
   */
  describeConsortiums(params = {}, options = {}) {
    return this.request('DescribeConsortiums', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeEcosphereSpecs(params = {}, options = {}) {
    return this.request('DescribeEcosphereSpecs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ExMethod - exMethod. required.
   * @param {String} ExUrl - exUrl. optional.
   * @param {String} ExBody - exBody. optional.
   */
  describeExplorer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'ExMethod')) {
      throw new TypeError('parameter "ExMethod" is required');
    }

    return this.request('DescribeExplorer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   */
  describeInvitationCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeInvitationCode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Code - code. required.
   */
  describeInviter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('DescribeInviter', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} OrdererName - ordererName. required.
   * @param {String} Lines - lines. optional.
   */
  describeOrdererLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    if (!hasOwnProperty(params, 'OrdererName')) {
      throw new TypeError('parameter "OrdererName" is required');
    }

    return this.request('DescribeOrdererLogs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganization', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganizationChaincodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganizationChaincodes', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganizationChannels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganizationChannels', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganizationDeletable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganizationDeletable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganizationMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganizationMembers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganizationPeers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganizationPeers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeOrganizationSpecs(params = {}, options = {}) {
    return this.request('DescribeOrganizationSpecs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  describeOrganizationUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrganizationUsers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Location - location. optional.
   */
  describeOrganizations(params = {}, options = {}) {
    return this.request('DescribeOrganizations', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - orgId. required.
   * @param {String} Location - location. optional.
   */
  describeOrgnaizationChaincodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DescribeOrgnaizationChaincodes', params, options);
  }

  /**
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} PeerName - peerName. required.
   * @param {String} Lines - lines. optional.
   */
  describePeerLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'PeerName')) {
      throw new TypeError('parameter "PeerName" is required');
    }

    return this.request('DescribePeerLogs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeRootDomain(params = {}, options = {}) {
    return this.request('DescribeRootDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeTasks(params = {}, options = {}) {
    return this.request('DescribeTasks', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Username - username. required.
   * @param {String} Location - location. optional.
   */
  downloadOrganizationSDK(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'Username')) {
      throw new TypeError('parameter "Username" is required');
    }

    return this.request('DownloadOrganizationSDK', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ChaincodeId - chaincodeId. required.
   * @param {String} Location - location. optional.
   */
  installChaincode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'ChaincodeId')) {
      throw new TypeError('parameter "ChaincodeId" is required');
    }

    return this.request('InstallChaincode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ChaincodeId - chaincodeId. required.
   * @param {String} EndorsePolicy - endorsePolicy. optional.
   * @param {String} Location - location. optional.
   */
  instantiateChaincode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'ChaincodeId')) {
      throw new TypeError('parameter "ChaincodeId" is required');
    }

    return this.request('InstantiateChaincode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ChannelId - channelId. required.
   * @param {String} Do - do. required.
   * @param {String} Location - location. optional.
   */
  joinChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'Do')) {
      throw new TypeError('parameter "Do" is required');
    }

    return this.request('JoinChannel', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   * @param {String} Location - location. optional.
   */
  queryConsortiumDeletable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('QueryConsortiumDeletable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} EthereumId - ethereumId. required.
   */
  queryEthereumDeletable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EthereumId')) {
      throw new TypeError('parameter "EthereumId" is required');
    }

    return this.request('QueryEthereumDeletable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Location - location. optional.
   */
  queryOrganizationDeletable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('QueryOrganizationDeletable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Username - username. required.
   * @param {String} Password - password. optional.
   * @param {String} Location - location. optional.
   */
  resetOrganizationUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'Username')) {
      throw new TypeError('parameter "Username" is required');
    }

    return this.request('ResetOrganizationUserPassword', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ChaincodeId - chaincodeId. required.
   */
  synchronizeChaincode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'ChaincodeId')) {
      throw new TypeError('parameter "ChaincodeId" is required');
    }

    return this.request('SynchronizeChaincode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ChaincodeId - chaincodeId. required.
   * @param {String} EndorsePolicy - endorsePolicy. optional.
   * @param {String} Location - location. optional.
   */
  upgradeChaincode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'ChaincodeId')) {
      throw new TypeError('parameter "ChaincodeId" is required');
    }

    return this.request('UpgradeChaincode', params, options);
  }

}

module.exports = Client;
