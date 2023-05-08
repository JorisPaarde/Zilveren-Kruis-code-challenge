import { ComponentCustomProperties } from 'vue';
import { ReturnTypeOfUseVuelidate } from './vuelidate-types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    v$: ReturnTypeOfUseVuelidate;
  }
}
