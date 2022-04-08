<template>
  <span
    class="tag"
    :style="{ backgroundColor: backgroundColor, height: height }"
    >{{ text }}</span
  >
</template>
<script>
export default {
  name: "Tag",
  props: {
    text: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "20px",
    },
    backgroundColor: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.tag {
  display: inline-block;
  line-height: 19px;
  padding: 0 5px;
  background-color: #40a0ff13;
  border-radius: 4px;
  border: solid #409eff 1px;
  cursor: pointer;
  color: #409eff;
  font-size: 12px;
}
</style>