<template>
    <div class="parent">
        <PageTitle pageTitle="ثبت درخواست مرخصی" />
        <div style="height: 50px;"></div>
        <TwoChoice question="ثبت درخواست مرخصی: " choiceOne="روزانه" choiceTwo="ساعتی" :model="darkhastMorakhasiType" />

        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import PageTitle from '@/components/PageTitle.vue';
import TwoChoice from '@/components/TwoChoice.vue';

export default Vue.extend({
    data() {
        return {
            darkhastMorakhasiType: 'op1'
        };
    },
    components: {
        PageTitle,
        TwoChoice
    }
})
</script>
<style lang="scss" >
@import url('../assets/styles/darkhastMorakhasi/dm.scss');
</style>