var EXCHANGE_RATE = 7.4370;

var calculator = new Vue({
    el: '#calculator',
    data: {
        euroAmount: 0.0,
        kroneAmount: 0.0,
        tmpExchangeRate: +localStorage.getItem('exchangeRate') || EXCHANGE_RATE,
        exchangeRate: +localStorage.getItem('exchangeRate') || EXCHANGE_RATE,
        showChangeExchangeRate: false
    },
    methods: {
        convert: function (direction) {
            exchangeRate = +localStorage.getItem('exchangeRate') || this.exchangeRate;

            if ('toKrone' === direction && !!this.euroAmount) {
                this.kroneAmount = Math.round(this.euroAmount * exchangeRate * 100) / 100;
            } else if ('toKrone' === direction) {
                this.kroneAmount = 0.0;
                this.euroAmount = 0.0;
            }

            if ('toEuro' === direction && !!this.kroneAmount) {
                this.euroAmount = Math.round(this.kroneAmount / exchangeRate * 100) / 100;
            } else if ('toEuro' === direction) {
                this.kroneAmount = 0.0;
                this.euroAmount = 0.0;
            }
        },
        toggleEchangeExchangeRate: function () {
            this.showChangeExchangeRate = !this.showChangeExchangeRate;
        },
        setExchangeRate: function () {
            if (this.tmpExchangeRate) {
                this.exchangeRate = this.tmpExchangeRate;
                localStorage.setItem('exchangeRate', this.exchangeRate);
            }
        },
        resetExchangeRate: function () {
            this.exchangeRate = EXCHANGE_RATE;
            this.tmpExchangeRate = EXCHANGE_RATE;
            localStorage.setItem('exchangeRate', this.exchangeRate);
        },
        clear: function (currency) {
            if (currency === 'euro') {
                this.euroAmount = '';
            }

            if (currency === 'krone') {
                this.kroneAmount = '';
            }
        }
    }
})
