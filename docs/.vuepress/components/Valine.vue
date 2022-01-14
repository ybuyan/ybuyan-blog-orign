<template>
  <section class="main info-content" style="padding-top:1rem;margin-top:2rem;">
    <div style="padding: 0 1rem 0 1rem">
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors" data-flag-title="Your Article Title">
            <em class="post-meta-item-text">阅读量： </em>
            <i class="leancloud-visitors-count"></i>
        </span>
    </div>
    <h3 style="padding: 1rem 1rem 0 1rem">
        <a href="javascript:;"></a>
        评 论：
    </h3>
    <div style="padding: 1rem 1rem 0 1rem" id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
      this.window = window
      window.AV = require('leancloud-storage')
      setTimeout(() => {
        document.getElementsByClassName('vsubmit vbtn')[0].style.color = "#fff";
        document.getElementsByClassName('vsubmit vbtn')[0].style.backgroundColor = "#409eff";
        // console.log(document.getElementsByClassName('vpower txt-right')[0]);
        document.getElementsByClassName('vpower txt-right')[0].style.visibility = "hidden";
      })
    }

    new Valine({
      el: '#vcomments',
      appId: 'XKENEIOMGTPY4DA3b8EPlutY-gzGzoHsz',// your appId
      appKey: '0AvQTmoPac5OqGjEGW88LTxs', // your appKey
      path: window.location.pathname,
      visitor: true,
      avatar: 'mp',
      placeholder: 'write here',
      recordIP: true,
      enableQQ: true,
      pageSize: 10
    });
  },
  beforeDestroy: function() {

  }
}
</script>

<style lang="stylus" scoped>
.info-content
  border-radius 1rem
  box-shadow 0px 0px 8px $shadowColor
  background $whiteColor
  transition all .5s ease-in-out
  @media (prefers-color-scheme: dark)
    box-shadow 0px 0px 8px $shadowDarkColor
    background $whiteDarkColor
  @media print
    box-shadow none
</style>