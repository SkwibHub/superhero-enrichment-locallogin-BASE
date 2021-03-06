const router = require('express').Router();
const { User } = require('./db/associations.js');
module.exports = router;

// router.use('/google', require('./oauth'));

const userNotFound = next => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
};
router.get('/me', (req, res, next) => {
  if (!req.session.userId) {
    userNotFound(next);
  } else {
    User.findById(req.session.userId)
      .then(user => (user ? res.json(user) : userNotFound(next)))
      .catch(next);
  }
});

router.put('/login', async (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => {
      console.log('USER EXISTS', req.session);
      if (user) {
        req.session.userId = user.id;
        res.json(user);
      } else {
        const err = new Error('Incorrect email or password!');
        err.status = 401;
        next(err);
      }
    })
    .catch(next);
});

router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(204).end();
});
