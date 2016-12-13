/**
 * Created by ЧернышеваАИ on 13.12.2016.
 */
angular.module("pizza-app", [])
    .controller("pizza-constructor", function ($scope) {
        $scope.bases = [{name: 'Тесто дрожжевое тесто', price: 30},
            {name: "Пышное дрожжевое тесто", price: 35},
            {name: "Слоеное тесто", price: 40}];
        $scope.souces = [{name: 'Сырный', price: 15},
            {name: "Грибной", price: 20},
            {name: "Томатный", price: 25}];
        $scope.ingredients = [{name: 'Помидоры', price: 30},
            {name: "Сыр", price: 50},
            {name: "Грибы", price: 60},
            {name: "Ветчина", price: 40},
            {name: "Петрушка", price: 15},
            {name: "Оливки", price: 35}];

        $scope.RemoveIngredient = function (ing) {
            $scope.pizza.ingredients = _.without($scope.pizza.ingredients, ing);
            $scope.ingredients.push(ing);
        }

        $scope.TotalPrice = function()
        {
            return $scope.pizza.base.price + $scope.pizza.souce.price + _.reduce($scope.pizza.ingredients, function (memo, ing) {
                return memo + ing.price*ing.count;
            },0);
        }

        $scope.AddIngredient = function(){
            $scope.ingredients = _.without($scope.ingredients, $scope.currentIngredient);
            $scope.currentIngredient.count = 1;
            $scope.pizza.ingredients.push($scope.currentIngredient);
        };

        $scope.pizza = {base: $scope.bases[0], souce: $scope.souces[0], ingredients: []};

    });