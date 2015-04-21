angular.module('ionicApp', ['ionic'])

.controller('ContentDataCtrl', function($scope, $ionicModal) {
 // Data
  $scope.Items = [
    { id: 1, Category: "Diet", SubCategory: "Eat", Description_zh: "飯", Picture: "img/Diet_Eat_1.jpg" },
    { id: 2, Category: "Diet", SubCategory: "Eat", Description_zh: "麵", Picture: "img/Diet_Eat_2.jpg" },
    { id: 3, Category: "Diet", SubCategory: "Eat", Description_zh: "粉", Picture: "img/Diet_Eat_3.jpg" },
    { id: 4, Category: "Diet", SubCategory: "Eat", Description_zh: "生果", Picture: "img/Diet_Eat_4.jpg" },
    { id: 5, Category: "Diet", SubCategory: "Eat", Description_zh: "菜", Picture: "img/Diet_Eat_5.jpg" },
    { id: 6, Category: "Diet", SubCategory: "Eat", Description_zh: "肉", Picture: "img/Diet_Eat_6.jpg" },
    { id: 7, Category: "Diet", SubCategory: "Drink", Description_zh: "凍水", Picture: "img/Diet_Drink_1.jpg" },
    { id: 8, Category: "Diet", SubCategory: "Drink", Description_zh: "熱水", Picture: "img/Diet_Drink_2.jpg" },
    { id: 9, Category: "Diet", SubCategory: "Drink", Description_zh: "果汁", Picture: "img/Diet_Drink_3.jpg" },
    { id: 10, Category: "Diet", SubCategory: "Drink", Description_zh: "茶", Picture: "img/Diet_Drink_4.jpg" },
    { id: 11, Category: "Diet", SubCategory: "Drink", Description_zh: "奶", Picture: "img/Diet_Drink_5.png" },
    { id: 12, Category: "Toilet", SubCategory: "", Description_zh: "小便", Picture: "img/Toilet_1.jpg" },
    { id: 13, Category: "Toilet", SubCategory: "", Description_zh: "大便", Picture: "img/Toilet_2.png" },
    { id: 14, Category: "Toilet", SubCategory: "", Description_zh: "沖涼", Picture: "img/Toilet_3.jpg" },
    { id: 15, Category: "Toilet", SubCategory: "", Description_zh: "洗手", Picture: "img/Toilet_4.jpg" },
    { id: 16, Category: "Toilet", SubCategory: "", Description_zh: "洗頭", Picture: "img/Toilet_5.jpg" },
    { id: 17, Category: "Action", SubCategory: "", Description_zh: "睡房", Picture: "img/Action_1.jpg" },
    { id: 18, Category: "Action", SubCategory: "", Description_zh: "客廳", Picture: "img/Action_1.jpg" },
    { id: 19, Category: "Uncomfortable", SubCategory: "", Description_zh: "頭痛", Picture: "img/Uncomfortable_1.jpg" },
    { id: 20, Category: "Uncomfortable", SubCategory: "", Description_zh: "頭暈", Picture: "img/Uncomfortable_2.jpg" },
    { id: 21, Category: "Uncomfortable", SubCategory: "", Description_zh: "手痛", Picture: "img/Uncomfortable_3.jpg" },
    { id: 22, Category: "Uncomfortable", SubCategory: "", Description_zh: "腳痛", Picture: "img/Uncomfortable_4.jpg" },
    { id: 23, Category: "Uncomfortable", SubCategory: "", Description_zh: "肚痛", Picture: "img/Uncomfortable_5.jpg" },
    { id: 24, Category: "Entertainment", SubCategory: "", Description_zh: "睇電視", Picture: "img/Entertainment_1.jpg" },
    { id: 25, Category: "Entertainment", SubCategory: "", Description_zh: "聽音樂", Picture: "img/Entertainment_2.png" },
    { id: 26, Category: "Entertainment", SubCategory: "", Description_zh: "睇書", Picture: "img/Entertainment_3.jpg" },
    { id: 27, Category: "Entertainment", SubCategory: "", Description_zh: "阿大", Picture: "img/Entertainment_4.jpg" },
    { id: 28, Category: "Entertainment", SubCategory: "", Description_zh: "老公", Picture: "img/Entertainment_5.jpg" },
    { id: 29, Category: "Entertainment", SubCategory: "", Description_zh: "兄弟姐妹", Picture: "img/Entertainment_6.jpg" }
  ];

  $ionicModal.fromTemplateUrl('contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  })  

  $scope.openModal = function(Choose_Description_zh, Choose_Picture) {
    $scope.ModalDescription_zh = Choose_Description_zh;
    $scope.ModalPicture = Choose_Picture;
    $scope.modal.show();
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

// Navigation
.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/Diet');

  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider.state('Diet', {
    url: '/Diet',
    views: {
      DietView: {
        templateUrl: 'Diet.html'
      }
    }
  });

  $stateProvider.state('Toilet', {
    url: '/Toilet',
    views: {
      ToiletView: {
        templateUrl: 'Toilet.html'
      }
    }
  });

  $stateProvider.state('Action', {
    url: '/Action',
    views: {
      ActionView: {
        templateUrl: 'Action.html'
      }
    }
  });

  $stateProvider.state('Uncomfortable', {
    url: '/Uncomfortable',
    views: {
      UncomfortableView: {
        templateUrl: 'Uncomfortable.html'
      }
    }
  });
  
  $stateProvider.state('Entertainment', {
    url: '/Entertainment',
    views: {
      EntertainmentView: {
        templateUrl: 'Entertainment.html'
      }
    }
  });
});