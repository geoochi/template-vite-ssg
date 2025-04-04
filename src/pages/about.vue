<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <p>About</p>
  <button @click="router.push('/')">button to Home</button>
</template>
