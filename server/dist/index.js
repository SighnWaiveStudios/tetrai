"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./data");
async function startAPI() {
    const { default: apiServer } = await Promise.resolve().then(() => __importStar(require('./api')));
    const host = process.env.TETRAI_HOST || '127.0.0.1';
    const port = parseInt(process.env.TETRAI_PORT) || 3000;
    apiServer.listen(port, host, () => {
        console.log(`Tetrai API Online at ${host}${port ? ':' + port : ''}`);
    });
}
startAPI();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFnQjtBQUVoQixLQUFLLFVBQVUsUUFBUTtJQUVyQixNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLHdEQUFhLE9BQU8sR0FBQyxDQUFDO0lBQ3JELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQztJQUNwRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUE7SUFFdEQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixJQUFJLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQSxHQUFHLEdBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQyxDQUFFO0FBQ04sQ0FBQztBQUVELFFBQVEsRUFBRSxDQUFDIn0=