//המגישות:נור מוהרה +מרח סאלח
const fs = require('fs');
const files = ["f1.txt", "f2.txt", "f3.txt"];

let res = "";
let allLines = [];

for (let i = 0; i < files.length; i++) {
    const TextContent = fs.readFileSync("files/" + files[i], "utf8");
    const lines = TextContent.split("\n");
   allLines[i] = lines;
}

let max = Math.max(...allLines.map(lines => lines.length));

let start = 0;

for (let j = 0; start < max; j++) {
    for (let i = 0; i < files.length; i++) {
        for (let k = start; k < start + j + 1; k++) {
            if (k < allLines[i].length) {
                res += allLines[i][k] + "\n";
            }
        }
    }
    start += j + 1;
}

fs.writeFileSync("result.txt", res);

// התוכנית קוראת 3 קבצים, ומעתיקה את השורות שלהם לקובץ חדש לפי הסדר: תחילה שורה אחת מכל קובץ,
//  אחר כך שתי שורות מכל קובץ, אחר כך שלוש שורות וכן הלאה, עד שכל השורות הועתקו
// אם אחד הקבצים מסתיים ואין בו עוד שורות, ממשיכים להעתיק מהקבצים האחרים שעדיין נשארו בהם שורות.