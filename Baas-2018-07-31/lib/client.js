
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-31';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Token - token. required.
   * @param {String} Code - code. required.
   */
  acceptEthereumInvitation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('AcceptEthereumInvitation', params, options);
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
   * @param {String} NodeName - nodeName. optional.
   * @param {String} Description - description. optional.
   * @param {String} EthereumId - ethereumId. required.
   * @param {Boolean} ExternalNode - externalNode. optional.
   */
  addEthereumNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EthereumId')) {
      throw new TypeError('parameter "EthereumId" is required');
    }

    return this.request('AddEthereumNode', params, options);
  }

  /**
   * @param {String} Code - code. optional.
   * @param {String} RegionId - regionId. optional.
   */
  agreeInvite(params = {}, options = {}) {
    return this.request('AgreeInvite', params, options);
  }

  /**
   * @param {String} Blockchain - blockchain. optional.
   * @param {String} UploadReq - uploadReq. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccountPubKey - accountPubKey. optional.
   * @param {String} AccountRecoverPubKey - accountRecoverPubKey. optional.
   * @param {String} Account - account. optional.
   */
  applyBlockchain(params = {}, options = {}) {
    return this.request('ApplyBlockchain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - nodeId. required.
   * @param {RepeatList} Invitee - invitees. required.
   */
  approveEthereumInvitee(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Invitee')) {
      throw new TypeError('parameter "Invitee" is required');
    }

    return this.request('ApproveEthereumInvitee', params, options);
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} Account - account. optional.
   * @param {String} AccountPubKey - accountPubKey. optional.
   * @param {String} AccountRecoverPubKey - accountRecoverPubKey. optional.
   */
  createAccount(params = {}, options = {}) {
    return this.request('CreateAccount', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {Integer} MachineNum - machineNum. optional.
   * @param {Integer} Size - size. optional.
   * @param {Integer} LiveTime - liveTime. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} CipherSuit - cipherSuit. optional.
   * @param {String} TlsAlgo - tlsAlgo. optional.
   * @param {String} MerkleTreeSuit - merkleTreeSuit. optional.
   * @param {String} BlockchainType - blockchainType. optional.
   * @param {String} BlockchainRegionId - blockchainRegionId. optional.
   */
  createBlockchainApplication(params = {}, options = {}) {
    return this.request('CreateBlockchainApplication', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {Integer} MachineNum - machineNum. optional.
   * @param {Integer} Size - size. optional.
   * @param {Integer} LiveTime - liveTime. optional.
   * @param {String} RegionId - regionId. optional.
   */
  createBlockchainApply(params = {}, options = {}) {
    return this.request('CreateBlockchainApply', params, options);
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
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
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
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
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
   * @param {String} Consensus - consensus. required.
   * @param {String} Region - location. optional.
   * @param {String} Description - description. optional.
   * @param {String} NetworkId - networkId. optional.
   * @param {String} Gas - gas. optional.
   * @param {String} Difficulty - difficulty. optional.
   * @param {RepeatList} Node - nodeNames. required.
   */
  createEthereum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Consensus')) {
      throw new TypeError('parameter "Consensus" is required');
    }

    if (!hasOwnProperty(params, 'Node')) {
      throw new TypeError('parameter "Node" is required');
    }

    return this.request('CreateEthereum', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} EthereumId - ethereumId. required.
   */
  createEthereumInvitation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EthereumId')) {
      throw new TypeError('parameter "EthereumId" is required');
    }

    return this.request('CreateEthereumInvitation', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Name - name. required.
   * @param {String} Location - location. required.
   * @param {String} Domain - code. required.
   * @param {String} Description - description. optional.
   * @param {String} SpecName - specName. required.
   * @param {Integer} PeersCount - peersCount. optional. default: 2.
   * @param {Integer} Duration - duration. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
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
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} Total - total. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   */
  describeAccounts(params = {}, options = {}) {
    return this.request('DescribeAccounts', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} Total - Total. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeAllBlockchains(params = {}, options = {}) {
    return this.request('DescribeAllBlockchains', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Locale - locale. optional.
   */
  describeAntRegions(params = {}, options = {}) {
    return this.request('DescribeAntRegions', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeApplies(params = {}, options = {}) {
    return this.request('DescribeApplies', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   */
  describeBcSchema(params = {}, options = {}) {
    return this.request('DescribeBcSchema', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {Long} Height - height. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeBlock(params = {}, options = {}) {
    return this.request('DescribeBlock', params, options);
  }

  /**
   * @param {String} Purpose - purpose. optional. default: CONTRACT_CREATION.
   * @param {String} RegionId - regionId. optional.
   */
  describeBlockchainConfigOption(params = {}, options = {}) {
    return this.request('DescribeBlockchainConfigOption', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeBlockchainCreateTask(params = {}, options = {}) {
    return this.request('DescribeBlockchainCreateTask', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeBlockchainInfo(params = {}, options = {}) {
    return this.request('DescribeBlockchainInfo', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeBlockchainSchema(params = {}, options = {}) {
    return this.request('DescribeBlockchainSchema', params, options);
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
   * @param {String} ChaincodeId - chaincodeId. required.
   * @param {String} Location - location. optional.
   */
  describeChaincodeCollectionConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChaincodeId')) {
      throw new TypeError('parameter "ChaincodeId" is required');
    }

    return this.request('DescribeChaincodeCollectionConfig', params, options);
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
   * @param {String} Bizid - bizid. optional.
   */
  describeDownloadPathsOfContractChain(params = {}, options = {}) {
    return this.request('DescribeDownloadPathsOfContractChain', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeDownloadPathsOfNotaryChain(params = {}, options = {}) {
    return this.request('DescribeDownloadPathsOfNotaryChain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeEcosphereSpecs(params = {}, options = {}) {
    return this.request('DescribeEcosphereSpecs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - ethereumId. required.
   */
  describeEthereum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeEthereum', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeId - nodeId. required.
   */
  describeEthereumClientUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('DescribeEthereumClientUsers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} EthereumId - ethereumId. required.
   */
  describeEthereumDeletable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EthereumId')) {
      throw new TypeError('parameter "EthereumId" is required');
    }

    return this.request('DescribeEthereumDeletable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Token - token. required.
   */
  describeEthereumInvitaion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('DescribeEthereumInvitaion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - nodeId. required.
   */
  describeEthereumInvitee(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeEthereumInvitee', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - nodeId. required.
   */
  describeEthereumNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeEthereumNode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeId - nodeId. required.
   */
  describeEthereumNodeConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('DescribeEthereumNodeConfiguration', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeId - nodeId. required.
   */
  describeEthereumNodeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('DescribeEthereumNodeInfo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeId - nodeId. required.
   * @param {String} Target - target. optional.
   * @param {String} Lines - lines. optional.
   */
  describeEthereumNodeLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('DescribeEthereumNodeLogs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeEthereumNodes(params = {}, options = {}) {
    return this.request('DescribeEthereumNodes', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeEthereums(params = {}, options = {}) {
    return this.request('DescribeEthereums', params, options);
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
   * @param {String} NodeId - nodeId. required.
   */
  describeExplorerURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('DescribeExplorerURL', params, options);
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
   * @param {String} ConsortiumId - consortiumId. required.
   */
  describeInvitationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DescribeInvitationList', params, options);
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeLatest15Blocks(params = {}, options = {}) {
    return this.request('DescribeLatest15Blocks', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeLatest15TransDigests(params = {}, options = {}) {
    return this.request('DescribeLatest15TransDigests', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {Long} Start - start. optional.
   * @param {Long} End - end. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeLatestTransaction(params = {}, options = {}) {
    return this.request('DescribeLatestTransaction', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   */
  describeMembers(params = {}, options = {}) {
    return this.request('DescribeMembers', params, options);
  }

  /**
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} InnerIp - innerIp. optional.
   * @param {String} Port - port. optional.
   * @param {String} Bizid - bizId. optional.
   * @param {String} TimeArea - timeArea. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeMetric(params = {}, options = {}) {
    return this.request('DescribeMetric', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeMyBlockchains(params = {}, options = {}) {
    return this.request('DescribeMyBlockchains', params, options);
  }

  /**
   */
  describeMySuccessApplies(params = {}, options = {}) {
    return this.request('DescribeMySuccessApplies', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeMySuccessfulApplication(params = {}, options = {}) {
    return this.request('DescribeMySuccessfulApplication', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - ethereumId. required.
   */
  describeNetstatURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeNetstatURL', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   */
  describeNodes(params = {}, options = {}) {
    return this.request('DescribeNodes', params, options);
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
   * @param {String} Username - username. required.
   */
  describeOrganizationUserCerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'Username')) {
      throw new TypeError('parameter "Username" is required');
    }

    return this.request('DescribeOrganizationUserCerts', params, options);
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeOssProperties(params = {}, options = {}) {
    return this.request('DescribeOssProperties', params, options);
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
  describeResourceType(params = {}, options = {}) {
    return this.request('DescribeResourceType', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeRootDomain(params = {}, options = {}) {
    return this.request('DescribeRootDomain', params, options);
  }

  /**
   * @param {Long} SchemaId - schemaId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeSchemaDetail(params = {}, options = {}) {
    return this.request('DescribeSchemaDetail', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeTasks(params = {}, options = {}) {
    return this.request('DescribeTasks', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeTemplates(params = {}, options = {}) {
    return this.request('DescribeTemplates', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} Hash - hash. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeTransaction(params = {}, options = {}) {
    return this.request('DescribeTransaction', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} Hash - hash. optional.
   */
  describeTransactionReceipt(params = {}, options = {}) {
    return this.request('DescribeTransactionReceipt', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ConsortiumId - consortiumId. required.
   */
  destroyConsortium(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsortiumId')) {
      throw new TypeError('parameter "ConsortiumId" is required');
    }

    return this.request('DestroyConsortium', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} EthereumId - ethereumId. required.
   */
  destroyEthereum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EthereumId')) {
      throw new TypeError('parameter "EthereumId" is required');
    }

    return this.request('DestroyEthereum', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   */
  destroyOrganization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('DestroyOrganization', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  downloadAll(params = {}, options = {}) {
    return this.request('DownloadAll', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  downloadBizview(params = {}, options = {}) {
    return this.request('DownloadBizview', params, options);
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  downloadSDK2(params = {}, options = {}) {
    return this.request('DownloadSDK2', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   */
  downloadSdk(params = {}, options = {}) {
    return this.request('DownloadSdk', params, options);
  }

  /**
   * @param {String} Path - path. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  downloadSignedData(params = {}, options = {}) {
    return this.request('DownloadSignedData', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} Account - account. optional.
   */
  freezeAccount(params = {}, options = {}) {
    return this.request('FreezeAccount', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} Total - Total. optional.
   */
  getAllBlockchains(params = {}, options = {}) {
    return this.request('GetAllBlockchains', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   */
  getApplies(params = {}, options = {}) {
    return this.request('GetApplies', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   */
  getBcSchema(params = {}, options = {}) {
    return this.request('GetBcSchema', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   */
  getBlockchainCreateTask(params = {}, options = {}) {
    return this.request('GetBlockchainCreateTask', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   */
  getBlockchainInfo(params = {}, options = {}) {
    return this.request('GetBlockchainInfo', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {Long} Start - start. optional.
   * @param {Long} End - end. optional.
   */
  getLatestTransaction(params = {}, options = {}) {
    return this.request('GetLatestTransaction', params, options);
  }

  /**
   */
  getMyBlockchains(params = {}, options = {}) {
    return this.request('GetMyBlockchains', params, options);
  }

  /**
   */
  getMySuccessApplies(params = {}, options = {}) {
    return this.request('GetMySuccessApplies', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   */
  getOssProperties(params = {}, options = {}) {
    return this.request('GetOssProperties', params, options);
  }

  /**
   */
  getTemplates(params = {}, options = {}) {
    return this.request('GetTemplates', params, options);
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
   * @param {String} CollectionConfig - collectionConfig. optional.
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} UserEmail - userEmail. optional.
   * @param {Long} UserId - userId. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  inviteUser(params = {}, options = {}) {
    return this.request('InviteUser', params, options);
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} UserName - userName. optional.
   * @param {Integer} Operation - operation. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  operateUser(params = {}, options = {}) {
    return this.request('OperateUser', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {Long} Height - height. optional.
   */
  queryBlock(params = {}, options = {}) {
    return this.request('QueryBlock', params, options);
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
   * @param {String} Period - period. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} InnerIp - innerIp. optional.
   * @param {String} Port - port. optional.
   * @param {String} Bizid - bizId. optional.
   * @param {String} TimeArea - timeArea. optional.
   */
  queryMetric(params = {}, options = {}) {
    return this.request('QueryMetric', params, options);
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} Hash - hash. optional.
   */
  queryTransaction(params = {}, options = {}) {
    return this.request('QueryTransaction', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} RegionId - regionId. optional.
   */
  rejectUser(params = {}, options = {}) {
    return this.request('RejectUser', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} NewName - newName. optional.
   */
  renameBlockchain(params = {}, options = {}) {
    return this.request('RenameBlockchain', params, options);
  }

  /**
   * @param {String} Bizid - bizid. optional.
   * @param {String} RegionId - regionId. optional.
   */
  resetCertificate(params = {}, options = {}) {
    return this.request('ResetCertificate', params, options);
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
   * @param {String} Bizid - bizid. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Bid - bid. optional.
   * @param {Integer} Operation - operation. optional.
   * @param {String} RegionId - regionId. optional.
   */
  resetUser(params = {}, options = {}) {
    return this.request('ResetUser', params, options);
  }

  /**
   * @param {Long} SchemaId - schemaId. optional.
   * @param {String} Bizid - bizid. optional.
   */
  schemaDetail(params = {}, options = {}) {
    return this.request('SchemaDetail', params, options);
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
   * @param {String} Code - code. required.
   * @param {Boolean} IsAccepted - isAccepted. optional.
   */
  testBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('TestBatch', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} Account - account. optional.
   */
  unfreezeAccount(params = {}, options = {}) {
    return this.request('UnfreezeAccount', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Id - ethereumId. required.
   */
  updateEthereum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateEthereum', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeId - nodeId. required.
   * @param {String} Username - username. required.
   * @param {String} Password - password. required.
   */
  updateEthereumClientUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    if (!hasOwnProperty(params, 'Username')) {
      throw new TypeError('parameter "Username" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('UpdateEthereumClientUserPassword', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeName - nodeName. optional.
   * @param {String} Description - description. optional.
   * @param {String} NodeId - nodeId. required.
   */
  updateEthereumNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('UpdateEthereumNode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} NodeId - nodeId. required.
   * @param {String} IP - ip. required.
   * @param {String} NodePub - nodePub. required.
   * @param {String} TMPub - tmPub. required.
   * @param {Integer} P2pPort - p2pPort. required.
   * @param {Integer} TMPort - tmPort. required.
   * @param {Integer} RaftPort - raftPort. optional.
   * @param {Integer} RpcPort - rpcPort. optional.
   * @param {Integer} WSPort - wsPort. optional.
   */
  updateEthereumNodeConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    if (!hasOwnProperty(params, 'IP')) {
      throw new TypeError('parameter "IP" is required');
    }

    if (!hasOwnProperty(params, 'NodePub')) {
      throw new TypeError('parameter "NodePub" is required');
    }

    if (!hasOwnProperty(params, 'TMPub')) {
      throw new TypeError('parameter "TMPub" is required');
    }

    if (!hasOwnProperty(params, 'P2pPort')) {
      throw new TypeError('parameter "P2pPort" is required');
    }

    if (!hasOwnProperty(params, 'TMPort')) {
      throw new TypeError('parameter "TMPort" is required');
    }

    return this.request('UpdateEthereumNodeConfiguration', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {Long} UserId - userId. optional.
   * @param {String} Bid - bid. optional.
   * @param {Integer} Role - role. optional.
   */
  updateMemberRole(params = {}, options = {}) {
    return this.request('UpdateMemberRole', params, options);
  }

  /**
   * @param {Long} SchemaId - schemaId. optional.
   * @param {String} SchemaName - schemaName. optional.
   * @param {String} Bizid - bizid. optional.
   * @param {String} Description - description. optional.
   * @param {String} CategoryConfigs - categoryConfigs. optional.
   * @param {String} RegionId - regionId. optional.
   */
  updateSchema(params = {}, options = {}) {
    return this.request('UpdateSchema', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} ChaincodeId - chaincodeId. required.
   * @param {String} EndorsePolicy - endorsePolicy. optional.
   * @param {String} Location - location. optional.
   * @param {String} CollectionConfig - collectionConfig. optional.
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
