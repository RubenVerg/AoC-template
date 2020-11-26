import type * as types from './types/types';
import meow from 'meow';

async function main() {
	const { flags, input } = meow(
		`
		Usage
		$ ts-node . <day[]> [--year <year>]

		Commands
		day: A number (1-25) followed by a or b (first/second part) or 0 for a tester.

		Options
		--year, -y: Do not infer the latest year, but specify one.

		Examples
		$ ts-node . 1a 1b 2a 2b
		1a:\tnull
		1b:\tnull
		2a:\tnull
		2b:\tnull
		(with default code)

		# or

		$ ts-node --year 2015 1a
		1a:\tnull
		$ cat data/1
		<input for 2015 day 1>

		NB
		Edit src/tools/token to export your Session cookie.
		`,
		{
			flags: {
				year: {
					alias: 'y',
					type: 'number'
				}
			}
		}
	)

	for (let day of input.map(i => i.trim().toLowerCase())) {
		const f = (await import(`./${day}`)).default as types.DayResolver;

		console.log(`${day}\t: ${await f(parseInt(day) as types.Day, flags.year as types.Year)}`);
	}
}

main();