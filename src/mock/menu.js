/**
 * Created by tudou on 2020/4/12 18:45.
 */
const data = [
  {
    key: '1',
    title: '会员管理',
    url: '/member',
    icon: 'icon-setting',
    children: []
  },
  {
    key: '2',
    title: '充值管理',
    url: '/home2',
    icon: 'icon-setting',
    children: []
  },
  {
    key: '3',
    title: '车辆管理',
    url: '/home3',
    icon: 'icon-setting',
    children: []
  },
  {
    key: '4',
    title: '流水管理',
    url: '/home4',
    icon: 'icon-setting',
    children: [
      {
        key: '4-1',
        title: '消费流水',
        url: '/home5',
        icon: 'icon-setting',
        children: []
      },
      {
        key: '4-2',
        title: '退款流水',
        url: '/home6',
        icon: 'icon-setting',
        children: []
      },
      {
        key: '4-3',
        title: '充值流水',
        url: '/home7',
        icon: 'icon-setting',
        children: []
      },
      {
        key: '4-4',
        title: '比赛流水',
        url: '/home8',
        icon: 'icon-setting',
        children: []
      }
    ]
  },
  {
    key: '5',
    title: '财务汇总',
    url: '/finance',
    icon: 'icon-setting',
    children: []
  },
  {
    key: '6',
    title: '系统设置',
    url: '/system',
    icon: 'icon-setting',
    children: []
  }
];

export default data;
