const router = require('express').Router();
const { route } = require('.');
const {
    createUser,
    getSingleUser,
    SaveBook,
    deleteBook,
    login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, SaveBook);

route.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);
router.route('/books/:bookId').delete(authMiddleware, deleteBook);
module.exports = router;