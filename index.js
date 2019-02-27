class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  veto = function() {return "No, I must disagree"}
  //this.prototype.veto = function() {return "No, I must disagree"}
}