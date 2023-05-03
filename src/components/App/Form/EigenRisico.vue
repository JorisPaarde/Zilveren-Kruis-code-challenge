<template>
    <div class="form-group">
        <h3>Eigen risico</h3>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">
                    Kies de hoogste van het eigen risico
                </label>
                <select v-model="selectedEigenrisico" class="form-control">
                    <option>€ 385 - verplicht eigen risico</option>
                    <option>€ 885 - korting van € 22 per jaar</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../../stores/formStore';

const formStore = useFormStore();

const selectedEigenrisico = computed({
    get: () => formStore.eigenRisico,
    set: value => (formStore.eigenRisico = value)
});
</script>
