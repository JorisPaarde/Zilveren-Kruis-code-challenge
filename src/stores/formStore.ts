import { defineStore } from 'pinia';

export const useFormStore = defineStore({
    id: 'formStore',
    state: () => ({
        aanvraagReden: '',
        persoonlijkeGegevens: {
            naam: '',
            tussenvoegsel: '',
            achternaam: '',
            geslacht: '',
            geboortedatum: '',
            burgerservicenummer: ''
        },
        basisverzekering: '',
        betaaltermijn: '',
        eigenRisico: '',
        aanvullendeVerzekering: '',
        tandverzekering: ''
    })
});
