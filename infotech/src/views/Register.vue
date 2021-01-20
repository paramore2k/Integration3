<template>
    <div id="app">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-4">
            <h4>Enregistrement</h4>
          </div>
          <div class="col-6 m-auto">
            <form action="" class="form-control form-floating mt-5">

              <form class="form-floating my-3">
                <input type="text" class="form-control" id="username" placeholder="username" value="">
                <label for="username">Nom d'utilisateur</label>
              </form>

              <form class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Mot de passe" value="">
                <label for="password">Mot de passe</label>
              </form>

              <button class="btn btn-success my-4 p-2">Soumettre</button>
            </form>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>
