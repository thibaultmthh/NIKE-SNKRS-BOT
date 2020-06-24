import requests
import json

s = requests.session()

s.headers["User-Agent"] ="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"

r = s.get("https://nike.com/launch")

r = s.get("https://smodus.nike.com/id?mcorgid=F0935E09512D2Cds270A490D4D%40AdobeOrg")




s.cookies["s_ecid"]

r = s.get("https://unite.nike.com/appInitialization?appVersion=776&experienceVersion=776&uxid=com.nike.commerce.snkrs.web&locale=fr_FR&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=&visitor=&clientId=PbCREuPr3iaFANEDjtiEzXooFl7mXGQ7&status=success&uxId=com.nike.commerce.snkrs.web&isAndroid=false&isIOS=false&isMobile=false&isNative=false&timeElapsed=1566")





data = {"username": "bastiOne@gmx.de", "password": "Schuhe123#", "client_id": "PbCREuPr3iaFANEDjtiEzXooFl7mXGQ7",
        "ux_id": "com.nike.commerce.snkrs.web", "grant_type": "password"}

r = s.post("https://unite.nike.com/login?appVersion=776&experienceVersion=776&uxid=com.nike.commerce.snkrs.web&locale=fr_FR&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=1", data)

r.status_code

s.cookies["bm_sv"]

########
#!/usr/bin/python3
import os
import json
import uuid
import urllib
import requests
import configparser

#from snkrs_login import SNKRS_LOGIN


class SNKRS:
    def __init__(self, config, use_webdriver=False):
        self.headers = None
        self.config = config
        self.base_url = ''
        self.visitor_id = str(uuid.uuid4())
        self.client_id = config["clientId"]

        if use_webdriver:
            app = SNKRS_LOGIN()
            app.login(self.config["username"], self.config["password"])
            self.session = app.get_cookies()
        else:
            self.session = requests.session()
            self._app_initialization()

    def _app_initialization(self):
        headers = {
            'Host':             's3.nikecdn.com',
            'X-NewRelic-ID':    'VQYGVF5SCBADUVBRBgAGVg==',
            'Accept':           '*/*',
            'User-Agent':       'SNKRS-inhouse/3.3.3 (iPhone; iOS 10.2; Scale/2.00)',
            'Accept-Language':  'en-US;q=1',
            'Accept-Encoding':  'gzip, deflate',
            'Connection':       'keep-alive'
        }
        r = self.session.request('GET', 'https://s3.nikecdn.com/minversionapi/iOS.json', headers=headers)
        print(r)


        headers = {
            'Host':             's3.nikecdn.com',
            'Accept':           'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'X-NewRelic-ID':    'VQYGVF5SCBADUVBRBgAGVg==',
            'User-Agent':       'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92',
            'Accept-Language':  'en-us',
            'Accept-Encoding':  'gzip, deflate',
            'Connection':       'keep-alive'
        }
        query_string = {
            'mid':                '06991873067900528515903792859936812381?iOSSDKVersion=2.8.4',
            'clientId':           self.client_id,
            'uxId':               'com.nike.commerce.snkrs.ios',
            'view':               'none',
            'locale':             'en_US',
            'backendEnvironment': 'identity'
        }
        r = self.session.request('GET', 'https://s3.nikecdn.com/unite/mobile.html', params=query_string, headers=headers)
        print(r)


        headers = {
            'Host':             'unite.nike.com',
            'Origin':           'https://s3.nikecdn.com',
            'X-NewRelic-ID':    'VQYGVF5SCBADUVBRBgAGVg==',
            'Connection':       'keep-alive',
            'Accept':           '*/*',
            'User-Agent':       'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92',
            'Accept-Language':  'en-us',
            'Accept-Encoding':  'gzip, deflate'
        }
        query_string = {
            'appVersion':         '431',
            'experienceVersion':  '360',
            'uxid':               'com.nike.commerce.snkrs.ios',
            'locale':             'en_US',
            'backendEnvironment': 'identity',
            'browser':            'Apple Computer, Inc.',
            'os':                 'undefined',
            'mobile':             'true',
            'native':             'true',
            'visit':              '',
            'visitor':            '',
            'clientId':           self.client_id,
            'status':             'success',
            'uxId':               'com.nike.commerce.snkrs.ios',
            'isAndroid':          'false',
            'isIOS':              'true',
            'isMobile':           'true',
            'isNative':           'true',
            'timeElapsed':        '694'
        }
        query_string = urllib.parse.urlencode(query_string, quote_via=urllib.parse.quote)
        r = self.session.request('GET', 'https://unite.nike.com/appInitialization', params=query_string, headers=headers)
        print(r)

        headers = {
            'Host':                           'unite.nike.com',
            'Accept-Encoding':                'gzip, deflate',
            'Access-Control-Request-Method':  'POST',
            'Accept-Language':                'en-us',
            'Accept':                         '*/*',
            'Origin':                         'https://s3.nikecdn.com',
            'Access-Control-Request-Headers': 'content-type, origin',
            'Connection':                     'keep-alive',
            'User-Agent':                     'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92',
            'X-NewRelic-ID':                  'VQYGVF5SCBADUVBRBgAGVg=='
        }
        query_string = {
            'appVersion':         '431',
            'experienceVersion':  '360',
            'uxid':               'com.nike.commerce.snkrs.ios',
            'locale':             'en_US',
            'backendEnvironment': 'identity',
            'browser':            'Apple Computer, Inc.',
            'os':                 'undefined',
            'mobile':             'true',
            'native':             'true',
            'visit':              '1',
            'visitor':            self.visitor_id
        }
        query_string = urllib.parse.urlencode(query_string, quote_via=urllib.parse.quote)
        r = self.session.request('OPTIONS', ' https://unite.nike.com/tokenRefresh', params=query_string, headers=headers)
        print(r )

        ##### EXPERIMENTAL !!! ######
        headers = {
            'Host':             'unite.nike.com',
            'Accept':           '*/*',
            'Accept-Encoding':  'gzip, deflate',
            'Accept-Language':  'en-us',
            'Content-Type':     'application/json',
            'Origin':           'https://s3.nikecdn.com',
            'Connection':       'keep-alive',
            'User-Agent':       'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92',
            'X-NewRelic-ID':    'VQYGVF5SCBADUVBRBgAGVg=='
        }
        query_string = {
            'appVersion':         '431',
            'experienceVersion':  '360',
            'uxid':               'com.nike.commerce.snkrs.ios',
            'locale':             'en_US',
            'backendEnvironment': 'identity',
            'browser':            'Apple Computer, Inc.',
            'os':                 'undefined',
            'mobile':             'true',
            'native':             'true',
            'visit':              '1',
            'visitor':            self.visitor_id
        }
        payload = {  # sheesh
            "client_id": self.client_id,
            "grant_type": "refresh_token",
            "refresh_token": ""
        }
        query_string = urllib.parse.urlencode(query_string, quote_via=urllib.parse.quote)
        r = self.session.request('POST', 'https://unite.nike.com/tokenRefresh', params=query_string, json=payload, headers=headers)
        print(r, r.text)

    def _make_request(self, method, endpoint, params=None, data=None, json=None, headers=None, ret_json=True):
        if ret_json:
            return self.session.request(method, f'{self.base_url}/{endpoint}', params=params, data=data, json=json, headers=headers).json()
        else:
            return self.session.request(method, f'{self.base_url}/{endpoint}', params=params, data=data, json=json, headers=headers)

    def login(self, username, password):
        headers = {
            'Host':             's3.nikecdn.com',
            'Accept':           '*/*',
            'Accept-Encoding':  'gzip, deflate',
            'Accept-Language':  'en-us',
            'Content-Type':     'application/json',
            'Origin':           'https://s3.nikecdn.com',
            'Connection':       'keep-alive',
            'User-Agent':       'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92',
            'X-NewRelic-ID':    'VQYGVF5SCBADUVBRBgAGVg=='
        }
        query_string = {
            'appVersion':         '431',
            'experienceVersion':  '360',
            'uxid':               'com.nike.commerce.snkrs.ios',
            'locale':             'en_US',
            'backendEnvironment': 'identity',
            'browser':            'Apple Computer, Inc.',
            'os':                 'undefined',
            'mobile':             'true',
            'native':             'true',
            'visit':              '1',
            'visitor':            self.visitor_id
        }
        payload = {
            "client_id": self.client_id,
            "grant_type": "password",
            "password": password,
            "username": username,
            "ux_id": "com.nike.commerce.snkrs.ios"
        }
        query_string = urllib.parse.urlencode(query_string, quote_via=urllib.parse.quote)
        r = self.session.request('POST', 'https://s3.nikecdn.com/login', params=query_string, json=payload, headers=headers)
        print(r.status_code)
        print(r.text)




config = {"username": "bastiOne@gmx.de", "password": "Schuhe123#", "clientId": "MSgX9SH71y8CYkVjrArZS9EsH4ly1ROG","ux_id": "com.nike.commerce.snkrs.web", "grant_type": "password"}

app = SNKRS(config)
app.login(config["username"], config["password"])














#
