exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 1,
      first_name: 'Amy',
      last_name: 'Poehler',
      email: 'parksnrec@gmail.com',
      password: 'sebastian',
      monthly_income: 1000000
    }),
    knex('users').insert({
      id: 2,
      first_name: 'Patton',
      last_name: 'Oswald',
      email: 'ratatatatouille@hotmail.com',
      password: 'remy',
      monthly_income: 800000
    }),
    knex('users').insert({
      id: 3,
      first_name: 'Nicholas',
      last_name: 'Sanchez',
      email: 'nsanchez0@wordpress.com',
      password: 'Ydw0rJzm',
      monthly_income: 45000
    }),
    knex('users').insert({
      id: 4,
      first_name: 'Diana',
      last_name: 'Hunt',
      email: 'dhunt1@bandcamp.com',
      password: 'UH1OQW5yG',
      monthly_income: 760000
    }),
    knex('users').insert({
      id: 3,
      first_name: 'Jacqueline',
      last_name: 'Wells',
      email: 'jwells2@pinterest.com',
      password: 'hDCaYxBCXE',
      monthly_income: 55000
    }),
    knex('users').insert({
      id: 4,
      first_name: 'Donna',
      last_name: 'Russell',
      email: 'drussell3@go.com',
      password: 'jwcEYeRc',
      monthly_income: 80000
    }),
    knex('users').insert({
      id: 5,
      first_name: 'Todd',
      last_name: 'Banks',
      email: 'tbanks4@youku.com',
      password: 'JMTzxqX',
      monthly_income: 7800
    }),
    knex('users').insert({
      id: 6,
      first_name: 'Phillip',
      last_name: 'Banks',
      email: 'pbanks5@over-blog.com',
      password: 'hse766zT7iEF',
      monthly_income: 9000
    }),
    knex('users').insert({
      id: 7,
      first_name: 'Mary',
      last_name: 'Allen',
      email: 'mallen6@google.cn',
      password: 'eG6WIdUhz',
      monthly_income: 78000
    }),
    knex('users').insert({
      id: 8,
      first_name: 'Katherine',
      last_name: 'Nelson',
      email: 'knelson7@altervista.org',
      password: 'hcVdeBT4en8K',
      monthly_income: 60000
    }),
    knex('users').insert({
      id: 9,
      first_name: 'Fred',
      last_name: 'Bryant',
      email: 'fbryant8@sfgate.com',
      password: 'itngrFjWj',
      monthly_income: 8400
    }),
    knex('users').insert({
      id: 10,
      first_name: 'Samuel',
      last_name: 'Myers',
      email: 'smyers9@europa.eu',
      password: 'a3gtlTNOW',
      monthly_income: 31000
    }),
    knex('users').insert({
      id: 11,
      first_name: 'Kathy',
      last_name: 'Willis',
      email: 'kwillisa@hugedomains.com',
      password: 'uiJ97iOJitMz',
      monthly_income: 9000
    }),
    knex('users').insert({
      id: 12,
      first_name: 'Shirley',
      last_name: 'Barnes',
      email: 'sbarnesb@nbcnews.com',
      password: '4c4GiPp',
      monthly_income: 190000
    }),
    knex('users').insert({
      id: 13,
      first_name: 'Debra',
      last_name: 'Hawkins',
      email: 'dhawkinsc@addthis.com',
      password: 'DTWFBO',
      monthly_income: 70000
    }),
    knex('users').insert({
      id: 14,
      first_name: 'Lawrence',
      last_name: 'Simpson',
      email: 'lsimpsond@ucla.edu',
      password: '20tPSgZxFr',
      monthly_income: 400000
    }),
    knex('users').insert({
      id: 15,
      first_name: 'Keith',
      last_name: 'Hansen',
      email: 'khansene@php.net',
      password: '18DCbzyZBNU',
      monthly_income: 390000
    }),
    knex('users').insert({
      id: 16,
      first_name: 'Jesse',
      last_name: 'Williams',
      email: 'jwilliamsf@google.com',
      password: 'Gx1AKk',
      monthly_income: 80000
    }),
    knex('users').insert({
      id: 17,
      first_name:' Nicholas',
      last_name: 'Nguyen',
      email: 'nnguyeng@indiegogo.com',
      password: 'LSe54KlbE',
      monthly_income: 360000
    }),
    knex('users').insert({
      id: 18,
      first_name: 'Shirley',
      last_name: 'Owens',
      email: 'sowensh@vimeo.com',
      password: 't1nHIan7LK',
      monthly_income: 89000
    }),
    knex('users').insert({
      id: 19,
      first_name: 'Justin',
      last_name: 'Harrison',
      email: 'jharrisoni@facebook.com',
      password: 'HDeyORU5dClt',
      montly_income: 280000
    }),
    knex('users').insert({
      id: 20,
      first_name: 'Kimberly',
      last_name: 'Jackson',
      email: 'kjacksonj@mapquest.com',
      password:'E3DeONYI',
      monthly_income: 90000
    }),
    knex('users').insert({
      id: 21,
      first_name: 'James',
      last_name: 'Reid',
      email: 'jreidk@cdbaby.com',
      password: '56n6ZDbvJc',
      monthly_income: 480000
    }),
    knex('users').insert({
      id: 22,
      first_name: 'Chloe',
      last_name: 'Wilson',
      email: 'cwilsonl@list-manage.com',
      password: 'vSIlKV',
      monthly_income: 100000
    }),
    knex('users').insert({
      id: 23,
      first_name: 'Angela',
      last_name: 'Nguyen',
      email: 'anguyenm@ustream.tv',
      password:' 0Ob5Hjyedj',
      monthly_income: 75000
    }),
    knex('users').insert({
      id: 24,
      first_name: 'Anne',
      last_name: 'Brown',
      email: 'abrownn@wikimedia.org',
      password: 'IUk9r90He5Nz',
      monthly_income: 230000
    }),
    knex('users').insert({
      id: 25,
      first_name: 'Irene',
      last_name: 'Ray',
      email: 'irayo@over-blog.com',
      password: 'UtJgd8c',
      montly_income: 150000
    }),
    knex('users').insert({
      id: 26,
      first_name: 'Louis',
      last_name: 'Fowler',
      email: 'lfowlerp@tinyurl.com',
      password: 'TN31yDg1O9O',
      monthly_income: 65000
    }),
    knex('users').insert({
      id: 27,
      first_name: 'Ruth',
      last_name: 'Dean',
      email: 'rdeanq@soup.io',
      password: 'tmOYfqWuFn',
      monthly_income: 230000
    }),
    knex('users').insert({
      id: 28,
      first_name: 'Jane',
      last_name: 'Carpenter',
      email: 'jcarpenterr@tamu.edu',
      password: 'b0hsrhDs',
      monthly_income: 78000
    }),
    knex('users').insert({
      id: 29,
      first_name: 'Mary',
      last_name: 'Cole',
      email: 'mcoles@php.net',
      password: 'sYQ2kj0',
      monthly_income: 500000
    }),
    knex('users').insert({
      id: 30,
      first_name: 'George',
      last_name: 'Robinson',
      email: 'grobinsont@china.com.cn',
      password: 'fDSm3Izll3dA',
      monthly_income: 640000
    }]
  ]);
};
