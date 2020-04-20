/**
* Created by tudou on 2020/4/20 21:26.
*/
<template>
  <div class="form-frame" ref="formFrame">
    <div class="form-frame__header">
      <a-affix :target="() => this.$refs.formFrame">
        <a-page-header
          :ghost="false"
          @back="handleToList"
          subTitle="会员详情"
        >
          <template slot="extra">
            <a-button v-if="resetVisiable" :disabled="resetDisable" @click="handleReset">{{resetText}}</a-button>
            <a-button type="danger" icon="plus" v-if="saveVisiable" :disabled="saveDisable" @click="handleSave">{{saveText}}</a-button>
            <a-button class="mr-10" type="primary" icon="plus" v-if="submitVisiable" :disabled="submitDisable" @click="handleSubmit">{{submitText}}</a-button>
            <slot name="btns"></slot>
          </template>
          <slot name="info">
            <a-descriptions size="small" :column="4">
              <a-descriptions-item :label="item.label" v-for="(item, index) in infoList" :key="index">{{item.value}}</a-descriptions-item>
            </a-descriptions>
          </slot>
        </a-page-header>
      </a-affix>
    </div>
    <div class="form-frame__content">
      <slot name="content">
        <h3>默认内容</h3>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormFrame',
    components: {},
    props: {
      resetText: { // 重置按钮的文字
        type: [String, Boolean, Number],
        default: '重置',
      },
      resetVisiable: { // 是否显示重置按钮
        type: Boolean,
        default: true,
      },
      resetDisable: { // 是否禁用重置按钮
        type: Boolean,
        default: false,
      },
      saveText: { // 保存按钮的文字
        type: [String, Boolean, Number],
        default: '保存',
      },
      saveVisiable: { // 是否显示保存按钮
        type: Boolean,
        default: true,
      },
      saveDisable: { // 是否禁用保存按钮
        type: Boolean,
        default: false,
      },
      submitText: { // 提交按钮的文字
        type: [String, Boolean, Number],
        default: '提交',
      },
      submitVisiable: { // 是否显示提交按钮
        type: Boolean,
        default: true,
      },
      submitDisable: { // 是否禁用提交按钮
        type: Boolean,
        default: false,
      },
      infoList: { // 头部包含的详情信息||页面内容简介
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
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
      // 返回上级列表
      handleToList() {
        this.$router.go(-1); // todo 需要解决连击问题 2.iconfont替换原有内容
      },

      // 重置操作
      handleReset() {
        this.$emit('on-reset');
      },

      // 保存操作
      handleSave() {
        this.$emit('on-save');
      },

      // 提交操作
      handleSubmit() {
        this.$emit('on-submit');
      },
    }
  };
</script>

<style lang="less" scoped>
.form-frame {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow-y: auto;
}
.form-frame__content {
  flex: 1 1 auto;
  margin: 16px;
  /*padding: 16px;*/
  /*background: #ffffff;*/
}
</style>
