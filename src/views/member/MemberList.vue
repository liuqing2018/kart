/**
* Created by tudou on 2020/4/12 18:38.
*/
<template>
  <div class="base-content">
    <query-frame
      :current="page.current"
      :total="page.total"
      @query="handleQuery"
      @reset="handleReset"
      @add="handleAdd"
      @pageNoChange="handlePageNoChange"
      @pageSizeChange="handlePageSizeChange"
    >
      <template slot="query">
        <form-item label="用户名">
          <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
        </form-item>
        <form-item label="用户名">
          <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
        </form-item>
        <form-item label="用户名">
          <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
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
        user: null,
        password: null
      },
      // 默认展示表格
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: true,
        },
        {
          title: 'Long Column Long Column Long Column',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true,
        },
        {
          title: 'Long Column Long Column',
          dataIndex: 'address',
          key: 'address 3',
          ellipsis: true,
        },
        {
          title: 'Long Column',
          dataIndex: 'address',
          key: 'address 4',
          ellipsis: true,
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '4',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '5',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser'],
        },
        {
          key: '6',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleQuery();
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    getData() {
      console.log('============ getData ===============');
    },
    handleAdd() {
      console.log('添加');
    },
  }
};
</script>

<style lang="less" scoped>
  .base-content {
    height: 100%;
  }
</style>
