
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-11';
    super(config);
  }

  /**
   * @param {String} PerspectiveId - PerspectiveId. required.
   */
  activatePerspective(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PerspectiveId')) {
      throw new TypeError('parameter "PerspectiveId" is required');
    }

    return this.request('ActivatePerspective', params, options);
  }

  /**
   * @param {String} CoreWordName - CoreWordName. required.
   * @param {String} Synonym - Synonym. required.
   */
  addSynonym(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CoreWordName')) {
      throw new TypeError('parameter "CoreWordName" is required');
    }

    if (!hasOwnProperty(params, 'Synonym')) {
      throw new TypeError('parameter "Synonym" is required');
    }

    return this.request('AddSynonym', params, options);
  }

  /**
   * @param {Long} EntityId - EntityId. required.
   * @param {String} ApplyType - ApplyType. required.
   * @param {String} Member - Member. required.
   */
  appendEntityMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    if (!hasOwnProperty(params, 'ApplyType')) {
      throw new TypeError('parameter "ApplyType" is required');
    }

    if (!hasOwnProperty(params, 'Member')) {
      throw new TypeError('parameter "Member" is required');
    }

    return this.request('AppendEntityMember', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} KnowledgeId - knowledgeId. optional.
   * @param {String} SenderId - senderId. optional.
   * @param {String} SenderNick - senderNick. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Utterance - utterance. required.
   * @param {RepeatList} Perspective - perspectives. optional.
   */
  chat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    return this.request('Chat', params, options);
  }

  /**
   * @param {String} LanguageCode - LanguageCode. required.
   * @param {String} TimeZone - TimeZone. required.
   * @param {String} Name - Name. required.
   * @param {String} Avatar - Avatar. optional.
   * @param {String} Introduction - Introduction. optional.
   */
  createBot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LanguageCode')) {
      throw new TypeError('parameter "LanguageCode" is required');
    }

    if (!hasOwnProperty(params, 'TimeZone')) {
      throw new TypeError('parameter "TimeZone" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateBot', params, options);
  }

  /**
   * @param {Long} ParentCategoryId - ParentCategoryId. optional.
   * @param {String} Name - Name. required.
   */
  createCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateCategory', params, options);
  }

  /**
   * @param {String} CoreWordName - CoreWordName. required.
   */
  createCordWord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CoreWordName')) {
      throw new TypeError('parameter "CoreWordName" is required');
    }

    return this.request('CreateCordWord', params, options);
  }

  /**
   * @param {String} CoreWordName - CoreWordName. required.
   */
  createCoreWord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CoreWordName')) {
      throw new TypeError('parameter "CoreWordName" is required');
    }

    return this.request('CreateCoreWord', params, options);
  }

  /**
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} DialogName - DialogName. required.
   * @param {String} Description - Description. optional.
   */
  createDialog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DialogName')) {
      throw new TypeError('parameter "DialogName" is required');
    }

    return this.request('CreateDialog', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   * @param {String} EntityName - EntityName. required.
   * @param {String} EntityType - EntityType. required.
   * @param {String} Regex - Regex. optional.
   * @param {String} Members - Members. optional.
   */
  createEntity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    if (!hasOwnProperty(params, 'EntityName')) {
      throw new TypeError('parameter "EntityName" is required');
    }

    if (!hasOwnProperty(params, 'EntityType')) {
      throw new TypeError('parameter "EntityType" is required');
    }

    return this.request('CreateEntity', params, options);
  }

  /**
   * @param {String} IntentDefinition - IntentDefinition. required.
   * @param {Long} DialogId - DialogId. required.
   */
  createIntent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntentDefinition')) {
      throw new TypeError('parameter "IntentDefinition" is required');
    }

    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('CreateIntent', params, options);
  }

  /**
   * @param {String} Knowledge - Knowledge. required.
   */
  createKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Knowledge')) {
      throw new TypeError('parameter "Knowledge" is required');
    }

    options.method = 'POST';
    return this.request('CreateKnowledge', params, options);
  }

  /**
   * @param {String} Title - Title. required.
   * @param {Long} CategoryId - CategoryId. required.
   * @param {String} CoreWord - CoreWord. optional.
   * @param {String} Content - Content. required.
   * @param {String} Code - PerspectiveIds. optional.
   * @param {String} PerspectiveIds - Views. required.
   * @param {String} BizDataRanges - BizDataRanges. optional.
   */
  createMachineReadingArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'PerspectiveIds')) {
      throw new TypeError('parameter "PerspectiveIds" is required');
    }

    return this.request('CreateMachineReadingArticle', params, options);
  }

  /**
   * @param {String} Name - Name. required.
   */
  createPerspective(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreatePerspective', params, options);
  }

  /**
   * @param {String} InstanceId - InstanceId. required.
   */
  deleteBot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteBot', params, options);
  }

  /**
   * @param {Long} CategoryId - CategoryId. required.
   */
  deleteCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('DeleteCategory', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   */
  deleteDialog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('DeleteDialog', params, options);
  }

  /**
   * @param {Long} EntityId - EntityId. required.
   */
  deleteEntity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('DeleteEntity', params, options);
  }

  /**
   * @param {Long} IntentId - IntentId. required.
   */
  deleteIntent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntentId')) {
      throw new TypeError('parameter "IntentId" is required');
    }

    return this.request('DeleteIntent', params, options);
  }

  /**
   * @param {Long} KnowledgeId - KnowledgeId. required.
   */
  deleteKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KnowledgeId')) {
      throw new TypeError('parameter "KnowledgeId" is required');
    }

    return this.request('DeleteKnowledge', params, options);
  }

  /**
   * @param {Long} MachineReadingId - MachineReadingId. required.
   */
  deleteMachineReadingArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MachineReadingId')) {
      throw new TypeError('parameter "MachineReadingId" is required');
    }

    return this.request('DeleteMachineReadingArticle', params, options);
  }

  /**
   * @param {String} InstanceId - InstanceId. required.
   */
  describeBot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeBot', params, options);
  }

  /**
   * @param {Long} CategoryId - CategoryId. required.
   */
  describeCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('DescribeCategory', params, options);
  }

  /**
   * @param {String} CoreWordName - CoreWordName. required.
   */
  describeCoreWord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CoreWordName')) {
      throw new TypeError('parameter "CoreWordName" is required');
    }

    return this.request('DescribeCoreWord', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   */
  describeDialog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('DescribeDialog', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   */
  describeDialogFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('DescribeDialogFlow', params, options);
  }

  /**
   * @param {Long} EntityId - EntityId. required.
   */
  describeEntities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('DescribeEntities', params, options);
  }

  /**
   * @param {Long} IntentId - IntentId. required.
   */
  describeIntent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntentId')) {
      throw new TypeError('parameter "IntentId" is required');
    }

    return this.request('DescribeIntent', params, options);
  }

  /**
   * @param {Long} KnowledgeId - KnowledgeId. required.
   */
  describeKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KnowledgeId')) {
      throw new TypeError('parameter "KnowledgeId" is required');
    }

    return this.request('DescribeKnowledge', params, options);
  }

  /**
   * @param {Long} MachineReadingId - MachineReadingId. required.
   */
  describeMachineReadingArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MachineReadingId')) {
      throw new TypeError('parameter "MachineReadingId" is required');
    }

    return this.request('DescribeMachineReadingArticle', params, options);
  }

  /**
   * @param {String} PerspectiveId - PerspectiveId. required.
   */
  describePerspective(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PerspectiveId')) {
      throw new TypeError('parameter "PerspectiveId" is required');
    }

    return this.request('DescribePerspective', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   */
  disableDialogFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('DisableDialogFlow', params, options);
  }

  /**
   * @param {Long} KnowledgeId - KnowledgeId. required.
   */
  disableKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KnowledgeId')) {
      throw new TypeError('parameter "KnowledgeId" is required');
    }

    return this.request('DisableKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MessageId - messageId. required.
   * @param {String} Feedback - feedback. required.
   */
  feedback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    if (!hasOwnProperty(params, 'Feedback')) {
      throw new TypeError('parameter "Feedback" is required');
    }

    return this.request('Feedback', params, options);
  }

  /**
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} CategoryIds - CategoryIds. required.
   */
  linkBotCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryIds')) {
      throw new TypeError('parameter "CategoryIds" is required');
    }

    return this.request('LinkBotCategory', params, options);
  }

  /**
   * @param {Long} KnowledgeId - KnowledgeId. required.
   * @param {Long} CategoryId - CategoryId. required.
   */
  moveKnowledgeCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KnowledgeId')) {
      throw new TypeError('parameter "KnowledgeId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('MoveKnowledgeCategory', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   */
  publishDialogFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('PublishDialogFlow', params, options);
  }

  /**
   * @param {Long} KnowledgeId - KnowledgeId. required.
   */
  publishKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KnowledgeId')) {
      throw new TypeError('parameter "KnowledgeId" is required');
    }

    return this.request('PublishKnowledge', params, options);
  }

  /**
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  queryBots(params = {}, options = {}) {
    return this.request('QueryBots', params, options);
  }

  /**
   * @param {Long} ParentCategoryId - ParentCategoryId. optional.
   * @param {Boolean} ShowChildrens - ShowChildrens. optional.
   */
  queryCategories(params = {}, options = {}) {
    return this.request('QueryCategories', params, options);
  }

  /**
   * @param {String} CoreWordName - CoreWordName. required.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  queryCoreWords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CoreWordName')) {
      throw new TypeError('parameter "CoreWordName" is required');
    }

    return this.request('QueryCoreWords', params, options);
  }

  /**
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} DialogName - DialogName. optional.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  queryDialogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryDialogs', params, options);
  }

  /**
   * @param {String} EntityName - EntityName. optional.
   * @param {Long} DialogId - DialogId. required.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  queryEntities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('QueryEntities', params, options);
  }

  /**
   * @param {String} IntentName - IntentName. optional.
   * @param {Long} DialogId - DialogId. required.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  queryIntents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('QueryIntents', params, options);
  }

  /**
   * @param {String} KnowledgeTitle - KnowledgeTitle. optional.
   * @param {String} CoreWordName - CoreWordName. optional.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Long} CategoryId - CategoryId. optional.
   */
  queryKnowledges(params = {}, options = {}) {
    return this.request('QueryKnowledges', params, options);
  }

  /**
   * @param {Long} CategoryId - CategoryId. required.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {String} Title - Title. optional.
   */
  queryMachineReadingArticles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('QueryMachineReadingArticles', params, options);
  }

  /**
   */
  queryPerspectives(params = {}, options = {}) {
    return this.request('QueryPerspectives', params, options);
  }

  /**
   * @param {String} EntityName - EntityName. optional.
   */
  querySystemEntities(params = {}, options = {}) {
    return this.request('QuerySystemEntities', params, options);
  }

  /**
   * @param {Long} EntityId - EntityId. required.
   * @param {String} RemoveType - RemoveType. required.
   * @param {String} Member - Member. required.
   */
  removeEntityMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    if (!hasOwnProperty(params, 'RemoveType')) {
      throw new TypeError('parameter "RemoveType" is required');
    }

    if (!hasOwnProperty(params, 'Member')) {
      throw new TypeError('parameter "Member" is required');
    }

    return this.request('RemoveEntityMember', params, options);
  }

  /**
   * @param {String} CoreWordName - CoreWordName. required.
   * @param {String} Synonym - Synonym. required.
   */
  removeSynonym(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CoreWordName')) {
      throw new TypeError('parameter "CoreWordName" is required');
    }

    if (!hasOwnProperty(params, 'Synonym')) {
      throw new TypeError('parameter "Synonym" is required');
    }

    return this.request('RemoveSynonym', params, options);
  }

  /**
   * @param {String} UserQuery - UserQuery. optional.
   * @param {Long} CategoryId - CategoryId. optional.
   * @param {Long} KnowledgeId - KnowledgeId. optional.
   * @param {Integer} KnowledgeStatus - KnowledgeStatus. optional.
   * @param {Integer} KnowledgeType - KnowledgeType. optional.
   * @param {String} CreateUserName - CreateUserName. optional.
   * @param {String} ModifyUserName - ModifyUserName. optional.
   * @param {String} CreateTimeBegin - CreateTimeBegin. optional.
   * @param {String} CreateTimeEnd - CreateTimeEnd. optional.
   * @param {String} ModifyTimeBegin - ModifyTimeBegin. optional.
   * @param {String} ModifyTimeEnd - ModifyTimeEnd. optional.
   * @param {String} StartTimeBegin - StartTimeBegin. optional.
   * @param {String} StartTimeEnd - StartTimeEnd. optional.
   * @param {String} EndTimeBegin - EndTimeBegin. optional.
   * @param {String} EndTimeEnd - EndTimeEnd. optional.
   * @param {String} DataType - DataType. optional.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  searchKnowledges(params = {}, options = {}) {
    return this.request('SearchKnowledges', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   */
  testDialogFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    return this.request('TestDialogFlow', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   * @param {String} ModulePassDTO - ModulePassDTO. required.
   */
  updateAndPushDialogFlowToSandbox(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    if (!hasOwnProperty(params, 'ModulePassDTO')) {
      throw new TypeError('parameter "ModulePassDTO" is required');
    }

    return this.request('UpdateAndPushDialogFlowToSandbox', params, options);
  }

  /**
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} Name - Name. optional.
   * @param {String} Introduction - Introduction. optional.
   * @param {String} Avatar - Avatar. optional.
   */
  updateBot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UpdateBot', params, options);
  }

  /**
   * @param {String} Name - Name. optional.
   * @param {Long} CategoryId - CategoryId. required.
   */
  updateCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('UpdateCategory', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   * @param {String} DialogName - DialogName. required.
   * @param {String} Description - Description. optional.
   */
  updateDialog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    if (!hasOwnProperty(params, 'DialogName')) {
      throw new TypeError('parameter "DialogName" is required');
    }

    return this.request('UpdateDialog', params, options);
  }

  /**
   * @param {Long} DialogId - DialogId. required.
   * @param {String} ModuleDefinition - ModuleDefinition. required.
   */
  updateDialogFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DialogId')) {
      throw new TypeError('parameter "DialogId" is required');
    }

    if (!hasOwnProperty(params, 'ModuleDefinition')) {
      throw new TypeError('parameter "ModuleDefinition" is required');
    }

    return this.request('UpdateDialogFlow', params, options);
  }

  /**
   * @param {Long} EntityId - EntityId. required.
   * @param {String} EntityName - EntityName. required.
   * @param {String} EntityType - EntityType. required.
   * @param {String} Regex - Regex. optional.
   * @param {String} Members - Members. optional.
   */
  updateEntity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    if (!hasOwnProperty(params, 'EntityName')) {
      throw new TypeError('parameter "EntityName" is required');
    }

    if (!hasOwnProperty(params, 'EntityType')) {
      throw new TypeError('parameter "EntityType" is required');
    }

    return this.request('UpdateEntity', params, options);
  }

  /**
   * @param {String} IntentDefinition - IntentDefinition. required.
   * @param {Long} IntentId - IntentId. required.
   */
  updateIntent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntentDefinition')) {
      throw new TypeError('parameter "IntentDefinition" is required');
    }

    if (!hasOwnProperty(params, 'IntentId')) {
      throw new TypeError('parameter "IntentId" is required');
    }

    return this.request('UpdateIntent', params, options);
  }

  /**
   * @param {String} Knowledge - Knowledge. required.
   */
  updateKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Knowledge')) {
      throw new TypeError('parameter "Knowledge" is required');
    }

    options.method = 'POST';
    return this.request('UpdateKnowledge', params, options);
  }

  /**
   * @param {String} Title - Title. optional.
   * @param {Long} CategoryId - CategoryId. optional.
   * @param {String} CoreWord - CoreWord. optional.
   * @param {String} PerspectiveIds - PerspectiveIds. optional.
   * @param {String} Content - Content. optional.
   * @param {Long} MachineReadingId - MachineReadingId. required.
   * @param {String} Code - Code. optional.
   * @param {String} BizDataRanges - BizDataRanges. optional.
   */
  updateMachineReadingArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MachineReadingId')) {
      throw new TypeError('parameter "MachineReadingId" is required');
    }

    return this.request('UpdateMachineReadingArticle', params, options);
  }

  /**
   * @param {String} PerspectiveId - PerspectiveId. required.
   * @param {String} Name - Name. required.
   */
  updatePerspective(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PerspectiveId')) {
      throw new TypeError('parameter "PerspectiveId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdatePerspective', params, options);
  }

}

module.exports = Client;
