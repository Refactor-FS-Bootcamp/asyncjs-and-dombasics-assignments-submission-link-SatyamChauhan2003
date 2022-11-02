const text = [
  `I'm baby master cleanse Brooklyn mlkshk thundercats. Pickled single-origin 
coffee scenester, small batch PBR&B mustache tilde echo park man braid before 
they sold out aesthetic lyft poke. Pabst shaman wolf synth pork belly neutra kale
 chips PBR&B four dollar toast enamel pin direct trade palo santo franzen. Pour-over
  palo santo paleo try-hard squid brunch cornhole tousled skateboard lyft thundercats poutine.`,
  `Raw denim PBR&B selfies, bruh la croix pitchfork butcher narwhal adaptogen salvia gochujang seitan 
  migas hot chicken. Squid godard pork belly, flexitarian waistcoat DSA skateboard hoodie roof party 
  poutine venmo cornhole shoreditch. Leggings austin 8-bit, mlkshk aesthetic swag trust fund wayfarers. 
  Polaroid banh mi farm-to-table, flexitarian kickstarter butcher disrupt air plant knausgaard dreamcatcher 
  snackwave aesthetic. Messenger bag bespoke VHS hella polaroid street art squid small batch woke everyday carry 
  fanny pack adaptogen cliche yes plz lomo. Intelligentsia normcore godard air plant.`,
  `Small batch irony jean shorts banh mi marfa mustache. Taiyaki sustainable hella, street art tbh bicycle rights
   skateboard typewriter tousled swag lomo cred vegan. Dreamcatcher affogato intelligentsia bicycle rights,
    selvage lyft readymade truffaut 3 wolf moon. Semiotics farm-to-table jean shorts seitan freegan live-edge 
    slow-carb cold-pressed praxis green juice bushwick selvage. Vegan vice semiotics migas, air plant readymade
     cold-pressed. Actually bodega boys authentic quinoa.`,
  `Sriracha church-key copper mug praxis plaid viral gentrify, subway tile ascot tousled kale chips ugh
      umami mustache small batch. Lo-fi put a bird on it selfies hella intelligentsia ramps sustainable, 
      heirloom shaman messenger bag cray irony franzen swag. Green juice man bun tattooed YOLO etsy JOMO
       thundercats praxis Brooklyn distillery. Synth celiac vibecession, yuccie sartorial whatever keffiyeh 
       tacos craft beer +1 distillery typewriter iPhone. Post-ironic marfa cornhole crucifix thundercats 
       PBR&B.`,
  `Letterpress keytar kogi umami sartorial big mood tilde prism polaroid craft beer bodega boys affogato
        pitchfork authentic selfies. Pickled heirloom waistcoat viral yr disrupt, tilde activated charcoal vape
         mustache photo booth adaptogen. Shoreditch tofu pinterest single-origin coffee. Art party synth photo booth 
         ugh post-ironic distillery yuccie DSA locavore fixie woke sus freegan.`,
         ` Lo-fi put a bird on it selfies hella intelligentsia ramps sustainable, heirloom shaman messenger bag cray irony 
         franzen swag. Green juice man bun tattooed YOLO etsy JOMO thundercats praxis Brooklyn distillery. Synth celiac
          vibecession, yuccie sartorial whatever keffiyeh tacos craft beer +1 distillery typewriter iPhone. Post-ironic marfa
           cornhole crucifix thundercats PBR&B.`,
           ` bodega boys affogato pitchfork authentic selfies. Pickled heirloom waistcoat viral yr disrupt, tilde
            activated charcoal vape mustache photo booth adaptogen. Shoreditch tofu pinterest single-origin coffee. 
            Art party synth photo booth ugh post-ironic distillery yuccie DSA locavore fixie woke sus freegan.`,
            ` Leggings austin 8-bit, mlkshk aesthetic swag trust fund wayfarers. Polaroid banh mi farm-to-table, flexitarian kickstarter
             butcher disrupt air plant knausgaard dreamcatcher snackwave aesthetic. Messenger bag bespoke VHS hella polaroid street art 
             squid small batch woke everyday carry fanny pack adaptogen cliche yes plz lomo. Intelligentsia normcore godard air plant.`,
             ` small batch PBR&B mustache tilde echo park man braid before they sold out aesthetic lyft poke. Pabst shaman wolf synth pork
              belly neutra kale chips PBR&B four dollar toast enamel pin direct trade palo santo franzen. Pour-over palo santo paleo try-hard
               squid brunch cornhole tousled skateboard lyft thundercats poutine.`,
               `Food truck hammock hoodie, succulents poutine neutra bushwick squid retro iPhone plaid taiyaki. Hot chicken woke sustainable 
               90's four loko DIY cred hexagon fam irony 3 wolf moon austin gluten-free. Craft beer fam glossier umami echo park try-hard viral
                pickled street art. Letterpress freegan taxidermy, chicharrones vaporware kale chips polaroid forage. Four loko woke thundercats, 
                kale chips whatever hexagon deep v street art iPhone raw denim YOLO ennui vinyl tacos etsy. Ascot master cleanse vape drinking vinegar
                 post-ironic hot chicken knausgaard waistcoat truffaut iPhone try-hard gentrify thundercats biodiesel meditation.`
];

const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const numofparaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
  const value = e.target.value;
  numofpara.value = value;
  numofparaRange.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(numofpara.value);
  let tempText = text.slice(0, value);
  tempText = tempText.map((item) => `<p class="result">${item}</p>`).join("");
  result.innerHTML = tempText;
});
numofpara.addEventListener("input", syncParaNumbers);
numofparaRange.addEventListener("input", syncParaNumbers);
