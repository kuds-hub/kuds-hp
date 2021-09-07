import Vue from 'vue';

export default Vue.extend({
  name: 'TopPage',
  // props: {
  //   msg: String,
  // },
  created(): void {
    console.log('TopPage が表示されました。');
  },
});
