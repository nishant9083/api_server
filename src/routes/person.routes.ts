import express from 'express';
import * as personController from '../controllers/person.controller';

const router = express.Router();

router.get('/', personController.getPeople);
router.post('/person', personController.createPerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

export default router;
