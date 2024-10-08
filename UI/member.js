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
      <ul style="position: relative;">
      <img 
        style="object-fit: cover; position: absolute; top: 5px; left: 5px; filter: blur(10px); opacity: 0.8;" 
        src="/public/${member.pic}" 
        alt="${member.name}'s shadow" 
      />
      <img 
      style="object-fit: cover; position: absolute; top: 0; left: 0;" 
      src="/public/${member.pic}" 
      alt="${member.name}" 
      />
        <strong>${member.name}</strong>
        <span class="position">${member.position}</span>
      </ul>
    `;

  teamList.appendChild(listItem);
});
