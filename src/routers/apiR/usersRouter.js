import { Router } from 'express';
import { soloLogueadosApi, soloAdmin, soloRoles } from '../../middlewares/autorizar.js';
import { postUserController, getCurrentUserController, getUsersAdminController, getUsersByRolesController } from '../../controllers/apiR.controllers/usersRouter.controller.js';
import { autenticarUsuario } from '../../middlewares/autenticar.js';
export const usersRouter = Router()



usersRouter.post('/', autenticarUsuario, soloRoles(['usuario']), postUserController)



usersRouter.get('/current', autenticarUsuario, soloRoles(['usuario']), getCurrentUserController);



usersRouter.get('/admin', soloRoles(['admin']), getUsersAdminController);



usersRouter.get('/roles', soloRoles(['admin']), getUsersByRolesController);

