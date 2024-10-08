const memberData = [
  { name: "Paul Yoon", pic: "paul.jpg", position: "CFO", id: 1 },
  { name: "Emily Chung", pic: "emily.jpg", position: "CTO", id: 2 },
  { name: "Peter Smith", pic: "peter.jpg", position: "UI Designer", id: 3 },
  { name: "Julia Min", pic: "julia.jpg", position: "Frontend Dev", id: 4 },
  { name: "Michael Hall", pic: "michael.jpg", position: "Backend Dev", id: 5 },
  { name: "Emma Smith", pic: "emma.jpg", position: "Project Manager", id: 6 },
];

const teamList = document.getElementById("team-list");

memberData.forEach((member) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <img src="/public/${member.pic}" alt="${member.name}">
    <strong>${member.name}</strong>
    <span class="position">${member.position}</span>
  `;

  teamList.appendChild(listItem);
});
