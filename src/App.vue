<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header></header>

  <nav id="mainNavBar" class="navbar fixed-top navbar-expand-lg">
    <div class="container justify-content-end">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link" to="/recipes"
          >Recipes</router-link
        >
        <router-link class="nav-item nav-link" to="/hbl">HBL</router-link>
      </div>
    </div>
  </nav>
  <div id="content" class="mt-5">
    <RouterView />
  </div>
</template>

<style></style>
