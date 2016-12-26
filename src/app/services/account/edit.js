import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (account) => {
  store.dispatch('updateAccount', account);

  Vue.router.push({
    name: 'account.index',
  });
};

// When the request fails
const failed = () => {
};

export default (account) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   * Vue.$http.put('/account', account)
   *   .then((response) => {
   *     success(response);
   *   })
   *   .catch((error) => {
   *     failed(error);
   *   });
   */
  const succeeds = true;

  if (succeeds) {
    success(account);
  } else {
    failed();
  }
};
