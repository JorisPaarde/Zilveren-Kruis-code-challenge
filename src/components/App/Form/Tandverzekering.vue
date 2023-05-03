<template>
    <div class="form-group">
        <div class="form-input my-4">
            <div class="input__group">
                <label for="tand-verzekering-select" class="input__title">
                    Kies uw tandartsverzekering
                </label>
                <select id="tand-verzekering-select" v-model="selectedTandverzekering" class="form-control">
                    <option disabled hidden>
                        Geen tandartsverzekering geselecteerd
                    </option>
                    <option value="Geen tandartsverzekering geselecteerd">Geen tandartsverzekering</option>
                    <option>Tand 1 - € 80,28 per jaar</option>
                    <option>Tand 2 - € 221,65 per jaar</option>
                    <option>Tand 3 - € 449,36 per jaar</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../../stores/formStore';

const formStore = useFormStore();

const selectedTandverzekering = computed({
    get: () => formStore.tandVerzekering,
    set: value => (formStore.tandVerzekering = value)
});
</script>
