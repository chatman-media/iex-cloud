# IEX Cloud API TypeScript Client

[![NPM version](https://img.shields.io/npm/v/iex-cloud.svg)](https://www.npmjs.com/package/iex-cloud)
[![License Badge][license badge]][LICENSE]
[![Build Status](https://img.shields.io/travis/zishe/iex-cloud)](https://travis-ci.org/zishe/iex-cloud)
[![Gtihub Actions](https://github.com/zishe/iex-cloud/workflows/Node%20CI/badge.svg)](https://github.com/zishe/iex-cloud/actions/)
[![coverage status][coverage badge]][COVERAGE_URL]
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d04cd86be9db4f9aa5196c43720a841f)](https://app.codacy.com/manual/farvistadw/iex-cloud?utm_source=github.com&utm_medium=referral&utm_content=zishe/iex-cloud&utm_campaign=Badge_Grade_Dashboard)
[![Maintenance Status][statusImage]][statusUrl]
<!-- [![Dependency Status](https://david-dm.org/zishe/iex-cloud.svg)](https://david-dm.org/zishe/iex-cloud)
[![devDependencies Status](https://david-dm.org/zishe/iex-cloud/dev-status.svg)](https://david-dm.org/zishe/iex-cloud?type=dev) -->

A typescript client for the [IEX Cloud API](https://iexcloud.io/docs/api/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Get an API Token](#get-an-api-token)
  - [Configure](#configure)
- [Implementation Status](#implementation-status)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Copyright and License](#copyright-and-license)

## Installation

Install package

```sh
yarn add iex-cloud
```

## Usage

### Get an API Token

Create an account on [IEX Cloud](https://iexcloud.io) and get a publishable token from the IEX cloud console. You should use a sandbox token and endpoint for testing.

### Configure

Put your API tokens to your environment file (`.env`) and specify version (default is `v1`) and IEX environment `cloud` (default) or `sandbox` if needed:

```sh
IEX_API_TOKEN=pk_XXXX
IEX_API_SECRET_TOKEN=sk_XXXX
IEX_API_SECRET_VERSION=beta
IEX_API_ENV=cloud
```

Call any methods:

```ts
import { metadata } from 'iex-cloud';

metadata().then(result => console.log(result));
```

## Implementation Status

Below is a list of the APIs that have and have not been implemented. If you want a particular API to be developed next, please open an issue.

### Introduction

- [ ] Batch Requests

### Guides

- [ ] Time Series
- [ ] Calendar
- [x] Data Points

### Account

- [x] Message Budget
- [x] Metadata
- [x] Pay as you go
- [ ] Signed Requests
- [x] Usage

### API System Metadata

- [x] Status

### Stock Prices

- [x] Book
- [x] Delayed Quote
- [x] Historical Prices
- [x] Intraday Prices
- [x] Largest Trades
- [x] OHLC
- [x] Previous Day Price
- [x] Price Only
- [x] Quote
- [x] Volume by Venue

### Stock Profiles

- [x] Company
- [x] Insider Roster
- [x] Insider Summary
- [x] Insider Transactions
- [x] Logo
- [x] Peer Groups

### Stock Fundamentals

- [x] Balance Sheet
- [x] Cash Flow
- [x] Dividends (Basic)
- [x] Earnings
- [x] Financials
- [ ] Financials As Reported
- [x] Income Statement
- [x] Splits (Basic)

### Stock Research

- [x] Advanced Stats
- [x] Analyst Recommendations
- [x] Estimates
- [x] Fund Ownership
- [x] Institutional Ownership
- [x] Key Stats
- [x] Price Target
- [ ] Technical Indicators

### Corporate Actions

- [x] Bonus Issue
- [x] Distribution
- [x] Dividends
- [x] Return of Capital
- [x] Rights Issue
- [x] Right to Purchase
- [x] Security Reclassification
- [x] Security Swap
- [x] Spinoff
- [x] Splits

### Market Info

- [x] Collections
- [x] Earnings Today
- [x] IPO Calendar
- [x] List
- [x] Market Volume (U.S.)
- [x] Sector Performance
- [x] Upcoming Events

### News

- [x] News
- [ ] Streaming News
- [ ] Historical News

### Cryptocurrency

- [ ] Cryptocurrency Book
- [ ] Cryptocurrency Events
- [ ] Cryptocurrency Price
- [ ] Cryptocurrency Quote

### Forex / Currencies

- [ ] Real-time Streaming
- [ ] Latest Currency Rates
- [ ] Currency Conversion
- [ ] Historical Daily

### Options

- [x] End of Day Options

### Social Sentiment

- [ ] Social Sentiment

### CEO Compensation

- [x] CEO Compensation

### Treasuries

- [x] Daily Treasury Rates

### Commodities

- [ ] Oil Prices
- [ ] Natural Gas Price
- [ ] Heating Oil Prices
- [ ] Jet Fuel Prices
- [ ] Diesel Price
- [ ] Gas Prices
- [ ] Propane Prices

### Economic Data

- [ ] CD Rates
- [ ] Consumer Price Index
- [ ] Credit Card Interest Rate
- [ ] Federal Fund Rates
- [ ] Real GDP
- [ ] Institutional Money Funds
- [ ] Initial Claims
- [ ] Industrial Production Index
- [ ] Mortgage Rates
- [ ] Total Housing Starts
- [ ] Total Payrolls
- [ ] Total Vehicle Sales
- [ ] Retail Money Funds
- [ ] Unemployment Rates
- [ ] US Recession Probabilities

### Reference Data

- [x] Search
- [x] Cryptocurrency Symbols
- [x] FX Symbols
- [x] IEX Symbols
- [x] International Symbols
- [x] International Exchanges
- [x] ISIN Mapping
- [x] Mutual Fund Symbols
- [x] Options Symbols
- [x] OTC Symbols
- [x] Sectors
- [x] Symbols
- [x] Tags
- [x] U.S. Exchanges
- [x] U.S. Holidays and Trading Days

### Investors Exchange Data

- [ ] DEEP
- [ ] DEEP Auction
- [ ] DEEP Book
- [ ] DEEP Operational Halt Status
- [ ] DEEP Official Price
- [ ] DEEP Security Event
- [ ] DEEP Short Sale Price Test Status
- [ ] DEEP System Event
- [ ] DEEP Trades
- [ ] DEEP Trade Break
- [ ] DEEP Trading Status
- [ ] Last
- [ ] Listed Regulation SHO Threshold Securities List
- [ ] Stats Historical Daily
- [ ] Stats Historical Summary
- [ ] Stats Intraday
- [ ] Stats Recent
- [ ] Stats Records
- [ ] TOPS

## Documentation

See documentation [here](https://zishe.github.io/iex-cloud/)

## Contributing

See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Copyright and License

[MIT License](LICENSE.md) Copyright (c) 2019 [Alexander Kireev](https://github.com/zishe/) and [Contributors](https://github.com/zishe/iex-cloud/graphs/contributors).

Data provided for free by [IEX Cloud](https://iexcloud.io), see [terms](https://iexcloud.io/terms/).

[1]: https://iexcloud.io
[2]: https://github.com/zishe/iex-cloud/blob/master/examples/iexcloud/README.md
[iexcloud]: https://github.com/zishe/iex-cloud
[LICENSE]: https://github.com/zishe/iex-cloud/blob/master/LICENSE
[license badge]: https://img.shields.io/badge/license-MIT-blue.svg
[statusUrl]: https://github.com/zishe/iex-cloud/pulse
[statusImage]: https://img.shields.io/github/last-commit/zishe/iex-cloud.svg
[COVERAGE_URL]: https://coveralls.io/github/zishe/iex-cloud?branch=master
[coverage badge]: https://img.shields.io/coveralls/github/zishe/iex-cloud.svg?color=brightgreen
