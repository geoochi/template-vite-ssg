<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'
import { useHead } from '@unhead/vue'
import '@/global.css'

const isDark = useDark()

useHead({
  meta: [{ name: 'description', content: 'template - vite@7 - vite-ssg@28 - shadcn-vue@2' }],
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-4">
    <Moon v-if="isDark" @click="isDark = !isDark" />
    <Sun v-else @click="isDark = !isDark" />
    <RouterView />
  </div>
</template>
