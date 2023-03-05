<template>
  <div class="container">
    <div class="col-md-6 mx-auto">
      <div class="card card-container">
        <Form @submit="handleSubmit" :validation-schema="schema">
          <div class="form-group mx-4 mt-3">
            <label for="email">Email</label>
            <Field name="email" type="text" class="form-control" />
          </div>
          <div class="form-group mx-4 mt-3">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control" />
          </div>
          <div class="form-group mx-4 my-3">
            <button class="btn btn-primary btn-block" :disabled="loading">
              Submit
              <span v-show="loading" class="spinner-border spinner-border-sm" />
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '@/stores/useUserStore';

export default {
  name: 'HblLogin',
  components: { Form, Field },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required('email is required'),
      password: yup.string().required('Password is required'),
    });

    return {
      loading: false,
      schema,
    };
  },
  methods: {
    handleSubmit(user) {
      this.loading = true;
      const store = useUserStore();
      store.login(user);
    },
  },
};
</script>

<style scoped></style>
