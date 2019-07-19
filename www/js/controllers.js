angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
            var nextPageToken = "";
            // Resultados por pagina
            var resPorPagina = 5;
            // Paginas a mostrar
            var paginas = 1;
            var key = "AIzaSyDQ_El-uHESIWHp3pcnsbfOw-0LZPW1bNY";
            var idCanal = "UCekiUWTObDKZnaeS-reYQbg";
            var url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&channelId=" + idCanal + "&part=snippet,id&order=date&maxResults=" + resPorPagina;
            $("#contenedor").append(url);
            $.getJSON(url, function (data) {

                for (var k in data.items) {
                    var tituloVideo=data.items[k]["snippet"].title;
                    var urlVideo="https://www.youtube.com/watch?v=" + data.items[k]["id"].videoId;
                    var fechaVideo=data.items[k]["snippet"].publishedAt;
                    
                    console.log(k, data.items[k]["id"].videoId);
                    //$('#tabla tr:last').after('<tr>'+tituloVideo+'</tr><tr>'+urlVideo+'</tr><tr>'+fechaVideo+'</tr>');
                    $("table tbody").append('<tr><td>'+tituloVideo+'</td><td>'+urlVideo+'</td><td>'+fechaVideo+'</td></tr>');
                }

            });
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
//AIzaSyDQ_El-uHESIWHp3pcnsbfOw-0LZPW1bNY