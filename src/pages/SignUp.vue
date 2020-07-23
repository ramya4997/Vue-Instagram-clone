<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="4">
        <v-card class="pa-8">
          <v-card-title class="justify-center py-10 heading"
            >Instagram</v-card-title
          >
          <v-card-text>
            <b>Sign up to see photos and videos from your friends</b>
          </v-card-text>
          <v-btn outlined block color="primary" @click="loginWithGoogle"
            >Login with Google</v-btn
          >
          <v-row align="center" class="py-5">
            <v-col>
              <v-divider></v-divider>
            </v-col>
            <span class="px-2">OR</span>
            <v-col>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-text-field
            dense
            v-model="email"
            placeholder="Email"
            outlined
            :rules="emailRules"
            validate-on-blur
          ></v-text-field>
          <v-text-field
            dense
            v-model="fullname"
            placeholder="Full Name"
            outlined
            validate-on-blur
          ></v-text-field>
          <v-text-field
            dense
            v-model="username"
            placeholder="Username"
            outlined
            validate-on-blur
          ></v-text-field>
          <v-text-field
            dense
            v-model="password"
            outlined
            placeholder="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="passwordRules"
            validate-on-blur
          ></v-text-field>
          <v-btn
            block
            elevation="0"
            color="primary"
            @click="signUp"
            :disabled="!enableButton"
            >Sign Up</v-btn
          >
          <h5 style="text-align: center" class="ma-1 pa-1">
            By Signing up, you agree to our Terms, Data Policy and Cookie
            Policy.
          </h5>
        </v-card>
        <v-card class="mt-3 rounded-0" flat outlined>
          <v-card-title class="justify-center"
            >Have an account?
            <v-btn text color="primary" to="/SignIn">Login</v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validatorMixins } from "../mixins/validatorMixins";
import { auth } from "../auth";

export default {
  data() {
    return {
      showPassword: false,
      email: "",
      username: "",
      fullname: "",
      password: ""
    };
  },
  computed: {
    enableButton() {
      return (
        this.email.length > 0 &&
        this.password.length > 0 &&
        this.fullname.length > 0 &&
        this.username.length > 0
      );
    }
  },
  methods: {
    async loginWithGoogle() {
      try {
        const user = await auth.loginWithGoogle();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    async signUp() {
      try {
        const user = await auth.signUp(this.email, this.password);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mixins: [validatorMixins]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.heading {
  font-family: "Pacifico", cursive;
  font-size: 4vw;
}
</style>
