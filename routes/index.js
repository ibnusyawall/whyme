var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {

  title: 'Halaman Utama',
  nama: "ibnu Syawall",
  asal: "Bogor",
  sekolah: "SMP NEGERI 1 PURWADADI",
  hoby: "Menulis Artikel",
  skill: {
    a: "Java Script",
    b: "PHP",
    c: "HTML",
    d: "NodeJS",
    e: "ExpressJS",
    f: "Bootstrap 4",
    g: "GIT BASH",
    h: "MYSQL",
    i: "Jquery"
  },
  sarana: {
    hp: "Handphone Android"
  },
  sosmed: {
    gmail: "ibnusyawal24@gmail.com",
    whatsapp: "082299265151",
    github: "https://github.com/ibnusyawall/",
    blog: "https://www.syawaltech.zone.id/"
  }

  });
});

module.exports = router;
