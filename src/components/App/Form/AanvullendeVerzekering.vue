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
                    <option value="">
                        Geen aanvullende verzekering geselecteerd
                    </option>
                    <option>Aanvullend 1 - € 21,38 per jaar</option>
                    <option>Aanvullend 2 - € 85,06 per jaar</option>
                    <option>Aanvullend 3 - € 198,63 per jaar</option>
                    <option>Aanvullend 4 - € 359,73 per jaar</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../../stores/formStore';

const formStore = useFormStore();

const selectedAanvullendeVerzekering = computed({
    get: () => formStore.aanvullendeVerzekering,
    set: value => (formStore.aanvullendeVerzekering = value)
});
</script>
