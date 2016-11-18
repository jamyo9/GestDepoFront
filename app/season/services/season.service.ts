import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Season} from '../../objects/season.object'

@Injectable()
export class SeasonService {

    private _url = 'http://localhost:9080/GestDepoAPI/season/';
    constructor(private _http: Http) {

    }

    getSeasons(): Promise<Season[]> {
        return this._http.get(this._url + "list")
            .map(res => res.json())
            .toPromise();
    }

    getLastSeason(): Promise<Season> {
		return this._http.get(this._url + 'lastSeason')
			.map(res => res.json()).toPromise();
	}

    createSeason(season: Season) {
        let body = JSON.stringify(season);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, body, options)
            .map(res => res.json());
    }

    updateSeason(season: Season) {
        let body = JSON.stringify(season);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + season.seasonId, body, options)
            .map(res => res.json());
    }

    getSeason(seasonId){
		return this._http.get(this._url + seasonId)
			.map(res => res.json());
	}
    
    deleteSeason(seasonId){
		return this._http.delete(this._url + seasonId)
			.map(res => res.json());
	}
}