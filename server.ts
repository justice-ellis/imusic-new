require('dotenv').config();
import express from 'express';
const app = express();
import path from 'path';
import userRoutes from './routes/userRoutes';
import notificationRoute from './routes/notificationRoute';
import participationRoute from './routes/participantRoutes' 
import inviteRoute from './routes/inviteRoute'
import spotifyRoute from './routes/spotifyRoute';
import messageRoute from './routes/messageRoutes';
import cookieParser from 'cookie-parser';
import roomRoutes from './routes/roomRoutes';
import sequelize from './config/db';

const port =  process.env.PORT || 3001;
var debuger = "";
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));





app.use('/api/v1/users', userRoutes);
app.use('/api/v1/spotify', spotifyRoute);
app.use('/api/v1/message', messageRoute);
app.use('/api/v1/session', roomRoutes);
app.use('/api/v1/notification', notificationRoute);
app.use('/api/v1/participation', participationRoute);
app.use('/api/v1/invitation', inviteRoute);



sequelize.authenticate().then(() => {
    console.log('connected to database successfully!'); 
}).catch((error) => {
    debuger = error;
    console.log('DB connection failed');
});



app.listen(port, () => {
    console.log(`\n ⚡️ App listening at port ${port}!\n`);
});

app.get("/debug",(req,res)=>{
    res.end(debuger);
    });
    


