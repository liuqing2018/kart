/**
 * 方法说明：在使用分页的页面引入该mixin，避免相同的方法重复书写；
 */
export default {
  data() {
    return {
      // 分页的相关配置
      page: {
        current: 1, // 当前页
        pageSize: 10, // 分页大小
        total: 0, // 总记录数
      },
      params: {}, // 检索模型的副本, 实际传递到后台到参数
    };
  },
  methods: {
    // 点击查询按钮查询数据
    handleQuery(callback) {
      this.params = { ...this.query }; // 复制检索模型副本 避免切换分页数后数据变动
      this.page.current = 1; // 重置页码到第一页
      this.getData(); // 获取分页数据
      callback && callback(); // 查询是同时执行的方法
    },

    // 切换页面
    handlePageChange(pageNo, pageSize, isTransform = true) { // isTransform用于标识getData内查询参数是否已经转换过, 切换分页的时候不在转换数据
      this.page.current = pageNo;
      this.getData(isTransform);
    },

    // 切换每页显示的条数
    handleSizeChange(current, pageSize, isTransform = true) {
      this.page.pageSize = pageSize;
      this.page.current = 1;
      this.getData(isTransform);
    },

    // 重置查询条件
    handleReset(callback) {
      this.queryModel = {};
      callback && callback();
    }
  },
};
