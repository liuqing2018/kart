import Mock from 'mockjs';

const status = 200;
const memberListMock = {
  status,
  'data|1-20': [
    {
      'id': '@guid',
      'name': '@cname',
      'storeName|1': ['滨海宝龙广场', '滨海中新生态城', '珠海小厂没有族'],
      'cardNo|1-999999': 3,
      'phone': /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
      'age|1-199': 3,
      'address': '@city',
      'balance|1-399': 3,
      'introduction': '@cparagraph(1, 13)',
      'avatar': Mock.Random.image('200x100', '#ffcc33', '#FFF', 'png', '!'),
      'createTime': Mock.Random.datetime('yyyy-MM-dd HH:mm'),
      'status|1-3': 1,
    }
  ],
};

const memberList = Mock.mock(memberListMock);
export {
  memberList,
};
