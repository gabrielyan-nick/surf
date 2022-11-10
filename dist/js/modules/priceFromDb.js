import {getData} from '../services/requests.js';

export default class PriceFromDb {
    constructor({ priceNode = null } = {}) {
      this.priceNode = document.querySelectorAll(priceNode);
    }
  
    getPrice() {
      getData("http://localhost:3000/resorts").then((data) => {
        data.forEach((item, i) => {
            this.priceNode.forEach((node, j) => {
                if (node.getAttribute('data-name') == item.name) {
                    node.textContent = item.price;
                }
                
            });
        });
      });
    }
  
    render() {
      this.getPrice();
    }
  }
  