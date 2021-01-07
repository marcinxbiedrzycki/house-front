<template>
  <div>
    <Toolbar :handle-edit="editHandler"  :handle-delete="del">
      <template slot="left">
        <v-toolbar-title v-if="item">{{
          `${$options.servicePrefix} ${item['@id']}`
        }}</v-toolbar-title>
      </template>
    </Toolbar>

    <br />

    <div v-if="item" class="table-house-show">
      <v-simple-table>
        <template slot="default">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>

              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{{ $t('name') }}</strong></td>
              <td>
                                    {{ item['name'] }}
              </td>
            
              <td></td>
            </tr>
            
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <Loading :visible="isLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import Loading from '../../components/Loading';
import ShowMixin from '../../mixins/ShowMixin';
import Toolbar from '../../components/Toolbar';

const servicePrefix = 'House';

export default {
  name: 'HouseShow',
  servicePrefix,
  components: {
      Loading,
      Toolbar
  },
  mixins: [ShowMixin],
  computed: {
    ...mapFields('house', {
      isLoading: 'isLoading'
    }),
    ...mapGetters('house', ['find'])
  },
  methods: {
    ...mapActions('house', {
      deleteItem: 'del',
      reset: 'resetShow',
      retrieve: 'load'
    })
  }
};
</script>
