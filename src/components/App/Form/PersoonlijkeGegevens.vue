<template>
    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>
        <div class="form-input my-4">
            <div class="input__group">
                <label for="persoonlijke-gegevens-naam" class="input__title"
                    >Naam</label
                >
                <input
                    id="persoonlijke-gegevens-naam"
                    class="input__field form-control"
                    :class="{ 'is-invalid': v$.naam.$error }"
                    type="text"
                    v-model="v$.naam.$model"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="v$.naam.$error"
                aria-live="polite"
            >
                <span
                    >Dit veld is verplicht.</span
                >
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label
                    for="persoonlijke-gegevens-tussenvoegsel"
                    class="input__title"
                >
                    Tussenvoegsels
                </label>
                <input
                    id="persoonlijke-gegevens-tussenvoegsel"
                    class="input__field form-control"
                    type="text"
                    v-model="v$.tussenvoegsel.$model"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label
                    for="persoonlijke-gegevens-achternaam"
                    class="input__title"
                    >Achternaam</label
                >
                <input
                    id="persoonlijke-gegevens-achternaam"
                    class="input__field form-control"
                    :class="{ 'is-invalid': v$.achternaam.$error }"
                    type="text"
                    v-model="v$.achternaam.$model"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="v$.achternaam.$error"
                aria-live="polite"
            >
                <span
                    >Dit veld is verplicht.</span
                >
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Geslacht</label>
                <div class="form-row">
                    <div class="radio custom-radio radio__option">
                        <input
                            id="geslacht-man"
                            class="radio__input custom-control-input"
                            :class="{ 'is-invalid': v$.geslacht.$error }"
                            type="radio"
                            name="geslacht"
                            value="man"
                            v-model="v$.geslacht.$model"
                        />
                        <label
                            class="radio__label custom-control-label"
                            for="geslacht-man"
                        >
                            Man
                        </label>
                    </div>
                    <div class="radio custom-radio radio__option">
                        <input
                            id="geslacht-vrouw"
                            class="radio__input custom-control-input"
                            :class="{ 'is-invalid': v$.geslacht.$error }"
                            type="radio"
                            value="vrouw"
                            name="geslacht"
                            v-model="v$.geslacht.$model"
                        />
                        <label
                            class="radio__label custom-control-label"
                            for="geslacht-vrouw"
                        >
                            Vrouw
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label for="geboortedatum" class="input__title">
                    Geboortedatum
                </label>
                <input
                    id="geboortedatum"
                    class="input__field form-control"
                    :class="{ 'is-invalid': v$.geboortedatum.$error }"
                    type="date"
                    :max="currentDate"
                    v-model="v$.geboortedatum.$model"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label for="burgerservicenummer" class="input__title">
                    Burgerservicenummer
                </label>
                <input
                    id="burgerservicenummer"
                    class="input__field form-control"
                    :class="{ 'is-invalid': v$.burgerservicenummer.$error }"
                    type="number"
                    oninput="this.value=this.value.slice(0,9)"
                    v-model="v$.burgerservicenummer.$model"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="v$.burgerservicenummer.$error"
                aria-live="polite"
            >
                <span
                    >Helaas is het ingevoerde burgerservicenummer niet geldig.
                    Probeer het opnieuw.</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../../stores/formStore';
import { getCurrentDate } from '@/helpers/datehelpers';
// Import Vuelidate and the required validator
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

// Define your validation rules
const validations = {
    naam: { required },
    tussenvoegsel: {},
    achternaam: { required },
    geslacht: { required },
    geboortedatum: { required },
    burgerservicenummer: { required, minLengthValue: minLength(9), }
};

const formStore = useFormStore();
const currentDate = getCurrentDate();
const state = formStore.$state;

const naam = computed({
    get: () => formStore.persoonlijkeGegevens.naam,
    set: value => (formStore.persoonlijkeGegevens.naam = value)
});

const tussenvoegsel = computed({
    get: () => formStore.persoonlijkeGegevens.tussenvoegsel,
    set: value => (formStore.persoonlijkeGegevens.tussenvoegsel = value)
});

const achternaam = computed({
    get: () => formStore.persoonlijkeGegevens.achternaam,
    set: value => (formStore.persoonlijkeGegevens.achternaam = value)
});

const geslacht = computed({
    get: () => formStore.persoonlijkeGegevens.geslacht,
    set: value => (formStore.persoonlijkeGegevens.geslacht = value)
});

const geboortedatum = computed({
    get: () => formStore.persoonlijkeGegevens.geboortedatum,
    set: value => (formStore.persoonlijkeGegevens.geboortedatum = value)
});

const burgerservicenummer = computed({
    get: () => formStore.persoonlijkeGegevens.burgerservicenummer,
    set: value => (formStore.persoonlijkeGegevens.burgerservicenummer = value)
});

// pass the computed properties to `state`
state.persoonlijkeGegevens.naam = naam.value;
state.persoonlijkeGegevens.tussenvoegsel = tussenvoegsel.value;
state.persoonlijkeGegevens.achternaam = achternaam.value;
state.persoonlijkeGegevens.geslacht = geslacht.value;
state.persoonlijkeGegevens.geboortedatum = geboortedatum.value;
state.persoonlijkeGegevens.burgerservicenummer = burgerservicenummer.value;

const v$ = useVuelidate(validations, state.persoonlijkeGegevens);
</script>
