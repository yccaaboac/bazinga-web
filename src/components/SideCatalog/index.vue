<template>
  <div class="side-catalog">
    <div
      v-for="item in catalogList"
      :key="item.ref"
      :style="{ 'padding-left': getTitleMargin(item.level) }"
      class="side-catalog__item"
      @click="anchorActive(item.ref)"
      :class="{
        'side-catalog__item--child': isChildren(item.level),
      }"
    >
      <i
        class="side-catalog__item-icon"
        :class="{
          'side-catalog__item-icon--active': active === item.ref,
          'side-catalog__item-icon--child': isChildren(item.level),
        }"
      />
      <span
        class="side-catalog__item-title"
        :class="[{ 'side-catalog__item-title--active': active === item.ref }]"
        :title="item.title"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>
<script>
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
export default {
  name: "SideCatalog",
  props: {
    //是否开启dom监听,dom有变化主动更新各个ref的offsetTop值
    openDomWatch: {
      type: Boolean,
      default: false,
    },
    // 绑定scroll事件的dom的class
    // 该元素必须为定位元素或者最近的 table,td,th,body
    scrollElementSelector: {
      type: String,
      default: "",
    },
    containerElementSelector: {
      type: String,
      required: true,
      // default: ""
    },
    headList: {
      type: Array,
      default() {
        return ["h2", "h3", "h4"];
      },
    },
  },
  data() {
    return {
      active: "",
      refTopMap: {},
      refTopList: [],
      catalogList: [],
      reverseCatalogList: [],
      isBeforeDestroy: false,
      observer: null,
      isClick: false,
    };
  },
  async mounted() {
    await this.setCatalogList();
    this.initActive();
    // 函数节流指某个函数在一定时间间隔内（50毫秒）只执行一次，在这50毫秒 无视后来产生的函数调用请求，也不会延长时间间隔，50毫秒间隔结束后第一次遇到新的函数调用会触发执行
    // window.addEventListener("scroll", throttle(this.scrollHandle, 1));
    window.addEventListener("scroll", throttle(this.scrollHandle, 1));
    setTimeout(() => {
      this.setWatcher();
    }, 50);
  },
  beforeDestroy() {
    if (this.openDomWatch) {
      // beforeDestroy时,解绑dom监听之前,偶尔会触发observer监听的setCatalogList函数
      // 导致报错,需要用变量控制
      this.isBeforeDestroy = true;
      // 解绑dom监听
      this.observer.disconnect();
    }
    window.removeEventListener("scroll", this.scrollHandle);
  },
  methods: {
    // 点击title
    anchorActive(ref) {
      debugger;
      if (this.active === ref) return;
      // 点击title 会触发scroll事件,在内容高度不够的情况下点击的title和active的title会有出入
      // 所以点击的时候先return掉scroll事件
      // this.isClick = true;

      document.documentElement.scrollTop = this.refTopMap[ref] + 545;
      // setTimeout(() => {
      //   this.isClick = false;
      // }, 50);
      // this.active = ref;
    },
    // 获取ref的dom
    getRefDom(_ref) {
      /**
       * 获取ref的dom元素有以下四种情况
       * 1. ref在循环中, ref是dom元素 => ref[0]
       * 2. ref在循环中, ref是vue实例 => ref[0].$el
       * 3. ref不在循环中, ref是dom元素 => ref
       * 4. ref不在循环中, ref不是vue实例 => ref.$el
       */
      const ref = this.$parent.$refs[_ref];
      if (Array.isArray(ref)) {
        return this.vueOrDom(ref[0]);
      }
      return this.vueOrDom(ref);
    },
    // ref 是vue还是dom
    vueOrDom(ref) {
      if (ref instanceof HTMLElement) return ref;
      if (ref._isVue) return ref.$el;
    },
    // 获取ref offsetTop数组
    setCatalogList() {
      console.log("setCatalogList方法");
      if (this.isBeforeDestroy) return;
      this.catalogForDom();
      this.reverseCatalogList = JSON.parse(
        JSON.stringify(this.catalogList)
      ).reverse();
      console.log("this.reverseCatalogList", this.reverseCatalogList);
    },
    // scroll事件
    scrollHandle() {
      // if (this.isClick) return;

      const scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 545) {
        document.querySelector(".side-catalog").classList.add("aaa");
      } else {
        document.querySelector(".side-catalog").classList.remove("aaa");
      }
      console.log(this.reverseCatalogList, "this.reverseCatalogList");
      this.reverseCatalogList.some((item) => {
        if (scrollTop >= item.offsetTop + 466) {
          this.active = item.ref;
          return true;
        }
        return false;
      });
    },
    initActive() {
      if (!this.catalogList.length) return;
      this.active = this.catalogList[0].ref;
    },
    getTitleMargin(level) {
      return level ? `${parseInt(level, 10) * 15}px` : "15px";
    },
    isChildren(level) {
      return level && level > 1;
    },
    setWatcher() {
      console.log("setWatcher方法");
      if (this.openDomWatch) {
        //创建一个观察器实例并传入回调函数，当观察到变动时执行回调函数debounce(this.setCatalogList, 200)
        this.observer = new MutationObserver(
          debounce(this.setCatalogList, 200)
        );
        console.log(document.querySelector(this.containerElementSelector));
        //观察目标节点
        this.observer.observe(
          //选择需要观察变动的节点
          document.querySelector(this.containerElementSelector),
          //观察器的配置（需要观察什么变动）
          {
            childList: true,
            subtree: true,
            attributes: true,
          }
        );
      }
    },
    catalogForDom() {
      console.log("catalogForDom方法");
      let headlevel = {};
      debugger;
      this.headList.forEach((item, index) => {
        headlevel[item] = index + 1;
      });
      console.log(headlevel, "headlevel");
      const childrenList = Array.from(
        document.querySelectorAll(`${this.containerElementSelector}>*`)
      );
      console.log(
        document.querySelectorAll(`${this.containerElementSelector}>*`),
        "childrenList"
      );
      childrenList.forEach((item, index) => {
        console.log("item", item);
        const nodeName = item.nodeName.toLowerCase();
        if (this.headList.includes(nodeName)) {
          this.catalogList.push({
            ref: `${item.nodeName}-${index}`,
            title: item.innerText,
            offsetTop: item.offsetTop,
            level: headlevel[nodeName],
          });
          this.refTopMap[`${item.nodeName}-${index}`] = item.offsetTop;
        }
      });
      console.log("this.catalogList", this.catalogList);
      console.log("this.refTopMap:", this.refTopMap);
    },
  },
};
</script>
<style scoped lang="scss" src="./main.scss"></style>

