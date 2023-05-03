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
                    type="text"
                    v-model="naam"
                />
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
                    v-model="tussenvoegsel"
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
                    type="text"
                    v-model="achternaam"
                />
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
                            type="radio"
                            name="geslacht"
                            value="man"
                            v-model="selectedGeslacht"
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
                            type="radio"
                            value="vrouw"
                            name="geslacht"
                            v-model="selectedGeslacht"
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
                    type="date"
                    :max="currentDate"
                    v-model="geboortedatum"
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
                    class="input__field form-control is-invalid"
                    type="number"
                    maxlength="9"
                    oninput="this.value=this.value.slice(0,this.maxLength)"
                    v-model="burgerservicenummer"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
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

const formStore = useFormStore();
const currentDate = getCurrentDate();

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
const selectedGeslacht = computed({
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
</script>
