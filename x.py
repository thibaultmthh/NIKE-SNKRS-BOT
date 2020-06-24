import requests
from tqdm import tqdm

proxies = {
    'http': 'http://customer-astro_4198358-cc-fr-sessid-McGdpr5fHcuN:bdc984c262@lunar.astroproxies.com:7777',
    'https': 'http://customer-astro_4198358-cc-fr-sessid-McGdpr5fHcuN:bdc984c262@lunar.astroproxies.com:7777'
}

r = requests.get("https://www.nike.com/fr/launch?s=in-stock", proxies = proxies)
