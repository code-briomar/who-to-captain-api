## Probability of a player having a good weekend

### Key Inputs:
1. **Chance of Playing (next/this round)**:
   - `chance_of_playing_this_round`: 75%
   - `chance_of_playing_next_round`: 100%
   - **Weight**: High, as the player must play to perform well.

2. **Form**:
   - `form`: 15.7
   - **Weight**: High, form directly reflects current performance.

3. **Points per Game**:
   - `points_per_game`: 13.5
   - **Weight**: Medium, gives an indication of consistent output.

4. **Expected Performance**:
   - `expected_goals`: 4.88
   - `expected_assists`: 0.16
   - `expected_goal_involvements`: 5.04
   - **Weight**: Medium to high. Expected goals and assists show likely contributions.

5. **Total Points (Season)**:
   - `total_points`: 54
   - **Weight**: Medium. Reflects overall contribution and historical performance.

6. **Minutes Played**:
   - `minutes`: 359
   - **Weight**: Low to Medium. If the player tends to play most of the match, the probability of performing well increases.

7. **Team Difficulty**:
   - `teamDifficulty`: 5
   - **Weight**: Medium to high. A difficult matchup may reduce the probability of a good performance.

8. **Goals/Assists**:
   - `goals_scored`: 9
   - **Weight**: High. A player scoring regularly is more likely to have a good performance.

9. **Bonus Points System (BPS)**:
   - `bps`: 262
   - **Weight**: Medium. High BPS may correlate with good performances leading to bonus points.

### Weights Assignment:
- **Playing chance** (25% weight)
- **Form** (20% weight)
- **Points per game** (15% weight)
- **Expected performance** (15% weight)
- **Total points** (10% weight)
- **Minutes played** (5% weight)
- **Team difficulty** (10% weight)

### Probability Calculation:
Each input will be normalized into a comparable range like 0 to 1, then multiplied by it's assigned weight.

Then compare the weighted average against a threshold to categorize the players performance as "good" or "bad" for the weekend. "good" players are handed over in the result as viable to be sent over the API.

## Example implementation
```javascript
// Define the player dataset (example provided)
const player = {
  chance_of_playing_next_round: 100,
  chance_of_playing_this_round: 75,
  form: 15.7,
  points_per_game: 13.5,
  total_points: 54,
  teamDifficulty: 5,
  goals_scored: 9,
  expected_goals: 4.88,
};

// Step 1: Normalize relevant factors (between 0 and 1)
const normalize = (value, max) => value / max;

// Step 2: Define maximum values for normalization
const MAX_VALUES = {
  chance_of_playing: 100,  // Playing chance is a percentage
  form: 20,                // Assuming form scale is out of 20
  points_per_game: 15,      // Max points per game possible
  total_points: 100,        // Hypothetical max points
  teamDifficulty: 5,        // Difficulty scale out of 5
  goals_scored: 10,         // Max goals scored in previous games
  expected_goals: 5,        // Max expected goals in previous games
};

// Step 3: Normalize each input
const normalizedData = {
  chance_of_playing: normalize(player.chance_of_playing_this_round, MAX_VALUES.chance_of_playing),
  form: normalize(player.form, MAX_VALUES.form),
  points_per_game: normalize(player.points_per_game, MAX_VALUES.points_per_game),
  total_points: normalize(player.total_points, MAX_VALUES.total_points),
  teamDifficulty: normalize(player.teamDifficulty, MAX_VALUES.teamDifficulty),
  goals_scored: normalize(player.goals_scored, MAX_VALUES.goals_scored),
  expected_goals: normalize(player.expected_goals, MAX_VALUES.expected_goals),
};

// Step 4: Define weights for each input based on their importance
const WEIGHTS = {
  chance_of_playing: 0.25,  // 25% weight
  form: 0.20,               // 20% weight
  points_per_game: 0.15,    // 15% weight
  total_points: 0.10,       // 10% weight
  teamDifficulty: 0.10,     // 10% weight
  goals_scored: 0.10,       // 10% weight
  expected_goals: 0.10,     // 10% weight
};

// Step 5: Calculate the weighted average (expected performance)
const calculatePerformance = (data, weights) => {
  let performance = 0;
  for (const key in data) {
    performance += data[key] * weights[key];
  }
  return performance;
};

// Calculate player's probability of a "good weekend"
const probabilityOfGoodWeekend = calculatePerformance(normalizedData, WEIGHTS);

console.log(`Probability of a good weekend: ${(probabilityOfGoodWeekend * 100).toFixed(2)}%`);

```

## CHATGPT Code Throwing in More Factors.

```javascript
const tf = require('@tensorflow/tfjs');

// Function to normalize the data using assumed min-max values
function normalize(value, min, max) {
    return (value - min) / (max - min);
}

// Example player data you provided
const player = {
  chance_of_playing_this_round: 75,
  form: 15.7,
  points_per_game: 13.5,
  total_points: 54,
  teamDifficulty: 5,
  goals_scored: 9,
  expected_goals: 4.88,
  bonus: 11,
  influence: 312.6,
  creativity: 16.5,
  ict_index: 60.2,
  bps: 262
};

// Assumed min-max values based on reasonable football statistics
const minMax = {
  chance_of_playing_this_round: [0, 100],
  form: [0, 20],
  points_per_game: [0, 20],
  total_points: [0, 100],
  teamDifficulty: [1, 5],
  goals_scored: [0, 40],
  expected_goals: [0, 20],
  bonus: [0, 20],
  influence: [0, 500],
  creativity: [0, 100],
  ict_index: [0, 100],
  bps: [0, 500]
};

// Normalize the player's current data using assumed min-max values
const normalizedPlayerData = [
  normalize(player.chance_of_playing_this_round, minMax.chance_of_playing_this_round[0], minMax.chance_of_playing_this_round[1]),
  normalize(player.form, minMax.form[0], minMax.form[1]),
  normalize(player.points_per_game, minMax.points_per_game[0], minMax.points_per_game[1]),
  normalize(player.total_points, minMax.total_points[0], minMax.total_points[1]),
  normalize(player.teamDifficulty, minMax.teamDifficulty[0], minMax.teamDifficulty[1]),
  normalize(player.goals_scored, minMax.goals_scored[0], minMax.goals_scored[1]),
  normalize(player.expected_goals, minMax.expected_goals[0], minMax.expected_goals[1]),
  normalize(player.bonus, minMax.bonus[0], minMax.bonus[1]),
  normalize(player.influence, minMax.influence[0], minMax.influence[1]),
  normalize(player.creativity, minMax.creativity[0], minMax.creativity[1]),
  normalize(player.ict_index, minMax.ict_index[0], minMax.ict_index[1]),
  normalize(player.bps, minMax.bps[0], minMax.bps[1])
];

// Convert normalized data into a tensor for prediction
const normalizedPlayerTensor = tf.tensor2d([normalizedPlayerData]);

// Create the machine learning model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 12, inputShape: [12], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// Compile the model
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

// Since we don't have historical data, you can train the model with dummy data for demonstration purposes
const dummyX = tf.tensor2d([
    [1, 0.8, 0.75, 0.9, 0.6, 0.5, 0.7, 0.8, 0.9, 0.6, 0.8, 0.9],
    [0.5, 0.4, 0.6, 0.7, 0.3, 0.2, 0.4, 0.5, 0.6, 0.3, 0.5, 0.7]
]);
const dummyY = tf.tensor2d([[1], [0]]);

// Train the model with dummy data
async function trainModel() {
  await model.fit(dummyX, dummyY, {
    epochs: 50,
    verbose: 0
  });

  // Predict the player's performance based on normalized data
  const prediction = model.predict(normalizedPlayerTensor);
  const result = prediction.dataSync()[0];

  console.log(`Predicted probability of a good weekend: ${(result * 100).toFixed(2)}%`);
}

trainModel();
```