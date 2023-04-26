/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * A directive for displaying an arbitrary login form.
 */
angular.module('login').directive('chatWindow', [function chatWindow() {

    // Login directive
    var directive = {
        restrict    : 'E',
        replace     : true,
        templateUrl : 'app/login/templates/chatWindow.html'
    };

    // Login directive scope
    directive.scope = {

        /**
         * An optional instructional message to display within the login
         * dialog.
         *
         * @type TranslatableMessage
         */
        helpText : '=',

        /**
         * The login form or set of fields. This will be displayed to the user
         * to capture their credentials.
         *
         * @type Field[]
         */
        form : '=',

        /**
         * A map of all field name/value pairs that have already been provided.
         * If not null, the user will be prompted to continue their login
         * attempt using only the fields which remain.
         */
        values : '='

    };

    // Controller for login directive
    directive.controller = ['$scope', '$injector',
        function loginController($scope, $injector) {
        
        // Required types
        var Error = $injector.get('Error');
        var Field = $injector.get('Field');

        // Required services
        var $rootScope            = $injector.get('$rootScope');
        var $route                = $injector.get('$route');
        

        $scope.closeChat = function () {
            $rootScope.showChatWindow = false;
        }
    }];

    return directive;

}]);
