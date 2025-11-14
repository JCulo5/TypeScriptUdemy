import _ from 'lodash';
import { z } from 'zod';
import fs from 'node:fs';
const numbers = [1, 2, 3, 4, 5];
const dataShema = z.string();
const content = fs.readFileSync('./data.json');
const parsedData = dataShema.parse(content.toString());
const chunkedArr = _.chunk(numbers, 2); // [[1, 2], [3, 4], [5]]   
//# sourceMappingURL=app.js.map