export interface PayboxData {
  PayboxRemail: string;
  PayboxSendmail?: string;
  PayboxRename: string;
  PayboxSendname?: string;
  PayboxBase0: string;
  PayboxBase12: string;
  PayboxDescription: string;
  PayboxLanguage?: 'es' | 'us';
  PayboxDirection: string;
  PayBoxClientPhone: string;
  PayboxProduction: boolean;
  PayboxRecurrent?: boolean;
  PayboxIdPlan?: string;
  PayboxPermitirCalendarizar?: boolean;
  PayboxPagoInmediato?: boolean;
  PayboxCobroPrueba?: boolean;
  PayBoxClientIdentification: string;
  PayboxEnvironment: 'prod' | 'sandbox';
  PayboxAmountVariablePlan?: boolean;
  PayboxFrequencyPlan?: 'SEM' | 'MEN' | 'BME' | 'TME' | 'SME' | 'ANU';
  PayboxTieneIvaPlan?: boolean;
  PayboxDescriptionPlan?: string;
  PayboxPagoPlux?: boolean;
  PayboxIdElement?: string;
}
