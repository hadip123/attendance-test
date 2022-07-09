<template>
  <div>
    <h4
      :style="{ color: $vuetify.theme.currentTheme.primary, display: 'flex' }"
    >
      {{ $props.pageTitle }}
      <v-divider
        class="mr-3"
        :style="{
          backgroundColor: $vuetify.theme.currentTheme.primary + ' !important',
          marginTop: 'auto',
          marginBottom: 'auto',
        }"
      />
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["pageTitle"],
  data: () => {},
  mounted() {
    this.$vuetify.theme.currentTheme;
  },
});
</script>