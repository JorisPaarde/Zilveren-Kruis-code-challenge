<template>
    <div class="form-group">
        <h3>Reden van aanmelding</h3>
        <div class="form-input my-4">
            <label for="aanvraagreden-select" id="aanmeldreden-label" class="input__title">
                Wat is de reden van uw aanvraag?
            </label>
            <div class="input__group">
                <select
                    id="aanvraagreden-select"
                    v-model="selectedReden"
                    class="form-control"
                    aria-label="Reden van aanmelding"
                >
                    <option value="nieuwe-werkgever">
                        Nieuwe werkgever met collectiviteit bij Zilveren Kruis
                    </option>
                    <option value="overstappen">
                        Overstappen per {{ currentDate }} naar Zilveren Kruis
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@/stores/formStore';
import { getCurrentDate } from '@/helpers/datehelpers';

const formStore = useFormStore();

const selectedReden = computed({
    get: () => formStore.aanvraagReden,
    set: value => (formStore.aanvraagReden = value)
});

const currentDate = getCurrentDate();

</script>
