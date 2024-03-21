
function addContent(inType) {
  var workColumnString;
  if (inType == 'Mission') {
    workColumnString = `<span class="active">Mission</span><br>Establish a zero-waste, not-for-profit food cooperative with a walkable store front in Lexington Town Center to reduce food packaging waste, plastic use, support local and sustainable producers, and lower the cost of quality unpackaged and bulk goods.`;
  } else if (inType == 'Vision') {
    workColumnString = `<span class="active">Vision</span><br>
                          <ul>
                            <li>Bulk foods available in a walkable/bikeable location.</li>
                            <li>Community owned &ndash; Members own it, not corporations.</li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;Members provide equity by buying shares (full or half)&ndash;  which can be bought back by the coop</li>
                            <li>Community run - members and employees democratically elect governing boards.</li>
                            <li>Anyone can shop it, no membership required.</li>
                            <li>Food, environmental, and social justice remain at the forefront.</li>
                          </ul>
    `;
  } else if (inType == 'Contact') {
    workColumnString = `<span class="active">Contact</span><br>
                        Establish a zero-waste, not-for-profit food cooperative with a walkable store front in Lexington Town Center to reduce food packaging waste, plastic use, support local and sustainable producers, and lower the cost of quality unpackaged and bulk goods.`;
  } else if (inType == 'How') {
    workColumnString = `<span class="active">How</span><br>
                        <ul>
                          <li><bold>Convene a Steering Committee</bold></li>
                          <li>Initial Exploratory Group (5 - 7 people)</li>
                          <li>Select Steering Committee Roles (9 - 12 people)</li>
                        </ul>`;
  } else if (inType == 'Join') {
    workColumnString = `<span class="active">Help us get going!</span><br>
                        <ul>
                          <li><bold>Talent Needed</bold></li>
                          <li>Community Outreach and Branding</li>
                          <li>Health and Food Science</li>
                          <li>Sustainability</li>
                          <li>Ethics</li>
                          <li>Fundraising</li>
                          <li>Business Development</li>
                        </ul>`;
  } else if (inType == 'Home') {
    workColumnString = `<span class="active">Coming Summer 2024!</span><br>In collaboration with Center Goods, we are planning on starting a food co-op in the Town Center of Lexington, MA!`;
  }

  $('#cardTextId').html(workColumnString);
}

//   $('.halfOpacity').hover(function() {
//     $(this).children('.overlay-box').css("cssText", "background-color: rgba(0, 0, 0, 0.75); opacity: 1; -webkit-transition: opacity 1s; transition: opacity 1s; ");
//     // $('.overlay-text').css("cssText", "background-color: rgba(0, 0, 0, 0.25); opacity: 1; -webkit-transition: opacity 1s; transition: opacity 1s; ");
//   });

//   $('.halfOpacity').mouseout(function() {
//     $(this).children('.halfOpacity').css("opacity", "0.25");
//     $('.overlay-box').css("opacity", "0");
//   });
// }

$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});