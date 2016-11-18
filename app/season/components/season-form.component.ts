import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import {BasicValidators} from '../../shared/validators/basicValidators';

import {SeasonService} from '../services/season.service'
import {Season} from '../../objects/season.object'

import { FormComponent } from '../../prevent-unsaved-changes-guard.service'

@Component({
    templateUrl: 'app/season/components/html/season-form.template.html'
})
export class SeasonFormComponent implements OnInit, FormComponent {
	form: FormGroup;
	title: string;
    season = new Season();

	constructor(
        fb: FormBuilder,
		private _router: Router,
        private _route: ActivatedRoute,
        private _seasonService: SeasonService
	) {
		this.form = fb.group({
			seasonId: [],
			name: ['', Validators.required]
		});
	}

	ngOnInit(){
        var seasonId  = this._route.params.subscribe(params => {
            var seasonId = +params["seasonId"];
            this.title = seasonId ? "Edit Season" : "New Season";
        
			if (!seasonId)
				return;
				
			this._seasonService.getSeason(seasonId)
				.subscribe(
					season => this.season = season,
					response => {
						if (response.status == 404) {
							this._router.navigate(['NotFound']);
						}
					});
		});
    }

    save(){
		var result;
		if (this.season.seasonId) {
			result = this._seasonService.updateSeason(this.season);
		} else {
			result = this._seasonService.createSeason(this.season);
		}

		result.subscribe(x => {
			//this.form.markAsPristine();
			this._router.navigate(['season']);
		});
	}
}