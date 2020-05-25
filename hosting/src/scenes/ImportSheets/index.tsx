import React from 'react';
import { useHistory } from 'react-router-dom';

import { handleSignOutClick } from 'components/SignOut';
import * as dropbox from 'services/dropbox';

const handleClick = async () => {
	const result = await dropbox.ls();
	console.log('result', result);
};

const ImportSheets: React.FC = () => {
	const history = useHistory();
	return (
		<>
			<button onClick={() => handleSignOutClick(history)}>Sign Out</button>
			<p>Import Sheets</p>
			<button onClick={handleClick}>dropbox</button>
		</>
	);
};

export default ImportSheets;
