<template>
  <div class="container">
      <div class="row">
          <div class="col-6 m-auto">
            <h4 class="mt-3 mb-4">Nous joindre</h4>
            <Contact
            v-if="!submitted"
            @submit="submitted = true"
            />
            <h1 v-else class="message">Merci !</h1>

          </div>
      </div>
      </div>
</template>

<script>

import Contact from "@/components/Contact";
export default {
  name: "NousJoindre",
  components: {Contact},
  data() {
    return {
      submitted: false,
    }
  }
}
</script>


<style scoped>

.content {
  width: 500px;
  box-shadow: 0 2px 5px 0px rgba(0,0,0,0.2);
  padding: 40px 10px;
  background: white;
  border-radius: 2px;
}


</style>
