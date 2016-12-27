/* ============
 * Account Edit Page
 * ============
 *
 * Page where the user can edit the account information.
 */

import accountService from './../../../services/account';
import store from './../../../store/modules/account';

export default {
  computed: {
    account: {
      get() {
        return store.state;
      },
      set() {
        //
      },
    },
  },
  methods: {
    updateAccount(account) {
      accountService.edit(account);
    },
  },
  components: {
    VLayout: require('layouts/default/default.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
