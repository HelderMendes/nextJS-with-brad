import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If the Database is  connected already, don't connect again
    if (connected) {
        console.log('The Database "in mongoBD" is already connected ');
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDB is connected...');
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
