import { Dropbox } from 'dropbox';

const appKey = 'rrwv5gve8qrw8dm';
const appSecret = 'j1wsn0mo0otzr5s';
const accessToken =
  '31B6xuEQpdIAAAAAAAAO3F6OH4YOZdMiR124dn-j4cvytIK9nZ47h-SjJB9llr7G';

export type Folder = DropboxTypes.files.FolderMetadataReference;
export type File = DropboxTypes.files.FileMetadataReference;
export type DeletedFile = DropboxTypes.files.DeletedMetadataReference;

const isFile = (ref: File | DeletedFile | Folder): ref is File =>
  ref['.tag'] === 'file';

export const ls = async () => {
  const dbx = new Dropbox({ accessToken });
  const response: DropboxTypes.files.ListFolderResult = await dbx.filesListFolder(
    { path: '' },
  );

  return response;
};

export const lsFiles = async () => {
  const result = await ls();
  return result.entries.filter(isFile);
};
