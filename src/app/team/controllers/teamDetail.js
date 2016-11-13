export default class TeamDetailCtrl {
    constructor($location, $state, $stateParams, $timeout, teamService) {
        this.$location = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.teamService = teamService;
        this.team = null;
        this.error = null;
        this.getTeam();
    }
    async getTeam() {
        try {
            let team = await this.teamService.getTeam(this.$stateParams.teamId);
            this.$timeout(() => {
                this.team = team;
            });
        } catch (error) {
            this.$timeout(() => {
                this.error = error;
            });
        }
    }
    async joinTeam(positionId) {
        try {
            let teamUsers = await this.teamService.joinTeam(this.$stateParams.teamId, positionId);
            this.$timeout(() => {
                console.log('success');
                this.getTeam();
            });
        } catch (error) {
            this.$timeout(() => {
                this.error = error;
            });
        }
    }
    filterJoined(user) {
        return user.id != null && user.pending !== true && user.confirmed !== false;
    }
    filterAvailable(user) {
        return user.id == null;
    }
    filterWaitingList(user) {
        return user.pending === true && (user.confirmed === false || user.accepted === false);
    }
}

TeamDetailCtrl.$inject = ['$location', '$state', '$stateParams', '$timeout', 'TeamService'];
