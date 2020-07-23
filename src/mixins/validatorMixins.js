export const validatorMixins = {
  data() {
    return {
      emailRules: [
        emailInput => !!emailInput || "Email should not be empty.",
        emailInput =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailInput) ||
          "Enter valid email id"
      ],
      passwordRules: [
        password =>
          (password && password.length > 5) ||
          "Password should be greater than 6 characters"
      ]
    };
  }
};
