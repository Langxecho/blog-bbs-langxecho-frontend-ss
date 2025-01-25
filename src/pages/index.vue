<template>
  <v-layout class="rounded rounded-md bg-white">
    <v-app-bar color="white" extension-height="220px">
      <template v-slot:extension>
        <Header class="absolute" />
      </template>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Drawer left"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center h-400px" style="">
      Main Content
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import Header from "@/components/header/Header.vue";
</script>

<style scoped></style>
