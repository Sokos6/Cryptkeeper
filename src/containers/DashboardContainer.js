import '../styles/Dashboard.css';

import * as api from '../data/api';

api.getData();

const DashboardContainer = () => {
	return (
		<div className="DashboardContainer">
			<header className="DashboardContainer-header">
				<h1>CRYPTKEEPER</h1>
			</header>
			<p className="DashboardContainer-intro">Cyrptocurrency Price, Sentiment and More...</p>
		</div>
	);
};

export default DashboardContainer;
