// Amazon Location Service resource names:
const mapName = "lyutskomap";
const placesName = "placeindexlyutsko";
const region = "us-east-2";
const apiKey = "v1.public.eyJqdGkiOiI0MGQ5ZGNkMi0zYmI5LTQzMGUtYjY4MS1kNDEyZjRmYjJjYzUifSIEaEQj5-w3R-XeRwuAUCygayzkw9Y24csNhu7KePmR_4lpwqL9znqaoZl0iaCdpzfdLSi4v6Y2Oj8H2WEJbhW8ot_JCK-00ZUyivgv8oCrgCakT26b3LoHdI-vQgWuPmnSu10dpgYxzFTLHrvyy52Gu4ItxNvfJUlPkhx9a39KYbBXzB1FIqQmt-7lEXM7XDQKasd1_CRvzpvxNf0_t9ihLoRZugmeSzFzHYkg2VS64AfQe-OFwTTqYyQ_n3Mc0MdpYlVCcR7W84kxg7N07DvrTpiz_WIS0dOB51Bi8q64ssi3WQmcfDS4yh9aoFPg-J_avMKwMcMsOohZzOVc9GE.NjAyMWJkZWUtMGMyOS00NmRkLThjZTMtODEyOTkzZTUyMTBi"

// Initialize a map
async function initializeMap() {
  const mlglMap = new maplibregl.Map({
    container: "map", // HTML element ID of map element
    center: [-77.03674, 38.891602], // Initial map centerpoint
    zoom: 16, // Initial map zoom
    style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`, // Defines the appearance of the map and authenticates using an API key
  });

  // Add navigation control to the top left of the map
  mlglMap.addControl(new maplibregl.NavigationControl(), "top-left");
  
  return mlglMap;
}

async function main() {
  // Initialize map and Amazon Location SDK client:
  const map = await initializeMap();
}

main();