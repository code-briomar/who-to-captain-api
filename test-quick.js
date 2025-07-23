// Quick test to verify our fixes
import { selectBestCaptain } from "./src/services/utils/selectBestCaptain.js";
import { filterOutAvailablePlayers } from "./src/services/who-to-captain/filterOutAvailablePlayers.js";
import { validateManagerID, validateUsername } from "./src/utils/validation.js";

console.log("Testing selectBestCaptain with missing properties...");
const players = [
    { name: 'Player A', form: 5.0 }, // missing ep_this
    { name: 'Player B', ep_this: 8.0 }, // missing form
    { name: 'Player C', form: 7.0, ep_this: 6.0 }
];

const result = selectBestCaptain(players);
console.log("Result:", result[0]?.name); // Should be Player C

console.log("\nTesting filterOutAvailablePlayers...");
const testPlayers = [
    { name: 'Player A', chance_of_playing_this_round: 100 },
    { name: 'Player B', chance_of_playing_this_round: 25 }
];
const filtered = filterOutAvailablePlayers(testPlayers);
console.log("Filtered players:", filtered.length); // Should be 1

console.log("\nTesting validation...");
console.log("Valid ID:", validateManagerID("123456"));
console.log("Invalid ID:", validateManagerID("invalid"));
console.log("Valid username:", validateUsername("TestUser"));
console.log("Invalid username:", validateUsername("  "));

console.log("\nAll quick tests completed!");