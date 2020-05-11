<template>
  <div class="main-container">
    <!-- bav-bar -->
    <van-nav-bar class="nav" @click-left="back">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#000" />
      </template>
      <template #title>
        <span class="title-font">收货地址</span>
      </template>
    </van-nav-bar>
    <!-- 地址列表 -->
    <div v-if="dataList.length === 0" class="address-none">您还没有收货地址</div>
    <div v-else>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    <!-- 新增收货地址 -->
    <van-button class="add-but" type="primary" size="large" @click="add">新增收货地址</van-button>
  </div>
</template>

<script>
import { getAddressList } from '@/api/address'
export default {
  name: 'SelectAddress',
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    /**
     * 获取收货地址
     */
    getData() {
      getAddressList().then(res => {
        if (res.code === 0) {
          this.dataList = res.data
        } else {
          this.dataList = []
        }
      })
    },
    /**
     * 新增收货地址
     */
    add() {
      this.$router.push('/addaddress')
    },
    back() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  width: 100%;
  position: fixed;
  top: 0px;
}
.title-font{
  color: #000;
  font-weight: bold;
}
.address-none{
  padding-top: 200px
}
.add-but{
  background-color: #ff9221;
  border: none;
  position: fixed;
  bottom: 0px;
  left: 0;
}
</style>