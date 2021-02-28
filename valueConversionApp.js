let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    let conversion = euro*1.2;
    return conversion;
};

function fromDollarToYen(dolar){
    //let conversion = dolar/1.2 * 127.9;
    //let conversion2 = conversion * 127.9;
    return dolar/1.2 * 127.9;
};

function fromYenToPound(yen){
    //let conversion = yen/127.9 *0.8;
    //let conversion2 = conversion*0.8;
    return yen/127.9 *0.8;

};

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};
