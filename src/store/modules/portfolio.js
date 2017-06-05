
const state = {
    funds : 10000,
    stocks : []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id === stockId);
        if(record){
            record.quantity += quantity
        }
        else {
            state.stocks.push({
                id : stockId,
                quantity: quantity
            });
        }
        state.funds -= quantity * stockPrice;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id === stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += quantity * stockPrice;
    },
    'SET_PORTFOLIO'(state, portfolio){
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK', order)
    }
};

const getters = {
    stockPortfolio(state, getters){
        console.log(state)
        console.log(getters)
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            console.log(record)
            return {
                id: stock.id,
                quantity: stock.quantity,
                price: record.price,
                name: record.name
            }
        })  
    },
    funds(state){
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
