<template>
    <h1>Aanmelden</h1>
    <h2>Gegevens</h2>
    <AanvraagReden v-model="formStore.aanvraagReden"/>
    <PersoonlijkeGegevens v-model="formStore.persoonlijkeGegevens"/>
    <h2 class="mt-5">Verzekering</h2>
    <Basisverzekering v-model="formStore.basisVerzekering"/>
    <Betaaltermijn v-model="formStore.betaaltermijn"/>
    <EigenRisico v-model="formStore.eigenRisico"/>
    <AanvullendeVerzekering v-model="formStore.aanvullendeVerzekering"/>
    <Tandverzekering v-model="formStore.tandVerzekering"/>
</template>
<script setup lang="ts">
import AanvraagReden from './Aanvraagreden.vue';
import PersoonlijkeGegevens from './PersoonlijkeGegevens.vue';
import Basisverzekering from './Basisverzekering.vue';
import Betaaltermijn from './Betaaltermijn.vue';
import EigenRisico from './EigenRisico.vue';
import AanvullendeVerzekering from './AanvullendeVerzekering.vue';
import Tandverzekering from './Tandverzekering.vue';

import { useFormStore } from '../../../stores/formStore';

const formStore = useFormStore();

</script>
