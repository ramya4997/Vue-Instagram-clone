<template>
  <v-app>
    <v-app-bar app flat outlined dense>
      <v-row>
        <v-col md="5" offset="2">
          <v-row>
            <v-col>
              <h2>Instagram</h2>
            </v-col>
            <v-col>
              <!-- <v-text-field solo-inverted dense class="mt-5"></v-text-field> -->
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3" class="mt-3">
          <v-btn text>Home</v-btn>
          <v-btn text>Explore</v-btn>
          <v-btn text @click="logout">Logout</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col sm="12" md="5" offset-md="2">
          <v-card outlined height="90">
            <!-- <v-card-title>Stories</v-card-title> -->
            <v-row justify="space-around" class="pa-5">
              <v-avatar color="indigo" size="60" v-for="i in 7" :key="i">
                <span class="white--text headline"></span>
              </v-avatar>
            </v-row>
          </v-card>
          <posts></posts>
        </v-col>
        <v-col class="d-none d-md-flex" md="3">
          2
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Posts from "../components/Posts.vue";
import { auth } from "../auth";
export default {
  components: {
    posts: Posts
  },
  methods: {
    logout() {
      auth.logout();
    }
  }
};
</script>
