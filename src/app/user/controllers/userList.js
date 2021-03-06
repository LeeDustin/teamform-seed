export default class UserListCtrl {
    constructor($location, $state, $timeout, userService) {
        this.$location = $location;
        this.$state = $state;
        this.$timeout = $timeout;
        this.userService = userService;
        this.users = [];
        this.error = null;
        this.getUsers();
    }
    async getUsers() {
        try {
            let users = await this.userService.getUsers();
            this.$timeout(() => {
                this.users = users;
            });
        } catch (error) {
            this.$timeout(() => {
                this.error = error;
            });
        }
    }
}

UserListCtrl.$inject = ['$location', '$state', '$timeout', 'UserService'];
