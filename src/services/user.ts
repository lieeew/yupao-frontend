import myAxios from "../plugins/myAxios";
import { setCurrentUserState } from "../states/user";

export const getCurrentUser = async () => {
    // 小系统的话可以在页面每一次加载的时候都向后端发送请求
    // const currentUser = getCurrentUserState();
    // if (currentUser) {
    //     return currentUser;
    // }
    // 不存在则从远程获取
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}
