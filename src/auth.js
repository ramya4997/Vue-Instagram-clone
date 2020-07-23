import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

export const auth = {
  vueContext: null,
  init(vueContext) {
    this.vueContext = vueContext;
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vueContext.$store.commit("setUser", user);
        vueContext.$router.push("/");
        console.log("user is present");
      } else {
        vueContext.$store.commit("setUser", null);
        vueContext.$router.push("/signin");
        console.log("user is not present");
      }
    });
  },
  async loginWithEmailPassword(email, password) {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      var errorMessage = error.message;
      throw errorMessage;
    }
  },
  async loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      return result.user;
    } catch (error) {
      throw error.message;
    }
  },
  logout() {
    firebase.auth().signOut();
  },
  async signUp(email, password) {
    try {
      let user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      let errorMessage = error.message;
      throw errorMessage;
    }
  }
};
