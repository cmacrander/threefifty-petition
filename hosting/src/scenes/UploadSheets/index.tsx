import React from 'react';
import { useHistory } from 'react-router-dom';

import { handleSignOutClick } from 'components/SignOut';

const UploadSheets: React.FC = () => {
	const history = useHistory();
	return (
		<>
			<button onClick={() => handleSignOutClick(history)}>Sign Out</button>
			<p>Upload Sheets</p>
		</>
	);
};

export default UploadSheets;
