<template>
  <div
    :style="{
      '--orange': orange,
      '--themeBgColor1': themeBgColor1,
      '--themeBgColor2': themeBgColor2,
      '--themeTextColor1': themeTextColor1,
      '--themeTextColor2': themeTextColor2,
      '--themeBoxShadow': themeBoxShadow,
    }"
  >
    <header class="header">
      <a href="#" class="logo"> <i class="fa fa-paper-plane"></i> Bazinga </a>
      <form action="" class="search-form">
        <input
          type="search"
          name=""
          placeholder="search here..."
          id="searchBox"
        />
        <label for="searchBox" class="fa fa-search"></label>
      </form>
      <div class="icons">
        <div class="fas fa-moon" id="theme-btn" @click="changeTheme"></div>
        <div class="fas fa-bars" id="menu-btn" @click="menuList"></div>
      </div>
      <nav class="navbar">
        <router-link :to="{ path: '/home' }">home</router-link>
        <a href="#packages">packages</a>
        <a href="#services">services</a>
        <a href="#pricing">pricing</a>
        <a href="#review">review</a>
        <router-link :to="{ path: '/resource' }">resource</router-link>
        <router-link :to="{ path: '/blog' }">blog</router-link>
      </nav>
    </header>
    <section class="banner">
      <img src="./imgs/banner1.png" alt="" />
    </section>
    <router-view />
  </div>
</template>
<script>
import variables from "@/assets/styles/variables.scss";

export default {
  name: "Layout",
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  mounted() {
    console.log(this.orange);
  },
  methods: {
    menuList() {
      let navbar = document.querySelector(".navbar");
      navbar.classList.toggle("active");
    },
    changeTheme() {
      let themeBtn = document.querySelector("#theme-btn");

      themeBtn.classList.toggle("fa-sun");
      themeBtn.classList.toggle("fa-moon");
      let theme;
      if (themeBtn.classList.contains("fa-sun")) {
        theme = {
          themeBgColor1: variables.darkBgColor1,
          themeBgColor2: variables.darkBgColor2,
          themeTextColor1: variables.darkTextColor1,
          themeTextColor2: variables.darkTextColor2,
          themeBoxShadow: variables.darkBoxShadow,
          orange: variables.orange,
        };
      } else {
        theme = {
          themeBgColor1: variables.lightBgColor1,
          themeBgColor2: variables.lightBgColor2,
          themeTextColor1: variables.lightTextColor1,
          themeTextColor2: variables.lightTextColor2,
          themeBoxShadow: variables.lightBoxShadow,
          orange: variables.orange,
        };
      }
      this.$store.dispatch("settings/changeSetting", {
        key: "theme",
        value: theme,
      });
      if (themeBtn.classList.contains("fa-sun")) {
        document.body.classList.add("active");
      } else {
        document.body.classList.remove("active");
      }
    },
  },
  computed: {
    themeBgColor1() {
      return this.$store.state.settings.theme.themeBgColor1;
    },
    themeBgColor2() {
      return this.$store.state.settings.theme.themeBgColor2;
    },
    themeTextColor1() {
      return this.$store.state.settings.theme.themeTextColor1;
    },
    themeTextColor2() {
      return this.$store.state.settings.theme.themeTextColor2;
    },
    themeBoxShadow() {
      return this.$store.state.settings.theme.themeBoxShadow;
    },
    orange() {
      return this.$store.state.settings.theme.orange;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--themeBgColor1);
  box-shadow: var(--themeBoxShadow);
  padding: 1.5rem 7%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .logo {
  font-weight: bolder;
  font-size: 2rem;
  color: var(--themeTextColor1);
}

.header .logo i {
  color: var(--orange);
}

.header .search-form {
  background: var(--themeBgColor2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  height: 4rem;
  width: 50rem;
}
.header .search-form input {
  height: 100%;
  width: 100%;
  background: none;
  text-transform: none;
  font-size: 1.5rem;
  color: var(--themeTextColor1);
  padding: 1rem;
}
.header .search-form label {
  font-size: 2rem;
  margin-right: 1.5rem;
  color: var(--themeTextColor1);
  cursor: pointer;
  transition: all 0.2s linear;
}

.header .search-form label:hover {
  color: $orange;
}

.header .icons div {
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  background: var(--themeBgColor2);
  color: var(--themeTextColor1);
  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;
}

.header .icons div:hover {
  color: $orange;
}
.header .navbar {
  position: absolute;
  top: 115%;
  right: 7%;
  background: var(--themeBgColor1);
  border-radius: 0.5rem;
  box-shadow: var(--themeBoxShadow);
  width: 25rem;
  transform: scale(0);
  transform-origin: top right;
  transition: all 0.2s linear;
}

.header .navbar a {
  display: block;
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: var(--themeTextColor1);
  border-radius: 0.5rem;
  transition: all 0.2s linear;
}
.header .navbar a:hover {
  color: $orange;
  background: var(--themeBgColor2);
  padding-left: 2rem;
}
.header .navbar.active {
  transform: scale(1);
}

.banner {
  font-size: 0px;
  max-height: 600px;
  margin-top: 7rem;
  overflow: hidden;
}

.banner > img {
  width: 100%;
}
</style>
