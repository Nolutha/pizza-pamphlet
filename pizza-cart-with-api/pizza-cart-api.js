document.addEventListener('alpine:init', () => {

    Alpine.data('pizzaCartWithAPIWidget', function () {
        return {
            init() {


                axios
                    .get('https://pizza-cart-api.herokuapp.com/api/pizzas')
                    .then((result) => {
                        this.pizzas = result.data.pizzas
                    })
            },
            message: 'Eating pizzas',

            pizzas: [] ,
            add(pizza){
                alert(pizza.flavour)
            }
        }
    });
})