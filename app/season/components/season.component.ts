import {Component} from '@angular/core'
import {RouterLink} from '@angular/router';

import {SeasonService} from '../services/season.service'
//import { SeasonCalendarComponent } from './season-calendar.component'

import {Season} from '../../objects/season.object'

@Component({
    selector: 'season',
    templateUrl: 'app/season/components/html/season.template.html',
    providers: [
		SeasonService
		//, SeasonCalendarComponent
	],
	directives: [RouterLink]
})
export class SeasonComponent {
    seasons: Season[];
    lastSeason: Season;
    
    constructor(private _seasonService: SeasonService){
	}

	ngOnInit(){
		this._seasonService.getSeasons()
			.then(data => {
				this.seasons = data;
			});

        this._seasonService.getLastSeason()
            .then(data => {
				this.lastSeason = data
            })
	}

	deleteSeason(season){
		if (confirm("Are you sure you want to delete " + season.name + "?")) {
			var index = this.seasons.indexOf(season)
			// Here, with the splice method, we remove 1 object
			// at the given index.
            this.seasons.splice(index, 1);

			this._seasonService.deleteSeason(season.seasonId)
				.subscribe(null, 
					err => {
						alert("Could not delete the season.");
						this.seasons.splice(index, 0, season);
					});
		}
	}
}