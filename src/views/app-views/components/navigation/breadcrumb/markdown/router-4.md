---
order: 3
iframe: 200
reactRouter: react-router-dom
title:
  zh-CN: 其它路由
  en-US: Other Router Integration
---

## zh-CN

和 `react-router@4`，或其他路由进行结合使用。

## en-US

Used together with `react-router@4` or other router.

```jsx
import { Alert, Breadcrumb } from 'antd';
import React from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

const Apps = () => (
	<ul className="app-list">
		<li>
			<Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
		</li>
		<li>
			<Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
		</li>
	</ul>
);

const breadcrumbNameMap = {
	'/apps': 'Application List',
	'/apps/1': 'Application1',
	'/apps/2': 'Application2',
	'/apps/1/detail': 'Detail',
	'/apps/2/detail': 'Detail',
};

const Home = () => {
	const location = useLocation();
	const pathSnippets = location.pathname.split('/').filter((i) => i);
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>{breadcrumbNameMap[url]}</Link>
			</Breadcrumb.Item>
		);
	});
	const breadcrumbItems = [
		<Breadcrumb.Item key="home">
			<Link to="/">Home</Link>
		</Breadcrumb.Item>,
	].concat(extraBreadcrumbItems);
	return (
		<div className="demo">
			<div className="demo-nav">
				<Link to="/">Home</Link>
				<Link to="/apps">Application List</Link>
			</div>
			<Routes>
				<Route path="/apps" element={<Apps />} />
				<Route path="*" element={<span>Home Page</span>} />
			</Routes>
			<Alert
				style={{
					margin: '16px 0',
				}}
				message="Click the navigation above to switch:"
			/>
			<Breadcrumb>{breadcrumbItems}</Breadcrumb>
		</div>
	);
};

const App = () => (
	<HashRouter>
		<Home />
	</HashRouter>
);

export default App;
```

```css
.demo {
	margin: 16px;
}
.demo-nav {
	height: 30px;
	line-height: 30px;
	margin-bottom: 16px;
	background: #f8f8f8;
}
.demo-nav a {
	line-height: 30px;
	padding: 0 8px;
}
.app-list {
	margin-top: 16px;
}
```
