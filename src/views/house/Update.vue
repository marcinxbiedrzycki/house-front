<template>
  <div>
    <Toolbar
      :handle-submit="onSendForm"
      :handle-reset="resetForm"
      :handle-delete="del"
    />
    <HouseForm
      ref="updateForm"
      v-if="item"
      :values="item"
      :errors="violations"
    />
    <Loading :visible="isLoading || deleteLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import HouseForm from '../../components/house/Form.vue';
import Loading from '../../components/Loading';
import Toolbar from '../../components/Toolbar';
import UpdateMixin from '../../mixins/UpdateMixin';

const servicePrefix = 'House';

export default {
  name: 'HouseUpdate',
  servicePrefix,
  mixins: [UpdateMixin],
  components: {
    Loading,
    Toolbar,
    HouseForm
  },

  computed: {
    ...mapFields('house', {
      deleteLoading: 'isLoading',
      isLoading: 'isLoading',
      error: 'error',
      updated: 'updated',
      violations: 'violations'
    }),
    ...mapGetters('house', ['find'])

  },

  methods: {
    ...mapActions('house', {
      createReset: 'resetCreate',
      deleteItem: 'del',
      delReset: 'resetDelete',
      retrieve: 'load',
      update: 'update',
      updateReset: 'resetUpdate'
    })
  }
};
</script>
