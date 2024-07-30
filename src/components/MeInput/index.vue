<template>
    <div class="input-container">
        <el-input v-model="inputValue" @focus="isFocused = true" @blur="handleBlur" placeholder=" " size="large">
        </el-input>
        <label :class="['floating-label', 'absolute', { 'is-floating': isFocused || inputValue }]">
            Your Placeholder
        </label>
    </div>
</template>

<script>
import { ref } from 'vue';
import { ElInput } from 'element-plus';

export default {
    components: {
        ElInput,
    },
    setup() {
        const inputValue = ref('');
        const isFocused = ref(false);

        const handleBlur = () => {
            if (!inputValue.value) {
                isFocused.value = false;
            }
        };

        return {
            inputValue,
            isFocused,
            handleBlur,
        };
    },
};
</script>

<style scoped>
.input-container {
    position: relative;
    margin-top: 20px;
}

.floating-label {
    position: absolute;
    transition: all 0.4s ease;
    color: #999;
    pointer-events: none;
    left: 10px;
}

.is-floating {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: #333;
}
</style>