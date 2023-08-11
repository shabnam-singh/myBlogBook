import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.dv4ldoo.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        
        console.log('Error while connecting to the database ');
    }
};

export default Connection;