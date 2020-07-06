const request = require("request")
const {
  v4: uuidv4
} = require('uuid');

var card_info = {
  "accountNumber": "5355861838818404",
  "cardType": "MASTERCARD",
  "expirationMonth": "04",
  "expirationYear": "2025",
  "cvNumber": "249"
}

var address = {
  "firstName": "Thibault",
  "lastName": "Mathian",
  "address1": "88 le sausey",
  "address2": "",
  "address3": "",
  "state": "",
  "city": "Laval",
  "postalCode": "38190",
  "country": "FR",
  "phoneNumber": "0769933717",
  "email": "thibault.mathian@free.fr"
}

var proxy = {
  domain: "lunar.astroproxies.com",
  port: "7777",
  username: "customer-astro_4198358-cc-fr-sessid-PTHnYsMiKYqW",
  password: "bdc984c262"
}


var bearer_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYmJkMWMyLTNjNDUtNDM5NS04MGMzLWE3YTIyMmJlOTJmMHNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTQwNDY3MjYsImV4cCI6MTU5NDA1MDMyNiwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiNGI2ZmQ4YzEtMDhiZS00NjU5LTg2MDctNjhhNWVkZDBiMzc3IiwibGF0IjoxNTk0MDQxNDIyLCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2UubmlrZWRvdGNvbS53ZWIiLCJzYnQiOiJuaWtlOmFwcCIsInNjcCI6WyJuaWtlLmRpZ2l0YWwiXSwicHJuIjoiMmYyNjdjNGUtNWU1OS00YzllLWI5ZGYtYTI0NGE4ZWQyODE5IiwicHJ0IjoibmlrZTpwbHVzIn0.OjQPMJPo-8p2P20m3PEcngidOFuIMjk-6noLbBMmzoeqt6EwsvzhpTHmnZj4D0pveF05sWHdp92kMrgsiK2F2uh3iC5wHHbxYnQJZWslTLW3MGRNvhlMjmJ3JhqyOZh7RVq1wtvLISe9c5jiDzG9Cyr3GDhdUR1xm2CHR6AW3WV4rjnUMW6UN7N8-MQk0LkFQSbxiT5fxBO6k7QzJYgPGzVKJwZGhDE0WQXgUeUcG54Vn-Q8vhjyz-pjziIPR0-Q3YgyMNZYZRu829ZozOmclHWgw9MRyOmDjauWf7DJu8SbPPq72cDFRaYOLqZP1kY6JOkehDBZcw31IdA8GqfwyA'



function set_payment_method(bearer_token, proxy, card_info, address) {
  let ccinfoid = uuidv4()
  store_headers = {}
  store_payload = card_info
  store_payload.creditCardInfoId = ccinfoid
  store_url = 'https://paymentcc.nike.com/creditcardsubmit/' + ccinfoid + '/store'

  is_valid_headers = {}
  is_valid_url = "https://paymentcc.nike.com/creditcardsubmit/" + ccinfoid + "/isValid?mode=1"

  savepayment_headers = {
    "Authorization": "Bearer " + bearer_token
  }
  savepayment_payload = {
    "type": "CreditCard",
    "creditCardInfoId": ccinfoid,
    "isDefault": true,
    "currency": "USD",
    "billingAddress": address
  }
  savepayment_url = "https://api.nike.com/commerce/storedpayments/consumer/savepayment"

  var proxyUrl = "http://" + proxy.username + ":" + proxy.password + "@" + proxy.domain + ":" + proxy.port;
  var proxiedRequest = request.defaults({
    'proxy': proxyUrl
  });
  proxiedRequest.post({
    url: store_url,
    json: store_payload,
  }, (err, res, body) => {
    if (err != null) {
      console.log("err");
      return
    }
    console.log(res.statusCode, body);

    if (res.statusCode == 201) {
      proxiedRequest.get({
        url: is_valid_url,

      }, (err, res, body) => {
        if (err != null) {
          console.log("err");
          return
        }
        console.log(res.statusCode, body);
        if (res.statusCode == 200) {
          proxiedRequest.post({
            url: savepayment_url,
            headers: savepayment_headers,
            json: savepayment_payload

          }, (err, res, body) => {
            if (err != null) {
              console.log("err");
              return
            }
            console.log(res.statusCode, body);
            if (res.statusCode == 201 && body.status == "success") {
              console.log("successfully add payment method");
            }
          })
        }
      })
    }
  })
}







function set_address(bearer_token, proxy, user_id, address) {
  let headers = {
    'Authorization': 'Bearer ' + bearer_token,
    'x-nike-ux-id':' HlHa2Cje3ctlaOqnxvgZXNaAs7T9nAuH'
  }
  let payload = {
    "code": address.postalCode,
    "country": address.country,
    "line1": address.address1,
    "line2": address.address2,
    "line3": address.address3,
    "locality": address.city,
    "name": {
      "kana": {
        "family": "",
        "given": ""
      },
      "primary": {
        "family": address.lastName,
        "given": address.firstName
      }
    },
    "phone": {
      "primary": address.phoneNumber
    },
    "preferred": true,
    "province": address.province,
    "zone": ""
  }
  var url = "https://api.nike.com/identity/user/v1/"+user_id+"/address"
  var proxyUrl = "http://" + proxy.username + ":" + proxy.password + "@" + proxy.domain + ":" + proxy.port;
  var proxiedRequest = request.defaults({
    'proxy': proxyUrl
  });

  proxiedRequest.post({url:url, headers: headers, json: payload},(err, res, body) => {
    if (err != null) {
      console.log("err");
      return
    }
    console.log(res.statusCode, body);} )



}








set_address(bearer_token, proxy, "2f267c4e-5e59-4c9e-b9df-a244a8ed2819", address)
//set_payment_method(bearer_token, proxy, card_info, address)
