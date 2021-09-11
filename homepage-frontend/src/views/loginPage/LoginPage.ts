import Vue from 'vue';

export default Vue.extend({
  name: 'LoginPage',

  created(): void {
    console.log('LoginPage が表示されました。');
  },
  data() {
    return {
      form: {
        userid: '',
        password: '',
        language: null,
        checked: [],
      },
      languages: [
        { text: 'Select One', value: null },
        'Japanese',
        'English',
        'Spanish',
        'Russian',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event: any): void {
      event.preventDefault();
      alert(
        'userid is ' +
          this.form.userid +
          '. password is ' +
          this.form.password +
          '. language is ' +
          this.form.language +
          '. you checked ' +
          this.form.checked +
          '.',
      );
    },
    onReset(event: any) {
      event.preventDefault();
      // Reset our form values
      this.form.userid = '';
      this.form.password = '';
      this.form.language = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
});
