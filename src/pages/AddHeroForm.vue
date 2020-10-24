<template>
  <div>
    <h2 class="sub-header">添加新英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄姓名</label>
        <input type="text" class="form-control" placeholder="英雄姓名" v-model="hero.name" />
      </div>
      <div class="form-group">
        <label for="gerder">英雄性别</label>
        <input type="text" class="form-control" placeholder="英雄性别" v-model="hero.gender" />
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="handleSave">保存</button>
    </form>
  </div>
</template>

<script>
import api from '@/apis/api'

export default {
    data() {
        // 收集表单数据
        return {
            hero:{
                name:'',
                gender:''
            }
        }
    },
    methods:{
        async handleSave(){
            const hero = this.hero
            // 发送post请求,保存数据
            // const { status } = await this.$http.post('/heroes',hero)
            const { status } = await api.createHero(hero)
            if (status === 201) {
                this.$router.push('/hero-list')
            }else {
                alert('保存英雄失败')
            }
        }
    }
}
</script>