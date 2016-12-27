/* ============
 * Account Edit Page
 * ============
 *
 * Page where the user can edit the account information.
 */

import accountService from './../../../services/account';

export default {
  computed: {
    account: {
      get() {
        return Object.assign({}, this.$store.state.account);
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
