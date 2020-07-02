<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="4">
        <v-card class="pa-9">
          <v-card-title class="justify-center text-h2 py-10"
            >Instagram</v-card-title
          >
          <v-card-text>
            <b>Sign up to see photos and videos from your friends</b>
          </v-card-text>
          <v-btn outlined block color="primary">Login with Google</v-btn>
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
            placeholder="Password"
            outlined
            :rules="passwordRules"
            validate-on-blur
          ></v-text-field>
          <v-btn block elevation="0" color="primary" :disabled="!enableButton"
            >Sign Up</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validatorMixins } from "../mixins/validatorMixins";
export default {
  data() {
    return {
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
  mixins: [validatorMixins]
};
</script>
