import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Player} from '../../objects/player.object'

@Injectable()
export class PlayersService {

    private _url = 'http://localhost:9080/GestDepoAPI/player/';
    constructor(private _http: Http) {

    }

    getPlayers(seasonId: number): Promise<Player[]> {
        // TODO parse the seasonId and the teamId
        return this._http.get(this._url + "list/" + 0 + "/" + 0)
			.map(res => res.json()).toPromise();
    }

    createPlayer(player: Player) {
        let body = JSON.stringify(player);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, body, options)
            .map(res => res.json());
    }

    updatePlayer(player: Player) {
        let body = JSON.stringify(player);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + player.userId, body, options)
            .map(res => res.json());
    }

    getPlayer(playerId){
		return this._http.get(this._url + playerId)
			.map(res => res.json());
	}

    deletePlayer(playerId){
		return this._http.delete(this._url + playerId)
			.map(res => res.json());
	}
}