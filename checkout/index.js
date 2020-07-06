const request = require("request")
const {
  v4: uuidv4
} = require('uuid');

const {
  get_bearer_token
} = require("./bearer_get.js")

console.log(uuidv4());



function make_request_post(proxy, url, headers, payload, session, rcallback) {
  var proxyUrl = "http://" + proxy.username + ":" + proxy.password + "@" + proxy.domain + ":" + proxy.port;

  var proxiedRequest = request.defaults({
    'proxy': proxyUrl
  });
  proxiedRequest.post({
    url: url,
    headers: headers,
    json: payload,
    jar: session
  }, (err, res, body) => {
    if (err != null) {
      console.log("err");
      console.log(err.message);;
      return
    }
    if (res.statusCode == 200 || res.statusCode == 202) {
      rcallback(body)
    } else {
      console.log(res.statusCode);
      return
    }
  })

}


function make_request_put(proxy, url, headers, payload, session, rcallback) {
  var proxyUrl = "http://" + proxy.username + ":" + proxy.password + "@" + proxy.domain + ":" + proxy.port;

  var proxiedRequest = request.defaults({
    'proxy': proxyUrl
  });
  proxiedRequest.put({
    url: url,
    headers: headers,
    json: payload,
    jar: session
  }, (err, res, body) => {
    if (err != null) {
      console.log("err");
      return
    }
    if (res.statusCode != 202) {
      console.log(res.statusCode);
      return
    }
    rcallback(body)
  })
}

function make_request_get(proxy, url, headers, payload, session, rcallback) {
  var proxyUrl = "http://" + proxy.username + ":" + proxy.password + "@" + proxy.domain + ":" + proxy.port;

  var proxiedRequest = request.defaults({
    'proxy': proxyUrl
  });
  proxiedRequest.get({
    url: url,
    headers: headers,
    json: payload,
    jar: session
  }, (err, res, body) => {
    if (err != null) {
      console.log("err");
      return
    }
    if (res.statusCode != 200) {
      console.log(res.statusCode);
      console.log(res.body);
      return
    }
    rcallback(body)
  })
}





function get_pay_methods() {
  headers = {
    "authority": "api.nike.com",
    "method": "POST",
    "path": "/commerce/storedpayments/consumer/storedpayments?currency=EUR&includeBalance=true",
    "scheme": "https",
    "accept": "*/*",
    "accept-encoding": "gzip;q=1.0, compress;q=0.5",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-locale": "fr_FR",
    "content-type": "application/json",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-caller-id": "nike:sneakrs:ios:1.1",
  }
  payload = {}
  url = "https://api.nike.com/commerce/storedpayments/consumer/storedpayments?currency=EUR&includeBalance=true"
  make_request_post(proxy, url, headers, payload, session, (body) => {
    console.log("Retrieved payment methods successfully");
    try {
      global.PIDpaymentID = body.payments[0].paymentId
      console.log("Retrieved payment methods successfully");
      console.log(body);
    } catch (err) {
      console.log("Canno't retrieve payment methods");
    }

  })


}







function co1() {
  headers = {
    "authority": "api.nike.com",
    "method": "POST",
    "path": "/payment/options/v2",
    "scheme": "https",
    "accept": "*/*",
    "accept-encoding": "gzip;q=1.0, compress;q=0.5",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-type": "application/json",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-caller-id": "nike:sneakrs:ios:1.1",
  }

  payload = {
    "total": item_info.total,
    "items": [item_info.item_uuid],
    "billingCountry": "FR",
    "currency": "EUR",
    "country": "FR"
  }
  url = "https://api.nike.com/payment/options/v2"
  make_request_post(proxy, url, headers, payload, session, (body) => {
    if (body.paymentOptions === undefined) {
      console.log("No payment options found");
      return
    }
    //console.log(body);
    co2()
  })

}

function co2() {
  headers = {
    "authority": "api.nike.com",
    "method": "POST",
    "path": "/buy/shipping_options/v2",
    "scheme": "https",
    "accept": "application/json",
    //"accept-encoding": "gzip;q=1.0, compress;q=0.5",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-type": "application/json; charset=utf-8",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-caller-id": "nike:sneakrs:ios:1.1",
  }
  global.shippingUUID = uuidv4()
  payload = {
    "items": [{
      "id": shippingUUID,
      "shippingAddress": {
        "postalCode": profile.zip,
        "address1": profile.address,
        "city": profile.city,
        "country": "FR"
      },
      "skuId": item_info.sku_uuid
    }],
    "currency": "EUR",
    "country": "FR"
  }
  url = 'https://api.nike.com/buy/shipping_options/v2'
  make_request_post(proxy, url, headers, payload, session, (body) => {

    console.log(body, body.items)
    if (body.items === undefined) {
      console.log("2/4 checkout (error 613)");
    } else {
      console.log("Checkout 2/3");
      co3()
    }

  })
}


function co3() {
  global.checkoutUUID = uuidv4()
  headers = {
    "authority": "api.nike.com",
    "method": "PUT",
    "path": "/buy/checkout_previews/v2/" + checkoutUUID,
    "scheme": "https",
    "accept": "application/json",
    "accept-encoding": "gzip;q=1.0, compress;q=0.5",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-type": "application/json",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-caller-id": "nike:sneakrs:ios:1.1",
  }
  payload = {
    "request": {
      "email": profile.email,
      "clientInfo": {
        //"deviceId": deviceId,
        "client": "com.nike.commerce.snkrs.v2.ios"
      },
      "currency": "EUR", //todo
      "items": [{
        "recipient": {
          "lastName": profile.lname,
          "firstName": profile.fname
        },
        "shippingAddress": {
          "city": profile.city,
          "address1": profile.address,
          "postalCode": profile.zip,
          "country": "FR"
        },
        "id": shippingUUID,
        "quantity": 1,
        "skuId": item_info.sku_uuid,
        "shippingMethod": "GROUND_SERVICE",
        "contactInfo": {
          "phoneNumber": profile.phone,
          "email": profile.email
        }
      }],
      "channel": "SNKRS",
      "locale": "fr_FR",
      "country": "FR"
    }
  }
  url = 'https://api.nike.com/buy/checkout_previews/v2/' + checkoutUUID
  make_request_put(proxy, url, headers, payload, session, (body) => {
    if (body.status === undefined) {
      console.log("3/4 checkout (error 614)");
    } else {
      console.log("Checkout 3/4")

      co4()
    }

  })
}

function co4() {
  headers = {
    "authority": "api.nike.com",
    "method": "GET",
    "path": "/buy/checkout_previews/v2/jobs/" + checkoutUUID,
    "scheme": "https",
    "accept": "application/json",
    //"accept-encoding":"gzip",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-type": "application/json; charset=UTF-8",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-caller-id": "nike:sneakrs:ios:1.1",
  }
  url = "https://api.nike.com/buy/checkout_previews/v2/jobs/" + checkoutUUID
  make_request_get(proxy, url, headers, payload, session, (body) => {


    if (body.status === undefined) {
      console.log("4/4 checkout (error 614)");
    } else {
      if (body.status == "COMPLETED") {
        console.log("Checkout 4/4 -  Status : " + body.status)
        global.PCS = body.priceChecksum
        check_user()
      } else {
        console.log("Checkout 4/4 - Status : " + body.status)

      }

    }

  })

}

function check_user() {
  headers = {
    "authority": "api.nike.com",
    "method": "POST",
    "path": "/userCheck",
    "scheme": "https",
    "accept": "*/*",
    "accept-encoding": "gzip;q=1.0, compress;q=0.5",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-type": "application/json",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-ux-id": "com.nike.commerce.snkrs.v2.ios",
  }

  payload = {
    "password": profile.password
  }
  url = "https://api.nike.com/userCheck"
  make_request_post(proxy, url, headers, payload, session, (body) => {
    console.log(body);
    pay1()
  })
}


function pay1() {
  headers = {
    "authority": "api.nike.com",
    "method": "POST",
    "path": "/payment/preview/v2",
    "scheme": "https",
    "accept": "application/json; charset=utf-8",
    "accept-encoding": "gzip;q=1.0, compress;q=0.5",
    "accept-language": "fr-FR;q=1.0, en-US;q=0.9, zh-Hans-FR;q=0.8",
    "Authorization": "Bearer " + access_token,
    "content-type": "application/json",
    "user-agent": "SNEAKRS/1.1.3 (iPhone; iOS 11.2.2; Scale/3.00)",
    "x-nike-caller-id": "nike:sneakrs:ios:1.1",
  }

  payload = {
    "total": item_info.total,
    "items": [{
      "productId": item_info.item_uuid,
      "shippingAddress": {
        "city": profile.city,
        "address1": profile.address,
        "postalCode": profile.zip,
        "country": "FR" //todo18
      }
    }],
    "checkoutId": checkoutUUID,
    "currency": "EUR",
    "paymentInfo": [{
      "id": PIDpaymentID,
      "cardType": "MasterCard",
      "accountNumber": "XXXXXXXXXXXX" + payment_info.accountNumber.substring(payment_info.accountNumber.length - 4, payment_info.accountNumber.length),
      "creditCardInfoId": undefined,
      "type": "CreditCard",
      "paymentId": PIDpaymentID,
      "billingInfo": {
        "name": {
          "lastName": profile.lname,
          "firstName": profile.fname
        },
        "contactInfo": {
          "phoneNumber": profile.phone,
          "email": profile.email
        },
        "address": {
          "city": profile.city,
          "address1": profile.address,
          "postalCode": profile.zip,
          "country": "FR"
        }
      }
    }],
    "country": "FR"
  }
  url = "https://api.nike.com/payment/preview/v2"
  make_request_post(proxy, url, headers, payload, session, (body) => {
    console.log(body);
    if (body.id === undefined) {
      console.log("Payment preview canno't be submit")



    } else {
      console.log("Payment 1/2");
      console.log("Status :" + body.status);
      global.paymentID = body.id
      console.log(body)
    }

  })


}









global.proxy = {
  domain: "lunar.astroproxies.com",
  port: "7777",
  username: "customer-astro_4198358-cc-fr-sessid-PTHnYsMiKYqW",
  password: "bdc984c262"
}

global.item_info = {
  item_uuid: "86178f3f-4b86-5c2f-b41f-5545d5e2c536",
  sku_uuid: "6c9f745b-b193-54f4-bb15-d0b6e9a78515",
  total: 100
}

global.profile = {
  'zip': "38190",
  'address': "Le sausey",
  'city': "LAVAL",
  'phone': "0769933717",
  'lname': "MATHIAN",
  'fname': "Thibault",
  'email': "titanmath.t@gmail.com",
  "username": "bastione@gmx.de",
  'password': "Schuhe123#"
}

global.payment_info = {
  "cvNumber": "104",
  "accountNumber": "4596640018475017",
  "expirationYear": "2024",
  "cardType": "Visa", // ? mastercard visa etc? check SNKRS
  "expirationMonth": "12"
}


global.session = request.jar()


get_bearer_token(profile.username, profile.password, proxy).then(bearer_token => {
  global.access_token = bearer_token;
  get_pay_methods()
  co1()
})


console.log('fin fin');
