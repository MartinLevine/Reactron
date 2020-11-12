import React from 'react'
import { Redirect } from 'react-router-dom'
import { IRouterSet, withAuthorize, withParameters } from '../widgets/RouterView'
import Home from '../pages/Home'

const routers: IRouterSet = {
    home: {
        name: 'Home',
        component: withParameters('/home/{uid}/post/{pid}/emm/{eid}?{cid}&{gid}', Home)
    }
}

function CheckAuth(component: any) {
    return withAuthorize(
        () => localStorage.getItem('token') !== null,
        // 你也可以直接重定向到某个页面
        // <Redirect to="/home/welcome"></Redirect>
        <Redirect to="/home" />
    )(component)
}

export default routers
