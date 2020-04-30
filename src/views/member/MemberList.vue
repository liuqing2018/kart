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
      <!-- 查询条件开始 -->
      <template slot="query">
        <query-item label="门店名称">
          <a-input v-model="queryModel.storeName" placeholder="门店名称"></a-input>
        </query-item>
        <query-item label="姓名">
          <a-input v-model="queryModel.name" placeholder="姓名"></a-input>
        </query-item>
        <query-item label="手机号">
          <a-input v-model="queryModel.phone" placeholder="手机号"></a-input>
        </query-item>
        <query-item label="注册时间">
          <a-range-picker v-model="queryModel.time"></a-range-picker>
        </query-item>
      </template>
      <!-- 查询条件结束 -->

      <!-- 查询结果 开始 -->
      <template slot="table">
        <i-table :columns="columns" :dataSource="dataList">
        </i-table>
      </template>
      <!-- 查询结果 结束 -->
    </query-frame>
  </div>
</template>

<script>
import { memberList } from '@/api/member';
import queryMixin from '@/mixin/queryMixin';
import IButtonDelete from '@/components/IButtonDelete.vue';

export default {
  name: 'MemberList',
  mixins: [queryMixin],
  components: {
    // eslint-disable-next-line
    IButtonDelete
  },
  props: {},
  data() {
    return {
      queryModel: {
        storeName: null,
        name: null,
        phone: null,
        time: null,
      },
      // 默认展示表格
      columns: [
        {
          title: '门店名称',
          dataIndex: 'storeName',
          key: 'storeName',
          ellipsis: true,
          width: 200
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          width: 120,
        },
        {
          title: '会员卡号',
          dataIndex: 'cardNo',
          key: 'cardNo',
          ellipsis: true,
          width: 120
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone',
          ellipsis: true,
          width: 120,
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
          // ellipsis: true,
          // width: 120,
        },
        {
          title: '余额',
          dataIndex: 'balance',
          key: 'balance',
          width: 120,
        },
        {
          title: '注册时间',
          dataIndex: 'createTime',
          key: 'createTime',
          width: 220,
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          fixed: 'right',
          width: 200,
          scopedSlots: { customRender: 'action' },
          customRender: (text, row, index) => {
            console.log(index);
            return (
              <section>
                <a-button type="link" size="small" onClick={ () => this.handleEdit(row) }>编辑</a-button>
                <a-divider type="vertical"></a-divider>
                <i-button-delete on-on-confirm={ () => this.handleDelete(row) }></i-button-delete>
              </section>
            );
          }
        }
      ],
      dataList: []
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
    // 获取会员列表
    getData() {
      const params = {
        page: this.page.current,
        size: this.page.pageSize,
        name: 'leo',
        age: 30,
      };
      memberList(params).then((res) => {
        console.log(res);
        this.dataList = res.data;
      });
    },

    // 添加会员
    handleAdd() {
      this.$router.push({
        name: 'memberAdd'
      });
    },

    // 编辑
    handleEdit(row) {
      console.log(row);
      this.$router.push({
        name: 'memberEdit',
        params: {
          id: row.id
        }
      });
    },

    // 删除
    handleDelete(row, index) {
      console.log(row);
      this.dataList.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>

</style>
