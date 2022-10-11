
const {List, Task} = require('../Model/Schema');


// FOR LISTS 

// get all lists
exports.getlists= async (req,res)=>{
  try{
    const list= await List.find({})
    res.send(list) ;

    // if (list.length > 0){
    //   {    
    //     res.status(200).json({
    //       status: 'success',
    //       results: list.length,
    //       data: {
    //         list,
    //       },
    //     });
    //   }
    // }
    // else {
    //   res.status(400).json({
    //     status: 'success',
    //     data: {
    //       message: 'No titles available in the list',
    //     },
    //   });
    // }
  }
  catch{
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}



// add new lists
exports.postlists= async (req,res)=>{
  try{
    // const Id = await helper.generatelistsId();
    const list= await List.create({
      title: req.body.title,
      // listsID: id
    })
    res.status(201).json({
      status: 'success',
      message: 'new list has been added',
      data: {
        list,
      },
    });
  }
  catch{
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}


// update list title
exports.updatelists= async (req,res)=>{
  try{
    const lists = await List.findOneAndUpdate(
      // { listsID: req.params.id },
      { _id: req.params.id },
      req.body,
      {
        new: true, //to return new doc back
        runValidators: true, //to run the validators which specified in the model
      }
    );
    if (lists != null) {
      res.status(200).json({
        status: 'success',
        message: 'list has been updated',
        data: {
          lists,
        },
      });
    }
  }
  catch{
    res.status(404).json({
      status: 'fail',
      data: {
        message: `No lists available with ID ${req.params.id} `,
      },
    });
  }
}


// delete specific list
exports.deletelists= async (req,res)=>{
try
  {  const deleted = await List.deleteOne({ _id: req.params.id });
  if (deleted.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No list available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `list with ${req.params.id} ID deleted`,
    });
  }
}  
  catch{
    res.status(404).json({
      status: 'fail',
      data: {
        message: `No lists available with ID ${req.params.id} `,
      },
    });
 }
};





// FOR TASKS


// get all tasks from specific list
exports.gettasks= async (req,res)=>{
  try{
    const task= await Task.find({_listId: req.params.listId})
    res.send(task) ;
  }
  catch{
    res.status(404).json({
      status: 'fail',
      // message: err,
    });
  }
}



// add new task to list
exports.posttasks= async (req,res)=>{
  try{
    // const Id = await helper.generatelistsId();
    const task= await Task.create({
      title: req.body.title,
      _listId: req.params.listId
    })
    res.status(201).json({
      status: 'success',
      message: 'new task has been added',
      data: {
        task,
      },
    });
  }
  catch{
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}


// update task from list
exports.updatetasks= async (req,res)=>{
  try{
    const task = await Task.findOneAndUpdate(
      { _listId: req.params.listId ,
       _id: req.params.taskId },
      req.body,
      {
        new: true, //to return new doc back
        runValidators: true, //to run the validators which specified in the model
      }
    );
    if (task != null) {
      res.status(200).json({
        status: 'success',
        message: 'task has been updated',
        data: {
          task,
        },
      });
    }
  }
  catch{
    res.status(404).json({
      status: 'fail',
      data: {
        message: `No tasks available with ID ${req.params.id} `,
      },
    });
  }
}


// delete specific task from list
exports.deletetasks= async (req,res)=>{
try
  {  const deleted = await Task.deleteOne({ _listId: req.params.listId , _id: req.params.taskId });
  if (deleted.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No task available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `task with ${req.params.id} ID deleted`,
    });
  }
}  
  catch{
    res.status(404).json({
      status: 'fail',
      data: {
        message: `No task available with ID ${req.params.id} `,
      },
    });
 }
};


// if route is invalid 
exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};

