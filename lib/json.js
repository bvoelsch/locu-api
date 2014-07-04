var json = {
  purgeEmpty: function(vo){
    for(var key in vo){
      var obj = vo[key];
      if( obj.length == 0 ) {
        delete vo[key];
      }
    }
    return vo;
  }
}
module.exports = json;
