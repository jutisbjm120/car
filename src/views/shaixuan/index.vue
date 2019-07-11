<template>
  <div>
    <div>
      <heade txt="车型筛选">
        <img src="./image/返回按钮.png" slot="left" alt class="leftImg" />
      </heade>
      <div></div>
      <div class="navbar">
        <ul>
          <li>
            <span>全部</span>
          </li>
          <li>
            <span>经济型</span>
            <span></span>
          </li>
          <li>
            <span>商务型</span>
            <span></span>
          </li>
          <li>
            <span>豪华型</span>
            <span></span>
          </li>
          <li>
            <span>筛选</span>
            <span></span>
          </li>
          
        </ul>
      </div>
      <div class="wenxin">
        <img src="./image/组 2@3x.png" alt="">
        <span>温馨提示:2018年1月起郑州实行工作日7时至至8日起平驾租车为你开启新的吕航</span>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import heade from "@/components/header/header.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    heade
  }
};
</script>

<style scoped lang="less">
.wenxin{
  height: .48rem;
  line-height: .48rem;
  font-size: .20rem;
  overflow: hidden;
  span{
    float: left;
    width: 4.72rem;
    overflow: hidden;
  }
  img{
    float: left;
  }
}
.navbar ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
  height: 0.84rem;
  border: 0.02rem solid #eee;
  padding: 0 .49rem 0 0.32rem;
  box-shadow: 0 7px 18px -11px #d8d8d8 inset;
  li{
    font-size: .26rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 20%;
    color: #333;
    span:nth-of-type(2){
      height: 0;
      width: 0;
      border: .08rem solid transparent;
      border-top-color: #676767;
    }
  }
}
</style>
