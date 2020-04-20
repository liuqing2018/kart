import utils from '../libs/utils';

export default {
  data() {
    return {
      // 分页的相关配置

      page: 1, // 当前页
      size: 20, // 分页大小
      // pageSizesOpts: [10, 20, 30, 40, 50, 100], // 页码大小
      count: 0, // 总记录数
      disablePage: false, // 是否禁用分页（隐藏）
      params: {}, // 检索模型的副本, 实际传递到后台到参数
      tableLoading: false,
    };
  },
  methods: {
    // 点击查询按钮查询数据 handleQuery
    handleSearch(first, callback) {
      this.$nextTick(() => { // 解决默认值赋值问题

        this.params = utils.deepClone(this.query); // 复制检索模型副本 避免切换分页数后数据变动
        this.page = 1; // 重置页码到第一页
        this.getData(); // 获取分页数据
        callback && callback(); // 手动查询同时执行的方法
      });
    },

    // 切换每页显示的条数
    handlePageSize(val, isTransform = true) {
      this.size = val;
      if (this.page == 1) {
        this.getData(isTransform);
      } else {
        this.page = 1;
      }
    },

    // 切换页面
    handlePage(val, isTransform = true) { // isTransform用于标识getData内查询参数是否已经转换过
      this.page = val;
      this.getData(isTransform); // 获取分页数据
    },
  },
  created() {

  },
};
