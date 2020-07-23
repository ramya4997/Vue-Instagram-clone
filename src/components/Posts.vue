<template>
  <div>
    <div v-for="p in 4" :key="p">
      <v-card class="my-5">
        <v-row>
          <v-col cols="1">
            <v-avatar color="red" size="36">
              <span class="white--text headline"></span>
            </v-avatar>
          </v-col>
          <v-col cols="10">
            Username
          </v-col>
          <v-col cols="1">
            <v-icon @click="overlay = !overlay">mdi-dots-horizontal</v-icon>
            <v-overlay :value="overlay">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="overlay = false"
                        ><v-icon>mdi-close</v-icon></v-btn
                      >
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td>{{ item.name }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-overlay>
          </v-col>
        </v-row>
        <!-- <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline"
              >Our Changing Planet
            </v-list-item-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-list-item-content>
        </v-list-item> -->

        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        ></v-img>

        <v-card-text>
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </v-card-text>

        <v-card-actions>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      desserts: [
        {
          name: "Report"
        },
        {
          name: "Unfollow"
        },
        {
          name: "Go to post"
        },
        {
          name: "Share"
        },
        {
          name: "Copy Link"
        },
        {
          name: "Embed"
        }
      ]
    };
  }
};
</script>
