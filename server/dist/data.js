const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
const ready = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
ready();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFM0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7SUFDOUIsT0FBTyxFQUFFLFFBQVE7SUFDakIsT0FBTyxFQUFFLG1CQUFtQjtDQUM3QixDQUFDLENBQUM7QUFFSCxNQUFNLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRTtJQUN2QixJQUFJO1FBQ0YsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0tBQzlEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVEO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsS0FBSyxFQUFFLENBQUMifQ==