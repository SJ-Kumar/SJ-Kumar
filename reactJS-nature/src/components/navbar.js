import React, { Component } from 'react';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

const brandStyle = {
	color: '#1e90ff',
};

const navTextStyle = {
	color: 'white',
};

export default class SiteNavbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="dark" expand="md">
					<NavbarBrand style={brandStyle} href="/">Nature</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink style={navTextStyle} href="#">
									First Link
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink style={navTextStyle} href="#">
									Second Link
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle style={navTextStyle} nav caret>
									Drop Down
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle style={navTextStyle} nav caret>
									Drop Down
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
