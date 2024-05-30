import { SwitchTransition, CSSTransition } from "react-transition-group";

import style from './style.module.scss'
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from "components/SideBar/SideBar";
import { useRef } from "react";

const Layout = () => {
	const nodeRef = useRef(null)
	const { key } = useLocation();
	return (
		<main className={style.layout}>
			<SideBar />
			<div className={style.content}>
				<SwitchTransition>
					<CSSTransition
						key={key}
						nodeRef={nodeRef}
						classNames={"fadeIn"}
						timeout={250}>
						<Outlet />
					</CSSTransition>
				</SwitchTransition>
			</div>
		</main>
	)
}

export default Layout