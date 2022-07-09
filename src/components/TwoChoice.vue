<template>
  <div style="display: flex">
    <v-radio-group v-model="$props.model" row>
    <template v-slot:label>
      <div style="font-size: 16px;"><strong>{{ $props.question }}</strong></div>
    </template>
      <v-radio :label="$props.choiceOne" value="op1"></v-radio>
      <v-radio :label="$props.choiceTwo" value="op2"></v-radio>
    </v-radio-group>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["question", "choiceOne", "choiceTwo", "model"],
  data() {
    return { row: "radio-1" };
  },
});
</script>