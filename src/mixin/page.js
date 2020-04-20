/**
 * 方法说明：在使用分页的页面引入该mixin，避免相同的方法重复书写；
 * 统一说明：0.方法名称要一致；
 *         1.跟分页有关的data都放进page对象里；
 *         2.手动查询方法名称为 handleSearch (handleQuery)
 *           获取分页数据的方法名称为 getData (getPageData)
 *           页码改变的方法名称为 handlePage (handlePageChange)
 *           页码数据条数改变的方法名称 handlePageSize (handleSizeChange)
 */
export default {
  data() {
    return {
      // 分页的相关配置
      page: {
        currentPage: 1, // 当前页
        pageSize: 10, // 分页大小
        pageSizesOpts: [10, 20, 30, 40, 50, 100], // 页码大小
        total: 0, // 总记录数
        disablePage: false, // 是否禁用分页（隐藏）
      },
      params: {}, // 检索模型的副本, 实际传递到后台到参数
    };
  },
  methods: {
    // 点击查询按钮查询数据 handleQuery
    handleSearch() {
      this.params = Object.assign({}, this.query); // 复制检索模型副本 避免切换分页数后数据变动
      this.page.currentPage = 1; // 重置页码到第一页
      // this.page.pageSize = this.pageSizesOpts[0]; // 重置分页条数
      this.getData(); // 获取分页数据
    },

    // 切换每页显示的条数
    handlePageSize(val) {
      this.page.pageSize = val;
      this.getData(); // 获取分页数据
    },

    // 切换页面
    handlePage(val) {
      this.page.currentPage = val;
      this.getData(); // 获取分页数据
    },
  },
  created() {
    this.params = Object.assign({}, this.query); // 复制检索模型副本 避免切换分页数后数据变动
    this.getData(); // 获取分页数据
  },
};
