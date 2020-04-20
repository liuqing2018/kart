/**
* Created by tudou on 2020/4/20 21:32.
*/
<template>
  <div style="border: 2px solid blue; height: 100%; overflow: auto">
    <form-frame>
      <div slot="content">
        <a-card title="新建会员">
          <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="Activity name">
              <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="Activity zone">
              <a-select v-model="form.region" placeholder="please select your zone">
                <a-select-option value="shanghai">
                  Zone one
                </a-select-option>
                <a-select-option value="beijing">
                  Zone two
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="Activity time">
              <a-date-picker
                v-model="form.date1"
                show-time
                type="date"
                placeholder="Pick a date"
                style="width: 100%;"
              />
            </a-form-model-item>
            <a-form-model-item label="Instant delivery">
              <a-switch v-model="form.delivery" />
            </a-form-model-item>
            <a-form-model-item label="Activity type">
              <a-checkbox-group v-model="form.type">
                <a-checkbox value="1" name="type">
                  Online
                </a-checkbox>
                <a-checkbox value="2" name="type">
                  Promotion
                </a-checkbox>
                <a-checkbox value="3" name="type">
                  Offline
                </a-checkbox>
              </a-checkbox-group>
            </a-form-model-item>
            <a-form-model-item label="Resources">
              <a-radio-group v-model="form.resource">
                <a-radio value="1">
                  Sponsor
                </a-radio>
                <a-radio value="2">
                  Venue
                </a-radio>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="Activity form">
              <a-input v-model="form.desc" type="textarea" />
            </a-form-model-item>
            <!--<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">-->
            <!--<a-button type="primary" @click="onSubmit">-->
            <!--Create-->
            <!--</a-button>-->
            <!--<a-button style="margin-left: 10px;">-->
            <!--Cancel-->
            <!--</a-button>-->
            <!--</a-form-model-item>-->
          </a-form-model>
        </a-card>
      </div>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from '../../components/frame/FormFrame.vue';

export default {
  name: 'MemberAdd',
  components: {
    FormFrame,
  },
  props: {},
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {}
};
</script>

<style lang="less" scoped>

</style>
