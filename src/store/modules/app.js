/**
 * Created by tudou on 2020/4/10 18:11.
 */
import {
  getLocal,
  setLocal,
  // recursionList,
  // setDefaultRoute
} from '@/libs/utils';
import { defaultLang, localeKey } from '@/config';
// import { permissionList as getPermissionListApi } from '@/api/user';
// import router from '@/router/index';
// import commonRouter from '@/router/commonRouter';
// import dynamicRouter from '@/router/dynamicRouter';

export default {
  namespace: true,
  state: {
    // 当前选中的菜单
    currentMenu: [],

    // 菜单列表
    menuList: [],

    // 权限列表
    permissionList: [],

    // 面包屑导航
    breadCrumbList: [],

    // 多语言支持 zh_CN || en_US
    locale: defaultLang,

    // 全局加载状态
    loading: false,

    // 是否禁用全局加载状态
    disableLoading: false,
  },
  getters: {
    getLocale(state) {
      return getLocal(localeKey) || state.locale;
    },
  },

  // 同步更改state的方法
  mutations: {
    // 设置当前菜单
    setCurrentMenu(state, name) {
      state.currentMenu = [name];
    },

    // 设置菜单列表
    setMenuList(state, list) {
      state.menuList = list;
    },

    // 设置权限路由列表
    setPermissionList(state, list) {
      state.permissionList = list;
    },

    // 设置面包屑导航列表
    setBreadCrumbList(state, list) {
      state.breadCrumbList = list;
    },

    // 切换多语言
    setLocale(state, payload) {
      state.locale = payload;
      setLocal(localeKey, payload);
    },

    // 设置全局loading状态
    setLoading(state, status) {
      state.loading = status;
    },

    // 设置是否禁用全局loading状态
    setDisableLoading(state, status) {
      state.disableLoading = status;
    },
  },

  // 异步更改state，只能提交到mutations
  actions: {
    // async getPermissionList({ commit }) {
    //   // 获取权限列表
    //   const permissionResponse = await getPermissionListApi();
    //   const { menu } = permissionResponse.data;
    //
    //   // 递归权限列表，动态加载有权限的路由
    //   const permissionRoutes = recursionList(menu, dynamicRouter);
    //
    //
    //   // 找到根路由，并将权限路由添加到里面
    //   const rootMenu = commonRouter.find((item) => item.path === '/');
    //   const { children } = rootMenu;
    //   children.push(...permissionRoutes);
    //
    //   // 生成导航菜单
    //   commit('setMenuList', children);
    //
    //   /*
    //       为所有有children的菜单路由设置第一个children为默认路由
    //       主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
    //       而我们的路由是
    //       [
    //           /manage/menu1,
    //           /manage/menu2
    //       ]
    //   */
    //   setDefaultRoute([rootMenu]);
    //
    //   // 准备装载权限路由
    //   const initialRoutes = router.options.routes;
    //
    //   // 动态添加路由
    //   router.addRoutes(commonRouter);
    //
    //   // 最终的路由列表
    //   commit('setPermissionList', [...initialRoutes, ...commonRouter]);
    // }
  }
};
