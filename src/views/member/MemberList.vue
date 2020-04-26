/**
* Created by tudou on 2020/4/12 18:38.
*/
<template>
  <div class="base-content">
    <query-frame
      :current="page.current"
      :total="page.total"
      @on-query="handleQuery"
      @on-reset="handleReset"
      @on-add="handleAdd"
      @on-page-change="handlePageChange"
      @on-size-change="handleSizeChange"
    >
      <template slot="query">
        <form-item label="门店名称">
          <a-input v-model="queryModel.storeName" placeholder="门店名称"></a-input>
        </form-item>
        <form-item label="姓名">
          <a-input v-model="queryModel.name" placeholder="姓名"></a-input>
        </form-item>
        <form-item label="手机号">
          <a-input v-model="queryModel.phone" placeholder="手机号"></a-input>
        </form-item>
      </template>
      <template slot="btns">
      </template>
      <template slot="table">
        <a-table :columns="columns" :dataSource="data" :pagination="false" bordered>
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </template>
    </query-frame>

  </div>
</template>

<script>
import { memberList, memberInfo } from '@/api/member';
import QueryFrame from '../../components/frame/QueryFrame.vue';
import FormItem from '../../components/FormItem.vue';
import queryMixin from '../../mixin/queryMixin';

export default {
  name: 'MemberList',
  mixins: [queryMixin],
  components: {
    QueryFrame,
    FormItem,
  },
  props: {},
  data() {
    return {
      queryModel: {
        storeName: null,
        name: null,
        phone: null,
      },
      // 默认展示表格
      columns: [
        {
          title: '门店名称',
          dataIndex: 'storeName',
          key: 'storeName',
          ellipsis: true,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
          width: 120,
        },
        {
          title: '会员卡号',
          dataIndex: 'cardNo',
          key: 'cardNo',
          ellipsis: true,
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone',
          ellipsis: true,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
          ellipsis: true,
        },
        {
          title: '余额',
          dataIndex: 'balance',
          key: 'balance',
          ellipsis: true,
        },
        {
          title: '注册时间',
          dataIndex: 'createTime',
          key: 'createTime',
          ellipsis: true,
        },
      ],
      data: []
    };
  },
  computed: {},
  watch: {},
  created() {
    // this.handleQuery();
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    getData() {
      const params = {
        page: this.page.current,
        size: this.page.pageSize,
        name: 'leo',
        age: 30,
      };
      // this.handleInfo(params);
      this.handleList(params);
    },
    handleAdd() {
      this.$router.push({
        name: 'memberAdd'
      });
    },
    handleList(data) {
      memberList(data).then((res) => {
        this.data = res.data;
      });
    },
    handleInfo(data) {
      memberInfo(data).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>

</style>
