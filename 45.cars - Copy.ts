
function storecarinfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any} [] ):object {
    const carinfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carinfo;
};

 let answer = storecarinfo('Honda', 'Civic', {color:'black'}, {features: ['navigation', 'power window']});
console.log(answer);










