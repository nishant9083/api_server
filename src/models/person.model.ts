import mongoose from 'mongoose';

interface IPerson {
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    mobile: string;
}

const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    mobile: { type: String, required: true, unique: true }
});

const Person = mongoose.model('Person', PersonSchema);
export default Person;
export type { IPerson };

