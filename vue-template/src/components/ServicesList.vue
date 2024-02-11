<template>
  <ul>
      <li v-for="service in services" :key="service.id">
        <span>{{ service.name + ` ${service.price ? '- Цена: ' + service.price : ''}` }}</span>
        <ServicesList v-if="service.children" :services="service.children" />
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: "ServicesList",
  props: {
    services: {
      type: Array<{
        id: number;
        head: number | null;
        name: string;
        node: number;
        price: number;
        sorthead: number;
        children: any[]
      }>
    }
  }
})

</script>

<style module>

</style>