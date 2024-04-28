
# Who to Captain API

Fetch a shortlist for your FPL captain for this game week.

## Deployment
Deployed on : [https://fpl-moneyball-api.onrender.com](https://fpl-moneyball-api.onrender.com)

## Acknowledgements

 - [BetterFPL](https://www.betterfpl.com/)
 - [BulletProof NODE JS](https://github.com/santiq/bulletproof-nodejs)
## API Reference

### Fetch a shortlist of 5 players from your squad who could be legible to be captained.
```http
  GET /who-to-captain/:ID
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `managerID` | `int` | **Required**. Your FPL Manager ID |

## Authors

- [@code-briomar](https://www.github.com/code-briomar)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![Framework](https://img.shields.io/badge/Framework-Express-purple.svg)


## Running Locally

To install dependancies

```bash
  yarn
```

To run in dev mode

```bash
  yarn dev
```
## Documentation

[Swagger Documentation]()


## Feedback

If you have any feedback, please reach out to me at kapolonbraine@gmail.com


## Features

- Simple Prediction Model using Javascript's `filter` and `sort` algorithms to obtain a shortlist of 5 'captainable' players.

## WishList

- Analyze players `news` data using the chatgpt api's to improve accuracy of the prediction model.
- Playing Position: Take into account the playing position of players and their role in the team. Certain positions, such as forwards or attacking midfielders, may have higher potential for captaincy points due to goal-scoring opportunities.
- Bonus Point Potential: Factor in players' potential to earn bonus points based on their contributions beyond goals and assists, such as clean sheets for defenders or midfielders.
- Fixture Rotation Risk: Evaluate the risk of fixture rotation for players, especially in teams with deep squads or busy schedules, as it may impact their playing time and captaincy potential.
