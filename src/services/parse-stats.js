import cheerio from 'cheerio';
import equalsIgnoreCase from '../utils/equals-ignore-case';
import objectFromHTML from '../utils/object-from-html';

export default function (stats, country) {
  return new Promise((resolve, reject) => {
    const $ = cheerio.load(stats);

    const table = $('#main_table_countries_today>tbody').first();
    const countryStats = table.children().not('tr.row_continent');
    let countryStat = null;

    countryStats
    // eslint-disable-next-line consistent-return
      .each((_, row) => {
        const children = $(row).children();

        if (equalsIgnoreCase(children.eq(1).text(), country)) {
          countryStat = children;

          return false;
        }
      });

    if (countryStat) {
      resolve(objectFromHTML(countryStat, 'minimal'));
    } else {
      reject(Error(`error parsing stat for ${country}`));
    }
  });
}
