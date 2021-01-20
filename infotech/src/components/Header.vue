<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <router-link class="navbar-brand ms-3" to="/home"><img src="https://i.imgur.com/6pi9sbZ.png" class="" alt="Logo Infotech"></router-link>
        <ul class="navbar-nav m-auto">
          <li class="nav-item border-bottom border-top me-3" style="border-color: #1E42B8;" >
            <router-link class="nav-link"  to="/about">À propos</router-link>
          </li>
          <li class="navbar-nav border-bottom border-top">
            <router-link class="nav-link" to="/contact">Nous joindre</router-link>
          </li>
        </ul>
        <span class="d-flex m-auto me-5">
          <router-link class="nav-link" to="/login">
            <button class="btn btn-success" type="button">Connexion</button>
          </router-link>
        </span>
      </nav>
    <router-view/>
    </div>
  </template>

<script>


export default {
name: "Header"
}
</script>

<style scoped>

</style>
