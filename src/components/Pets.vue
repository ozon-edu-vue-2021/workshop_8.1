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
import {Pet} from "@/api/petsApi";
import {petsService} from "@/api/api";

export default Vue.extend({
  name: 'Pets',
  data() {
    return {
      pets: [] as Array<Pet>
    }
  },
  async created() {
    this.pets = await petsService.getPetsByStatus({
      status: 'pending'
    })
  }
});
</script>
