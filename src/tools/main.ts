import read from './reader';
import { format } from 'util';
import { DayResolver } from '../types/types';

export default function easier<T>(f: (input: string) => Promise<T>) {
	return async function (d: number) {
		return format(await f(await read(d)))
	} as DayResolver;
}