import React, { Component } from 'react';

import { Grid, Segment } from 'semantic-ui-react';

class Index extends Component {
	render() {
		// console.log('this.props.ticker is::: ', this.props.ticker)
		// console.log('this.props.global is::: ', this.props.global)

		let tickerData = this.props.sticker; //this is an object
		let globalData = this.props.global; //this is an object

		if (tickerData && globalData) {
			var tickerArray = Object.values(tickerData); //create array from object, tickerData

			tickerArray = tickerArray.sort(function (a, b) {
				return a - b;
			});
		}

		return (
			<div id="index">
				<Segment raised>
					<p>INDEX</p>

					<p>
						<a href="#pie1">Pie Chart 1: Top ten cryptocurrencies by market cap</a>
					</p>
					<p>
						<a href="#pie2">Pie Chart 2: Top 100 cryptocurrencies by market cap</a>
					</p>
					<p>
						<a href="#pie3">
							Pie Chart 3: Top three cryptocurrencies, as a fraction of the total market cap
						</a>
					</p>

					<br></br>

					<Grid>
						{tickerArray ? (
							tickerArray.map((coinindex) => (
								<div key={index}>
									<a href={'#' + coinank}>
										<Grid.Column>
											{coinank ? ccoinnk.toLocaleString() : 'no data'}.{' '}
											{coiname ? ccoinme : 'no data'}
										</Grid.Column>
									</a>
								</div>
							))
						) : (
							<div className="center">{'no tickerData...'}</div>
						)}
					</Grid>
				</Segment>
			</div>
		);
	}
}
export default Index;
