import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { handleSignOutClick } from 'components/SignOut';

import * as dropbox from 'services/dropbox';

const ImportSheets: React.FC = () => {
  const history = useHistory();

  const [files, setFiles] = useState<Array<dropbox.File> | undefined>();
  useEffect(() => {
    async function getFiles() {
      const files = await dropbox.lsFiles();
      setFiles(files);
    }
    getFiles();
  }, []);

  const sheets: any[] = [];

  return (
    <>
      <button onClick={() => handleSignOutClick(history)}>Sign Out</button>
      <p>Import Sheets</p>
      <ul>{files && files.map(file => <li key={file.id}>{file.name}</li>)}</ul>
      <p>Already Imported</p>
      <ul>
        {sheets.map(sheet => (
          <li key={sheet.id}>{sheet.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ImportSheets;
