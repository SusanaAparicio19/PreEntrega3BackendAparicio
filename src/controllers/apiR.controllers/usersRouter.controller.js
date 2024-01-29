import { UsersManager } from '../../models/User.js';
import { UserRepository } from '../../repository/user.repository.js';

export async function postUserController(req, res, next) {
    try {
      const usuario = await UsersManager.create(req.body);
      res.successfullPost(usuario);
    } catch (error) {
      res.failedPost(error); 
      next(error);
    }
  }

export async function getCurrentUserController(req, res) {
  try {
    const user = req.session.user;

    if (user) {
      const usuario = await UserRepository.findUserByEmail(user.email);
      res.successfullGet(usuario);
    } else {
      res.failedGet();
    }
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}


export async function getUsersAdminController(req, res) {
    try {
      const usuario = await UsersManager.find().lean();
      res.successfullGet(usuario);
    } catch (error) {
      return res.status(500).json({ status: 'error', message: error.message });
    }
  }

  
export async function getUsersByRolesController(req, res) {
  try {
    const usuario = await UsersManager.find().lean();
    res.successfullGet(usuario);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
} 