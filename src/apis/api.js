import axios from 'axios'

// 全局配置URL前导路径
axios.defaults.baseURL = 'http://localhost:3000'

async function getHeroList() {
    const res = await axios.get('/heroes')
    return res
}

async function removeHeroById(id) {
    const res = await axios.delete('/heroes/' + id)
    return res
}

async function getHeroById(id) {
    const res = await axios.get('/heroes/' + id)
    return res
}

async function updataHero(id, hero) {
    const res = await axios.put(`/heroes/${id}`, hero)
    return res
}

async function createHero(hero) {
    const res = await axios.post('/heroes', hero)
    return res
}

export default {
    getHeroList,
    removeHeroById,
    getHeroById,
    updataHero,
    createHero
}