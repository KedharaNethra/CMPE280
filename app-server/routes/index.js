var express = require('express');
var router = express.Router();
var fs = require('fs');

var ctrlMain      = require("../controllers/main");
var ctrlLogin     = require("../controllers/login");
var ctrlPeople    = require("../controllers/people");
var ctrlAboutUs   = require("../controllers/aboutus");
var ctrlContactUs = require("../controllers/contactus");
var ctrlNews      = require("../controllers/news");

/*
 * GET home page.
 */
router.get('/', ctrlMain.index);

/*
 * GET home page.
 */
router.get('/home', ctrlMain.index);

/*
 * GET main page.
 */
router.get('/main', ctrlMain.main);

/*
 * GET tableau page.
 */
router.get('/', ctrlMain.tableau);

/*
 * GET login page.
 */
router.get('/', ctrlMain.login);

/*
 * GET newuser page.
 */
router.get('/', ctrlMain.newuser);

/********************************* ContactUs *********************************/
/*
 * GET Contactus page.
 */
router.get('/', ctrlMain.draganddrop);

/*
 * GET Contactus page.
 */
router.get('/contactus', ctrlContactUs.contactus);
/********************************* ContactUs *********************************/
/********************************* AboutUs ***********************************/
/*
 * GET AboutUs page.
 */
router.get('/', ctrlMain.tabs);

/*
 * GET AboutUs page.
 */
router.get('/aboutus', ctrlAboutUs.aboutus);
/********************************* AboutUs ***********************************/
/*
 * GET News page.
 */
router.get('/news', ctrlNews.news);
/********************************* AboutUs ***********************************/

/********************************* Login *************************************/
/*
 * post login page.
 */
router.post('/login', ctrlLogin.postlogin);
/********************************* Login *************************************/
/********************************* News *************************************/
/*
 * post login page.
 */
router.post('/news', ctrlNews.news);
/********************************* News *************************************/

/********************************* People ************************************/
/*
 * Get nethra info page.
 */
router.get("/nethra", ctrlPeople.nethra);

/*
 * Get haroon info page.
 */
router.get("/haroon", ctrlPeople.haroon);

/*
 * Get vidhya info page.
 */
router.get("/vidhya", ctrlPeople.vidhya);

/*
 * Get ishaan info page.
 */
router.get("/ishaan", ctrlPeople.ishaan);
/********************************* People ************************************/

module.exports = router;

/*
function(req, res) {
    res.send(fs.readFileSync('people/Vidhya.html', {encoding: 'utf-8'}));
}
*/