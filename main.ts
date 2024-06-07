/**
 * @module
 */

/**
 * @class Maxio
 */
export class Maxio {
    constructor(public subdomain: string, public domain: 'chargify' | 'maxio' = 'chargify'){
    }
    getApiBase(){
        return `https://${this.subdomain}.${this.domain}`;
    }
}

/**
 * @class Susbcriptions
 * @method getSubscriptionByID
 */
export class Subscriptions extends Maxio {
    getSubscriptions(){
        return this.getApiBase() + '/subscriptions.json';
    }
    getSubscriptionByID(id: number){
        return this.getApiBase() + '/subscriptions/' + id + '.json';
    }
}

