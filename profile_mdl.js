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
      if(typeof(profile_id)=="number"){
        return config.profileId1;//`error:profile_id parameter invalid`;
      }
      else return config.profileId2;//`error:profile not found`;
    }     
}

exports.getUserProfileByParams = function(age,gender){
    let profiles=[];
    let found = false;
    for(var i in data.profiles){
      let profile = data.profiles[i];
      if(profile.age <age && profile.gender==gender){
        found=true;
        profiles[i]=profile;
      }
    }
    if(!found){
      if(gender!="male"&&gender!="female"){
        return config.gender;//`error:gender parameter invalid`;
      }
      else if(typeof(age)!="number"){
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