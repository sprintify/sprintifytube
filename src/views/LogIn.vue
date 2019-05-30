<template>
  <div>
    <h1>Log in</h1>
    <form @submit.prevent="logIn">
      <input type="email" placeholder="Email" v-model="email" /><br />
      <input type="password" placeholder="Password" v-model="password" /><br />

      <button>Submit</button>
    </form>

    <hr />

    Signed in: {{ isAuthenticated }}

    <hr />

    <button @click="logOut">Log out</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      isAuthenticated: false
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
    logIn() {
      console.log("Log in");

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => alert(error.message));
    },
    logOut() {
      console.log("Log out");

      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isAuthenticated = false; // Reset the variable
        });
    }
  }
};
</script>
