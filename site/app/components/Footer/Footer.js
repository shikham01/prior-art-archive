import React from 'react';
import { Link } from 'react-router-dom';

require('./footer.scss');

const Footer = function() {
	const links = [
		{
			id: 1,
			title: 'About',
			url: '/about',
		},
		{
			id: 2,
			title: 'Code',
			url: 'https://github.com/underlay/prior-art-archive-site',
		},
		{
			id: 3,
			title: 'Contact',
			url: 'mailto:priorartarchive@media.mit.edu',
		},
		{
			id: 4,
			title: 'Login',
			url: '/login',
		},
	];

	return (
		<div className={'footer'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<ul>
							{links.map((link)=> {
								if (link.url.indexOf('https:') > -1 || link.url.indexOf('mailto:') > -1) {
									return <li key={`footer-item-${link.id}`}><a href={link.url}>{link.title}</a></li>;
								}
								return (
									<li key={`footer-item-${link.id}`}>
										<Link to={link.url}>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
