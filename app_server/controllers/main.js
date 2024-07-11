/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Dhoni' });
};
module.exports = {
    index
    };