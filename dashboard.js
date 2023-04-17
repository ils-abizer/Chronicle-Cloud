const ctx = document.getElementById('bar');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["School_Name_01",'School_Name_02','School_Name_03','School_Name_04'],
      datasets: [{
        // label: 'Active',
        data: [180,240,360,280],
        borderWidth: 1,
        backgroundColor:['#F9AC32'],
        barThickness :25
      },
      {
        // label: 'Inactive',
        data: [20,60,40,40],
        borderWidth: 1,
        backgroundColor:['#EEEEEE'],
        barThickness :25
      }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:true,
        plugins :{
            legend :{

                display:false,
            }

        },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
        },
        x: {
            stacked:true,
            grid: {
              display :false
            }
        },
        // layout:{
        //     padding:24
        // }
    },
    responsive:true,
    aspectRatio:2,

      }
    });


 

var sidebar = document.getElementsByClassName("sidebar-menu")[0];
var dropdown = document.getElementsByClassName("drop-down")[0];
function showSidebar() {
  
  sidebar.classList.add("active");
  console.log("LOG")
  hideDropdown()
}

function hideSidebar() {
  sidebar.classList.remove("active");
}


function showDropdown() {
  
  dropdown.classList.add("active");
}

function hideDropdown() {
  dropdown.classList.remove("active");
}

function toggleDropdown() {
  if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
  } else {
      dropdown.classList.add("active");
      hideSidebar()

  }
}


function hideAllElements() {
  hideDropdown()
  hideSidebar()
}


function directTo(link) {
  window.location.href = link;
}
