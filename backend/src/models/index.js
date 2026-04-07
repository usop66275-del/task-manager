const User = require('../models/users');
const Task = require('../models/task');

//UN usuario tiene muchas tareas
User.hasMany(Task);

// una tarea permanece a un usuario
Task.belongsTo(User);

module.exports = {User,Task};
