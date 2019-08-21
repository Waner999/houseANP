import axios from 'axios'
import qs from 'qs'

export const IP = 'http://localhost:8989'

/* 注册配置 */
export let register = (acc, pwd) => {

    return axios.post(IP + '/reg.php', qs.stringify({
        acc: acc,
        pwd: pwd
    }))

}
/* 登陆配置 */
export let getlogin = (acc, pwd) => {

    return axios.post(IP + '/login.php', qs.stringify({
        acc: acc,
        pwd: pwd
    }))

}

/* 房子数据 */
export let houselist = () => {

    return axios.get(IP + '/gethouselist.php')
}