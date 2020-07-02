<template>
  <v-container fill-height>
    <v-row>
      <v-col class="d-none d-md-flex" cols="12" md="6">
        <v-img src="https://via.placeholder.com/150x170"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded-0 px-14 pb-10" flat outlined>
          <v-card-title class="justify-center text-h2 py-10"
            >Instagram</v-card-title
          >
          <v-form v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              placeholder="Email"
              outlined
              :rules="emailRules"
              validate-on-blur
            ></v-text-field>
            <v-text-field
              v-model="password"
              outlined
              placeholder="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :rules="passwordRules"
              validate-on-blur
            ></v-text-field>
          </v-form>
          <v-btn class="primary" elevation="0" block :disabled="!enableButton"
            >Login</v-btn
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
          <v-btn outlined block color="red">Login with Google</v-btn>
          <v-btn x-small text block class="pt-7">Forgot Password?</v-btn>
        </v-card>
        <v-card class="mt-3 rounded-0" flat outlined>
          <v-card-title class="justify-center"
            >Don't have account?
            <v-btn text flat color="primary" to="/SignUp">Sign Up</v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <!-- <v-col class="blue" md="4">
        3
      </v-col>-->
      <!-- <v-col class="green" cols="6">
        4
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import { validatorMixins } from "../mixins/validatorMixins";

export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      showPassword: false
    };
  },
  mixins: [validatorMixins],
  computed: {
    enableButton() {
      return this.email.length > 0 && this.password.length > 0;
    }
  }
};
</script>
