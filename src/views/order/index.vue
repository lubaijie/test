<template>
  <div class="main-container">
    <!-- bav-bar -->
    <van-nav-bar class="nav">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#fff" />
      </template>
      <template #title>
        <span class="title-font">提交订单</span>
      </template>
    </van-nav-bar>
    <!-- 新增收货地址 -->
    <van-cell class="default-cell" style="margin:46px 0px 15px 0px;" icon="location-o" :title="address === null ? '新增收货地址' : address.address" is-link url="/selectadd" />
    <!-- 订单 -->
    <div class="order" v-for="(item,index) in orders" :key="index">
      <van-cell class="default-cell" icon="shop-o" :title="item.shop" />
      <van-row gutter="20" class="order-goods" v-for="(goods,goodsIndex) in item.goods" :key="goodsIndex">
        <van-col span="6">
          <img class="order-goods-img" src="/img/goods.jpg" />
        </van-col>
        <van-col span="18">
          <div class="order-goods-title">{{ goods.name }}</div>
          <div style="margin-top: 15px;">
            <span class="order-goods-price">
              <span style="font-size: x-small;">￥</span>
              {{ goods.price }}
            </span>
            <span class="order-goods-count">
              <span style="font-size: x-small;">X</span>
              {{goods.count}}
            </span>
          </div>
        </van-col>
      </van-row>
      <van-cell-group>
        <van-field
          readonly 
          label="优惠券："
          right-icon="arrow"
          placeholder="暂无可用"
        />
        <van-field
          v-model="item.note"
          label="店铺备注："
          placeholder="选填，给商家留言"
        />
      </van-cell-group>
    </div>
    <!-- 结算 -->
    <div style="margin: 15px 0 80px 0;">
      <van-row class="settle-row">
        <van-col span="8" class="settle-row-title">商品总额：</van-col>
        <van-col span="16" class="settle-row-value">
          <span style="font-size: x-small;">￥</span>20.00
        </van-col>
      </van-row>
      <van-row class="settle-row">
        <van-col span="8" class="settle-row-title">运费：</van-col>
        <van-col span="16" class="settle-row-value">
          <span style="font-size: x-small;">￥</span>0.5
        </van-col>
      </van-row>
      <van-row class="settle-row">
        <van-col span="8" class="settle-row-title">优惠金额：</van-col>
        <van-col span="16" class="settle-row-value">
          <span style="font-size: x-small;">￥</span>0.00
        </van-col>
      </van-row>
    </div>
    <!-- 提交订单 -->
    <div class="submit-container">
      <div style="position: relative; left: 20%;">
        <div class="submit-text">
          合计：
          <span class="submit-text-value">
            <span style="font-size: x-small;">￥</span>20.00
          </span>
        </div>
        <van-button class="submit-but" round type="info">提交订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultAddress } from '@/api/address'

export default {
  name: 'order',
  data() {
    return {
      address: this.$store.state.address,
      orders: [
        {
          shop: '亚米商城官方旗舰店',
          goods: [
            { name: '罗技（G）G502 HERO游戏鼠标 英雄联盟限量版 游戏鼠标 LOL 【测试】【测试】【测试】【测试】【测试】【测试】【测试】', price: '10.00', count: '1' },
            { name: '双飞燕（G）G504 HERO游戏鼠标 吃鸡限量版 游戏鼠标 LOL 【测试】', price: '20.00', count: '2' }
          ],
          note: ''
        },
        {
          shop: '罗技官方旗舰店',
          goods: [
            { name: '罗技（G）G502 HERO游戏鼠标 英雄联盟限量版 游戏鼠标 LOL 【测试】', price: '20.00', count: '1' },
          ],
          note: ''
        }
      ]
    }
  },
  mounted() {
    this.getAddress()
    console.log(this.$store.state.address)
  },
  methods: {
    getAddress() {
      defaultAddress().then(res => {
        console.log(res)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.nav{
  background-color: rgb(255, 146, 33);
  width: 100%;
  position: fixed;
  top: 0px;
}
.title-font{
  color: #fff;
  font-weight: bold;
}
.order{
  margin: 5px 0;
  &-goods{
    margin: 2px 0;
    background-color: #fff;
    padding: 10px 5px;
    height: 80px;
    &-img{
      height: 80px;
      width: 80px;
    }
    &-title{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: left;
      font-weight: bold;
      font-size: medium;
    }
    &-price{
      color: #ff9221;
      float: left;
      font-weight: 600;
    }
    &-count{
      margin-right: 10px;
      float: right;
      color: #969799;
      font-weight: 600;
      font-size: medium;
    }
  }
}
.settle-row{
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  &-title{
    font-weight: 600;
    text-align: left;
    padding-left: 20px;
  }
  &-value{
    color: #ff9221;
    text-align: right;
    padding-right: 20px;
    font-weight: 600;
  }
}
.submit-container{
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  height: 50px;
  width: 100%;
  line-height: 50px;
  box-shadow: 2px -4px 5px #88888830;
  .submit-text{
    font-weight: bold;
    display: inline-block;
    &-value{
      color: #ff9221;
      text-align: right;
      padding-right: 20px;
      font-weight: 600;
    }
  }
  .submit-but{
    background-color: #ff9221;
    border: none;
    height: 35px;
    font-size: medium;
  }
}
</style>