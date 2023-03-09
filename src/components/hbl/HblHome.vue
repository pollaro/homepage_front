<template>
  <HblLogin v-if="!loggedIn" />
</template>

<script>
import { useUserStore } from '@/stores/useUserStore';
import HblLogin from '@/components/hbl/HblLogin.vue';
import { mapState } from 'pinia';

export default {
  name: 'HblHome',
  components: { HblLogin },
  computed: {
    ...mapState(useUserStore, { loggedIn: 'loggedIn' }),
  },
};
</script>

<style scoped></style>
