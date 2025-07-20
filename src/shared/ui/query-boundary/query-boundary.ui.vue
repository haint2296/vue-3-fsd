<script setup lang="ts" generic="T">
defineProps<{
  isLoading: boolean
  isError: boolean
  data: T
  error?: unknown
}>()

const slots = defineSlots<{
  default(props: { data: T }): any
}>()
</script>

<template>
  <div v-if="isLoading">Loading</div>
  <!-- <Error v-else-if="isError" :error="error" /> -->
  <slot v-else :data="data" />
</template>
