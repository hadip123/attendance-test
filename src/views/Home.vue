<template>
  <v-app>
    <v-app-bar elevation="0" color="white" app></v-app-bar>

    <v-navigation-drawer app right dark>
      <v-list dir="rtl" style="background: #3c92b0; height: 100%">
        <div v-for="item in items" :key="item.title">
          <v-list-item v-show="!item.isGroup" @click="item.onClick">
            <v-list-item-icon class="ml-1">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-group
            v-show="item.isGroup"
            :value="false"
            :prepend-icon="item.icon"
            style="color: white !important"
          >
            <template v-slot:activator>
              <v-list-item-title class="mr-1">{{
                item.title
              }}</v-list-item-title>
            </template>
            <div>
              <v-list-item v-for="(j, i) in item.children" :key="i" link>
                <v-list-item-title v-text="j.title" style="margin-right: 68px;"></v-list-item-title>
              </v-list-item>
            </div>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background: #F4F6FA;">
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">

      <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { ListItem } from "@/modules/utilities/home";

export default Vue.extend({
  name: "Home",
  data(): {
    [key: string]: any;
    items: ListItem[];
  } {
    return {
      items: [
        { title: "داشبورد", icon: "mdi-home", isGroup: false, onClick: () => {} },
        {
          title: "درباره ما",
          icon: "mdi-information",
          isGroup: true,
          children: [
            {
              title: "آیتم اول",
              icon: "mdi-laptop",
              isGroup: false,
              onClick: () => {},
            },
          ],
        },
      ],
    };
  },
});
</script>
<style lang="scss">
@import url("../assets/styles/home.scss");
</style>