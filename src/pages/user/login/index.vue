<script setup>
import CustomInput from '@/components/Input/index.vue';
import MeInput from '@/components/MeInput/index.vue';
</script>
<template>
    <div class="flex flex-col h-full">
        <div class="h-80px ml-40px"> vue-element-admin </div>
        <div class="login-page-content flex justify-center h-full items-center">
            <div class="left-picture text-center flex-1  flex-grow-2">
            </div>
            <div class="right-form flex-1 pl-60px pr-60px pt-160px pb-160px">
                <h2 class="hidden lg:block">欢迎回来</h2>
                <p>为了您的企业隐私安全，请使用邮箱和密码登录</p>
                <el-form label-width="auto">
                    <el-form-item>
                        <custom-input />
                    </el-form-item>
                    <el-form-item>
                        <me-input />
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="h-80px ml-40px"> footer </div>
    </div>
</template>

<style>
.login-page-content {
    min-height: 512px;
}


.left-picture {
    width: 360px;
    background-image: url('@/assets/2965738.jpg');
    height: 100%;
    background-size: 90%;
    background-position: center;
    background-repeat: no-repeat;
}

</style>