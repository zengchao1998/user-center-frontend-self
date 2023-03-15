// @ts-ignore
/* eslint-disable */

declare namespace API {
  /** 当前用户信息 */
  type CurrentUser = {
    id?: string;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    phone?: string;
    email?: string;
    userStatus?: number;
    createTime?: Date;
    userRole?: number;
    validateCode?: string;
    unreadCount?: number;
    url?: string;
  };

  /** 对接后端通用返回类型 */
  type BaseResponse<T> = {
    code: number,
    data: T,
    message: string;
    description: string;
  }

  /** 登录返回的用户信息 */
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  /** 注册返回的用户信息 */
  type RegisterResult = number;

  /** 补充注册参数 */
  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    validateCode?: string;
    type?: string;
  };

  /** 登录输入参数 */
  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
