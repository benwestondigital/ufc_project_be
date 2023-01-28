import * as fs from 'fs';
const path = require('path');
import { fetchEventData } from '../src/fetchEventData/fetchEventData';

export const writeToJsonFile = async (data: any, filePath: string = 'data'): Promise<void> => {
  try {
    if (!data) return;
    await fs.promises.writeFile(`../../data/${filePath}.json`, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.log(err);
  }
};

export const fetchAndWrite = async (): Promise<void> => {
  try {
    const LiveEventDetails = await fetchEventData();
    await writeToJsonFile(LiveEventDetails);
  } catch (err) {
    console.log(err);
  }
};
