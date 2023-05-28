"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const querystring_1 = require("querystring");
const User_1 = __importDefault(require("../../../models/User"));
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    const authReq = await fetch("https://id.twitch.tv/oauth2/token", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: (0, querystring_1.stringify)({
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://dev.sighnwaive.com/api/subscribed'
        })
    });
    const authRes = await authReq.json();
    const userReq = await fetch('https://api.twitch.tv/helix/users', {
        headers: {
            "Authorization": `Bearer ${authRes.access_token}`,
            "Client-Id": process.env.TWITCH_CLIENT_ID,
        }
    });
    const userRes = (await userReq.json()).data[0];
    req.session.user = new User_1.default();
    req.session.user.email = userRes.email;
    req.session.user.name = userRes.display_name;
    req.session.user.authenticated = true;
    console.log(req.session.user);
    console.log(chalk_1.default.hex('#9146FF')('Subscriber: '), `${userRes.display_name} subscribed`);
    res.redirect(`/subscribed?display_name=${userRes.display_name}&token=${"token"}`);
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy9zdWJzY3JpYmVkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLGtEQUEwQjtBQUMxQiw2Q0FBd0M7QUFDeEMsZ0VBQXdDO0FBRXhDLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUVqQyxNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRTtRQUMvRCxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQ7UUFDRCxJQUFJLEVBQUUsSUFBQSx1QkFBUyxFQUFDO1lBQ2QsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO1lBQ3ZDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtZQUMvQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjO1lBQzlCLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsWUFBWSxFQUFFLDJDQUEyQztTQUMxRCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFtQnJDLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxFQUFFO1FBQy9ELE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRSxVQUFVLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDakQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO1NBQzFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWtCL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztJQUM5QixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN2QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUM3QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxhQUFhLENBQUMsQ0FBQztJQUN4RixHQUFHLENBQUMsUUFBUSxDQUFDLDRCQUE0QixPQUFPLENBQUMsWUFBWSxVQUFVLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFFcEYsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==