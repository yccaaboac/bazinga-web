<template>
  <el-carousel trigger="click" height="310px">
    <el-carousel-item v-for="(item, index) in slideList" :key="index">
      <img
        style="width: 100%; height: 100%; object-fit: cover; cursor: pointer"
        :src="item"
        alt=""
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      slideList: [],
    };
  },
  created() {
    let content = [
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1Z92R1392462X-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641571581&t=30c53b58ccc95e8a98f422be9807de2f",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641572129&t=2c4ac4ec170d501dac0b52316f8b1b1a",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100220060CY5-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641572141&t=2fb89bf5fb79b785a3edc5d628a61fa2",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F29%2F20140329145413_hw4HA.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641572927&t=9d24361d9b2fc21cc80301939930f59a",
    ];
    this.slideList = content;
  },
  mounted() {},
  methods: {
    initHome() {},
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  // font-size: 14px;
  opacity: 0.75;
  // line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>