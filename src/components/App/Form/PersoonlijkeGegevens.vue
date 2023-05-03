<template>
    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Naam</label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="naam"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Tussenvoegsels </label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="tussenvoegsel"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Achternaam</label>
                <input
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
                            id="man"
                            class="radio__input custom-control-input"
                            type="radio"
                            name="geslacht"
                            v-model="selectedGeslacht"
                        />
                        <label
                            class="radio__label custom-control-label"
                            for="man"
                        >
                            Man
                        </label>
                    </div>
                    <div class="radio custom-radio radio__option">
                        <input
                            id="vrouw"
                            class="radio__input custom-control-input"
                            type="radio"
                            name="geslacht"
                            v-model="selectedGeslacht"
                        />
                        <label
                            class="radio__label custom-control-label"
                            for="vrouw"
                        >
                            Vrouw
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Geboortedatum </label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="geboortedatum"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Burgerservicenummer </label>
                <input
                    class="input__field form-control is-invalid"
                    type="text"
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

const formStore = useFormStore();

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
