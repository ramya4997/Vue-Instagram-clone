<template>
  <v-container fill-height>
    <v-row>
      <v-col class="d-none d-md-flex" cols="12" md="6">
        <v-img src="../assets/signin.png"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded-0 px-14 pb-10" flat outlined>
          <v-card-title class="justify-center  py-10 heading"
            >Instagram</v-card-title
          >
          <v-form ref="loginForm" v-model="valid" lazy-validation>
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
          <v-btn
            class="primary"
            elevation="0"
            block
            :disabled="!enableButton"
            @click="loginUser"
            :loading="authenticating"
            >Login</v-btn
          >
          <!-- <v-btn to="/">Go to homepage</v-btn> -->
          <v-row align="center" class="py-5">
            <v-col>
              <v-divider></v-divider>
            </v-col>
            <span class="px-2">OR</span>
            <v-col>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-btn outlined block color="red darken-4" @click="loginWithGoogle"
            >Login with Google</v-btn
          >
          <p class="red--text my-3 text-center" v-if="error">{{ error }}</p>
          <v-btn x-small text block class="mt-7">Forgot Password?</v-btn>
        </v-card>
        <v-card class="mt-3 rounded-0" flat outlined>
          <v-card-title class="justify-center"
            >Don't have account?
            <v-btn text color="primary" to="/SignUp">Sign Up</v-btn>
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
      valid: true,
      email: "",
      password: "",
      showPassword: false,
      authenticating: false,
      error: null
    };
  },
  mixins: [validatorMixins],
  computed: {
    enableButton() {
      return this.email.length > 0 && this.password.length > 0;
    }
  },
  methods: {
    async loginUser() {
      this.error = null;
      const isValid = this.$refs.loginForm.validate();
      if (isValid) {
        this.authenticating = true;
        this.valid = true;
        try {
          const user = await auth.loginWithEmailPassword(
            this.email,
            this.password
          );
          console.log(user);
        } catch (error) {
          this.error = error;
        } finally {
          this.authenticating = false;
        }
      } else {
        this.valid = false;
      }
    },
    async loginWithGoogle() {
      try {
        const user = await auth.loginWithGoogle();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.heading {
  font-family: "Pacifico", cursive;
  font-size: 4vw;
}
</style>
