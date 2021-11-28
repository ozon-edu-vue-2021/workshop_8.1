<template>
  <div>
    <div
        v-for="pet in pets"
        :key="pet.id"
    >
      {{pet.name}} - {{pet.status}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {petService} from "@/api/api";
import {Pet} from "@/api/petsApi";

export default Vue.extend({
  name: 'Pets',
  data() {
    return {
      pets: [] as Array<Pet>
    }
  },
  async created() {
    const response = await petService.findPetsByStatus({
      status: ['pending']
    })
    this.pets = response.data
  }
});
</script>
