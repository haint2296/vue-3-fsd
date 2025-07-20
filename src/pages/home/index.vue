<template>
  <div>
    <QueryBoundary
      :is-loading="isPending"
      :is-error="!!error"
      :error="error"
      :data="data ?? []"
    >
      <template #default="{ data }">
        <div
          v-for="item in data"
          :key="item.id"
        >
          <div>{{ item.name }}</div>
        </div>
        <button
          type="button"
          @click="handleRefetch"
        >
          Refetch
        </button>
      </template>
    </QueryBoundary>

    {{ isFetching }}
  </div>
</template>

<script setup lang="ts">
import QueryBoundary from '@/shared/ui/query-boundary'
import { useGetUsers } from '@/shared/services/api/hooks/users/users'

const { data, isPending, error, refetch, isFetching } = useGetUsers()

function handleRefetch() {
  console.log(isFetching.value)
  refetch()
  console.log(isFetching.value)
}
</script>
