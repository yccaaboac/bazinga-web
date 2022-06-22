<template>
  <div class="comment-list">
    <div class="comment-item">
      <div class="comment-author">
        <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
        <div class="author-comment">
          <div class="author-info">
            <span>Shelby</span><span class="time">2009-02-24 17:02:27</span>
          </div>
          <div class="comment-content">写的很好赞写的很好赞</div>
          <div class="comment-action-bar">
            <a href="javascript:;">回应</a>
            <a href="javascript:;">投诉</a>
          </div>
        </div>
      </div>
      <div class="replay-list">
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div>
              <span>邱定原</span><span class="time">2009-02-24 17:02:27</span>
            </div>
            <div class="comment-content">写的很好赞</div>
            <div class="comment-action-bar">
              <a href="javascript:;">回应</a>
              <a href="javascript:;">投诉</a>
            </div>
          </div>
        </div>
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div>
              <span>Clay</span><span class="time">2009-02-24 17:02:27</span>
            </div>
            <div class="comment-content">写的很好赞</div>
            <div class="comment-action-bar">
              <a href="javascript:;">回应</a>
              <a href="javascript:;">投诉</a>
            </div>
          </div>
        </div>
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div>
              <span>shelby</span><span class="time">2009-02-24 17:02:27</span>
            </div>
            <div class="comment-content">写的很好赞</div>
            <div class="comment-action-bar">
              <a href="javascript:;">回应</a>
              <a href="javascript:;">投诉</a>
            </div>
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
            <span>Shelby</span><span class="time">2009-02-24 17:02:27</span>
          </div>
          <div class="comment-content">写的很好赞写的很好赞</div>
          <div class="comment-action-bar">
            <a href="javascript:;">回应</a>
            <a href="javascript:;">投诉</a>
          </div>
        </div>
      </div>
      <div class="replay-list">
        <div class="comment-author">
          <img class="author-avatar" src="./imgs/buDT4YS6zUMfHst.jpg" alt="" />
          <div class="author-comment">
            <div>
              <span>shelby</span><span class="time">2009-02-24 17:02:27</span>
            </div>
            <div class="comment-content">写的很好赞</div>
            <div class="comment-action-bar">
              <a href="javascript:;">回应</a>
              <a href="javascript:;">投诉</a>
            </div>
          </div>
        </div>
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
  margin-right: 10px;
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
  padding-top: 5px;
}
.author-comment {
  flex: 1;
}
.replay-list {
  padding-left: 70px;
}
.author-info {
  padding: 3px 5px;
  margin-bottom: 5px;
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
.time {
  padding-left: 8px;
  font-size: 12px;
  color: #999;
}
.comment-content {
  padding: 5px 0;
}
.comment-action-bar {
  color: #bbb;
  font-size: 13px;
  text-align: right;
  min-height: 21px;
}
.comment-action-bar a {
  display: inline;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
</style>