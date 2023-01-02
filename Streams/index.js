const { createWriteStream, createReadStream } = require('fs');
const { faker } = require('@faker-js/faker');

function generateData() {
    try {
        let myStream = createWriteStream('./data/tech.json', 'utf-8')
        console.time('time');
        myStream.write('[\n', (err) => {
            if (err) {
                console.log(err);
            }
        });
        for (let index = 0; index <= 1000; index++) {
            const fullName = faker.name.fullName();
            const profilePic = faker.image.avatar();
            const email = faker.internet.email();

            const data = {
                fullName,
                profilePic,
                email
            }
            if (index !== 1000) {
                myStream.write(JSON.stringify(data) + ',\n', (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            } else {
                myStream.write(JSON.stringify(data), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        }
        myStream.write('\n]', (err) => {
            if (err) {
                console.log(err);
            }
        });
        console.timeEnd('time'); // 54ms
    } catch (err) {
        console.log(err);
    }
}

generateData();

function readStream() {
    try {
        const readStream = createReadStream('./data/user.json');
        readStream.on('data', (chunk) => {
            console.time('rtime');
            console.log('-----------------');
            console.log(chunk);
        })

        readStream.on('end', () => {
            console.timeEnd('rtime');
            console.log('-----------------');
            console.log('End of file');
        })
    } catch (err) {
        console.log(err);
    }
}

readStream();
