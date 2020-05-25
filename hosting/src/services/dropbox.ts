import { Dropbox } from 'dropbox';

const appKey = 'rrwv5gve8qrw8dm';
const appSecret = 'j1wsn0mo0otzr5s';
const accessToken =
	'31B6xuEQpdIAAAAAAAAO3F6OH4YOZdMiR124dn-j4cvytIK9nZ47h-SjJB9llr7G';

export const ls = async () => {
	const dbx = new Dropbox({ accessToken });
	const response = await dbx.filesListFolder({ path: '' });

	return response;
};
