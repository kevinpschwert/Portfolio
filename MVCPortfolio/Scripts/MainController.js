//app.controller('MainController', ['$scope', function ($scope) {
//    $scope.title = 'sgdfg!';
//    $scope.promo = 'Hey!';    
//    $scope.products =
//    [
//     {
//         name: 'The Book of Trees',
//         price: 19,
//         pubdate: new Date('2014', '03', '08'),
//         likes: 0,
//         dislikes: 0,
//         cover: '/img/budget.jpg'
//     },
//     {
//         name: 'Program or be Programmed',
//         price: 8,
//         pubdate: new Date('2013', '08', '01'),
//         likes: 0,
//         dislikes: 0,
//         cover: '/img/epic2.jpg'
//     },
//      {
//          name: 'Bobs Best Friend',
//          price: 3453,
//          pubdate: new Date('2015', '08', '01'),
//          likes: 0,
//          dislikes: 0,
//          cover: 'img/program-or-be-programmed.jpg'
//      },
//      {
//          name: 'WHy',
//          price: -54,
//          pubdate: new Date('2013', '08', '01'),
//          likes: 0,
//          dislikes: 0,
//          cover: 'img/program-or-be-programmed.jpg'
//      }
//    ];
//    $scope.plusOne = function (index) {
//        $scope.products[index].likes += 1;
//    };
//    $scope.minusOne = function (index) {
//        $scope.products[index].dislikes += 1;
//    };
//}]);
//app.controller('MainController', ['$scope', function ($scope) {
//    $scope.apps = [
//    {
//        icon: 'img/move.jpg',
//        title: 'MOVE',
//        developer: 'MOVE, Inc.',
//        price: 0.99
//    },
//      {
//          icon: 'img/move.jpg',
//          title: 'Bob',
//          developer: 'bob, Inc.',
//          price: 3.99
//      },
//      {
//          icon: 'img/move.jpg',
//          title: 'Yeah!',
//          developer: 'Yeah!, Inc.',
//          price: 0.99
//      },
//    {
//        icon: 'img/shutterbugg.jpg',
//        title: 'Shutterbugg',
//        developer: 'Chico Dusty',
//        price: 2.99
//    }
//    ];
//}]);

app.controller('MainController', ['$scope', 'forecast', function ($scope, forecast) {
    forecast.success(function (data) {
        $scope.fiveDay = data;
    });
}]);