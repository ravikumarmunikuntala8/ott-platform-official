/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      footer: "#d9d9d9",
      login: "#E5F061",
      logo: "#90E9FD",
      loginBtn: "#5E89F9",
      fbBanner: "#3036D1",
      fbLogin: "#1877F2",
      twitterLogin: "#1d9bf0",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      login: "0 4px 4px rgba(0,0,0,0.25)",
    },
    borderRadius: {
      fifty: "50%",
    },
  },
  plugins: [],
};
