<template>
    <h2 class="mt-5">Controleren</h2>
    <div class="form-group">
      <h3>Gekozen pakket</h3>
      <h3 :v-show="volledigeNaam && geboortedatum" class="my-4">
        {{ volledigeNaam }} {{ geboortedatum }}
      </h3>
      <div v-if="basisverzekering">
        <h6 class="font-weight-bold">Basisverzekering</h6>
        {{ basisverzekering }}
        <hr />
      </div>
      <div v-if="eigenRisico && basisverzekering">
        <h6 class="font-weight-bold">Eigen risico</h6>
        {{ eigenRisico }}
        <hr />
      </div>
      <div v-if="aanvullendeVerzekering">
        <h6 class="font-weight-bold">Aanvullende verzekering</h6>
        {{ aanvullendeVerzekering.naam }}
        <span class="float-right">{{ aanvullendeVerzekering.prijs }}</span>
        <hr />
      </div>
    </div>
    <div class="form-group">
      <h3>Totaalpremie</h3>
    </div>
    <div class="form-group">
      <h3>Adres en contactgegevens</h3>
    </div>
  </template>

  <script setup lang="ts">
  import { computed } from 'vue';
  import { useFormStore } from '@/stores/formStore';
  import type { AanvullendeVerzekeringOption } from '@/interfaces/interfaces';

  const formStore = useFormStore();

  const volledigeNaam = computed(() =>
    `${formStore.persoonlijkeGegevens.naam} ${formStore.persoonlijkeGegevens.tussenvoegsel} ${formStore.persoonlijkeGegevens.achternaam}`
  );

  const geboortedatum = computed(() => {
    const date = formStore.persoonlijkeGegevens.geboortedatum;
    if (date) {
      return `(${date})`;
    } else {
      return '';
    }
  });

  const basisverzekering = computed(() => formStore.basisVerzekering);

  const eigenRisico = computed(() => formStore.eigenRisico);

  const aanvullendeVerzekering = computed<AanvullendeVerzekeringOption | undefined>(() => {
    const value = formStore.aanvullendeVerzekering;
    return value && value.naam !== 'Geen aanvullende verzekering geselecteerd' ? value : undefined;
  });
  </script>
