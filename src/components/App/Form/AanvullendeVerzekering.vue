<template>
    <div class="form-group">
        <h3>Aanvullende verzekering</h3>
        <p>
            Onze aanvullende verzekeringen kennen ruim 100 verschillende
            vergoedingen. De hoogte van de vergoeding verschilt per
            pakket.hoogte van de vergoeding verschilt per pakket
        </p>
        <div class="form-input my-4">
            <div class="input__group">
                <label
                    for="aanvullende-verzekering-select"
                    class="input__title"
                >
                    Kies uw aanvullende verzekering
                </label>
                <select
                    id="aanvullende-verzekering-select"
                    class="form-control"
                    v-model="selectedAanvullendeVerzekering"
                    aria-labelledby="aanvullende-verzekering-select">
                >
                    <option
                      v-for="(option, index) in AanvullendeVerzekeringOptions"
                      :key="index"
                      :value="option"
                      :selected="index === 0"
                    >
                      {{ option.naam }}
                      <span v-if="option.prijs > 0"> - {{ option.prijs }}</span>
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@/stores/formStore';
import { AanvullendeVerzekeringOptions } from '@/types/form-types';


const formStore = useFormStore();

const selectedAanvullendeVerzekering = computed({
    get: () => formStore.aanvullendeVerzekering || AanvullendeVerzekeringOptions[0].name,
    set: value => (formStore.aanvullendeVerzekering = value)
});
</script>
