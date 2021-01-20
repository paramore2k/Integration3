<template>
  <div class="contact-page">

<!--  Section nom   -->
        <form class="form-control">
        <label class="label">Nom:</label>
        <input
            class="form-control"
            type="text"
            v-model="name">

        <span v-if="$v.name.required"
            class="error-message">
          {{ nameErrorMSG }}
        </span>


<!-- Section prénom   -->


        <label class="form-label">Prénom:</label>
        <input
            class="form-control"
            v-model="prename"
            type="text"
        >
        <span v-if="$v.$dirty && $v.name.$invalid"
              class="error-message">
          {{ nameErrorMSG }}
        </span>


      <!-- Section courriel   -->


        <label class="form-label">Courriel:</label>
        <input
            class="form-control"
            v-model="email"
            type="text"
        >
        <span class="error-message"></span>


<!-- Section confirmer courriel -->


        <label class="form-label">Courriel (Confirmation)</label>
        <input
            class="form-control"
            v-model="email"
            type="text"
        >
        <span class="error-message"></span>

<!-- Section select avec dropdown         -->


          <select v-model="selected" class="form-select" aria-label="Sujet">
            <option disabled value="">Choisissez</option>
            <option v-for="sujet in sujets" :key="sujet" :value="sujet">{{ sujet }}</option>
          </select>

          <span class="float-start my-2">Sujet: </span><br/>

<!-- Section textarea -->

    <div class="input-group my-3">
      <label class="form-label"></label>
      <textarea class="form-control"
                aria-label="textarea"
                v-model="text">
      </textarea>
    </div>


<!-- Bouton soumettre -->


        <button
            @click="submit"
            value="Soumettre"
            class="btn btn-success m-3">Soumettre
        </button>
        </form>
    </div>

</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      prename: '',
    }
  },

  validations: {
    name: {required,
    validChars: (value) => {
      return (/^[a-zA-Z0-9_]+$/ig).test(value)
      }
    },
    email: {
      required
    },

    prename: {required},
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.invalid) {
        this.$emit('submit')
      }
    }
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    nameErrorMSG () {
      if (!this.$v.name.required) {
        return "Votre nom est requis"
      }else if (!this.$v.name.validChars) {
      return "Votre nom ne peut contenir que des lettres, des chiffres et des _"
        }
      }

    },


}

</script>

<style scoped>

.contact-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: .5em;
  background: #e3f2fd;
}
.error-message{
  text-decoration-color: #ff253a;
}

</style>
