import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { BasicValidators }                       from '../../shared/validators/basicValidators';

import { PlayersService }                           from '../services/players.service';
import { Player }                                  from '../../objects/player.object';

@Component({
    templateUrl: 'app/players/components/html/player-form.template.html',
    providers: [PlayersService]
})
export class PlayerFormComponent implements OnInit {
	form: FormGroup;
    title: string;
    player = new Player();

	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _playerService: PlayersService
    ) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicValidators.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}
    
    ngOnInit(){
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

              this.title = id ? "Edit Player" : "New Player";
        
        if (!id)
			return;
            
        this._playerService.getPlayer(id)
			.subscribe(
                player => this.player = player,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });
    }
    
    save() {
        var result;
        
        if (this.player.userId) 
            result = this._playerService.updatePlayer(this.player);
        else
            result = this._playerService.createPlayer(this.player)
            
		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['players']);
        });
	}
}