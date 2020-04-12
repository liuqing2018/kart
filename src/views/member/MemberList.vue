/**
* Created by tudou on 2020/4/12 18:38.
*/
<template>
  <div class="query__wrapper">
    <div class="query__header">
      <a-page-header
        title=""
        subTitle="会员管理">
        <a-form-model
          layout="inline"
          :model="queryModel"
        >
          <div class="query__condition">
            <a-form-model-item label="户名用户名" class="query-item">
              <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
            </a-form-model-item>
            <a-form-model-item label="用户名用" class="query-item">
              <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
            </a-form-model-item>
            <a-form-model-item label="户名用户名" class="query-item">
              <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
            </a-form-model-item>
            <a-form-model-item label="户名用户名" class="query-item">
              <a-input v-model="queryModel.user" placeholder="用户名"></a-input>
            </a-form-model-item>
            <a-form-model-item class="query-item">
              <a-button
                type="primary"
                html-type="submit"
                :disabled="queryModel.user === '' || queryModel.password === ''"
              >
                Log in
              </a-button>
            </a-form-model-item>
          </div>
        </a-form-model>
      </a-page-header>
    </div>
    <div class="query__main">
      <div class="query__options">
        <a-button class="mr-10" type="primary">Primary</a-button>
        <a-button class="mr-10" type="primary">Primary</a-button>
        <a-button class="mr-10" type="primary">Primary</a-button>
      </div>

      <div class="query__summary">
        <div class="query__summary__title">合计</div>
        <div class="query__summary__group">
          <div class="query__summary--label">含税总金额：</div>
          <div class="query__summary--value">{{234}}</div>
        </div>
        <div class="query__summary__group">
          <div class="query__summary--label">含税总金额：</div>
          <div class="query__summary--value">{{234}}</div>
        </div>
      </div>
      <div class="query__result">
        <a-table
          :columns="columns"
          :dataSource="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
          <span slot="tags" slot-scope="tags">
            <a-tag
              v-for="tag in tags"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              :key="tag"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
                <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
          </span>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  components: {},
  props: {},
  data() {
    return {
      queryModel: {
        // password: null,
        // user: null
      },
      // 默认展示表格
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          slots: { title: 'customTitle' },
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          scopedSlots: { customRender: 'tags' },
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
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
  @query-header-height: 180px; // 148 +32

  .query__wrapper {
    border: 1px solid red;
    height: 100%;
  }

  .query__main {
    margin: 16px;
    padding: 24px;
    background: #fff;
    height: calc(~"100% - @{query-header-height}");

    .query__options {
      margin-bottom: 16px;
    }

    .query__summary {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 16px;
      .query__summary__title {
        margin-right: 16px;
        font-weight: bold;
      }
      .query__summary__group {
        display: flex;
        margin-right: 16px;
        .query__summary--value {
          min-width: 20px;
        }
      }
    }
    .query__result {
    }
  }

  .query__header {
    border: 1px solid rgb(235, 237, 240);
    background-color: #fff;
  }

  .query__condition{
    display: flex;
    padding-bottom: 16px;
    flex-wrap: wrap;

    .query-item{
      display: flex;
      align-items: center;
      margin-right: 32px;
      flex-wrap: wrap;
      margin-bottom: 15px;

      >label{
        padding-right: 8px
      }
      .item{
        display: inline-block;
        width: 256px
      }
    }
  }
</style>
