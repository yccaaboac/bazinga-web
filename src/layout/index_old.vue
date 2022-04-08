<template>
  <div class="aa">
    <nav class="nav" id="nav">
      <a href="#"> Bazinga </a>
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#home" class="nav__link active-link">Home</a>
        </li>

        <li class="nav__item">
          <a href="#about" class="nav__link">About</a>
        </li>

        <li class="nav__item">
          <a href="#trick" class="nav__link">Candy</a>
        </li>

        <li class="nav__item">
          <a href="#new" class="nav__link">New</a>
        </li>

        <a href="#" class="button button--ghost">Support</a>
      </ul>
    </nav>
    <header class="header" id="header">
      <div :class="{ narrow: isSlide }" class="banner">
        <img
          class="banner-img"
          src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_cb479a073f5cd7db3639875724252a19/0"
        />
        <img
          :class="{ opaque: isSlide }"
          class="banner-img banner-small-img"
          src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_2e1656756de300c518949388b5542989/0"
        />
      </div>
    </header>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      isSlide: false,
    };
  },
  created() {
    document.addEventListener("scroll", this.listenerFunction);
  },
  destroyed() {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  methods: {
    listenerFunction() {
      if (!this.isSlide) {
        this.isSlide = true;
      }
      const nav = document.getElementById("nav");
      if (this.getScrollTop() >= 50) {
        nav.classList.add("scroll-header");
      } else {
        nav.classList.remove("scroll-header");
      }
    },
    getScrollTop() {
      var scroll_top = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
      } else if (document.body) {
        scroll_top = document.body.scrollTop;
      }
      return scroll_top;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.aa {
  height: 4000px;
}

.banner {
  width: 100%;
  height: 720px;
  position: relative;
  transition: height 0.6s;
  overflow: hidden;
  .banner-img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 1920px;
    left: 50%;
    margin-left: -960px;
    ~ .banner-small-img {
      opacity: 0;
      transition: opacity 0.6s;
    }
  }
}
.narrow {
  height: 360px !important;
}
.opaque {
  opacity: 1 !important;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.header {
  width: 100%;
}

.nav {
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1111;
  width: 100%;
  background-color: none;
  transition: background 0.4s;
}
.scroll-header {
  background: rgba(0, 0, 0, 0.5);
}
.nav__list {
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
}

// .nav__link {
//   text-transform: uppercase;
//   font-weight: var(--font-black);
//   transition: 0.4s;
// }

// .nav__list {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   row-gap: 1.5rem;
// }
// .container {
//   max-width: 968px;
//   margin-left: var(--mb-1-5);
//   margin-right: var(--mb-1-5);
// }
// .nav__menu {
//   position: fixed;
//   width: 100%;
//   background: red;
//   // top: -150%;
//   left: 0;
//   padding: 3.5rem 0;
//   transition: 0.4s;
//   z-index: 911;
//   border-radius: 0 0 1.5rem 1.5rem;
// }
</style>
