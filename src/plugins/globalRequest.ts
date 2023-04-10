/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { message } from 'antd';
import { history } from '@@/core/history';
import { stringify } from 'querystring';

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  // 修改请求路径的前缀
  // 本地测试配置
  // prefix: process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : undefined,

  // 远程路径配置
  prefix: process.env.NODE_ENV === 'production' ? 'http://47.120.9.159' : undefined,
  // prefix: process.env.NODE_ENV === 'production' ? 'http://user-center-backend.zengchao1998.com.cn' : undefined,
  // requestType: 'form',
});

/**
 * 所有请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url = ${url}`);
  return {
    url,
    options: {
      ...options,
      headers: {},
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  // 后端返回数据 BaseResponse
  const res = await response.clone().json();
  if (res.code === 0) {
    return res.data;
  }
  if (res.code === 40100) {
    // message.error('请先登录');
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    });
  } else {
    message.error(res.description);
  }
});

export default request;
