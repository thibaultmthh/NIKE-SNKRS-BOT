curl 'https://api.nike.com/commerce/storedpayments/consumer/storedpayments/pid46033d51-b777-442c-bf92-3f9384e05f68' \
  -X 'DELETE' \
  -H 'authority: api.nike.com' \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYmJkMWMyLTNjNDUtNDM5NS04MGMzLWE3YTIyMmJlOTJmMHNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTMxODE5NDQsImV4cCI6MTU5MzE4NTU0NCwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiNGI1ODFjYzMtNTJkZS00YWU2LWJlOTItMjA5NThjYTFmNGJhIiwibGF0IjoxNTkzMTgxOTQ0LCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2UubmlrZWRvdGNvbS53ZWIiLCJzYnQiOiJuaWtlOmFwcCIsInNjcCI6WyJuaWtlLmRpZ2l0YWwiXSwicHJuIjoiMmYyNjdjNGUtNWU1OS00YzllLWI5ZGYtYTI0NGE4ZWQyODE5IiwicHJ0IjoibmlrZTpwbHVzIn0.GPnyGkqfnF7VgAnfeiRdOEErskV25ySyZdlUU6GT1NricgHTLkBDwfY69xOR-EJvv7gwOai9y67uy9uchKiFFmbv4Gct0WGqV5_KXIhMZQZtF6GIZnLs1A-lwCSQrrcxAL7CCegWCA2O4B820flAtloA8rLL-E6pF3bZbxtfa2-HXWkn-Zf5FYL8MsrXhjZWvPJwyBliFZEDitAytk9txmBEn9kBBVE2yhfbNw0xAXAaqcvCjB5V_DnacWflmraBv6LI-XFjrhUQ0hm38--v1ADsytn6pmZXFUGRnrjlk7MLBZL-6MDX4kEiaYdpyQzYPn72MNDhuXxzDooC3L-kKQ' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' \
  -H 'accept: */*' \
  -H 'origin: https://www.nike.com' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.nike.com/member/settings/payment-options' \
  -H 'accept-language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' \
  --compressed

//delete a payment info






curl 'https://api.nike.com/commerce/storedpayments/consumer/savepayment' \
  -H 'authority: api.nike.com' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYmJkMWMyLTNjNDUtNDM5NS04MGMzLWE3YTIyMmJlOTJmMHNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTQwNDA2MjIsImV4cCI6MTU5NDA0NDIyMiwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiYjI3YWNhOTctNWNlMC00YTllLTgxZmItMzAzMzhhMTA5OGJiIiwibGF0IjoxNTk0MDQwNjIyLCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiMmYyNjdjNGUtNWU1OS00YzllLWI5ZGYtYTI0NGE4ZWQyODE5IiwicHJ0IjoibmlrZTpwbHVzIn0.oDqTCs8cs43lJVdaDA78Z56QXdQeVKkBIsvin13MIl9AnVXVkKErJjha5Ab2dVCt7ZO1zztFJem2FU75JG5uiVt8BQZiHPw3v9n4SW4Dr49EkL-hvpwdDQxfcnMF9oMNoZU25nLwZ5TjmZon_llqie9xzCsg5ouJhw-7jIJNSm_sNXADe3dCdV4djjvimj4TGov09fJmSaW4kxdpLsb5PswJXfIJZqS9t8iTlEjGibWhKN8JBLDoh8_I3bFaiChYYRbFi1vVAgqDn3AI02y9n_bMgCSSJ3tykRiVmvzORmq8yps-DiHcEXaxA7jEitZ9MlNjU3qA23XBLbGapZxHKQ' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.nike.com' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.nike.com/member/settings/payment-options' \
  -H 'accept-language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' \
  --data-binary '{"type":"CreditCard","creditCardInfoId":"960e623f-9048-41fa-9491-daec712e2c1a","isDefault":true,"currency":"EUR","billingAddress":{"firstName":"Thibault","lastName":"Mathian","address1":"5706 Sainte-Adeline","address2":"","address3":"","state":"","city":"Plesse","postalCode":"44630","country":"FR","phoneNumber":"0769933717","email":"thibault.mathian@free.fr"}}' \
  --compressed
  // save payment info






  curl 'https://paymentcc.nike.com/creditcardsubmit/4a7ffe2f-9e8b-4a1e-af2d-a22301373cb5/store' \
    -H 'Connection: keep-alive' \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' \
    -H 'Content-Type: application/json; charset=UTF-8' \
    -H 'Accept: */*' \
    -H 'Origin: https://paymentcc.nike.com' \
    -H 'Sec-Fetch-Site: same-origin' \
    -H 'Sec-Fetch-Mode: cors' \
    -H 'Sec-Fetch-Dest: empty' \
    -H 'Referer: https://paymentcc.nike.com/services/default?id=4a7ffe2f-9e8b-4a1e-af2d-a22301373cb5&ctx=checkout&language=fr&maskerEnabled=true' \
    -H 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' \
    -H 'Cookie: s_ecid=MCMID%7C61999593906239560208687190287806569717; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=1994364360%7CMCMID%7C61999593906239560208687190287806569717%7CMCAID%7CNONE%7CMCOPTOUT-1591701906s%7CNONE%7CvVersion%7C3.4.0; AnalysisUserId=5a65de06-8dc7-4ef2-8c6a-fbad3547359e; CONSUMERCHOICE=fr/fr_fr; NIKE_COMMERCE_COUNTRY=FR; NIKE_COMMERCE_LANG_LOCALE=fr_FR; anonymousId=C1E77681DC889C1048DB7F461C477AAA; sq=3; _fbp=fb.1.1591694710745.447931359; _gcl_au=1.1.1954342475.1591694711; _scid=c7a7b3bc-2ec1-49df-b472-99b06aef8852; _pin_unauth=dWlkPU4yUXpNR1l3TUdFdE1UazRNaTAwTVROakxXSTFNV0l0TVdJeU5UVTNNVGswWmpNNA; siteCatalyst_sample=22; dreamcatcher_sample=84; neo_sample=32; guidU=d8739a32-2483-479b-adb6-b0ff4a1a4411; lls=3; snkrsCoachmarksSeen=true; co_size=10; geoloc=cc=FR,rc=IDF,tp=vhigh,tz=GMT+1,la=48.87,lo=2.33; AKA_A2=A; bm_sz=718438319BEE40B80BC3F8F63402AA50~YAAQrZHdWAOF5u1yAQAAxBwJ8QgCXW9L16wiCETTc9gUYLNwH3YNtevSYJhWFcdbq+IAe2I6Dbmk7l+pd+WBysx/yFsHPp/Q8fdQxNRxKTDN72ao7bEaF1VmpaZjqaxT7h+E2RwQI4zjJp0qv+wet+Wck0H8YDuOXTzd5UaepAw/VsfTv8w0QZ/Bt0XtwQ==; ak_bmsc=A4C7EA6ADC9EAC646B7162B09D90CE9558DD91AD756B00006D06F65E345FCC4C~plrf5acFBJ44aEc+yDWAOdfeNnDp5Mj51K4iTh1d1ghp7QEHMbL62jv0EKayM+FBGdzDFAOb3BE7cNqx1Nav96mFxV8/vE6m7Vsa80OMtFsRgbdZWwL0k8+2c1K+5v2N+DZ6hTFhvqWsDT+54QVAl4Ybs2jnFrGUxD1Tnhnag6ImofxYDJchPkV5AMJK3K0VZZwuxnXIpjuOhXmwhl9kV5TJlZzm7FTXfhTpS7+SYcYxc=; _ga=GA1.2.420399649.1593181820; _gid=GA1.2.462702358.1593181820; guidS=235a91db-b9c8-4f60-89a1-85a12972e0c0; guidSTimestamp=1593181825847|1593181859263; cpd=member|nikecom>member>settings; slCheck=L+Evte9cTvHElfzzEatctXUtQ85ASqeX1/zy5J/hr/mjPSOqAjIe1HnjHLkuJYyx7fCL0+bBsb+q/UzDGTCXY0Wv8z7iOwuB2qv6KJwVkNyqOyWFRYGwc9KqV2keLb7U; llCheck=m90KAEXaMffnP6rt3FSZuP0DnJEpj0tfMcmj5GJy7uuewEwLQK3sVchIamjUHfTvW3SwdVfsDqGhYHEcVZEQv84sq5TTPYqX4ZAfPAfxIYo+5fKpxYglZ918Uyz0gz6pv7tMG1J5bIst+NzskitlF4XJ3hWDxqfbm7Q0LC5hH3E=; sls=3; nike_locale=fr/fr_fr; _uetsid=81d911fc-e970-c927-e381-87ee9fbbe0e4; _uetvid=480fd6bc-64f0-63d1-26ce-f2c5694577a3; bc_nike_france_triggermail=%7B%22distinct_id%22%3A%20%22172f10b5101405-0a9c4b6b9f6957-31617402-1fa400-172f10b5102718%22%2C%22ch%22%3A%20%221431855756%22%7D; ppd=member|nikecom>member>settings; RT="z=1&dm=nike.com&si=06af2184-c080-4097-93d0-2f8225b024c0&ss=kbwbb7cq&sl=7&tt=yab&bcn=%2F%2F684dd30c.akstat.io%2F"; bm_sv=8EF137F64776971A5F890C576EC668E2~TAxOOeS947H2zfNMy5CF2KFDQ9dN8GJek1Piv6i4CSYhLJpoAQTOPH+OVP/8zcDrAlv6yHJfn7EW5FLHVD332jyioQ8qOfqBQHFVQCJH0aKhvf5sQWeXcWwpKr7cEs05EV+oUHdq3xNA2p3GfrXZy/BfsBxx3uw3c4dkKEGs+Ek=; _abck=1CB85DF2D2F9F3BFB2020E3EE235CAD3~-1~YAAQrZHdWO/p5u1yAQAAWxsa8QSbSjtsNDX3T0seappvDUY9qxo0MeUamMQlJ9nPdv2ps43EAIR6G5ck2oruh6t4lZ73hbcmj1icSld5PIenj1L9YAUg1FMpA/cUZCCiLP/6tVwsNgvgepjHeu4r7nan3018pEOSN+VKK/FH8ETPVcKjrW8z8b3jdOZfMTWqft9fnG/KP9PNqX1m/P0PRQSdvjlDgYVi/MzOiPhU4nBcmQQhTcOdQS1qhG4rocZWlI96OtoiSM58hWqHtmjJRustV3J7MNSlWGixU5VVrKpzR8IC4HLyJyeRYdHiQtSZPiLN37FgxG+kfVXCUaNTloWxV1IkS9AHCfHBp4/u72s=~-1~-1~-1' \
    --data-binary '{"accountNumber":"5355861838818404","cardType":"MASTERCARD","expirationMonth":"04","expirationYear":"2025","creditCardInfoId":"4a7ffe2f-9e8b-4a1e-af2d-a22301373cb5","cvNumber":"249"}' \
    --compressed
    // set creditCardInfoId and card






//1 store
    curl 'https://paymentcc.nike.com/creditcardsubmit/14d74cec-53d4-498b-ab93-f6b116d16412/store' \
    -XPOST \
    -H 'Accept: */*' \
    -H 'Content-Type: application/json; charset=utf-8' \
    -H 'Origin: https://paymentcc.nike.com' \
    -H 'Cookie: bm_sv=11CB51FD877078E579239B7575975DA0~VU7Db5+T/G3GxmKpJckuhZ87OZCPxruFoVYPdTYA6B54f9LjCraGIHGfFU6Cq208gOjfoY1m5HU+ZgbrPD5PbvbFFTTEmW+2Yxez5g7dAp7srPgvjWjF4i4URjDNcd13lNe+oPRJLK1s37RliibYgOqpqriXYBeLrc3TRjcB+0s=; _abck=C7D08140ADBFEADED0D62B5DC4BDEA5C~-1~YAAQtJHdWCSMiw1zAQAAf6tIJAQS/8Z0Z7s07p7KzRyfQQQrzeF3dMhpI7C4ol9GekMStQimDR6Wn5hcK1QYOvpyap4R3z8nuH27Y5hyMWhXXtulhzW9hC1JiLJWPPYyvFBI9p16uJK1VQ9iFhBrqhAVtM1b8rIf4mpqSZFQktEoqC+vie7LsieZkqi50ewizwKDZXv2SQWyNAFBZInW2s6GLRg0vZL8jF5Q9u5VP6jA/WlefbRNQOIsQO9zOiipD8num3Aive/LEVL0R8eaGws5E/JRghJbCdBxoq33AdLRdJ13bcyaGKj/7sLj8mhjlFDVB2kzjg2oC/7WtiTf7dzMHbYd/fsHCbpL1ywIrUA=~-1~-1~-1; RT="z=1&dm=nike.com&si=2bdc2d2a-ef60-43b1-9e71-8240db08272b&ss=kcail1e7&sl=3&tt=px0&bcn=%2F%2F684dd30b.akstat.io%2F&ld=is1j"; anonymousId=91D4825D737E1B6516D9409D3B7542B4; cpd=member|nikecom>member>settings; geoloc=cc=FR,rc=ARA,tp=vhigh,tz=GMT+1,la=45.75,lo=4.85; llCheck=LiPUfkWAFa+57GDZKDqQBJeTS2DcMVR+IaJYL0BRLM5SKsTo+fgIOvTS4N0AbzDmW3SwdVfsDqGhYHEcVZEQvxRJrd8Ncf9eOq1VGiEaJimzQkrhV+SPkd8AkYa6t24pdLNOyiqMgHEgO9yVp5vg5PyUNvYd+RCicPBJZ7Dhmu8=; lls=3; slCheck=L+Evte9cTvHElfzzEatctXUtQ85ASqeX1/zy5J/hr/nGwnVL2MESPOyqc3tUGZBwjJ1LlL1LAUCLKrSaNJ9Vm2tTzr4+euXlUFJJ9NAqnCihD9aqdaoPBLuJRRIRx2Xt; sls=3; cto_bundle=CYcWul9aazlNQ2Zaa2liSGZPU3FudSUyQmxqWHZqMjJvcjdZV1dCSXUlMkJUUjFOQXplQ2pqbDdlZ1dVMEI2UlFZQVRnQ2s2bEloQXBDZ1pldlJIU1EzeVY5bjNiNUNPSWJWalZMeTlOQnk3enFXWThsd21oT3RaNWxvdmR4TUUlMkJkY21ieFgyaQ; guidSTimestamp=1594040562673|1594040610080; ppd=feed|snkrs>feed; _gcl_au=1.1.442529691.1593967801; _uetsid=c19320e6-3550-1525-d202-323b3d8acb30; _uetvid=5a4beffa-0a27-aee5-eba9-1dbfef4f399b; cid=undefined%7Cundefined; CONSUMERCHOICE=us/en_us; NIKE_COMMERCE_COUNTRY=US; NIKE_COMMERCE_LANG_LOCALE=en_US; guidS=0fa8f4d2-3032-49b1-80a3-f95545bce22a; ak_bmsc=4275B88CCE81CDEABEE0EF5CDE246B4658DD91B4BA360000E220035FD760DB20~plqjt8uJuwupr/VHM68ShBDUddq2BcpkzO4n6knhFMIUiG6zAlLsKQdmBWtBd/gECdSgOLzzK2jhQ5w8sD+Z4vpc9uE4T7LmUkXm4bC9aFWprSdQyDf6i6TMCUQ0b9vdIPSUJ00cAyvUEH30kwq08FywTC6Ocs4suR16Nu3A/rRCbiBEe2r7RN4wAGyH6oJnrw10njiE2JtmzjgjJI7UZUOllakJUTZ1SEwnLwj3YZyV4gLezbxRJRPee2stlbGKOS; AKA_A2=A; bm_sz=1ACF074163AA8C663BCD7F17077C7D91~YAAQtJHdWM07iw1zAQAAAnU4JAgL/1PJx8cNOqTUbzVrzW+QLRtvMQNfzPFOtKU5l7pzToC9HnDwUbNlUONXMY1pNuFaY8zE8/HdKEo0xKdKhmM79QC9wlFVzrI0/p4l+Ncjbvoy2++GpBuRKnpfXEhKpdYDEe/USJHOPtpWfkV3rcD7ZN7qVwR1uaro/g==; guidU=a4aa0614-d217-4308-f895-b14cc8988b5d; dreamcatcher_sample=42; neo_sample=32; siteCatalyst_sample=48; sq=3; AMCVS_F0935E09512D2C270A490D4D%40AdobeOrg=1; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=1994364360%7CMCMID%7C52672658061100045756654761223937512701%7CMCAID%7CNONE%7CMCOPTOUT-1593974980s%7CNONE%7CvVersion%7C3.4.0; s_ecid=MCMID%7C52672658061100045756654761223937512701; AnalysisUserId=2.22.113.159.69701591562516365' \
    -H 'Content-Length: 182' \
    -H 'Accept-Language: fr-fr' \
    -H 'Host: paymentcc.nike.com' \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15' \
    -H 'Referer: https://paymentcc.nike.com/services/default?id=14d74cec-53d4-498b-ab93-f6b116d16412&ctx=checkout&language=en&maskerEnabled=true' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    -H 'Connection: keep-alive' \
    --data-binary '{"accountNumber":"5355861838818404","cardType":"MASTERCARD","expirationMonth":"04","expirationYear":"2025","creditCardInfoId":"14d74cec-53d4-498b-ab93-f6b116d16412","cvNumber":"249"}'


//2 isValid
curl 'https://paymentcc.nike.com/creditcardsubmit/14d74cec-53d4-498b-ab93-f6b116d16412/isValid?mode=1' \
-XGET \
-H 'Cookie: bm_sv=11CB51FD877078E579239B7575975DA0~VU7Db5+T/G3GxmKpJckuhZ87OZCPxruFoVYPdTYA6B54f9LjCraGIHGfFU6Cq208gOjfoY1m5HU+ZgbrPD5PbvbFFTTEmW+2Yxez5g7dAp7DfUjh2Z+l3o35maJMhLLmehFVkSg9mkFOCKyQW9FufGlL02LNeOhpEcaGIyUtpXY=; _abck=C7D08140ADBFEADED0D62B5DC4BDEA5C~-1~YAAQtJHdWCSMiw1zAQAAf6tIJAQS/8Z0Z7s07p7KzRyfQQQrzeF3dMhpI7C4ol9GekMStQimDR6Wn5hcK1QYOvpyap4R3z8nuH27Y5hyMWhXXtulhzW9hC1JiLJWPPYyvFBI9p16uJK1VQ9iFhBrqhAVtM1b8rIf4mpqSZFQktEoqC+vie7LsieZkqi50ewizwKDZXv2SQWyNAFBZInW2s6GLRg0vZL8jF5Q9u5VP6jA/WlefbRNQOIsQO9zOiipD8num3Aive/LEVL0R8eaGws5E/JRghJbCdBxoq33AdLRdJ13bcyaGKj/7sLj8mhjlFDVB2kzjg2oC/7WtiTf7dzMHbYd/fsHCbpL1ywIrUA=~-1~-1~-1; RT="z=1&dm=nike.com&si=2bdc2d2a-ef60-43b1-9e71-8240db08272b&ss=kcail1e7&sl=3&tt=px0&bcn=%2F%2F684dd30b.akstat.io%2F&ld=is1j"; anonymousId=91D4825D737E1B6516D9409D3B7542B4; cpd=member|nikecom>member>settings; geoloc=cc=FR,rc=ARA,tp=vhigh,tz=GMT+1,la=45.75,lo=4.85; llCheck=LiPUfkWAFa+57GDZKDqQBJeTS2DcMVR+IaJYL0BRLM5SKsTo+fgIOvTS4N0AbzDmW3SwdVfsDqGhYHEcVZEQvxRJrd8Ncf9eOq1VGiEaJimzQkrhV+SPkd8AkYa6t24pdLNOyiqMgHEgO9yVp5vg5PyUNvYd+RCicPBJZ7Dhmu8=; lls=3; slCheck=L+Evte9cTvHElfzzEatctXUtQ85ASqeX1/zy5J/hr/nGwnVL2MESPOyqc3tUGZBwjJ1LlL1LAUCLKrSaNJ9Vm2tTzr4+euXlUFJJ9NAqnCihD9aqdaoPBLuJRRIRx2Xt; sls=3; cto_bundle=CYcWul9aazlNQ2Zaa2liSGZPU3FudSUyQmxqWHZqMjJvcjdZV1dCSXUlMkJUUjFOQXplQ2pqbDdlZ1dVMEI2UlFZQVRnQ2s2bEloQXBDZ1pldlJIU1EzeVY5bjNiNUNPSWJWalZMeTlOQnk3enFXWThsd21oT3RaNWxvdmR4TUUlMkJkY21ieFgyaQ; guidSTimestamp=1594040562673|1594040610080; ppd=feed|snkrs>feed; _gcl_au=1.1.442529691.1593967801; _uetsid=c19320e6-3550-1525-d202-323b3d8acb30; _uetvid=5a4beffa-0a27-aee5-eba9-1dbfef4f399b; cid=undefined%7Cundefined; CONSUMERCHOICE=us/en_us; NIKE_COMMERCE_COUNTRY=US; NIKE_COMMERCE_LANG_LOCALE=en_US; guidS=0fa8f4d2-3032-49b1-80a3-f95545bce22a; ak_bmsc=4275B88CCE81CDEABEE0EF5CDE246B4658DD91B4BA360000E220035FD760DB20~plqjt8uJuwupr/VHM68ShBDUddq2BcpkzO4n6knhFMIUiG6zAlLsKQdmBWtBd/gECdSgOLzzK2jhQ5w8sD+Z4vpc9uE4T7LmUkXm4bC9aFWprSdQyDf6i6TMCUQ0b9vdIPSUJ00cAyvUEH30kwq08FywTC6Ocs4suR16Nu3A/rRCbiBEe2r7RN4wAGyH6oJnrw10njiE2JtmzjgjJI7UZUOllakJUTZ1SEwnLwj3YZyV4gLezbxRJRPee2stlbGKOS; AKA_A2=A; bm_sz=1ACF074163AA8C663BCD7F17077C7D91~YAAQtJHdWM07iw1zAQAAAnU4JAgL/1PJx8cNOqTUbzVrzW+QLRtvMQNfzPFOtKU5l7pzToC9HnDwUbNlUONXMY1pNuFaY8zE8/HdKEo0xKdKhmM79QC9wlFVzrI0/p4l+Ncjbvoy2++GpBuRKnpfXEhKpdYDEe/USJHOPtpWfkV3rcD7ZN7qVwR1uaro/g==; guidU=a4aa0614-d217-4308-f895-b14cc8988b5d; dreamcatcher_sample=42; neo_sample=32; siteCatalyst_sample=48; sq=3; AMCVS_F0935E09512D2C270A490D4D%40AdobeOrg=1; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=1994364360%7CMCMID%7C52672658061100045756654761223937512701%7CMCAID%7CNONE%7CMCOPTOUT-1593974980s%7CNONE%7CvVersion%7C3.4.0; s_ecid=MCMID%7C52672658061100045756654761223937512701; AnalysisUserId=2.22.113.159.69701591562516365' \
-H 'Accept: */*' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Host: paymentcc.nike.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15' \
-H 'Accept-Language: fr-fr' \
-H 'Referer: https://paymentcc.nike.com/services/default?id=14d74cec-53d4-498b-ab93-f6b116d16412&ctx=checkout&language=en&maskerEnabled=true' \
-H 'Connection: keep-alive'


//3 savepayment
curl 'https://api.nike.com/commerce/storedpayments/consumer/savepayment' \
-XPOST \
-H 'Accept: application/json' \
-H 'Origin: https://www.nike.com' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYmJkMWMyLTNjNDUtNDM5NS04MGMzLWE3YTIyMmJlOTJmMHNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTQwNDE0MjIsImV4cCI6MTU5NDA0NTAyMiwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiYjdjOWM3YmEtNmZlZi00YjQ5LWIxODAtNGYwYzAwNTE3NTA2IiwibGF0IjoxNTk0MDQxNDIyLCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2UubmlrZWRvdGNvbS53ZWIiLCJzYnQiOiJuaWtlOmFwcCIsInNjcCI6WyJuaWtlLmRpZ2l0YWwiXSwicHJuIjoiMmYyNjdjNGUtNWU1OS00YzllLWI5ZGYtYTI0NGE4ZWQyODE5IiwicHJ0IjoibmlrZTpwbHVzIn0.HI3XSTag5_3A7gJUKVQGyGY17_3XOq0a-AmH7HIgTXHnyP46GbWERVk5mpNpUWu2YcIVjIUqDFDmzzTx9-2lz33bVsV5s7VP5xeFnhByMdd46nGoo0cKS6fcf-2NM-Q5cPTGn8g8HG2Sr094Amnzk1m1Mhu6P2fleHshLCGqnr0soiGdc7RyvNAIJEKWViu8plp7oAr6Xq5bjHuVDrzbt0qT78sCCr2oxVEiE1TSZUqRoxNyReOeUXOq3CP-bJaM2xAd1jHtKUnaZfRS1PN0RLlzFoPdgjI3kBXT_i1CqTzMXUtOfPVRMsw5ErwmgRMNGXzmenIw_6jI5zzRxDR8SA' \
-H 'Referer: https://www.nike.com/member/settings/payment-options' \
-H 'Content-Length: 353' \
-H 'Host: api.nike.com' \
-H 'Accept-Language: fr-fr' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Connection: keep-alive' \
--data-binary '{"type":"CreditCard","creditCardInfoId":"14d74cec-53d4-498b-ab93-f6b116d16412","isDefault":true,"currency":"USD","billingAddress":{"firstName":"Thibault","lastName":"okkays","address1":"88 le sausey","address2":"","address3":"","state":"","city":"Laval","postalCode":"38190","country":"FR","phoneNumber":"0769933717","email":"thibault.mathian@free.fr"}}'












curl 'https://unite.nike.com/tokenRefresh?appVersion=786&experienceVersion=786&uxid=com.nike.commerce.nikedotcom.web&locale=en_US&backendEnvironment=identity&browser=Apple%20Computer%2C%20Inc.&os=undefined&mobile=false&native=false&visit=3&visitor=a539b1fc-2d23-4d16-8707-5ab8bfa2821f' \
-XPOST \
-H 'Accept: */*' \
-H 'Content-Type: application/json' \
-H 'Origin: https://www.nike.com' \
-H 'Cookie: _abck=C7D08140ADBFEADED0D62B5DC4BDEA5C~-1~YAAQpHEWAqZVmxlzAQAAkryWJAQZ0zfKRd4ZviituuEcH1HRq0rpoZw/As5/9A5Y4sHqCZwceOTXtPP7+wdpghkYYtgs2XUhuitpRdoRnkhMhRgcOtOj2tWDUKOCmfjJSdocCkkDS9KdfYPfQqdBi1+WvybDLHuAsIcQGNXhlzP4VNI6C8ayvc3UDGuHm41wXhoOY8zkEpupJafwruW09cNHW/Jm/lcn75OHs7ykmrbGEBZeR4wQ7PNn7jTwrSg34HAGA0vRHrvjIWjiHb3a9a3S2o8AAsGS9ZwyZ8A26sMA8VdBwjTu3O/twRIfNQS6qe78DSD2lxJJwcBdfllBx1lNZNlS8Pt5CiULA88jUnc=~-1~-1~-1; bm_sv=11CB51FD877078E579239B7575975DA0~VU7Db5+T/G3GxmKpJckuhZ87OZCPxruFoVYPdTYA6B54f9LjCraGIHGfFU6Cq208gOjfoY1m5HU+ZgbrPD5PbvbFFTTEmW+2Yxez5g7dAp5cagsPb32lOQNr5waW7RXM11tSvfmKEUm4in8NMNzYzCKbmtfPe80Nx2iH7xyJSIY=; visitData={"visit":"3","visitor":"a539b1fc-2d23-4d16-8707-5ab8bfa2821f"}; RT="z=1&dm=nike.com&si=2bdc2d2a-ef60-43b1-9e71-8240db08272b&ss=kcakklfu&sl=0&tt=0&bcn=%2F%2F685b3919.akstat.io%2F"; cpd=member|nikecom>member>profile; geoloc=cc=FR,rc=ARA,tp=vhigh,tz=GMT+1,la=45.75,lo=4.85; ppd=member|nikecom>member>settings; AKA_A2=A; anonymousId=91D4825D737E1B6516D9409D3B7542B4; llCheck=LiPUfkWAFa+57GDZKDqQBJeTS2DcMVR+IaJYL0BRLM5SKsTo+fgIOvTS4N0AbzDmW3SwdVfsDqGhYHEcVZEQvxRJrd8Ncf9eOq1VGiEaJimzQkrhV+SPkd8AkYa6t24pdLNOyiqMgHEgO9yVp5vg5PyUNvYd+RCicPBJZ7Dhmu8=; lls=3; slCheck=L+Evte9cTvHElfzzEatctXUtQ85ASqeX1/zy5J/hr/nGwnVL2MESPOyqc3tUGZBwjJ1LlL1LAUCLKrSaNJ9Vm2tTzr4+euXlUFJJ9NAqnCihD9aqdaoPBLuJRRIRx2Xt; sls=3; cto_bundle=CYcWul9aazlNQ2Zaa2liSGZPU3FudSUyQmxqWHZqMjJvcjdZV1dCSXUlMkJUUjFOQXplQ2pqbDdlZ1dVMEI2UlFZQVRnQ2s2bEloQXBDZ1pldlJIU1EzeVY5bjNiNUNPSWJWalZMeTlOQnk3enFXWThsd21oT3RaNWxvdmR4TUUlMkJkY21ieFgyaQ; guidSTimestamp=1594040562673|1594040610080; _gcl_au=1.1.442529691.1593967801; _uetsid=c19320e6-3550-1525-d202-323b3d8acb30; _uetvid=5a4beffa-0a27-aee5-eba9-1dbfef4f399b; cid=undefined%7Cundefined; CONSUMERCHOICE=us/en_us; NIKE_COMMERCE_COUNTRY=US; NIKE_COMMERCE_LANG_LOCALE=en_US; guidS=0fa8f4d2-3032-49b1-80a3-f95545bce22a; ak_bmsc=4275B88CCE81CDEABEE0EF5CDE246B4658DD91B4BA360000E220035FD760DB20~plqjt8uJuwupr/VHM68ShBDUddq2BcpkzO4n6knhFMIUiG6zAlLsKQdmBWtBd/gECdSgOLzzK2jhQ5w8sD+Z4vpc9uE4T7LmUkXm4bC9aFWprSdQyDf6i6TMCUQ0b9vdIPSUJ00cAyvUEH30kwq08FywTC6Ocs4suR16Nu3A/rRCbiBEe2r7RN4wAGyH6oJnrw10njiE2JtmzjgjJI7UZUOllakJUTZ1SEwnLwj3YZyV4gLezbxRJRPee2stlbGKOS; bm_sz=1ACF074163AA8C663BCD7F17077C7D91~YAAQtJHdWM07iw1zAQAAAnU4JAgL/1PJx8cNOqTUbzVrzW+QLRtvMQNfzPFOtKU5l7pzToC9HnDwUbNlUONXMY1pNuFaY8zE8/HdKEo0xKdKhmM79QC9wlFVzrI0/p4l+Ncjbvoy2++GpBuRKnpfXEhKpdYDEe/USJHOPtpWfkV3rcD7ZN7qVwR1uaro/g==; guidU=a4aa0614-d217-4308-f895-b14cc8988b5d; dreamcatcher_sample=42; neo_sample=32; siteCatalyst_sample=48; sq=3; AMCVS_F0935E09512D2C270A490D4D%40AdobeOrg=1; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=1994364360%7CMCMID%7C52672658061100045756654761223937512701%7CMCAID%7CNONE%7CMCOPTOUT-1593974980s%7CNONE%7CvVersion%7C3.4.0; s_ecid=MCMID%7C52672658061100045756654761223937512701; anonymousId=F60E5B7027CB78902A61B826E50C0990; AnalysisUserId=2.22.113.159.69701591562516365' \
-H 'Content-Length: 856' \
-H 'Accept-Language: fr-fr' \
-H 'Host: unite.nike.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15' \
-H 'Referer: https://www.nike.com/member/profile' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Connection: keep-alive' \
--data-binary '{"refresh_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5ZjNhOThmLThiMTItNGIwYy1hNTVmLWFiNTVhMWM3MzhmYnNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTQwNDE0MjIsImV4cCI6MTYyNTU3NzQyMiwiaXNzIjoib2F1dGgyaWR0IiwianRpIjoiMTAyZGNmNDEtYWExOC00ZTZkLWExZmUtMjRlMWJmYmEwMTA4IiwibGF0IjoxNTk0MDQxNDIyLCJhdWQiOiJvYXV0aDJpZHQiLCJjbGkiOiJIbEhhMkNqZTNjdGxhT3FueHZnWlhOYUFzN1Q5bkF1SCIsInN1YiI6IjJmMjY3YzRlLTVlNTktNGM5ZS1iOWRmLWEyNDRhOGVkMjgxOSIsInNidCI6Im5pa2U6cGx1cyJ9.PZBypF5vnKwtlRR6RxpVYFqO6shzG5SHEUd68dOfctGkM-hbGpYMWcOQXphoNhJF0bROPI9eLqdTOOxue-vQBDVG3E6l-hN2oNHtv9wldvSatJw_6JVVzqNt4Y9i1EgimnIHkGQloYVUyc9_ZpJ2ZxrmosXIfKyDwgI-1Q20CvzUjMlFEdYFInR_Mk-Mphl4gg3GV1yffSusym-vygT1zI_Peotw6YqjsG9dIwjPKyV4-6KtraUJF0LMvCAEs0_zbULa7CGKAqy44p_GQKjmwcKPMbOEvjcuvJgRM3eNOdY-yiY-TM465L896UHmmNS7kd6QNZefYjTFbnUX4pDjMg","client_id":"HlHa2Cje3ctlaOqnxvgZXNaAs7T9nAuH","grant_type":"refresh_token"}'




curl 'https://api.nike.com/identity/user/v1/2f267c4e-5e59-4c9e-b9df-a244a8ed2819/address' \
-XPOST \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYmJkMWMyLTNjNDUtNDM5NS04MGMzLWE3YTIyMmJlOTJmMHNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE1OTQwNDY3MjYsImV4cCI6MTU5NDA1MDMyNiwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiNGI2ZmQ4YzEtMDhiZS00NjU5LTg2MDctNjhhNWVkZDBiMzc3IiwibGF0IjoxNTk0MDQxNDIyLCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2UubmlrZWRvdGNvbS53ZWIiLCJzYnQiOiJuaWtlOmFwcCIsInNjcCI6WyJuaWtlLmRpZ2l0YWwiXSwicHJuIjoiMmYyNjdjNGUtNWU1OS00YzllLWI5ZGYtYTI0NGE4ZWQyODE5IiwicHJ0IjoibmlrZTpwbHVzIn0.OjQPMJPo-8p2P20m3PEcngidOFuIMjk-6noLbBMmzoeqt6EwsvzhpTHmnZj4D0pveF05sWHdp92kMrgsiK2F2uh3iC5wHHbxYnQJZWslTLW3MGRNvhlMjmJ3JhqyOZh7RVq1wtvLISe9c5jiDzG9Cyr3GDhdUR1xm2CHR6AW3WV4rjnUMW6UN7N8-MQk0LkFQSbxiT5fxBO6k7QzJYgPGzVKJwZGhDE0WQXgUeUcG54Vn-Q8vhjyz-pjziIPR0-Q3YgyMNZYZRu829ZozOmclHWgw9MRyOmDjauWf7DJu8SbPPq72cDFRaYOLqZP1kY6JOkehDBZcw31IdA8GqfwyA' \
-H 'Accept-Language: fr-fr' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Host: api.nike.com' \
-H 'Origin: https://www.nike.com' \
-H 'Content-Length: 263' \
-H 'Connection: keep-alive' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15' \
-H 'Referer: https://www.nike.com/member/settings/addresses' \
-H 'x-nike-ux-id: HlHa2Cje3ctlaOqnxvgZXNaAs7T9nAuH' \
--data-binary '{"code":"38190","country":"FR","line1":"88 le sausey","line2":"","line3":"","locality":"Laval","name":{"kana":{"family":"","given":""},"primary":{"family":"Mthhh","given":"Thibault"}},"phone":{"primary":"0476140098"},"preferred":true,"province":"Isere","zone":""}'
