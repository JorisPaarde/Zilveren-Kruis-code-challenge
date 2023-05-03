<template>
    <h1>Aanmelden</h1>
    <h2>Gegevens</h2>
    <AanvraagReden v-model="formData.aanvraagReden"/>
    <PersoonlijkeGegevens v-model="formData.persoonlijkeGegevens"/>
    <h2 class="mt-5">Verzekering</h2>
    <Basisverzekering v-model="formData.basisverzekering"/>
    <Betaaltermijn v-model="formData.betaaltermijn"/>
    <EigenRisico v-model="formData.eigenRisico"/>
    <AanvullendeVerzekering v-model="formData.aanvullendeVerzekering"/>
    <Tandverzekering v-model="formData.tandverzekering"/>
</template>
<script setup lang="ts">
import AanvraagReden from './Aanvraagreden.vue';
import PersoonlijkeGegevens from './PersoonlijkeGegevens.vue';
import Basisverzekering from './Basisverzekering.vue';
import Betaaltermijn from './Betaaltermijn.vue';
import EigenRisico from './EigenRisico.vue';
import AanvullendeVerzekering from './AanvullendeVerzekering.vue';
import Tandverzekering from './Tandverzekering.vue';

import { reactive } from 'vue';

const formData = reactive({
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
});
</script>
