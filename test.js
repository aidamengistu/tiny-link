var db = require('./models');

// db.url.create({ longURL: 'http://www.npr.org/2015/04/02/397097001/local-volunteer-groups-lead-effort-to-help-ukraines-displaced-citizens', shortURL: 'www.npr.org'}).then(function(data) {
//   // you can now access the newly created task via the variable data
// })


db.url
  .findOrCreate({where: { longURL: 'www.newyorktimes.com/a;sldkjf/aslkdfhjlksjdhf/sdlkjf.html' }})
  .spread(function(url, created) {
    console.log(url) // returns info about the user
  })