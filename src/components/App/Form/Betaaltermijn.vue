<template>
    <div class="form-group">
        <div class="form-input my-4">
            <div class="input__group">
                <label for="betaaltermijn-select" class="input__title"> Kies je betaaltermijn </label>
                <select id="betaaltermijn-select" v-model="selectedBetaaltermijn" class="form-control">
                    <option>per maand</option>
                    <option>per kwartaal</option>
                    <option>per jaar</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../../stores/formStore';

const formStore = useFormStore();

const selectedBetaaltermijn = computed({
    get: () => formStore.betaaltermijn,
    set: value => (formStore.betaaltermijn = value)
});
</script>
