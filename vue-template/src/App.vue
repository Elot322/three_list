<template>
  <ServicesList 
    :services="list"/>
</template>

<script lang="ts">
import type { ListType } from './index.d'

import { defineComponent, onBeforeMount, ref } from 'vue';
import { getServices } from './services/get-services'
import { responseToListModel } from './adapters/response-to-list-model'

import ServicesList from './components/ServicesList.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    ServicesList
  },
  setup() {
    const list = ref<ListType>()

    //До того в страницу замаунтится компонент получим данные и отформатируем их в нужный формат
    onBeforeMount(async () => {
      list.value = responseToListModel(await getServices())
    })

    return {
      list
    }
  }
})
</script>
