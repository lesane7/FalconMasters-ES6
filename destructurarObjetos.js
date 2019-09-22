"use strict";

var user = {
  names: 'Isaac',
  mail: 'best@edu.co',
  age: 4,
  contry: 'colombia'
}; //modo usual JS
//console.log(user.skill)

var names = user.names,
    skill = user.skill,
    age = user.age;

var viewInfo = function viewInfo(_ref) {
  var names = _ref.names,
      _ref$skill = _ref.skill,
      skill = _ref$skill === void 0 ? 'student' : _ref$skill;
  return console.log("".concat(names, " is most ").concat(skill));
};

viewInfo(user);