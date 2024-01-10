
# FPL Moneyball API

Upgrade your FPL squad with an API that's more insightful than Meg's love life.

##Deployment
Deployed on : [](https://fpl-moneyball-api.onrender.com)

## Acknowledgements

 - [BetterFPL](https://www.betterfpl.com/)
 - [BulletProof NODE JS](https://github.com/santiq/bulletproof-nodejs)
## API Reference

#### Get future fixture difficulty for your squad

```http
  GET /future-fixtures-difficulty/:IDs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `managerID` | `int` | **Required**. Your FPL ID |
| `eventID` | `int` | **Required**. Game week ID on FPL |

#### Get expected points per player for your squad

```http
  GET /expected-points/:IDs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `managerID` | `int` | **Required**. Your FPL ID |
| `eventID` | `int` | **Required**. Game week ID on FPL |

#### Get form and value form per player for your squad

```http
  GET /player-form/:IDs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `managerID` | `int` | **Required**. Your FPL ID |
| `eventID` | `int` | **Required**. Game week ID on FPL |

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

- FPL Fixture Difficulty Rating
- FPL Players Expected Points (xP)
- FPL Players Recent Form

## WishList

- Extended league tables for head to head.
- This week's transfers made to the league table.
- live gameweek + total points in league table, either as separate columns / making the GW and TOT columns "live"
