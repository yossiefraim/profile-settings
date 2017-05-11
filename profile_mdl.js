const data   = require('./data/profiles.json'),
      config = require('./config.js').events;

exports.getAllSettingOptions = function(){
    var keys    = data.profiles;
    return  Object.keys(keys[0]);
}

exports.getUserProfileSetting = function(profile_id){
    let foundId = false;
    for(let i in data.profiles){
      let profile = data.profiles[i];
      if(profile.id == profile_id){
        foundId=true;
        return profile;
      }
    }
    if(!foundId){
      console.log(profile_id);
      if(isNaN(profile_id)){
        return config.profileId1;//`error:profile_id parameter invalid`;
      }
      else return config.profileId2;//`error:profile not found`;
    }     
}

exports.getUserProfileByParams = function(age,payment){
    let profiles=[];
    let found = false;
    for(var i in data.profiles){
      let profile = data.profiles[i];
      if(profile.age <age && profile.payment.type==payment){
        found=true;
        profiles[i]=profile;
      }
    }
    if(!found){
      if(payment!="credit card"&&payment!="direct debit"){
        return config.payment;//`error:gender parameter invalid`;
      }
      else if(isNaN(age)){
        return config.age;//`error:age parameter invalid`;
      }else
      return config.paramsMatch;//`error:there is no profile match to age and gender parameters`;
    }else{
      let temp = [];
      for(let i of profiles){
        i && temp.push(i);
      }
      return temp;
      temp=[];
    }        
};