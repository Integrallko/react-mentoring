import React from 'react';

import GreetingPanel from './components/GreetingPanel/GreetingPanel';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<GreetingPanel />
			</div>
		);
	}
}

export default App;
