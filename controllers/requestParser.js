

exports.parseJsonPayload = function (req, res) {
    let payload = req.body.payload;
    let responseObj = { "response": [] };
    if (payload)
        payload.forEach(element => {
            if ((element.workflow && element.workflow == 'completed') && (element.type && element.type == 'htv')) {
                let elementObj = {};
                elementObj.concataddress = concataddress(element.address);
                elementObj.type = element.type;
                elementObj.workflow = element.workflow;
                responseObj.response.push(elementObj);
            }
        });
    res.send(responseObj);
}


let concataddress = (address) => {
    let inlineAddress = '';
    if (address)
        inlineAddress = `${handleEmptyAddress(address.buildingNumber)} ${handleEmptyAddress(address.street)} ${handleEmptyAddress(address.suburb)} ${handleEmptyAddress(address.state)} ${handleEmptyAddress(address.postcode)}`;
    return inlineAddress;
};

let handleEmptyAddress = (address) => {
    if (!address)
        return '';
    else return address;
};