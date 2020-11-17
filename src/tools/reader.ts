import { readFileSync } from 'fs';

export default async function read(day: number) {
	return readFileSync(`data/${day}`, { encoding: 'utf8' });
}