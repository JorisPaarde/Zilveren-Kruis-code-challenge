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
        eigenRisico: '',
        aanvullendeVerzekering: '',
        tandverzekering: 'Geen tandartsverzekering geselecteerd'
    })
});
