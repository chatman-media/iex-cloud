// tslint:disable-next-line: no-submodule-imports
import 'dotenv/config';
import { splitsBasic } from './endpoints/stock-fundamentals';

export * from './endpoints';
export * from './core';

splitsBasic(`MSFT`, '5y').then(x => console.log(x));
