
import { Request, Response } from 'express';
import Person, { IPerson } from '../models/person.model';

// 🔹 GET: Fetch all people
export const getPeople = async (req: Request, res: Response) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

// 🔹 POST: Create a new person
export const createPerson = async (req: Request, res: Response) => {
    const { name, age, gender, mobile } = req.body;
    try {
        const newPerson = new Person({ name, age, gender, mobile });
        await newPerson.save();
        res.status(201).json(newPerson);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// 🔹 PUT: Update a person by ID
export const updatePerson = async (req: Request, res: Response) => {
    try {
        const updatedPerson: IPerson | null = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPerson) {
            res.status(404).json({ message: "Person not found" });
        }
        res.status(200).json(updatedPerson);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// 🔹 DELETE: Delete a person by ID
export const deletePerson = async (req: Request, res: Response) => {
    try {
        const deletedPerson: IPerson | null = await Person.findByIdAndDelete(req.params.id);
        if (!deletedPerson) {
            res.status(404).json({ message: "Person not found" });
        }
        res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};
