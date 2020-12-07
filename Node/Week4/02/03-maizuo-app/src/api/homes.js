import request from './request.js'
export function getHomes() {
    let url='/gateway?cityId=440100&ticketFlag=1&k=6260885';
    return request({
        url,
        method:'get',
        // 这里的headers的优先级是高于request.js里面设置的headers的，所以会使用这里设置的headers
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606880294749433138446337","bc":"440100"}',
            'X-Host': 'mall.film-ticket.cinema.list',
        }
    });
}