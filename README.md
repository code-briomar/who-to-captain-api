
# FPL Moneyball API

Upgrade your FPL squad with an API that's more insightful than Meg's love life.


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

