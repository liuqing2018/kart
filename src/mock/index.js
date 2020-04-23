import Mock from 'mockjs';
import { memberList } from './member';

const domain = 'http://localhost:8080';

Mock.setup({
  timeout: '3000-6000',
});

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/member/list`, 'post', memberList);
