"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const querystring_1 = require("querystring");
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
    console.log(chalk_1.default.hex('#9146FF')('Subscriber: '), `${userRes.display_name} subscribed`);
    res.redirect(`/subscribed?display_name=${userRes.display_name}`);
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy9zdWJzY3JpYmVkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLGtEQUEwQjtBQUMxQiw2Q0FBd0M7QUFFeEMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRWpDLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxFQUFFO1FBQy9ELE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLG1DQUFtQztTQUNwRDtRQUNELElBQUksRUFBRSxJQUFBLHVCQUFTLEVBQUM7WUFDZCxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7WUFDdkMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CO1lBQy9DLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWM7WUFDOUIsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxZQUFZLEVBQUUsMkNBQTJDO1NBQzFELENBQUM7S0FDSCxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQW1CckMsTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsbUNBQW1DLEVBQUU7UUFDL0QsT0FBTyxFQUFFO1lBQ1AsZUFBZSxFQUFFLFVBQVUsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNqRCxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7U0FDMUM7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBa0IvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxhQUFhLENBQUMsQ0FBQztJQUN4RixHQUFHLENBQUMsUUFBUSxDQUFDLDRCQUE0QixPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUVuRSxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9