import React, { Component } from 'react';
import { Radio } from 'antd';

export class RadiogroupWithName extends Component {
	render() {
		return (
			<Radio.Group name="radiogroup" defaultValue={1}>
				<Radio value={1}>A</Radio>
				<Radio value={2}>B</Radio>
				<Radio value={3}>C</Radio>
				<Radio value={4}>D</Radio>
			</Radio.Group>
		);
	}
}

export default RadiogroupWithName;
