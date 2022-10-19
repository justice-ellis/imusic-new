import express from 'express';
import { 
    getAllUsers, 
    registerUser,
    logIn,
    handleRefreshToken, 
    getUserById
} from '../controllers/userController';
import verifyjwt from '../middleware/verifyjwt'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', logIn);
router.get('/refresh', handleRefreshToken);

router.get('/',  getAllUsers);
router.get('/:id',  getUserById);

//router.get('/chat', verifyjwt,getAllUsers); add chat controller

export default router;