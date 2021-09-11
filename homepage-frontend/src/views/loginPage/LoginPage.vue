<template>
  <div id="login">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="User ID (Email):"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.userid"
          type="email"
          placeholder="Enter your User ID (Email)."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter your Password."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Language:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.language"
          :options="languages"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="remember-userid">Remember User ID</b-form-checkbox>
          <b-form-checkbox value="remember-password">Remember Password</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card bg-variant="dark" text-variant="secondary" class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</template>

<script lang="ts" src="./LoginPage.ts"></script>
<style scoped src="./LoginPage.css"></style>
