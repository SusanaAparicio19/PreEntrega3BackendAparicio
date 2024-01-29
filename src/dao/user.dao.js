import { model } from 'mongoose';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';

export class UserDAO {
  static async createUser(userData) {
    try {
      userData.password = hashSync(userData.password, genSaltSync(10));
      const user = await model('usuarios').create(userData);
      return user;
    } catch (error) {
      throw new Error('Error al crear usuario en la base de datos');
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await model('usuarios').findOne({ email }).lean();
      return user;
    } catch (error) {
      throw new Error('Error al buscar usuario por email en la base de datos');
    }
  }

  static async updateUserByEmail(email, newData) {
    try {
      const updatedUser = await model('usuarios').findOneAndUpdate(
        { email },
        { $set: newData },
        { new: true }
      );
      return updatedUser;
    } catch (error) {
      throw new Error('Error al actualizar usuario en la base de datos');
    }
  }

  static async deleteUserByEmail(email) {
    try {
      const deletedUser = await model('usuarios').findOneAndDelete({ email });
      return deletedUser;
    } catch (error) {
      throw new Error('Error al eliminar usuario de la base de datos');
    }
  }

 
}
