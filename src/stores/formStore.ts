import { defineStore } from 'pinia';

export const useFormStore = defineStore({
    id: 'formStore',
    state: () => ({
        aanvraagReden: 'overstappen',
        persoonlijkeGegevens: {
            naam: '',
            tussenvoegsel: '',
            achternaam: '',
            geslacht: '',
            geboortedatum: '',
            burgerservicenummer: ''
        },
        basisVerzekering: '',
        betaaltermijn: 'per jaar',
        eigenRisico: '€ 385 - verplicht eigen risico',
        aanvullendeVerzekering: 'Geen aanvullende verzekering geselecteerd',
        tandVerzekering: 'Geen tandartsverzekering geselecteerd'
    })
});
