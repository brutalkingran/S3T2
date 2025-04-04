// Rutas de la API
// rutas API para superhéroes
// 7)

import express from 'express';
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, crearSuperheroeController, actualizarSuperheroeController, borrarSuperheroeIDController, borrarSuperheroeNombreController } from '../controllers/superheroesController.mjs';
import { deleteByIdValidationRules, deleteByNameValidationRules, registerValidationRules, updateValidationRules } from '../validations/validationRules.mjs';
import { handleValidationErrors } from '../validations/errorMiddleware.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

router.post('/heroes/crear-heroe', registerValidationRules(), handleValidationErrors, crearSuperheroeController);

router.put('/heroes/modificar-heroe', updateValidationRules(), handleValidationErrors, actualizarSuperheroeController);

router.delete('/heroes/borrar-id/:id', deleteByIdValidationRules(), handleValidationErrors, borrarSuperheroeIDController);
router.delete('/heroes/borrar-nombre/:nombre', deleteByNameValidationRules(), handleValidationErrors, borrarSuperheroeNombreController);

export default router;