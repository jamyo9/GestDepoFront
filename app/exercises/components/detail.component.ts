import { Component, ElementRef}					from '@angular/core'
import { RouterLink, Router, ActivatedRoute }	from '@angular/router';

import { ExercisesService }						from '../services/exercises.service'
import { Exercise }								from '../../objects/exercise.object'

@Component({
    selector: 'exercise',
    templateUrl: 'app/exercises/components/html/exercise.detail.template.html',
    providers: [ExercisesService],
	directives: [RouterLink]
})
export class ExerciseDetailComponent {
    exercise: Exercise;
    
    constructor(
			private _exerciseService: ExercisesService,
			private _router: Router,
			private _route: ActivatedRoute,
			private elementRef: ElementRef
		){
	}

	ngOnInit(){
		var exerciseId  = this._route.params.subscribe(params => {
            var exerciseId = +params["id"];
            
			if (!exerciseId)
				return;
			
			this._exerciseService.getExercise(exerciseId)
				.subscribe(
					exercise => {
						this.exercise = exercise;
					},
					response => {
						if (response.status == 404) {
							this._router.navigate(['NotFound']);
						}
					});
		});

		var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "app/exercises/components/js/detail.js";
        this.elementRef.nativeElement.appendChild(s);
	}
    
}