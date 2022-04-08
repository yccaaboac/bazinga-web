<template>
  <div class="comment-list">
    <div class="comment-item">
      <div class="comment-author">
        <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <div class="author-comment">
          <div class="author-info">
            <span>shelby</span><span>2021-01-02</span>
          </div>
          <div>写的很好赞写的很好赞</div>
        </div>
      </div>
      <div class="replay-list">
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div><span>shelby</span><span>2021-01-02</span></div>
            <div>写的很好赞</div>
            <div class="action-bar">回应</div>
            <div class="replay-edit">
              <textarea>asdasd</textarea>
            </div>
            <div class="submit-replay"><a href="javascript:;">发送</a></div>
          </div>
        </div>
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div><span>shelby</span><span>2021-01-02</span></div>
            <div>写的很好赞写的很好赞写的很好赞</div>
            <div class="action-bar">回应</div>
          </div>
        </div>
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div><span>shelby</span><span>2021-01-02</span></div>
            <div>写的很好赞</div>
            <div class="action-bar">回应</div>
          </div>
        </div>
        <div>展开更多2条回应</div>
      </div>
    </div>

    <div class="comment-item">
      <div class="comment-author">
        <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <div class="author-comment">
          <div class="author-info">
            <span>shelby</span><span>2021-01-02</span>
          </div>
          <div>写的很好赞写的很好赞写的很好赞写的很好赞</div>
        </div>
      </div>
      <div class="replay-list">
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div><span>shelby</span><span>2021-01-02</span></div>
            <div>写的很好赞写的很好赞</div>
            <div class="action-bar">回应</div>
          </div>
        </div>
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div><span>shelby</span><span>2021-01-02</span></div>
            <div>写的很好赞</div>
            <div class="action-bar">回应</div>
          </div>
        </div>
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div><span>shelby</span><span>2021-01-02</span></div>
            <div>写的很好赞写的很好赞</div>
            <div class="action-bar">回应</div>
          </div>
        </div>
        <div>展开更多2条回应</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Comment",
};
</script>
<style scoped>
.comment-list {
  border-top: 1px solid var(--themeBgColor2);
  padding-top: 20px;
  height: 1000px;
}
.comment-item {
  margin-bottom: 1rem;
}
.author-avatar {
  margin-right: 20px;
  width: 50px;
  height: 50px;
}
.replay-list .author-avatar {
  width: 25px;
  height: 25px;
}
textarea {
  height: 100px;
  width: 100%;
  background: var(--themeBgColor2);
}
.comment-author {
  display: flex;
}
.author-comment {
  flex: 1;
}
.replay-list {
  padding-left: 70px;
}
.author-info {
  background: var(--themeBgColor2);
}
.action-bar {
  color: #bbb;
  font-size: 13px;
  text-align: right;
  min-height: 21px;
}
.submit-replay {
  text-align: right;
}
</style>