export function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//Transactions

export  const assets = ["BTC", "ETH", "BNB", "USDT", "ADA", "USDC", "SOL", "XRP", 
                        "LUNA", "DOT", "DOGE", "BUSD", "UST", "SHIB", "WBTC", "MATIC",
                        "AVAX", "NEAR", "CRO", "DAI"]

export const getTransactions = () => {

    const Type = ["Buy", "Sell"]
    const Status = ["Failed", "Pending", "Successful"]

    const data = []

    // create some random data
    for (let i = 1; i <= 100; i++) {
        data.push({
            id: i,
            type: Type[randomInt(0, 1)],
            date:  new Date(new Date() - (36000000 * i)),
            asset: assets[randomInt(0, assets.length - 1)],
            amount: Math.random() * 10,
            status: Status[randomInt(0, 2)]
        });
    }
    return data;

} 


// charts

export const getAssetData = () => {

    return [
        { date: "12:00", open: 819.93, high: 824.4, low: 818.98, close: 824.16, vol: 1287626 },
        { date: "13:00", open: 819.36, high: 823, low: 818.47, close: 818.98, vol: 1313617 },
        { date: "14:00", open: 819, high: 823, low: 816, close: 820.45, vol: 1054732 },
        { date: "15:00", open: 816, high: 820.96, low: 815.49, close: 819.24, vol: 1213324 },
        { date: "16:00", open: 811.7, high: 815.25, low: 809.78, close: 813.67, vol: 1134976 },
        { date: "17:00", open: 809.51, high: 810.66, low: 804.54, close: 809.56, vol: 990391 },
        { date: "18:00", open: 807, high: 811.84, low: 803.19, close: 808.38, vol: 1155990 },
        { date: "19:00", open: 803.99, high: 810.5, low: 801.78, close: 806.97, vol: 1241221 },
        { date: "20:00", open: 799.7, high: 801.67, low: 795.25, close: 801.34, vol: 1184483 },
        { date: "21:00", open: 802.99, high: 806, low: 800.37, close: 801.49, vol: 1463448 }
    ];

}

export const updateData = (data) => {

    const MAX_RANGE = 5

    const lastData = data[data.length - 1]

    let date = parseInt(lastData.date.slice(0, 2))

    if (date === 24) date = "01"
    else {
        date++
        if (date < 10) date = `0${date}`
    }

    const open = lastData.close

    const high = randomInt(open, open + MAX_RANGE)
    const low = randomInt(open - MAX_RANGE, open)
    const close = randomInt(low, high)

    return { date: `${date}:00`, open, high, low, close }
  
}


export const updateLastCandle = (data) => {

    const MAX_RANGE = 5

    const lastData = data[data.length - 1]

    let date = parseInt(lastData.date.slice(0, 2))

    if (date === 24) date = "01"
    else {
        date++
        if (date < 10) date = `0${date}`
    }

    const open = lastData.close

    const high = randomInt(open, open + MAX_RANGE)
    const low = randomInt(open - MAX_RANGE, open)
    const close = randomInt(low, high)

    return { date: `${date}:00`, open, high, low, close }
  
}


// Assets

export const getAssets = () => {

    const data = assets.map((asset) => {

        const priceUpdate = randomInt(-10000, 10000) / 100

        return {asset, priceUpdate }
    })

    return data
}

export const updatePrice = (assets) => {

    const data = assets.map((asset) => {

        const priceUpdate = randomInt(-10000, 10000) / 100

        return {asset: asset.asset, priceUpdate }
    })

    return data
}


/* Trade */

export const guageData = () => {

    const max = randomInt(0, 10000)
    const value = randomInt(0, max)
    const range1 = max * 0.3
    const range2 =  max * 0.6

    return { max, value, range1, range2 }
}