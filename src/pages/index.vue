<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

useHead({ title: 'home page' })
const count = ref(0)
</script>

<template>
  <p>Home Page</p>
  <RouterLink to="/about" class="underline">link to about</RouterLink>
  <Button @click="count++">count: {{ count }}</Button>
</template>
