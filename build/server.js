"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const notificationRoute_1 = __importDefault(require("./routes/notificationRoute"));
const participantRoutes_1 = __importDefault(require("./routes/participantRoutes"));
const inviteRoute_1 = __importDefault(require("./routes/inviteRoute"));
const spotifyRoute_1 = __importDefault(require("./routes/spotifyRoute"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const roomRoutes_1 = __importDefault(require("./routes/roomRoutes"));
const db_1 = __importDefault(require("./config/db"));
const port = process.env.PORT || 3001;
var debuger = "";
// middleware
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//serve static files
app.use('/', express_1.default.static(path_1.default.join(__dirname, '/public')));
app.use('/api/v1/users', userRoutes_1.default);
app.use('/api/v1/spotify', spotifyRoute_1.default);
app.use('/api/v1/message', messageRoutes_1.default);
app.use('/api/v1/session', roomRoutes_1.default);
app.use('/api/v1/notification', notificationRoute_1.default);
app.use('/api/v1/participation', participantRoutes_1.default);
app.use('/api/v1/invitation', inviteRoute_1.default);
db_1.default.authenticate().then(() => {
    console.log('connected to database successfully!');
}).catch((error) => {
    debuger = error;
    console.log('DB connection failed');
});
app.listen(port, () => {
    console.log(`\n ⚡️ App listening at port ${port}!\n`);
});
app.get("/debug", (req, res) => {
    res.end(debuger);
});
//# sourceMappingURL=server.js.map