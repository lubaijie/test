<template>
  <div class="main-container">
    <!-- bav-bar -->
    <van-nav-bar class="nav" @click-left="back">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#000" />
      </template>
      <template #title>
        <span class="title-font">新增收货地址</span>
      </template>
    </van-nav-bar>
    <!-- 编辑收货地址 -->
    <van-address-edit
      class="edit-address"
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import area from '@/data/area.js'
import { addAddress } from '@/api/address.js'
import { Toast } from 'vant';

export default {
  data() {
    return {
      areaList: area,
      searchResult: [],
    };
  },
  methods: {
    onSave(content) {
      const data = {
        city: content.areaCode,
        cityName: content.city,
        defaultStatus: content.isDefault ? 1 : 0,
        detailAddress: content.addressDetail,
        latitude: '0',
        longitude: '0',
        name: content.name,
        phoneNumber: content.tel,
        postCode: content.postalCode,
        province: content.areaCode,
        provinceName: content.province,
        region: 0
        // id: 0
      }
      addAddress(data).then(res => {
        if(res.code === 0) {
          this.$router.push('/selectadd')
        } else {
          Toast(res.msg)
        }
      })
    },
    back() {
      this.$router.push('/selectadd')
    }
  },
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
.edit-address{
  margin-top: 46px;
  width: 100%;
  padding: 0;
}
</style>