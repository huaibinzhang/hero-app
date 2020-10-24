<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
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
            },
            heroId:''
        }
    },

    created(){
      const heroId = this.$route.params.id
      this.heroId = heroId
      this.loadHeroById(heroId);
    },
    methods:{
        async loadHeroById(id){
          // const { status,data } = await this.$http.get('/heroes/' + id)
          const { status,data } = await api.getHeroById(id)
          if (status === 200) {
            console.log(data);
            // this.hero.name = data.name
            // this.hero.gender = data.gender

            this.hero = data
          }
        },
        async handleSave(){
            const hero = this.hero
            console.log(hero.id);

            // 发送put请求,保存数据
            // const { status } = await this.$http.put('/heroes/' + this.heroId ,hero)
            const { status } = await api.updataHero(this.heroId,hero)
            if (status === 200) {
                this.$router.push('/hero-list')
            }else {
                alert('保存英雄失败')
            }
        }
    }
}
</script>