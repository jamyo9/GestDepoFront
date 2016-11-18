import {Component} from '@angular/core'
import {RouterLink} from '@angular/router';
import {ExercisesService} from '../services/exercises.service'
import {Exercise} from '../../objects/exercise.object'

@Component({
    selector: 'exercises',
    templateUrl: 'app/exercises/components/html/exercises.template.html',
    providers: [ExercisesService],
	directives: [RouterLink]
})
export class ExercisesComponent {
    exercises: Exercise[];
    
    constructor(private _exercisesService: ExercisesService){
	}

	ngOnInit(){
		this._exercisesService.getExercises()
			.then(data => {
				this.exercises = data;
			});
	}

	deleteExercise(exercise){
		if (confirm("Are you sure you want to delete " + exercise.name + "?")) {
			var index = this.exercises.indexOf(exercise)
			// Here, with the splice method, we remove 1 object
			// at the given index.
            this.exercises.splice(index, 1);

			this._exercisesService.deleteExercise(exercise.exerciseId)
				.subscribe(null, 
					err => {
						alert("Could not delete the exercise.");
						// Revert the view back to its original state
                        // by putting the exercise object at the index
                        // it used to be.
						this.exercises.splice(index, 0, exercise);
					});
		}
	}
}