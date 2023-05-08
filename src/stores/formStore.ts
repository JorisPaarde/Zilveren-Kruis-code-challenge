import { defineStore } from 'pinia';
import type { IAanvraag } from '@interfaces/interfaces';
import { AanvullendeVerzekeringOptions } from '../../types/form-types';

export const useFormStore = defineStore({
    id: 'formStore',
    state: (): IAanvraag => ({
      aanvraagReden: 'overstappen',
      persoonlijkeGegevens: {
        naam: '',
        tussenvoegsel: '',
        achternaam: '',
        geslacht: '',
        geboortedatum: undefined,
        burgerservicenummer: undefined,
      },
      basisVerzekering: '',
      betaaltermijn: 'per jaar',
      eigenRisico: '€ 385 - verplicht eigen risico',
      aanvullendeVerzekering: AanvullendeVerzekeringOptions[0],
      tandVerzekering: 'Geen tandartsverzekering geselecteerd',
    }),
  });
