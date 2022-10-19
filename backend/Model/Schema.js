const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/TaskManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!')).catch((e)=>{
    console.log('error while connencting database');
    console.log(e);
});

//List Schema
const ListSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required: true,
      minlength: 1,
      trim: true,
    },
  }
);

// task schema

const TaskSchema= new mongoose.Schema({
  title:{
    type:String,
    required: true,
    minlength: 1,
    trim: true,
  },
  _listId:{
    type: mongoose.Types.ObjectId,
    required: true
},
  completed:{
    type:Boolean,
    default:false
  }
}
)

//Model
const List = mongoose.model('List', ListSchema);
const Task = mongoose.model('Task',TaskSchema)


// List.deleteMany({}, function (err) {
//   console.log('List collection removed');
// });
// Task.deleteMany({}, function (err) {
//   console.log('Task collection removed');
// });

module.exports = {
  List, Task
};
