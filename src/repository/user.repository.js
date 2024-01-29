import { UserDAO } from '../dao/user.dao.js';
import { UserDTO } from '../dto/user.dto.js';

export class UserRepository {
  static async createUser(userData) {
    try {
      const user = await UserDAO.createUser(userData);
      return new UserDTO(user.email, user.nombre, user.apellido, user.rol);
    } catch (error) {
      throw error;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await UserDAO.findUserByEmail(email);
      return new UserDTO(user.email, user.nombre, user.apellido, user.rol);
    } catch (error) {
      throw error;
    }
  }

  static async updateUserByEmail(email, newData) {
    try {
      const updatedUser = await UserDAO.updateUserByEmail(email, newData);
      return new UserDTO(updatedUser.email, updatedUser.nombre, updatedUser.apellido, updatedUser.rol);
    } catch (error) {
      throw error;
    }
  }

  static async deleteUserByEmail(email) {
    try {
      const deletedUser = await UserDAO.deleteUserByEmail(email);
      return new UserDTO(deletedUser.email, deletedUser.nombre, deletedUser.apellido, deletedUser.rol);
    } catch (error) {
      throw error;
    }
  }


}
