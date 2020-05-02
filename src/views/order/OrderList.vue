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
        <query-item label="订单号">
          <a-input v-model="queryModel.cardNo" placeholder="订单号"></a-input>
        </query-item>
        <query-item label="手机号">
          <a-input v-model="queryModel.phone" placeholder="手机号"></a-input>
        </query-item>
        <query-item label="起止时间">
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
  name: 'OrderList',
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
        cardNo: null,
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
          title: '订单号',
          dataIndex: 'cardNo',
          key: 'cardNo',
          ellipsis: true,
          width: 200
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone',
          width: 120,
        },
        {
          title: '订单金额',
          dataIndex: 'amount',
          key: 'amount',
          ellipsis: true,
          width: 120
        },
        {
          title: '实付金额',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: '优惠金额',
          dataIndex: 'discount',
          key: 'discount',
          ellipsis: true,
          width: 120,
        },
        {
          title: '支付方式',
          dataIndex: 'payType',
          key: 'payType',
          // ellipsis: true,
          width: 120,
        },
        {
          title: '订单状态',
          dataIndex: 'status',
          key: 'status',
          width: 220,
        },
        {
          title: '下单时间',
          dataIndex: 'createTime',
          key: 'createTime',
          width: 220,
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          fixed: 'right',
          width: 300,
          scopedSlots: { customRender: 'action' },
          customRender: (text, row, index) => {
            console.log(index);
            return (
              <section>
                <a-button type="link" size="small" onClick={ () => this.handleView(row) }>查看</a-button>
                <a-divider type="vertical"></a-divider>
                <a-button type="link" size="small" onClick={ () => this.handleEdit(row) }>退单</a-button>
                <a-divider type="vertical"></a-divider>
                <a-button type="link" size="small" onClick={ () => this.handleEdit(row) }>去支付</a-button>
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
        name: 'orderInfo'
      });
    },

    // 查看订单详情
    handleView(row) {
      console.log(row);
      this.$router.push({
        name: 'orderInfo',
        params: {
          id: row.id
        }
      });
    },

    // 退单
    handleEdit(row) {
      console.log(row);
      this.$router.push({
        name: 'orderEdit',
        params: {
          id: row.id
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>

</style>
