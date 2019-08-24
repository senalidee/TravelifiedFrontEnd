const config = require('../config/config.json');
import * as Crypto from 'expo-crypto';


export default (function () {

    let sendLoginRequest = async (email, password) => {
        const pwdDigest = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256, password
        );
        let args = {
            email: email,
            password: pwdDigest

        };
        return sendPostRequest(args, 'login');
    };

    let sendRegisterRequest = async (email, fName, lName, phone, country, gender, password, image) => {
        const pwdDigest = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256, password
        );
        let args = {
            email: email,
            firstName: fName,
            lastName: lName,
            phone: phone,
            password: pwdDigest,
            image: image,
            country: country,
            gender: gender,

        };
        return sendPostRequest(args, 'register');
    };

    let sendPostRequest = async (request, endpoint) => {
        try {
            const response = await fetch(config.backEndURL + endpoint, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(request),
            });
            return await response.json();
        } catch (e) {
            console.log(e);
            return undefined;
        }
    };

    let getCountriesList = async () => {
        try {
            const response = await fetch('http://country.io/names.json');
            return await response.json();
        } catch (e) {
            console.log(e);
            return undefined;
        }
    };

    let getImageUrl = function (imageId) {
        return config.backEndURL + 'image?id=' + imageId;
    };

    return {
        sendRegisterRequest: sendRegisterRequest,
        sendPostRequest: sendPostRequest,
        sendLoginRequest: sendLoginRequest,
        getCountriesList: getCountriesList,
        getImageUrl: getImageUrl
    }
}())