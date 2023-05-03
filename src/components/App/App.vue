<template>
    <div id="app" class="main-placeholder">
        <!-- HEADER -->
        <SiteHeader />
        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <AanmeldFormulier />
                    <Review/>
                </div>
                <div class="col-4">
                    <ContactCard/>
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <SiteFooter />
    </div>
</template>
<script setup lang="ts">
import SiteHeader from './Header/SiteHeader.vue';
import AanmeldFormulier from './Form/AanmeldFormulier.vue';
import Review from './Review/Review.vue';
import ContactCard from './Cards/ContactCard.vue'
import SiteFooter from './Footer/SiteFooter.vue';
</script>
