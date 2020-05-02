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
        <a-card title="订单信息">
          <div class="order-list">
            <a-descriptions title="" :column="4">
              <a-descriptions-item label="订单编号">
                s113360875194
              </a-descriptions-item>
              <a-descriptions-item label="客户姓名">
              </a-descriptions-item>
              <a-descriptions-item label="手机号">
                1500000000
              </a-descriptions-item>
              <a-descriptions-item label="订单金额">
                888 元
              </a-descriptions-item>
              <a-descriptions-item label="实付金额">
                888 元
              </a-descriptions-item>
              <a-descriptions-item label="优惠金额">
                0 元
              </a-descriptions-item>
              <a-descriptions-item label="订单状态">
                待支付
              </a-descriptions-item>
              <a-descriptions-item label="支付方式">
                支付宝
              </a-descriptions-item>
              <a-descriptions-item label="创建人">
                管理员
              </a-descriptions-item>
              <a-descriptions-item label="创建时间">
                2020-05-02 10:10:10
              </a-descriptions-item>
            </a-descriptions>
            <i-table :columns="columns" :dataSource="dataList">
            </i-table>
          </div>
        </a-card>
      </div>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from '@/components/frame/FormFrame.vue';
import ITable from '@/components/ITable.vue';

export default {
  name: 'orderForm',
  components: {
    FormFrame,
    ITable,
  },
  props: {},
  data() {
    return {
      columns: [
        {
          title: '车辆类型',
          dataIndex: 'storeName',
          key: 'storeName',
          ellipsis: true,
          width: 200
        },
        {
          title: '授权码',
          dataIndex: 'cardNo',
          key: 'cardNo',
          ellipsis: true,
          width: 200
        },
        {
          title: '单价',
          dataIndex: 'phone',
          key: 'phone',
          width: 80,
        },
        {
          title: '数量',
          dataIndex: 'amount',
          key: 'amount',
          ellipsis: true,
          width: 80
        },
        {
          title: '状态',
          dataIndex: 'discount',
          key: 'discount',
          ellipsis: true,
          width: 100,
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          // fixed: 'right',
          width: 100,
          scopedSlots: { customRender: 'action' },
          customRender: (text, row, index) => {
            console.log(index);
            return (
              <section>
                <a-button type="link" size="small" onClick={ () => this.handleEdit(row) }>退单</a-button>
              </section>
            );
          }
        }
      ],
      dataList: [
        {},{},{},{}
      ],
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
    },
    handleSubmit() {
    }
  }
};
</script>

<style lang="less" scoped>
.order-list {
  padding: 20px 40px;
}
</style>
