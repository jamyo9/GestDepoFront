import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Exercise} from '../../objects/exercise.object'

@Injectable()
export class ExercisesService {

    private _url = 'http://localhost:9080/GestDepoAPI/exercise/';
    constructor(private _http: Http) {

    }

    getExercises(): Promise<Exercise[]> {
        return this._http.get(this._url + "list")
            .map(res => res.json())
            .toPromise();
    }

    createExercise(exercise: Exercise) {
        let body = JSON.stringify(exercise);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, body, options)
            .map(res => res.json());
    }

    updateExercise(exercise: Exercise) {
        let body = JSON.stringify(exercise);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + exercise.exerciseId, body, options)
            .map(res => res.json());
    }

    getExercise(exerciseId){
		return this._http.get(this._url + exerciseId)
			.map(res => res.json());
	}

    deleteExercise(exerciseId){
		return this._http.delete(this._url + exerciseId)
			.map(res => res.json());
	}
}