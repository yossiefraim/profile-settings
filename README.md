# VOD profile setting WS API

The profile setting WS help you to manage the VOD profile settings. view the settings keys, view one profile setting and sort profiles by age and gender.

Get Setting Options

This function returns all the keys of the profile setting.

after using this function you will know what is the structre of the the profile setting in the json data file.

exemple: { keys: [ "id", "name", "password", "city", "age", "gender" ] }

this function not require any parameters, just use the below URL:

/getAllSettingOptions
Get User setting by Id

This function returns sepcific profile setting by sending an profile_id parameter.

after using this function you will receive a json file with all the user profile details.

the profile_id parameter is integer number and you must sent a known profile_id number esle you will receive an error massge:"{"error":"profile_id parameter invalid"}"

if there is no match profile to the profile_id you will receive error massge : {"error":"profile not found"}

/getUserProfileSetting/profile_id
Get User profile by age and gender

This function returns all profile that Below a certain age and belong to the same gender

This function require 2 parameters, the first to send is age - an integer number.

The second parameter is gender - male or female.

if one of the parameters wrong you will receive an error massge:{"error":"gender parameter invalid"} or {"error":"age parameter invalid"}

if there is no match profile to age and gender parameters you will receive error massge : {"error":"there is no profile match to age and gender parameters"}

/getUserProfileByParams/age/gender

© Shenkar College, Yossi Efraim
