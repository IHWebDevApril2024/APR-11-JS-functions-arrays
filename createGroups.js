const team = ["Nisol", "Kai", "Arnaldo", "Mikel", "Álvaro"];

function returnTwoGroups() {
  const group1 = [];

  for (const person of team) {
    const randomIndex = Math.floor(Math.random() * team.length);
    group1.push(team[randomIndex]);
    team.splice(randomIndex, 1);
  }
  console.log(group1);
  console.log(team);
}

returnTwoGroups();
