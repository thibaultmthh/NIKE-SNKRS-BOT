import requests

import uuid


bearer_token ='eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYmJkMWMyLTNjNDUtNDM5NS04MGMzLWE3YTIyMmJlOTJmMHNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTQwNDA2MjIsImV4cCI6MTU5NDA0NDIyMiwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiYjI3YWNhOTctNWNlMC00YTllLTgxZmItMzAzMzhhMTA5OGJiIiwibGF0IjoxNTk0MDQwNjIyLCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiMmYyNjdjNGUtNWU1OS00YzllLWI5ZGYtYTI0NGE4ZWQyODE5IiwicHJ0IjoibmlrZTpwbHVzIn0.oDqTCs8cs43lJVdaDA78Z56QXdQeVKkBIsvin13MIl9AnVXVkKErJjha5Ab2dVCt7ZO1zztFJem2FU75JG5uiVt8BQZiHPw3v9n4SW4Dr49EkL-hvpwdDQxfcnMF9oMNoZU25nLwZ5TjmZon_llqie9xzCsg5ouJhw-7jIJNSm_sNXADe3dCdV4djjvimj4TGov09fJmSaW4kxdpLsb5PswJXfIJZqS9t8iTlEjGibWhKN8JBLDoh8_I3bFaiChYYRbFi1vVAgqDn3AI02y9n_bMgCSSJ3tykRiVmvzORmq8yps-DiHcEXaxA7jEitZ9MlNjU3qA23XBLbGapZxHKQ'

def set_payment_method(bearer_token, card_info, address):
    #1 store
    #2 is isValid
    #3 savepayment
    ccinfoid = str(uuid.uuid4())

    store_headers = {

    }
    store_payload = card_info
    store_payload["creditCardInfoId"] = ccinfoid

    store_url = 'https://paymentcc.nike.com/creditcardsubmit/'+ccinfoid+'/store'


    is_valid_headers = {

    }
    is_valid_url = "https://paymentcc.nike.com/creditcardsubmit/"+ccinfoid+"/isValid?mode=1"


    savepayment_headers = {
        "Authorization": "Bearer "+ bearer_token
    }
    savepayment_payload = {"type":"CreditCard","creditCardInfoId":ccinfoid,"isDefault":True,"currency":"USD","billingAddress":{"firstName":"Thibault","lastName":"okkays","address1":"88 le sausey","address2":"","address3":"","state":"","city":"Laval","postalCode":"38190","country":"FR","phoneNumber":"0769933717","email":"thibault.mathian@free.fr"}}

    savepayment_url = "https://api.nike.com/commerce/storedpayments/consumer/savepayment"

    r1 = requests.post(store_url, headers = store_headers, json= store_payload)
    print(r1)
    r2 = requests.get(is_valid_url)
    print(r2.text)
    r3 = requests.post(savepayment_url, headers=savepayment_headers, json=savepayment_payload)
    print(r3.text)




card_info = {"accountNumber":"5355861838818404","cardType":"MASTERCARD","expirationMonth":"04","expirationYear":"2025","cvNumber":"249"}
