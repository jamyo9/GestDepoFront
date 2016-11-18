import {Component} from '@angular/core'
import {RouterLink, Router, ActivatedRoute} from '@angular/router';

import {PlayersService} from '../services/players.service'
import {Player} from '../../objects/player.object'

@Component({
    selector: 'players',
    templateUrl: 'app/players/components/html/players.template.html',
    providers: [PlayersService],
	directives: [RouterLink]
})
export class PlayersComponent {
    players: Player[];
    
    constructor(
			private _playersService: PlayersService,
			private _router: Router,
			private _route: ActivatedRoute){
	}

	ngOnInit() {

		var seasonId  = this._route.params.subscribe(params => {
            var seasonId = +params["seasonId"];
            
			if (!seasonId) {
				this._playersService.getPlayers(0)
					.then(data => {
						this.players = data;
					});
			}
			
			this._playersService.getPlayers(seasonId)
				.then(
					players => this.players = players,
					response => {
						if (response.status == 404) {
							this._router.navigate(['NotFound']);
						}
					});
		});

		
	}

	deletePlayer(player){
		if (confirm("Are you sure you want to delete " + player.name + "?")) {
			var index = this.players.indexOf(player)
			// Here, with the splice method, we remove 1 object
			// at the given index.
            this.players.splice(index, 1);

			this._playersService.deletePlayer(player.userId)
				.subscribe(null, 
					err => {
						alert("Could not delete the player.");
						// Revert the view back to its original state
                        // by putting the player object at the index
                        // it used to be.
						this.players.splice(index, 0, player);
					});
		}
	}
}