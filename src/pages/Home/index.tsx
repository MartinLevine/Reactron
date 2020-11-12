import React from 'react'
import logo from '../../assets/logo.svg'
import style from './style.module.scss'

export default function Home(props: any) {
    return (
        <div className={style.app}>
            <header className={style.app__header}>
                <img src={logo} className={style.app__logo} alt="logo" />
                <p>
                    Edit <code>src/pages/Home/index.tsx</code> and save to reload.
                </p>
                <a className={style.app__link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <h5>
                    访问
                    <a
                        className={style.app__link}
                        href="/home/123123/post/456/emm/789?cid=123&gid=456">{`/home/{uid}/post/{pid}/emm/{eid}?cid={cid}&gid={gid}`}</a>
                    会显示路由参数嗷
                </h5>
                <div>
                    uid: {props.params.uid}, pid: {props.params.pid}, eid: {props.params.eid}, cid: {props.params.cid},
                    gid: {props.params.gid}
                </div>
            </header>
        </div>
    )
}
