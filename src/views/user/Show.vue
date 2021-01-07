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

    <div v-if="item" class="table-user-show">
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
              <td><strong>{{ $t('uuid') }}</strong></td>
              <td>
                                    {{ item['uuid'] }}
              </td>
            
              <td><strong>{{ $t('username') }}</strong></td>
              <td>
                                    {{ item['username'] }}
              </td>
            </tr>
            
            <tr>
              <td><strong>{{ $t('roles') }}</strong></td>
              <td>
                                    {{ item['roles'] }}
              </td>
            
              <td><strong>{{ $t('password') }}</strong></td>
              <td>
                                    {{ item['password'] }}
              </td>
            </tr>
            
            <tr>
              <td><strong>{{ $t('salt') }}</strong></td>
              <td>
                                    {{ item['salt'] }}
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

const servicePrefix = 'User';

export default {
  name: 'UserShow',
  servicePrefix,
  components: {
      Loading,
      Toolbar
  },
  mixins: [ShowMixin],
  computed: {
    ...mapFields('user', {
      isLoading: 'isLoading'
    }),
    ...mapGetters('user', ['find'])
  },
  methods: {
    ...mapActions('user', {
      deleteItem: 'del',
      reset: 'resetShow',
      retrieve: 'load'
    })
  }
};
</script>
