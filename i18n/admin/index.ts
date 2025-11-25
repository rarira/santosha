import polyglotI18nProvider from 'ra-i18n-polyglot';
import { I18nProvider, TranslationMessages } from 'react-admin';

import ko from './ko';

const messages: Record<string, TranslationMessages> = {
  ko,
};

export const i18nProvider: I18nProvider = polyglotI18nProvider(() => messages.ko!, 'ko');
