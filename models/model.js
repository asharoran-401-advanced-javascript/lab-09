// eslint-disable-next-line strict
'use strict';

//////=================DYNAMIC MODEL =======================//////
class Model {
  constructor(schema){
    this.schema = schema;
  }
  //////============== CRUD ==================/////
  read(id){ /// read the items in the DB by it's Id
    if(id){
      return this.schema.find(id);
    }else{
      return this.schema.find({});
    }
  }
  create(record){ /// create any item in the database
    let newItem = new this.schema(record);
    return newItem.save();
  }
  put(id ,record){ // update item in DB by Id
    return this.schema.findByIdAndUpdate(id , record ,{new : true});
  }
  delete(id){ // Delete item by id
    return this.schema.findByIdAndDelete(id);
  }
}
module.exports = Model;