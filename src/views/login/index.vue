<template>
  <div class="login-container">
    <el-card class="login-form">
      <h2 class="title">欢迎登录模版系统</h2>
      <el-form
        class="container"
        ref="formContainer"
        :model="form"
        label-position="left"
        label-width="60px"
      >
        <el-form-item class="item" label="用户名">
          <el-input v-model="form.name" type="text" @keyup.enter="onSubmit"></el-input>
        </el-form-item>
        <el-form-item class="item" label="密码">
          <el-input v-model="form.password" type="password" @keyup.enter="onSubmit"></el-input>
        </el-form-item>
        <el-form-item class="item" label="验证码">
          <el-input v-model="form.validateInfo" type="text" @keyup.enter="onSubmit"></el-input>
        </el-form-item>
        <div class="button-container">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({})
  export default class extends Vue {
    form = {
      name: 'test',
      password: '',
      validateInfo: ''
    }

    async onSubmit() {
      await this.$store.dispatch('UserModel/login', this.form)
      this.$router.push('/')
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    display: flex;
    height: 100%;
  }
  .login-form {
    margin: auto;
    width: 480px;
    height: 360px;

    .title {
      margin: 0 0 20px 0;
      text-align: center;
    }

    .container {
      display: flex;
      flex-direction: column;

      .item {
        margin-bottom: 48px;
      }

      .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
