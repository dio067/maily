import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/Examinations');
  },
);

router.get('/api/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

export default router;
