class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
}


veto()
returns "No, I must disagree" ‣
TypeError: polishedBoardMember.veto is not a function
    at Context.<anonymous> (test/indexTest.js:22:34)expect(polishedBoardMember.veto()).to.equal("No, I must disagree")
expect(backSlappingGene.veto()).to.equal("No, I must disagree")
expect(backSlappingGene.veto).to.equal(polishedBoardMember.veto)