import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { handleSignOutClick } from 'components/SignOut';

import * as dropbox from 'services/dropbox';
import { firestore, SHEETS_COLLECTION } from 'services';
import { getSheetData } from 'services/sheets';

const ImportSheets: React.FC = () => {
  const history = useHistory();

  const [files, setFiles] = useState<Array<dropbox.File>>([]);
  useEffect(() => {
    async function getFiles() {
      const files = await dropbox.lsFiles();
      setFiles(files);
    }
    getFiles();
  }, []);

  const [sheets, setSheets] = useState<
    Array<firebase.firestore.DocumentSnapshot>
  >([]);

  useEffect(() => {
    async function getSheets() {
      const snapshot = await firestore
        .collection(SHEETS_COLLECTION)
        // .where()
        .get();

      let sheets: Array<firebase.firestore.DocumentSnapshot> = [];
      snapshot.forEach(doc => sheets.push(doc));
      setSheets(sheets);
    }
    getSheets();
  });

  const handleImportClick = async (file: dropbox.File) => {
    await firestore
      .collection(SHEETS_COLLECTION)
      .doc(file.id)
      .set({ name: file.name });
  };

  const handleDeleteClick = async (sheetId: string) => {
    await firestore
      .collection(SHEETS_COLLECTION)
      .doc(sheetId)
      .delete();
  };

  return (
    <>
      <button onClick={() => handleSignOutClick(history)}>Sign Out</button>
      <p>Import Sheets</p>
      <table>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>{file.name}</td>
              <td>
                <button onClick={() => handleImportClick(file)}>import</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Already Imported</p>
      <table>
        <tbody>
          {sheets.map(getSheetData).map(
            sheet =>
              // @todo: filter out docs that don't exist in the serivce so I
              // don't have to do this check.
              // https://firebase.google.com/docs/firestore/query-data/get-data
              sheet && (
                <tr key={sheet.id}>
                  <td>{sheet.name}</td>
                  <td>
                    <button onClick={() => handleDeleteClick(sheet.id)}>
                      {' '}
                      delete
                    </button>
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </>
  );
};

export default ImportSheets;
