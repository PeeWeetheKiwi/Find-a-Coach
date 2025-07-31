<template>
  <div>
  <base-card v-if="isLoading">
    <p>Authenticating...</p>
    <base-spinner></base-spinner>
  </base-card>
    <base-card v-if="!!error && !isLoading">
      <p>{{ error }}</p>
    </base-card>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ 'invalid': !emailValid && submitted }">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="email"/>
      </div>
      <div class="form-control" :class="{ 'invalid': !passValid && submitted }">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password"/>
      </div>
      <p v-if="!emailValid && submitted" class="validation-error">{{ emailError }}</p>
      <p v-if="!passValid && submitted" class="validation-error">{{ passError }}</p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchMode">{{ switchModeButtonCaption }}</base-button>
    </form>
  </base-card>
  </div>
</template>

<script>
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

export default {
  components: {BaseSpinner},
  data() {
    return {
      email: '',
      password: '',
      emailValid: true,
      emailError: '',
      passValid: true,
      passError: '',
      mode: 'login',
      submitted: false,
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    }
  },
  methods: {
    async submitForm() {
      this.emailValid = true;
      this.passValid = true;
      this.submitted = true;
      this.emailError = '';
      this.passError = '';

      if (this.email === '' || !this.email.includes('@')) {
        this.emailValid = false;
        this.emailError = 'Please enter a valid email address';
      }

      if (!this.password || this.password.length < 6) {
        this.passValid = false;
        this.passError = 'Please enter a valid password (Must be at least 6 characters long).';
      }

      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('userLogin', {
            email: this.email,
            password: this.password
          })
        } else {
          await this.$store.dispatch('userSignup', {
            email: this.email,
            password: this.password,
          })
        }
        const redirectUrl = '/' + (this.$router.replace.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = (err.message || "Failed to authenticate, try later.");
      }


      this.isLoading = false;

    },
    switchMode() {
      this.submitted = false;
      this.mode = this.mode === 'login' ? 'signup' : 'login';
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.validation-error {
  color: #d93025;
  background-color: #fce8e6;
  border: 1px solid #f5c6cb;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>