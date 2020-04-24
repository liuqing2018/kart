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
            <!-- 操作日志按钮 开始 -->
            <a-button
              v-if="logVisiable"
              :disabled="logDisable || loading"
              :loading="loading && loadingIndex === 1"
              @click="handleLog(1)">{{logBtnTxt}}
            </a-button>
            <!-- 操作日志按钮 结束 -->

            <!-- 重置按钮 开始 -->
            <a-button
              v-if="resetVisiable"
              :disabled="resetDisable || loading"
              :loading="loading && loadingIndex === 2"
              @click="handleReset(2)">{{resetBtnTxt}}
            </a-button>
            <!-- 重置按钮 结束 -->

            <!-- 保存按钮 开始 -->
            <a-button
              type="danger"
              v-if="saveVisiable"
              :disabled="saveDisable || (loading && loadingIndex !== 3)"
              :loading="loading && loadingIndex === 3"
              @click="handleSave(3)" >{{saveBtnTxt}}
            </a-button>
            <!-- 保存按钮 结束 -->

            <!-- 提交按钮 开始 -->
            <a-button
              type="primary"
              v-if="submitVisiable"
              :disabled="submitDisable || (loading && loadingIndex !== 4)"
              :loading="loading && loadingIndex === 4"
              @click="handleSubmit(4)" >{{submitBtnTxt}}
            </a-button>
            <!-- 提交按钮 结束 -->
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
      <a-spin :spinning="loading" :tip="$t('common.loading')">
        <slot name="content">
        </slot>
      </a-spin>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormFrame',
  components: {},
  props: {
    logText: { // 操作日志按钮的文字
      type: [String, Boolean, Number],
    },
    logVisiable: { // 是否显示操作日志按钮
      type: Boolean,
      default: true,
    },
    logDisable: { // 是否禁用操作日志按钮
      type: Boolean,
      default: false,
    },
    resetText: { // 重置按钮的文字
      type: [String, Boolean, Number],
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
      loadingIndex: 0, // 当前点击的是哪个按钮，只针对当前按钮loading
    };
  },
  computed: {
    logBtnTxt() {
      return this.logText || this.$t('common.logBtn');
    },
    resetBtnTxt() {
      return this.resetText || this.$t('common.resetBtn');
    },
    saveBtnTxt() {
      return this.saveText || this.$t('common.saveBtn');
    },
    submitBtnTxt() {
      return this.submitText || this.$t('common.submitBtn');
    },
    loading() {
      return this.$store.state.app.loading;
    },
  },
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

    // 操作日志
    handleLog(index) {
      this.loadingIndex = index;
      this.$emit('on-log');
    },

    // 重置操作
    handleReset(index) {
      this.loadingIndex = index;
      this.$emit('on-reset');
    },

    // 保存操作
    handleSave(index) {
      this.loadingIndex = index;
      this.$emit('on-save');
    },

    // 提交操作
    handleSubmit(index) {
      this.loadingIndex = index;
      this.$emit('on-submit');
    },
  }
};
</script>

<style lang="less" scoped>
@import "../../style/modules/variables";

.form-frame {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow-y: auto;
}
.form-frame__header {
}
.form-frame__content {
  flex: 1 1 auto;
  margin: 16px;
  /*padding: 16px;*/
  background-color: @body-background;
}
</style>
