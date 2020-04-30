/**
* Created by tudou on 2020/4/20 21:32.
*/
<template>
  <div class="base-content">
    <form-frame
      @on-reset="handleReset"
      @on-save="handleSave"
      @on-submit="handleSubmit">
      <div slot="content">
        <a-card title="会员信息">
          <a-form-model
            ref="form"
            :model="form"
            :rules="rules"
            :label-col="{span:8}"
            :wrapper-col="{span:14}">
            <a-row>
              <a-col :span="10">
                <a-form-model-item label="姓名" prop="name">
                  <a-input v-model="form.name"></a-input>
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="10">
                <a-form-model-item label="手机号" prop="phone">
                  <a-input v-model="form.phone"></a-input>
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="10">
                <a-form-model-item label="会员卡号" prop="cardNo">
                  <a-input v-model="form.cardNo"></a-input>
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="10">
            <a-form-model-item label="出生日期" prop="birthDay">
              <a-date-picker
                v-model="form.birthDay"
                type="date"
                placeholder="Pick a date"
                style="width: 100%;">
              </a-date-picker>
            </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="10">
                <a-form-model-item label="个人简介" prop="desc">
                  <a-input v-model="form.desc" type="textarea"></a-input>
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="10">
                <a-form-model-item label="备注" prop="remark">
                  <a-input v-model="form.remark" type="textarea"></a-input>
                </a-form-model-item>
              </a-col>
            </a-row>
          </a-form-model>
        </a-card>
      </div>
    </form-frame>
  </div>
</template>

<script>
import { memberList } from '@/api/member';
import FormFrame from '@/components/frame/FormFrame.vue';

export default {
  name: 'MemberForM',
  components: {
    FormFrame,
  },
  props: {},
  data() {
    return {
      form: {
        name: '',
        phone: '',
        cardNo: '',
        birthDay: null,
        desc: '',
        remark: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号'
          }
        ],
        cardNo: [
          {
            required: true,
            message: '请输入会员卡号'
          }
        ]
      }
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
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSave() {
      console.log('======== add handleSave =========');
      memberList().then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('验证通过...');
        } else {
          this.$message.error('请按要求填写');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>

</style>
