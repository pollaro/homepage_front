<template>
  <HblLogin v-if="!loggedIn" />
  <div v-if="loggedIn">THIS IS THE MAIN PAGE LOGGED IN {{ loggedIn }}</div>
</template>

<script>
import { mapState } from 'pinia';
import HblLogin from '@/components/hbl/HblLogin.vue';
import { useUserStore } from '@/stores/useUserStore';

export default {
  name: 'HblHome',
  components: { HblLogin },
  computed: {
    ...mapState(useUserStore, ['loggedIn']),
  },
};
</script>

<style scoped></style>
