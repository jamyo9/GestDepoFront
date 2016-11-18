import { Component, OnInit, ElementRef }         from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

//import { FileUploader } from 'ng2-file-upload';

import {BasicValidators} from '../../shared/validators/basicValidators';

import {ExercisesService} from '../services/exercises.service';
import {Exercise} from '../../objects/exercise.object';

import { FormComponent } from '../../prevent-unsaved-changes-guard.service';

import { FileUploadService } from '../services/fileupload.service';

@Component({
    templateUrl: 'app/exercises/components/html/exercise-form.template.html',
	//, styleUrls: ['app/exercises/components/styles/exercise.css']
	providers: [FileUploadService, ExercisesService]
})
export class ExerciseFormComponent implements OnInit, FormComponent {
	form: FormGroup;
	title: string;
    exercise = new Exercise();

	constructor(
        fb: FormBuilder,
		private _router: Router,
        private _route: ActivatedRoute,
        private _exerciseService: ExercisesService,
		private elementRef: ElementRef,
		private _fileUploadService: FileUploadService
	) {
		this.form = fb.group({
			exerciseId: [],
			name: ['', Validators.required],
			description: ['', Validators.required],
			numberOfPlayers: [],
			objective: [],
			design: [],
			video: []
		});
	}

	ngOnInit(){
		var exerciseId  = this._route.params.subscribe(params => {
            var exerciseId = +params["exerciseId"];
            this.title = exerciseId ? "Edit Exercise" : "New Exercise";
        
			if (!exerciseId)
				return;
				
			this._exerciseService.getExercise(exerciseId)
				.subscribe(
					exercise => this.exercise = exercise,
					response => {
						if (response.status == 404) {
							this._router.navigate(['NotFound']);
						}
					});
		});

		this.addScript('app/exercises/components/js/exercise-form.js');
    }

    save(video){
		var result;

		/* 
		if (video.files) {
			this._fileUploadService.upload(video.files)
				.then(data => {
					this.exercise.videoUrl = data;
				})
				.catch(error => {
					this.exercise.videoUrl = 'ERROR';
				});
		}
		*/
		
		//if (this.exercise.videoUrl != 'ERROR') {
			if (this.exercise.exerciseId) {
				result = this._exerciseService.updateExercise(this.exercise);
			} else {
				result = this._exerciseService.createExercise(this.exercise);
			}
		

			result.subscribe(x => {
				//this.form.markAsPristine();
				this._router.navigate(['exercises']);
			});
		//}
	}

	addScript( src: string ) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src;
        this.elementRef.nativeElement.appendChild(s);
    }
}