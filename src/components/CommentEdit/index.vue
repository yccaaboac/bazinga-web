<template>
  <div class="comment-edit">
    <div class="edit">
      <textarea placeholder="发布你的评论" style="height: 24px"></textarea>
    </div>
    <div class="woo-box-flex woo-box-alignCenter">
      <div class="Composer_iconbox2_l4gXj">
        <div class="woo-box-item-inlineBlock Composer_iconitem_2JJIh">
          <div
            class="wbpro-iconbed woo-box-flex woo-box-alignCenter woo-box-justifyCenter"
          >
            <i class="fas fa-clock ai"></i>
          </div>
        </div>
      </div>
      <div class="woo-box-item-flex" style="align-self: center">
        <label class="woo-checkbox-main Composer_check_1EUSi"
          ><input type="checkbox" class="woo-checkbox-input" /><span
            class="woo-checkbox-shadow"
          ></span
          ><span class="woo-checkbox-text">同时转发</span></label
        >
      </div>
      <button
        class="disabled woo-button-main woo-button-flat woo-button-primary woo-button-m woo-button-round Composer_btn_2XFOD"
        disabled="disabled"
      >
        <span class="woo-button-wrap"
          ><span class="woo-button-content">评论</span></span
        >
      </button>
    </div>
    <!-- <div class="content" contenteditable="true"></div> -->
    <div class="action">
      <div>
        <a class="clickEmoji" href="javascript:;" @click.stop="click">
          <img class="img-emoji" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        </a>
        <!-- <input type="file" name="上传文件">
            <img class="img-emoji" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          </input> -->
        <span class="form-group">
          <label for="id_avator">
            <span class="clickEmoji">
              <img class="img-emoji" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
            </span>
          </label>
          <input type="file" name="avator" id="id_avator" hidden />
        </span>
      </div>
      <input data-v-7eb2bc79="" type="submit" value="发送x" class="btn" />
    </div>
    <div
      class="emoji-container"
      :class="{ 'hide-emoji-panel': !showEmojiPlane }"
    >
      <div class="category">
        <a href="javascript:;">
          <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" /> </a
        ><a href="javascript:;">
          <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        </a>
      </div>
      <div class="bar"></div>
      <div class="emoji">
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <img src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentEdit",
  data() {
    return {
      showEmojiPlane: false,
    };
  },
  watch: {
    showEmojiPlane(value) {
      console.log(value, "====");
      if (value) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    },
  },
  methods: {
    click() {
      this.showEmojiPlane = !this.showEmojiPlane;
    },
    close() {
      this.showEmojiPlane = false;
    },
  },
};
</script>

<style scoped>
.hide-emoji-panel {
  display: none;
}
.comment-edit {
  margin-top: 20px;
  width: 100%;
}
.content {
  height: 150px;
  background: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
}
.action {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.clickEmoji {
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  width: 26px;
  height: 26px;
}
.bar {
  width: 100%;
  height: 1px;
  background: #eee;
}
.emoji-container {
  /* display: none; */
  position: absolute;
  width: 465px;
  border-radius: 5px;
  border: #e9e9e9 1px solid;
  background: var(--themeBgColor1);
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
}
.category {
  display: flex;
  margin: 2px 12px;
  column-gap: 4px;
}
.category img {
  vertical-align: middle;
}
.emoji {
  max-height: 266px;
  overflow-y: scroll;
  height: 266px;
  margin: 12px 2px 12px 12px;
}
img {
  display: inline-block;
  border-radius: 50%;
  width: 38px;
  height: 38px;
}
.btn {
  display: inline-block;
  color: #fff;
  background: #f79f1f;
  border-radius: 2px;
  cursor: pointer;
  height: 26px;
  width: 50px;
  line-height: 26px;
}
.img-emoji {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.edit {
  padding: 6px 11px;
  background: #f0f1f4;
  border: 1px solid #f0f1f4;
  border-radius: 8px;
  line-height: 0;
}
.edit textarea {
  line-height: 24px;
  font-size: 14px;
  width: 100%;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  outline: none;
  min-height: 24px;
  max-height: 456px;
  resize: none;
}

.Composer_mar1_ujs0j {
  margin: 10px 0 0;
}
.woo-box-alignCenter {
  align-items: center;
  display: flex;
}
.woo-box-item-flex {
  flex: 1;
  box-sizing: border-box;
}

.wbpro-iconbed {
  position: relative;
  width: 34px;
  height: 34px;
  cursor: pointer;
  line-height: 0;
}

.woo-box-justifyCenter {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.woo-box-alignCenter {
  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
}
.woo-box-flex {
  margin: 0 14px 0 0;
  display: flex;
}
.Composer_check_1EUSi {
  position: relative;
  top: -3px;
  margin-left: 8px;
  font-size: 16px;
}
.woo-box-item-flex,
.woo-box-item-inlineBlock {
  box-sizing: border-box;
}
.woo-box-item-flex {
  align-self: stretch;
  flex: 1;
}
.woo-checkbox-input {
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.woo-checkbox-text {
  margin-left: 5px;
  display: inline-block;
  font-size: 0.875em;
  line-height: 1;
  vertical-align: middle;
}

body .woo-checkbox-shadow {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  color: #838383;
}
.woo-checkbox-shadow {
  border: 1px solid;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  vertical-align: middle;
}
input[type="checkbox" i] {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}
</style>