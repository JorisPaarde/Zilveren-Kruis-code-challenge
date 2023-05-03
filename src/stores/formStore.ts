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
        basisverzekering: '',
        betaaltermijn: 'per jaar',
        eigenRisico: '€ 385 - verplicht eigen risico',
        aanvullendeVerzekering: 'Geen aanvullende verzekering geselecteerd',
        tandverzekering: 'Geen tandartsverzekering geselecteerd'
    })
});
