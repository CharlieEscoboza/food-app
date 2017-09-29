const handlers = {
  get: (req, resp) => resp.render('index.html', {title: 'The Food App'})
};

module.exports = handlers;
