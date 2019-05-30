<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="signUp">
      <input type="email" placeholder="Email" v-model="email" /><br />
      <input type="password" placeholder="Password" v-model="password" /><br />

      <button>Submit</button>
    </form>

    <hr />

    Signed in: {{ isAuthenticated }}
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "", // v-model="email"
      password: "", // v-model="password"
      isAuthenticated: false // signed in true or false
    };
  },
  // verify if email and password is written = true)
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
      }
    });
  },
  // giving firebase information  INPUT email and password
  methods: {
    signUp() {
      console.log("Sign up");

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => alert(error.message));
    }
  }
};
</script>
