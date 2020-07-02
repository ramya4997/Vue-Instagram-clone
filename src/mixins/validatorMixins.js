export const validatorMixins = {
  data() {
    return {
      emailRules: [
        emailInput =>
          emailInput.length > 0 ? null : "Email should not be empty.",
        function(emailInput) {
          const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          if (emailRegex.test(emailInput)) {
            return null;
          } else {
            return "Enter a valid email id";
          }
        }
      ],
      passwordRules: [
        password =>
          password.length < 8
            ? "Password should be greater than 8 characters"
            : null
      ]
    };
  }
};
