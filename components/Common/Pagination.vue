<template>
  <VueAwesomePaginate
    v-if="total > perPage"
    v-model="currentPage"
    active-page-class="btn-active"
    disabled-back-button-class="dd"
    :total-items="total"
    :items-per-page="perPage"
    :max-pages-shown="maxPageShow"
    :back-button-class="`${currentPage === 1 ? 'disable' : ''} back-button`"
    :next-button-class="`${
      currentPage === Math.ceil(total / perPage) ? 'disable' : ''
    } next-button`"
    @click="onClickHandler"
  >
    <template #prev-button>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 5L7.5 10L12.5 15"
          stroke="#969696"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
    <template #next-button>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 5L12.5 10L7.5 15"
          stroke="#969696"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </VueAwesomePaginate>
</template>
<script setup lang="ts">
import { VueAwesomePaginate } from 'vue-awesome-paginate'

interface Props {
  total?: number
  perPage?: number
  maxPageShow?: number
}
const route = useRoute()

withDefaults(defineProps<Props>(), {
  total: 24,
  perPage: 12,
  maxPageShow: 3,
})
const emit = defineEmits(['handle-page'])

function onClickHandler(page: number) {
  useUpdateRouteQuery('page', page)
  setTimeout(() => {
    emit('handle-page', page)
  }, 0)
}
const currentPage = ref(+route.query?.page || 1)
</script>
<style>
.pagination-container {
  display: flex;
  column-gap: 4px;
}

.paginate-buttons {
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: #202233;
}

.paginate-buttons:hover {
  background: #0e1020;
}

.btn-active,
.btn-active:hover {
  background: #e64545;
}

.back-button.disable,
.next-button.disable {
  opacity: 0.5;
  pointer-events: none;
}

/*.back-button,*/
/*.next-button {*/
/*  background-color: #f8f9fa;*/
/*}*/
</style>
