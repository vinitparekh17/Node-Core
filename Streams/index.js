const { createWriteStream, createReadStream } = require('fs');
const { faker } = require('@faker-js/faker');

// function generateData() {
//     try {
//         let myStream = createWriteStream('./data/user.json', 'utf-8')
//         console.time('time');
//         myStream.write('[\n', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         for (let index = 0; index <= 10000; index++) {
//             const firstName = faker.name.firstName();
//             const lastName = faker.name.lastName();
//             const email = faker.internet.email();
//             const gender = faker.name.sexType();

//             const data = {
//                 firstName,
//                 lastName,
//                 email,
//                 gender
//             }
//             if (index !== 10000) {
//                 myStream.write(JSON.stringify(data) + ',\n', (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 });
//             } else {
//                 myStream.write(JSON.stringify(data), (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }
//         }
//         myStream.write('\n]', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         console.timeEnd('time'); // 54ms
//     } catch (err) {
//         console.log(err);
//     }
// }

function readStream() {
    try {
        const readStream = createReadStream('./data/user.json');
        readStream.on('data', (chunk) => {
            console.time('time');
            console.log('-----------------');
            console.log(chunk);
        })

        readStream.on('end', () => {
            console.timeEnd('time');
            console.log('-----------------');
            console.log('End of file');
        })
    } catch (err) {
        console.log(err);
    }
}

readStream();
