<template>
  <div>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: validationError }">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName"/>
    </div>
    <div class="form-control" :class="{ invalid: validationError }">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName"/>
    </div>
    <div class="form-control" :class="{ invalid: validationError }">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"/>
    </div>
    <div class="form-control" :class="{ invalid: validationError }">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate"/>
    </div>
    <div class="form-control" :class="{ invalid: validationError }">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="area">
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="area">
        <label for="frontend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="area">
        <label for="frontend">Career Development</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
  <p v-if="validationError" class="validation-error">Check Yo Fields, Fool!</p>
  </div>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      area: [],
      validationError: false
    }
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        area: this.area
      };
      if(!this.firstName || !this.lastName || !this.description || !this.rate || !this.area) {
        this.validationError = true;
      }
      else {
        this.$emit('save-data', formData);
      }
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
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

</style>