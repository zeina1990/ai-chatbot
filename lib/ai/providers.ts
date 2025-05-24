import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { openai } from '@ai-sdk/openai'
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model'           : openai.chat('gpt-3.5-turbo'),
        'chat-model-reasoning' : openai.chat('gpt-4o-mini'), // or gpt-4
        'title-model'          : openai.chat('gpt-3.5-turbo'),
        'artifact-model'       : openai.chat('gpt-3.5-turbo'),
      },
    });
