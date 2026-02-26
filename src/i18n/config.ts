import { toAbsoluteUrl } from '@/lib/helpers';
import arMessages from './messages/ar.json';
import enMessages from './messages/en.json';
import { type Language } from './types';

const I18N_MESSAGES = {
  en: enMessages,
  ar: arMessages,
};

const I18N_CONFIG_KEY = 'i18nConfig';

const I18N_LANGUAGES: Language[] = [
  {
    label: 'Arabic (Iraq)',
    code: 'ar',
    direction: 'rtl',
    flag: toAbsoluteUrl('/media/flags/iraq.svg'),
    messages: I18N_MESSAGES.ar,
  },
  {
    label: 'English',
    code: 'en',
    direction: 'ltr',
    flag: toAbsoluteUrl('/media/flags/united-states.svg'),
    messages: I18N_MESSAGES.en,
  },
  // {
  //   label: 'French',
  //   code: 'fr',
  //   direction: 'ltr',
  //   flag: toAbsoluteUrl('/media/flags/france.svg'),
  //   messages: I18N_MESSAGES.fr,
  // },
];

const I18N_DEFAULT_LANGUAGE: Language = I18N_LANGUAGES[0];

export {
  I18N_CONFIG_KEY,
  I18N_DEFAULT_LANGUAGE,
  I18N_LANGUAGES,
  I18N_MESSAGES,
};
