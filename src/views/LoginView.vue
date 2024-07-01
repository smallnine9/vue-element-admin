<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const router = useRouter()
const handleSubmit = async function () {
    try {
        const response = await axios.post('/api/login', {
            username: username.value,
            password: password.value
        });
        if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token);
            router.push('/dashboard');
        } else {
            console.log('error', response.data.message)
        }
    } catch (error) {
        console.error(error);
    }
}
</script>
<template>
    <div>
        <h1>登录</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="username" />
            </div>
            <div>
                <label for="password">密码</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <button>登录</button>
        </form>
    </div>
</template>
  
<style scoped>
/* 这里可以添加一些自定义样式 */
</style>
  