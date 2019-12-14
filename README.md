# IEX Cloud API TypeScript Client

[![License Badge][license badge]][LICENSE]

A typescript client for the [IEX Cloud API](https://iexcloud.io/docs/api/).

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configure](#configure)
- [Implementation](#implementation-status)
- [Errors](#errors)
  - [SymbolNotFound](#symbolnotfound)
  - [PermissionDeniedError](#permissiondeniederror)
  - [ClientError](#clienterror)
- [Contributing](#contributing)
- [Copyright and License](#copyright-and-license)

## Installation

Install package

```sh
yarn add eix-ts-client
```

## Usage

### Get an API Token

Create an account on [IEX Cloud](https://iexcloud.io) and get a publishable token from the IEX cloud console. You should use a sandbox token and endpoint for testing.

### Configure

Put API key to your environment file (`.env`):

```sh
IEX_API_TOKEN='pk_XXXX'
IEX_API_SECRET_TOKEN='sk_XXXX'
```

Create a client and call it methods:

```ts
const client = new IEXCloudClient();
console.log(client.metadata());
```

## Implementation Status

Below is a list of the APIs that have and have not been implemented. If
you want a particular API to be developed next, please open an issue.

### Introduction

- [ ] Batch Requests

### Guides

- [ ] Time Series
- [ ] Calendar
- [x] Data Points

### Account

- [x] Message Budget
- [x] Metadata
- [ ] Pay as you go
- [ ] Signed Requests
- [ ] Usage

### API System Metadata

- [ ] Status

### Stock Prices

- [ ] Book
- [ ] Charts — Use historical and intraday price endpoints.
- [ ] Delayed Quote
- [ ] Extended Hours Quote — Use quote endpoint.
- [ ] Historical Prices
- [ ] Intraday Prices
- [ ] Largest Trades
- [ ] Open / Close Price
- [x] OHLC
- [ ] Previous Day Price
- [ ] Price Only
- [ ] Quote
- [ ] Real-time Quote — Use quote endpoint.
- [ ] Volume by Venue

### Stock Profiles

- [ ] Company
- [ ] Insider Roster
- [ ] Insider Summary
- [ ] Insider Transactions
- [ ] Logo
- [ ] Peer Groups

### Stock Fundamentals

- [ ] Balance Sheet
- [ ] Cash Flow
- [ ] Dividends (Basic)
- [ ] Earnings
- [ ] Financials
- [ ] Financials As Reported
- [ ] Income Statement
- [ ] SEC Filings — Use the Financials As Reported endpoint for raw SEC filings data.
- [ ] Splits (Basic)

### Stock Research

- [ ] Advanced Stats
- [ ] Analyst Recommendations
- [ ] Estimates
- [ ] Fund Ownership
- [ ] Institutional Ownership
- [ ] Key Stats
- [ ] Price Target
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

- [ ] Collections
- [ ] Earnings Today
- [ ] IPO Calendar
- [ ] List
- [ ] Market Volume (U.S.)
- [ ] Sector Performance
- [ ] Upcoming Events

### News

- [ ] News
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

- [ ] End of Day Options

### Social Sentiment

- [ ] Social Sentiment

### CEO Compensation

- [ ] CEO Compensation

### Treasuries

- [ ] Daily Treasury Rates

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

- [ ] Search
- [ ] Cryptocurrency Symbols
- [ ] FX Symbols
- [ ] IEX Symbols
- [ ] International Symbols
- [ ] International Exchanges
- [ ] ISIN Mapping
- [ ] Mutual Fund Symbols
- [ ] Options Symbols
- [ ] OTC Symbols
- [ ] Sectors
- [ ] Symbols
- [ ] Tags
- [ ] U.S. Exchanges
- [ ] U.S. Holidays and Trading Days

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

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## License

[iexcloud][] is released under the MIT license. Please see the [LICENSE][] file for more information.

[1]: https://iexcloud.io
[2]: https://github.com/zishe/iex-ts-client/blob/master/examples/iexcloud/README.md
[iexcloud]: https://github.com/zishe/iex-ts-client
[LICENSE]: https://github.com/zishe/iex-ts-client/blob/master/LICENSE
[license badge]: https://img.shields.io/badge/license-MIT-blue.svg
