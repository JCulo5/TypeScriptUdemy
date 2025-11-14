import _ from "lodash";
import { z } from "zod";
import fs from "node:fs";

const numbers = [1, 2, 3, 4, 5];
const dataShema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.string()),
});

type Data = z.infer<typeof dataShema>;
function output(data: Data) {
  console.log(data);
}

const content = JSON.parse(fs.readFileSync("./data.json").toString());
const parsedData = dataShema.parse(content.toString());

const chunkedArr = _.chunk(numbers, 2); // [[1, 2], [3, 4], [5]]
output(parsedData);