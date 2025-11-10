import { defaultNS, resources } from '@/lib/translation';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources.id;
  }
}