<template>
    <div class="form-group">
        <h3>Reden van aanmelding</h3>
        <div class="form-input my-4">
            <label id="aanmeldreden-label" class="input__title">
                Wat is de reden van uw aanvraag?
            </label>
            <div class="input__group">
                <select
                    id="aanvraagreden"
                    v-model="selectedReden"
                    class="form-control"
                >
                    <option value="nieuwe-werkgever">
                        Nieuwe werkgever met collectiviteit bij Zilveren Kruis
                    </option>
                    <option value="overstappen" selected>
                        Overstappen per 1-1-2023 naar Zilveren Kruis
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../../stores/formStore';

const formStore = useFormStore();

const selectedReden = computed({
    get: () => formStore.aanvraagReden,
    set: value => (formStore.aanvraagReden = value)
});
</script>
